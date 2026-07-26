"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerStudent, sendRegistrationOtp, verifyRegistrationOtp } from "@/app/actions/internship";
import {
  GraduationCap,
  Mail,
  Phone,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  FileText,
  User,
  AlertCircle,
  Lock,
} from "lucide-react";

export default function InternshipPortal() {
  const router = useRouter();
  const [step, setStep] = useState<"register" | "otp" | "success">("register");

  // Registration Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    domain: "Web Development",
    duration: "1 Month",
    linkedin: "",
    github: "",
    portfolio: "",
    resumeUrl: "",
  });

  const [otpCode, setOtpCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [registeredData, setRegisteredData] = useState<{ id: string; internshipId: string } | null>(null);

  const domains = [
    "Web Development",
    "Frontend",
    "Backend",
    "Full Stack",
    "AI",
    "Machine Learning",
    "Cloud",
    "DevOps",
    "UI UX",
    "Cyber Security",
    "Android",
  ];

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.college) {
      setErrorMsg("Please fill in all required fields marked with *");
      return;
    }
    
    setLoading(true);
    setErrorMsg("");
    
    // Call server action to send real email OTP
    const res = await sendRegistrationOtp(formData.email);
    setLoading(false);

    if (res.success) {
      if (res.fallback) {
        setErrorMsg("Notice: Gmail SMTP connection failed (Bad Credentials). Google requires a 16-character App Password to allow SMTP logins. We fell back to printing your OTP code below. To enable actual emails, generate an App Password in your Google Account Security Settings and paste it into src/lib/email.ts. Your test OTP code is: " + res.otpCode);
      }
      setStep("otp");
    } else {
      setErrorMsg(res.error || "Failed to trigger email verification OTP.");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otpCode) {
      setErrorMsg("Please enter the 6-digit OTP code received in your email.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    // Verify OTP in DB
    const verifyRes = await verifyRegistrationOtp(formData.email, otpCode);
    
    if (verifyRes.success) {
      // If OTP verified successfully, save registration & trigger Offer Letter email
      const regRes = await registerStudent(formData);
      setLoading(false);

      if (regRes.success && regRes.studentId) {
        setRegisteredData({ id: regRes.studentId, internshipId: regRes.internshipId || "" });
        setStep("success");
      } else {
        setErrorMsg(regRes.error || "Verification succeeded, but database registration failed.");
      }
    } else {
      setLoading(false);
      setErrorMsg(verifyRes.error || "Invalid OTP code. Please check your email inbox/spam.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-8">
      {/* Header */}
      <div className="text-center flex flex-col gap-2 max-w-xl mx-auto">
        <span className="text-xs font-bold text-accent-orange uppercase tracking-widest bg-accent-orange/10 px-3.5 py-1.5 rounded-full w-fit mx-auto">
          Enrollment Portal
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-white">
          Start Your Technical Journey
        </h1>
        <p className="text-xs text-foreground/50 leading-relaxed">
          Select your engineering domain, verify your email, and receive your welcome Offer Letter on your email immediately to start your daily tasks.
        </p>
      </div>

      {/* Steps Indicator */}
      <div className="flex items-center justify-between max-w-xs mx-auto w-full border-b border-white/[0.05] pb-4 mb-4">
        {[
          { label: "Register", active: step === "register" },
          { label: "Verify Email", active: step === "otp" },
          { label: "Access Dashboard", active: step === "success" },
        ].map((s, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all ${
                s.active
                  ? "bg-accent-orange border-accent-orange text-white"
                  : "border-white/10 text-foreground/40 bg-transparent"
              }`}
            >
              {idx + 1}
            </div>
            <span
              className={`text-[10px] font-bold tracking-wider uppercase ${
                s.active ? "text-white" : "text-foreground/40"
              }`}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Form panel */}
      <div className="glass-panel border-white/[0.08] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {errorMsg && (
          <div className="flex gap-2.5 p-3 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-xs items-start mb-6">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* STEP 1: Registration fields */}
        {step === "register" && (
          <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-6">
            <h3 className="font-display font-bold text-sm text-white border-b border-white/[0.05] pb-2 flex items-center gap-1.5">
              <User className="w-4 h-4 text-accent-orange" /> Personal & Academic Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter name"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter email"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  Mobile Number (with WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter 10-digit number"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  College / University Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  placeholder="Enter college name"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
              </div>
            </div>

            <h3 className="font-display font-bold text-sm text-white border-b border-white/[0.05] pb-2 flex items-center gap-1.5 mt-4">
              <BookOpen className="w-4 h-4 text-accent-purple" /> Domain & Duration Selection
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  Internship Domain *
                </label>
                <select
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                  className="w-full bg-[#0a0a0a] text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                >
                  {domains.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  Internship Duration *
                </label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full bg-[#0a0a0a] text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                >
                  <option>1 Month</option>
                  <option>2 Months</option>
                  <option>3 Months</option>
                  <option>6 Months</option>
                </select>
              </div>
            </div>

            <h3 className="font-display font-bold text-sm text-white border-b border-white/[0.05] pb-2 flex items-center gap-1.5 mt-4">
              <FileText className="w-4 h-4 text-accent-blue" /> Professional Profiles & Resume Links
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  GitHub URL
                </label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  placeholder="https://github.com/username"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  Portfolio Website
                </label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  placeholder="https://myportfolio.com"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  Resume Google Drive / Dropbox Link
                </label>
                <input
                  type="url"
                  value={formData.resumeUrl}
                  onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                  placeholder="Google Drive public link"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-xs font-bold text-white shadow-xl hover:opacity-90 flex items-center justify-center gap-1.5 disabled:opacity-50"
            >
              {loading ? "Sending OTP..." : "Apply & Send Email OTP"} <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* STEP 2: Email OTP Input */}
        {step === "otp" && (
          <div className="flex flex-col gap-6 max-w-md mx-auto text-center py-6">
            <Lock className="w-12 h-12 text-accent-purple mx-auto animate-pulse" />
            <div>
              <h3 className="font-display font-bold text-base text-white">Email Verification Code</h3>
              <p className="text-[11px] text-foreground/50 mt-1 leading-relaxed">
                We have emailed a 6-digit verification code to <b className="text-white">{formData.email}</b>.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-left mt-4">
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  Enter 6-Digit Email OTP Code
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  placeholder="------"
                  className="w-full bg-white/5 text-xs text-center font-bold tracking-widest text-white rounded-xl px-3 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setStep("register")}
                disabled={loading}
                className="w-1/2 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-semibold"
              >
                Go Back
              </button>
              <button
                onClick={handleVerifyOtp}
                disabled={loading}
                className="w-1/2 py-2.5 rounded-xl bg-accent-orange text-white text-xs font-bold shadow-lg hover:opacity-90 flex items-center justify-center gap-1"
              >
                {loading ? "Verifying..." : "Verify & Onboard"}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Success Screen */}
        {step === "success" && (
          <div className="flex flex-col gap-6 max-w-md mx-auto text-center py-8">
            <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
            <div>
              <h3 className="font-display font-black text-xl text-white">Onboarding Completed!</h3>
              <p className="text-xs text-foreground/50 mt-2 leading-relaxed">
                Congratulations! Your email has been verified. Your welcome Offer Letter has been emailed to you from <b className="text-white">contactprodevopz@gmail.com</b>. Your unique internship ID is <b className="text-white">{registeredData?.internshipId}</b>.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-xs flex flex-col gap-1.5 text-left">
              <p className="text-foreground/50">Internship Profile Details:</p>
              <p><span className="text-foreground/40">Domain:</span> <b className="text-white">{formData.domain}</b></p>
              <p><span className="text-foreground/40">Status:</span> <b className="text-emerald-400">ACTIVE</b></p>
              <p><span className="text-foreground/40">Payment (For Cert/LOR):</span> <b className="text-amber-400">PENDING (At Graduation)</b></p>
            </div>

            <button
              onClick={() => router.push(`/internship/dashboard?studentId=${registeredData?.id}`)}
              className="mt-4 py-3 rounded-xl bg-accent-orange text-white text-xs font-bold shadow-lg hover:opacity-95 flex items-center justify-center gap-1.5"
            >
              Go to Student Dashboard <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
