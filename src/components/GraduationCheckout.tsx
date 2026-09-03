"use client";

import { useState } from "react";
import { createRazorpayOrderAction, verifyRazorpayPaymentAction } from "@/app/actions/internship";
import { CreditCard, Sparkles, Loader2, ShieldAlert, CheckCircle2, Award, FileText } from "lucide-react";
import Link from "next/link";

interface Props {
  studentId: string;
  studentName: string;
  studentEmail: string;
}

export default function GraduationCheckout({ studentId, studentName, studentEmail }: Props) {
  const [loading, setLoading] = useState(false);
  const [statusLog, setStatusLog] = useState("");
  const [step, setStep] = useState<"initial" | "processing" | "success">("initial");

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // Dynamically load the Razorpay checkout.js script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayCheckout = async () => {
    setLoading(true);
    setStep("processing");
    setStatusLog("Loading Razorpay security modules...");

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Failed to load Razorpay library. Please check your internet connection.");
      setStep("initial");
      setLoading(false);
      return;
    }

    setStatusLog("Creating secure order on Razorpay servers...");
    const orderRes = await createRazorpayOrderAction(studentId);

    if (!orderRes.success || !orderRes.orderId) {
      alert(orderRes.error || "Failed to create payment order. Try again.");
      setStep("initial");
      setLoading(false);
      return;
    }

    setStatusLog("Opening secure payment drawer...");
    await sleep(300);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_TCXL3cWODA4EGZ",
      amount: orderRes.amount,
      currency: "INR",
      name: "ProDevOpz Technologies",
      description: "Internship Certificate & LOR Release Fee",
      image: "https://prodevopz.jobsio.in/logo.jpg",
      order_id: orderRes.orderId,
      handler: async function (response: any) {
        setStep("processing");
        setLoading(true);
        setStatusLog("Verifying payment transaction signature...");

        const verifyRes = await verifyRazorpayPaymentAction(
          studentId,
          response.razorpay_payment_id,
          response.razorpay_order_id,
          response.razorpay_signature
        );

        if (verifyRes.success) {
          setStep("success");
          setStatusLog("Payment verified & Graduation confirmed! Reloading...");
          await sleep(1000);
          window.location.reload();
        } else {
          alert(verifyRes.error || "Payment verification failed. Contact mentor.");
          setStep("initial");
          setLoading(false);
        }
      },
      prefill: {
        name: studentName,
        email: studentEmail,
      },
      theme: {
        color: "#ff6b00",
      },
      modal: {
        ondismiss: function () {
          setStep("initial");
          setLoading(false);
        },
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  if (step === "success") {
    return (
      <div className="glass-panel border-emerald-500/20 bg-emerald-500/[0.03] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-left shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base text-white">
              Payment Completed &amp; Certificate Unlocked!
            </h3>
            <p className="text-xs text-foreground/60 mt-0.5">
              Your MSME/ISO credentials have been generated and dispatched to your email.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/internship/certificate?studentId=${studentId}`}
            target="_blank"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-white text-xs font-bold shadow-lg hover:opacity-95 flex items-center gap-1.5"
          >
            <Award className="w-4 h-4" /> Open Certificate
          </Link>
          <Link
            href={`/internship/lor?studentId=${studentId}`}
            target="_blank"
            className="px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-white text-xs font-semibold flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4 text-accent-purple" /> Open LOR
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel border-accent-orange/20 bg-accent-orange/5 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-left">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/5 rounded-full filter blur-2xl pointer-events-none" />

      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center text-accent-orange shrink-0">
          {step === "processing" ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <CreditCard className="w-6 h-6 animate-pulse" />
          )}
        </div>
        <div>
          <h3 className="font-display font-extrabold text-base text-white">
            Unlock Certificate &amp; LOR
          </h3>
          <p className="text-xs text-foreground/60 mt-1 max-w-xl leading-relaxed">
            All daily domain modules have been reviewed and approved by your mentor. To release your MSME/ISO certified completion credentials and send them to your email, please process the standard ₹200 graduation checkout.
          </p>
          {step === "processing" && (
            <p className="text-[10px] text-accent-orange mt-2 font-semibold animate-pulse">
              Status: {statusLog}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto">
        <button
          onClick={handleRazorpayCheckout}
          disabled={loading}
          className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-white text-xs font-bold shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Processing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 animate-pulse" /> Pay ₹200 via Razorpay
            </>
          )}
        </button>

        <div className="flex gap-1.5 items-center justify-center text-[8px] text-foreground/40 font-semibold uppercase tracking-widest mt-1">
          <ShieldAlert className="w-3.5 h-3.5 text-accent-orange" /> Razorpay Test Sandbox Active
        </div>
      </div>
    </div>
  );
}
