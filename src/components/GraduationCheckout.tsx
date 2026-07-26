"use client";

import { useState } from "react";
import { createRazorpayOrderAction, verifyRazorpayPaymentAction } from "@/app/actions/internship";
import { CreditCard, Sparkles, Loader2, ShieldAlert } from "lucide-react";

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
    await sleep(400);

    const options = {
      key: "rzp_test_TCXL3cWODA4EGZ",
      amount: orderRes.amount,
      currency: "INR",
      name: "ProDevOpz Technologies",
      description: "Internship Credentials Release Fee",
      image: "https://prodevopz.in/favicon.ico",
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
          setStatusLog("Graduation confirmed! Redirecting...");
          await sleep(1500);
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

  return (
    <>
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
            <h3 className="font-display font-extrabold text-base text-white">Unlock Certificate & LOR</h3>
            <p className="text-xs text-foreground/60 mt-1 max-w-xl leading-relaxed">
              All daily domain modules have been reviewed and approved by your mentor. To release your MSME/ISO certified completion credentials and send them to your email, please process the standard ₹200 fee checkout.
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
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-white text-xs font-bold shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 disabled:opacity-50"
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
    </>
  );
}
