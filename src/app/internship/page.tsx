"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  registerStudent,
  sendRegistrationOtp,
  verifyRegistrationOtp,
  studentSignInOtp,
  verifyStudentSignInOtp,
} from "@/app/actions/internship";
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
  RefreshCw,
  LogIn,
  UserPlus,
  Code2,
  Cpu,
  Server,
  Sparkles,
  Award,
  Globe,
  CheckCircle2,
  HelpCircle,
  Laptop,
  Briefcase,
  Layers,
  ChevronDown,
  Clock,
  Terminal,
} from "lucide-react";

export default function InternshipPortal() {
  const router = useRouter();
  const [portalMode, setPortalMode] = useState<"register" | "signin">("register");
  const [step, setStep] = useState<"form" | "otp" | "success">("form");

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

  // Sign In State
  const [signInEmail, setSignInEmail] = useState("");

  const [otpCode, setOtpCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [registeredData, setRegisteredData] = useState<{ id: string; internshipId: string } | null>(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeEmail = portalMode === "register" ? formData.email : signInEmail;

  // Countdown timer effect for Resend OTP
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

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

  const domainCards = [
    {
      icon: <Code2 className="w-5 h-5 text-accent-orange" />,
      title: "Web & Full-Stack Development",
      description: "Build production-grade web apps using Next.js, React, Node.js, and PostgreSQL. Master responsive layouts, REST APIs, and database migrations.",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    },
    {
      icon: <Sparkles className="w-5 h-5 text-accent-purple" />,
      title: "Applied AI & Machine Learning",
      description: "Engineer custom Retrieval-Augmented Generation (RAG) pipelines, LLM prompts, data analytics models, and intelligent automated workflows.",
      tags: ["Python", "PyTorch", "LangChain", "OpenAI APIs"],
    },
    {
      icon: <Server className="w-5 h-5 text-accent-blue" />,
      title: "Cloud Infrastructure & DevOps",
      description: "Deploy containerized architectures with Docker, configure CI/CD automation pipelines, and manage cloud services across AWS and GCP.",
      tags: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    },
    {
      icon: <Laptop className="w-5 h-5 text-emerald-400" />,
      title: "Frontend Engineering",
      description: "Create interactive user interfaces with Tailwind CSS, TypeScript, and modern state management. Achieve 100% Lighthouse audit scores.",
      tags: ["TypeScript", "Tailwind CSS", "React", "Vite"],
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
      title: "Cyber Security & Ethical Hacking",
      description: "Learn web application vulnerability assessments, penetration testing basics, secure authentication protocols, and threat mitigation.",
      tags: ["OWASP", "Network Sec", "Pen Testing", "Auth"],
    },
    {
      icon: <Layers className="w-5 h-5 text-amber-400" />,
      title: "Mobile App Development",
      description: "Develop cross-platform native mobile applications using Flutter and React Native with native device APIs and offline data sync.",
      tags: ["Flutter", "Dart", "React Native", "Firebase"],
    },
  ];

  const faqs = [
    {
      question: "Who is eligible to apply for ProDevOpz technical internships?",
      answer:
        "Students currently enrolled in BCA, MCA, BTech, BE, BSc Computer Science, IT, Diploma, or polytechnic degree programs across all semesters and colleges in India are eligible. Freshers and recent graduates seeking hands-on project experience to enhance their resumes and GitHub portfolios are also welcome to apply.",
    },
    {
      question: "Is the ProDevOpz internship program free to join?",
      answer:
        "Yes! Applying, receiving your official welcome Offer Letter, and accessing the learning curriculum and daily task modules is 100% free with zero upfront enrollment fees. Upon completing your technical modules, students can choose to graduate and claim their verifiable MSME & ISO 9001:2015 certified completion credentials and signed Letter of Recommendation (LOR).",
    },
    {
      question: "Is this internship completely remote / online (Work From Home)?",
      answer:
        "Yes, all ProDevOpz internship tracks are 100% virtual and remote. You can complete tasks on your own schedule from anywhere in India without interfering with your regular college classes or semester examinations.",
    },
    {
      question: "Will I receive an official Offer Letter and Certificate of Completion?",
      answer:
        "Yes! As soon as you verify your email address, an official welcome Offer Letter with your unique internship reference ID is generated and emailed to you immediately. Upon completing and submitting your domain tasks, you unlock your verifiable Certificate of Completion and Letter of Recommendation (LOR).",
    },
    {
      question: "How can recruiters verify the authenticity of my certificate?",
      answer:
        "Every certificate issued by ProDevOpz includes a unique Certificate ID and a tamper-proof QR code. Recruiters and university authorities can scan the QR code or visit our live public verification registry at https://prodevopz.jobsio.in/verify-certificate to authenticate the credential in real time.",
    },
    {
      question: "What is the duration of the internship program?",
      answer:
        "Internship tracks are available in flexible durations of 1 Month, 2 Months, 3 Months, or 6 Months depending on your college academic credit requirements and personal learning pace.",
    },
  ];

  // Submit Registration Form
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.college) {
      setErrorMsg("Please fill in all required fields marked with *");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setInfoMsg("");

    const res = await sendRegistrationOtp(formData.email);
    setLoading(false);

    if (res.success) {
      if (res.fallback) {
        setInfoMsg(
          "Notice: SMTP fallback mode active. Your test OTP code is: " + res.otpCode
        );
      } else {
        setInfoMsg(`A 6-digit verification code has been emailed to ${formData.email}.`);
      }
      setCountdown(30);
      setStep("otp");
    } else {
      setErrorMsg(res.error || "Failed to send email verification OTP.");
    }
  };

  // Submit Sign In Form
  const handleSignInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signInEmail) {
      setErrorMsg("Please enter your registered email address.");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setInfoMsg("");

    const res = await studentSignInOtp(signInEmail);
    setLoading(false);

    if (res.success) {
      if (res.fallback) {
        setInfoMsg(
          "Notice: SMTP fallback mode active. Your sign-in OTP code is: " + res.otpCode
        );
      } else {
        setInfoMsg(`A 6-digit sign-in code has been emailed to ${signInEmail}.`);
      }
      setCountdown(30);
      setStep("otp");
    } else {
      setErrorMsg(res.error || "Failed to send sign-in OTP.");
    }
  };

  // Handle Resend OTP
  const handleResendOtp = async () => {
    if (countdown > 0 || resending || !activeEmail) return;

    setResending(true);
    setErrorMsg("");
    setInfoMsg("");

    const res =
      portalMode === "register"
        ? await sendRegistrationOtp(activeEmail)
        : await studentSignInOtp(activeEmail);

    setResending(false);

    if (res.success) {
      setCountdown(30);
      if (res.fallback) {
        setInfoMsg("New test OTP code generated: " + res.otpCode);
      } else {
        setInfoMsg(`A fresh 6-digit verification code has been sent to ${activeEmail}.`);
      }
    } else {
      setErrorMsg(res.error || "Failed to resend OTP. Please try again.");
    }
  };

  // Handle OTP Verification
  const handleVerifyOtp = async () => {
    if (!otpCode || otpCode.length < 6) {
      setErrorMsg("Please enter the complete 6-digit OTP code received in your email.");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setInfoMsg("");

    if (portalMode === "signin") {
      const verifyRes = await verifyStudentSignInOtp(signInEmail, otpCode);
      setLoading(false);

      if (verifyRes.success && verifyRes.studentId) {
        router.push(`/internship/dashboard?studentId=${verifyRes.studentId}`);
      } else {
        setErrorMsg(verifyRes.error || "Invalid OTP code. Please check your email inbox/spam.");
      }
    } else {
      // Registration verification
      const verifyRes = await verifyRegistrationOtp(formData.email, otpCode);

      if (verifyRes.success) {
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
    }
  };

  // Comprehensive Schema.org JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://prodevopz.jobsio.in/internship#webpage",
        "url": "https://prodevopz.jobsio.in/internship",
        "name": "Free Internships for Students in India with Certificate & LOR | ProDevOpz",
        "description": "Apply for free online technical internships in India at ProDevOpz. Remote project-based tracks in Web Development, Full Stack, AI/ML, Cloud DevOps, Android & Cyber Security for BCA, BTech, BE & MCA students.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://prodevopz.jobsio.in/#website",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "about": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        }
      },
      {
        "@type": "EducationalOccupationalProgram",
        "@id": "https://prodevopz.jobsio.in/internship#program",
        "name": "ProDevOpz Online Technical Internship Program for Indian Students",
        "description": "Hands-on remote technical internship programs in Web Development, Full Stack, AI/ML, Cloud DevOps, and Cyber Security with verified MSME & ISO 9001:2015 completion certificates and Letter of Recommendation.",
        "provider": {
          "@type": "Organization",
          "@id": "https://prodevopz.jobsio.in/#organization",
          "name": "ProDevOpz",
          "legalName": "ProDevOpz Technologies",
          "url": "https://prodevopz.jobsio.in/",
          "logo": "https://prodevopz.jobsio.in/logo.jpg"
        },
        "programType": "Technical Internship & Practical Training",
        "educationalProgramMode": "Online / Remote",
        "occupationalCategory": "Software Development, AI Engineering, Cloud DevOps, Full-Stack Architecture",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "category": "Free Enrollment & Training"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://prodevopz.jobsio.in/internship#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://prodevopz.jobsio.in/internship#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://prodevopz.jobsio.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Internships for Students in India",
            "item": "https://prodevopz.jobsio.in/internship"
          }
        ]
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-16 text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: "Internships for Students in India" },
        ]}
      />

      {/* Hero Header Section */}
      <header className="flex flex-col gap-5 max-w-4xl mx-auto text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-bold text-accent-orange uppercase tracking-widest bg-accent-orange/10 px-4 py-1.5 rounded-full border border-accent-orange/20">
            Free Technical Internship Program — India
          </span>
          <span className="text-xs font-medium text-foreground/50 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/5">
            MSME &amp; ISO 9001:2015 Verified
          </span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
          Free Internships for Students in India with Certificate &amp; LOR
        </h1>

        <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-3xl mx-auto">
          Gain hands-on software development experience with real-world engineering sprints. 100% remote, virtual internship tracks designed for <b>BTech, BE, BCA, MCA, and Computer Science students</b> across India. Receive your instant welcome Offer Letter, submit daily code repositories, and graduate with verifiable MSME/ISO completion certificates and signed Letters of Recommendation (LOR).
        </p>

        {/* Value Highlights Pill Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-left">
          <div className="glass-card p-3 border-white/[0.06] flex items-center gap-2.5">
            <Globe className="w-4 h-4 text-accent-orange shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white">100% Remote</span>
              <span className="text-[9px] text-foreground/50">Work from home</span>
            </div>
          </div>
          <div className="glass-card p-3 border-white/[0.06] flex items-center gap-2.5">
            <Award className="w-4 h-4 text-accent-purple shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white">Verified Certificate</span>
              <span className="text-[9px] text-foreground/50">MSME &amp; ISO compliant</span>
            </div>
          </div>
          <div className="glass-card p-3 border-white/[0.06] flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-accent-blue shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white">Offer Letter &amp; LOR</span>
              <span className="text-[9px] text-foreground/50">Instant email dispatch</span>
            </div>
          </div>
          <div className="glass-card p-3 border-white/[0.06] flex items-center gap-2.5">
            <Briefcase className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white">Zero Experience Req.</span>
              <span className="text-[9px] text-foreground/50">For freshers &amp; students</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Application & Sign-In Form Container */}
      <section id="apply-now" className="max-w-4xl mx-auto w-full">
        {/* Mode Switcher Tabs */}
        {step === "form" && (
          <div className="flex items-center justify-center gap-2 max-w-sm mx-auto w-full bg-white/[0.03] p-1.5 rounded-2xl border border-white/[0.08] mb-6">
            <button
              type="button"
              onClick={() => {
                setPortalMode("register");
                setErrorMsg("");
                setInfoMsg("");
              }}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                portalMode === "register"
                  ? "bg-accent-orange text-white shadow-lg"
                  : "text-foreground/60 hover:text-white"
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              New Application
            </button>
            <button
              type="button"
              onClick={() => {
                setPortalMode("signin");
                setErrorMsg("");
                setInfoMsg("");
              }}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                portalMode === "signin"
                  ? "bg-accent-purple text-white shadow-lg"
                  : "text-foreground/60 hover:text-white"
              }`}
            >
              <LogIn className="w-3.5 h-3.5" />
              Student Sign-In
            </button>
          </div>
        )}

        {/* Steps Indicator */}
        <div className="flex items-center justify-between max-w-xs mx-auto w-full border-b border-white/[0.05] pb-4 mb-4">
          {[
            {
              label: portalMode === "register" ? "Apply" : "Sign In",
              active: step === "form",
            },
            { label: "Verify OTP", active: step === "otp" },
            { label: "Dashboard", active: step === "success" },
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

        {/* Main Panel Box */}
        <div className="glass-panel border-white/[0.08] p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left">
          {/* Alerts */}
          {errorMsg && (
            <div className="flex gap-2.5 p-3.5 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-xs items-start mb-6">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {infoMsg && (
            <div className="flex gap-2.5 p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs items-start mb-6">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{infoMsg}</span>
            </div>
          )}

          {/* STEP 1: Registration Form */}
          {step === "form" && portalMode === "register" && (
            <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-sm text-white border-b border-white/[0.05] pb-2 flex items-center gap-1.5">
                <User className="w-4 h-4 text-accent-orange" /> Personal &amp; Academic Details
              </h2>

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
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
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
                    placeholder="name@example.com"
                    className="w-full bg-white/5 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
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
                    placeholder="10-digit phone number"
                    className="w-full bg-white/5 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
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
                    placeholder="e.g. Sanjay Ghodawat University, RCUB, VTU"
                    className="w-full bg-white/5 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                  />
                </div>
              </div>

              <h2 className="font-display font-bold text-sm text-white border-b border-white/[0.05] pb-2 flex items-center gap-1.5 mt-2">
                <BookOpen className="w-4 h-4 text-accent-purple" /> Domain &amp; Duration Selection
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                    Internship Domain *
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full bg-[#0a0a0a] text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
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
                    className="w-full bg-[#0a0a0a] text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                  >
                    <option>1 Month</option>
                    <option>2 Months</option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                  </select>
                </div>
              </div>

              <h2 className="font-display font-bold text-sm text-white border-b border-white/[0.05] pb-2 flex items-center gap-1.5 mt-2">
                <FileText className="w-4 h-4 text-accent-blue" /> Professional Profiles &amp; Resume (Optional)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-white/5 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                    GitHub Profile URL
                  </label>
                  <input
                    type="url"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="https://github.com/username"
                    className="w-full bg-white/5 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                    Portfolio / Personal Website
                  </label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://myportfolio.com"
                    className="w-full bg-white/5 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                    Resume Google Drive / Cloud Link
                  </label>
                  <input
                    type="url"
                    value={formData.resumeUrl}
                    onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                    placeholder="Google Drive public link"
                    className="w-full bg-white/5 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full py-3.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-xs font-bold text-white shadow-xl hover:opacity-95 flex items-center justify-center gap-1.5 disabled:opacity-50 transition-opacity cursor-pointer"
              >
                {loading ? "Sending Verification OTP..." : "Apply & Send Email OTP"}{" "}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* STEP 1b: Sign In Form */}
          {step === "form" && portalMode === "signin" && (
            <form onSubmit={handleSignInSubmit} className="flex flex-col gap-6 max-w-md mx-auto py-4">
              <div className="text-center flex flex-col gap-1.5">
                <LogIn className="w-10 h-10 text-accent-purple mx-auto mb-1" />
                <h2 className="font-display font-bold text-base text-white">Student Sign-In</h2>
                <p className="text-xs text-foreground/50">
                  Enter your registered email address to receive a secure login OTP code.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block">
                  Registered Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3.5 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-purple"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-accent-purple text-xs font-bold text-white shadow-xl hover:opacity-95 flex items-center justify-center gap-1.5 disabled:opacity-50 transition-opacity cursor-pointer"
              >
                {loading ? "Sending Sign-In OTP..." : "Send Sign-In OTP"}{" "}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* STEP 2: Email OTP Input with Resend OTP */}
          {step === "otp" && (
            <div className="flex flex-col gap-6 max-w-md mx-auto text-center py-4">
              <div className="w-14 h-14 rounded-2xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center text-accent-orange mx-auto">
                <Lock className="w-7 h-7 animate-pulse" />
              </div>

              <div>
                <h2 className="font-display font-bold text-lg text-white">
                  Enter 6-Digit Email Verification Code
                </h2>
                <p className="text-xs text-foreground/60 mt-1 leading-relaxed">
                  We emailed a 6-digit verification code to{" "}
                  <b className="text-white">{activeEmail}</b>.
                </p>
              </div>

              <div className="flex flex-col gap-2 text-left">
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block">
                  6-Digit Verification Code
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.trim())}
                  placeholder="123456"
                  className="w-full bg-white/5 text-base text-center font-mono font-bold tracking-[0.3em] text-white rounded-xl px-4 py-3 border border-white/[0.08] focus:outline-none focus:border-accent-orange"
                />
              </div>

              {/* Resend OTP Button with Countdown */}
              <div className="flex items-center justify-between text-xs py-1 border-y border-white/[0.05]">
                <span className="text-foreground/50">Didn&apos;t receive the code?</span>
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={countdown > 0 || resending}
                  className="inline-flex items-center gap-1.5 font-bold text-accent-orange hover:underline disabled:text-foreground/30 disabled:no-underline transition-colors cursor-pointer disabled:cursor-not-allowed"
                >
                  <RefreshCw
                    className={`w-3.5 h-3.5 ${resending ? "animate-spin" : ""}`}
                  />
                  {resending
                    ? "Resending..."
                    : countdown > 0
                    ? `Resend OTP in ${countdown}s`
                    : "Resend OTP"}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setStep("form");
                    setOtpCode("");
                    setErrorMsg("");
                    setInfoMsg("");
                  }}
                  disabled={loading}
                  className="w-1/2 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-semibold text-foreground/75 transition-colors cursor-pointer"
                >
                  Go Back
                </button>
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={loading || otpCode.length < 6}
                  className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-white text-xs font-bold shadow-lg hover:opacity-95 flex items-center justify-center gap-1.5 disabled:opacity-50 transition-opacity cursor-pointer"
                >
                  {loading ? "Verifying..." : "Verify & Continue"}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Success Screen (Registration) */}
          {step === "success" && (
            <div className="flex flex-col gap-6 max-w-md mx-auto text-center py-6">
              <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
              <div>
                <h2 className="font-display font-black text-2xl text-white">
                  Onboarding Completed!
                </h2>
                <p className="text-xs text-foreground/60 mt-2 leading-relaxed">
                  Your email has been verified and your enrollment is active. Your welcome Offer Letter has been emailed to you from{" "}
                  <b className="text-white">contactprodevopz@gmail.com</b>.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-xs flex flex-col gap-2 text-left">
                <p className="text-foreground/50 font-semibold border-b border-white/5 pb-1">
                  Internship Profile Credentials:
                </p>
                <p>
                  <span className="text-foreground/40">Internship ID:</span>{" "}
                  <b className="text-accent-orange font-mono">
                    {registeredData?.internshipId}
                  </b>
                </p>
                <p>
                  <span className="text-foreground/40">Domain:</span>{" "}
                  <b className="text-white">{formData.domain}</b>
                </p>
                <p>
                  <span className="text-foreground/40">Status:</span>{" "}
                  <b className="text-emerald-400">ACTIVE</b>
                </p>
              </div>

              <button
                onClick={() =>
                  router.push(`/internship/dashboard?studentId=${registeredData?.id}`)
                }
                className="py-3.5 rounded-xl bg-accent-orange text-white text-xs font-bold shadow-lg hover:opacity-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Go to Student Dashboard <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 1: Technical Internship Domains */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-accent-purple uppercase tracking-wider">
            Curated Engineering Tracks
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Available Technical Internship Domains
          </h2>
          <p className="text-xs sm:text-sm text-foreground/60 max-w-2xl leading-relaxed">
            Choose from high-demand software engineering and applied technology disciplines designed to build resume-worthy GitHub projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domainCards.map((domain, i) => (
            <div
              key={i}
              className="glass-card p-6 border-white/[0.06] flex flex-col justify-between gap-4 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  {domain.icon}
                </div>
                <h3 className="font-display font-bold text-base text-white">
                  {domain.title}
                </h3>
                <p className="text-xs text-foreground/65 leading-relaxed">
                  {domain.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.05]">
                {domain.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-semibold text-foreground/60 bg-white/[0.02] px-2.5 py-0.5 rounded-md border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Who Can Apply? (Target Student Disciplines in India) */}
      <section className="glass-panel border-white/[0.08] p-8 md:p-12 flex flex-col gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col gap-2 relative z-10">
          <span className="text-xs font-bold text-accent-orange uppercase tracking-wider">
            Eligibility &amp; Student Qualifications
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Who Can Apply for ProDevOpz Internships?
          </h2>
          <p className="text-xs sm:text-sm text-foreground/65 max-w-2xl leading-relaxed">
            Our virtual internship curriculum is tailored specifically for Indian university and college students wanting real-world software development exposure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          <div className="glass-card p-5 border-white/[0.06] flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0" />
              <h3 className="font-display font-bold text-sm text-white">
                BTech &amp; BE Students
              </h3>
            </div>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Computer Science (CSE), Information Technology (IT), AI/DS, ECE, and engineering undergraduates seeking mandatory semester industrial training credits.
            </p>
          </div>

          <div className="glass-card p-5 border-white/[0.06] flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-purple shrink-0" />
              <h3 className="font-display font-bold text-sm text-white">
                BCA &amp; MCA Students
              </h3>
            </div>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Bachelor &amp; Master of Computer Applications students looking to bridge the gap between academic theory and production software architectures.
            </p>
          </div>

          <div className="glass-card p-5 border-white/[0.06] flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0" />
              <h3 className="font-display font-bold text-sm text-white">
                BSc &amp; MSc IT / CS
              </h3>
            </div>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Science and computing students needing real repository commits and project deliverables to stand out in campus placements and off-campus tech drives.
            </p>
          </div>

          <div className="glass-card p-5 border-white/[0.06] flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <h3 className="font-display font-bold text-sm text-white">
                Diploma &amp; Polytechnic Students
              </h3>
            </div>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Technical diploma candidates looking for hands-on web, mobile, and system programming experience with verified completion certificates.
            </p>
          </div>

          <div className="glass-card p-5 border-white/[0.06] flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <h3 className="font-display font-bold text-sm text-white">
                Freshers &amp; Career Starters
              </h3>
            </div>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Recent graduates and self-taught developers needing verifiable corporate experience and recommendation letters for their resumes.
            </p>
          </div>

          <div className="glass-card p-5 border-white/[0.06] flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
              <h3 className="font-display font-bold text-sm text-white">
                Final Year Project Cohorts
              </h3>
            </div>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Final-year students looking to develop capstone projects, full-stack applications, and AI integrations with mentor guidance.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: 4-Step Internship Workflow */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-accent-blue uppercase tracking-wider">
            Step-By-Step Workflow
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            How the ProDevOpz Internship Works
          </h2>
          <p className="text-xs sm:text-sm text-foreground/60 max-w-2xl leading-relaxed">
            Our autonomous internship portal streamlines registration, task submissions, mentor reviews, and credential verification.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 border-white/[0.06] flex flex-col gap-3">
            <span className="text-2xl font-black font-display text-accent-orange">01</span>
            <h3 className="font-display font-bold text-base text-white">Free Online Application</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Fill in your academic details, choose your domain, and verify your email with a secure 6-digit OTP code.
            </p>
          </div>

          <div className="glass-card p-6 border-white/[0.06] flex flex-col gap-3">
            <span className="text-2xl font-black font-display text-accent-purple">02</span>
            <h3 className="font-display font-bold text-base text-white">Instant Offer Letter</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Your official PDF Offer Letter with unique Ref Number is generated and dispatched to your email immediately.
            </p>
          </div>

          <div className="glass-card p-6 border-white/[0.06] flex flex-col gap-3">
            <span className="text-2xl font-black font-display text-accent-blue">03</span>
            <h3 className="font-display font-bold text-base text-white">Complete Daily Tasks</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Access your personalized student dashboard to view daily coding assignments and submit your live GitHub repository links.
            </p>
          </div>

          <div className="glass-card p-6 border-white/[0.06] flex flex-col gap-3">
            <span className="text-2xl font-black font-display text-emerald-400">04</span>
            <h3 className="font-display font-bold text-base text-white">Graduate &amp; Verify</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Unlock your verifiable MSME &amp; ISO certified completion certificate and signed LOR with QR code registry authentication.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Certificate & LOR Authenticity (MSME & ISO 9001:2015) */}
      <section className="glass-panel border-white/[0.08] p-8 md:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 relative overflow-hidden">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Government MSME &amp; ISO 9001:2015 Accredited
            </span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Verifiable Credentials Respected by Recruiters
          </h2>
          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
            ProDevOpz (ProDevOpz Technologies) is a registered MSME software enterprise (UDYAM-KR-03-0058472) adhering to ISO 9001:2015 quality standards. Every student certificate features a unique identification code and QR code linked directly to our live database registry.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <Link
            href="/verify-certificate"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Verify Certificate Registry
          </Link>
          <a
            href="#apply-now"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent-orange text-white text-xs font-bold shadow-lg hover:opacity-95 flex items-center justify-center gap-1.5 transition-opacity"
          >
            Apply for Free <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* SECTION 5: Frequently Asked Questions (FAQ) */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-accent-orange uppercase tracking-wider">
            Help &amp; Answers
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-foreground/60 max-w-2xl leading-relaxed">
            Common questions regarding eligibility, remote tasks, Offer Letters, certificates, and recommendation letters.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="glass-card border-white/[0.06] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="font-display font-bold text-sm text-white flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-accent-orange shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-foreground/40 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent-orange" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-foreground/70 leading-relaxed border-t border-white/[0.04]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: Cross-Links & Footer Navigation */}
      <section className="glass-panel border-white/[0.06] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider">
            Explore ProDevOpz
          </span>
          <h2 className="font-display font-bold text-lg text-white">
            Build Software Solutions With Us
          </h2>
          <p className="text-xs text-foreground/60 leading-relaxed">
            Explore our company story, leadership team, product portfolio including EzBill and S1Pro, and open careers.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/about"
            className="text-xs font-semibold text-foreground/80 hover:text-white px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
          >
            About Company
          </Link>
          <Link
            href="/careers"
            className="text-xs font-semibold text-foreground/80 hover:text-white px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
          >
            Careers
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-accent-orange px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            ProDevOpz Home
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
