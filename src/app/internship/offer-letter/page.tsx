import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { Cpu, Mail, ShieldAlert } from "lucide-react";
import PrintButton from "@/components/PrintButton";

interface Props {
  searchParams: Promise<{ studentId?: string }>;
}

export default async function OfferLetterPage({ searchParams }: Props) {
  const { studentId } = await searchParams;

  if (!studentId) {
    notFound();
  }

  const student = await db.student.findUnique({
    where: { id: studentId },
  });

  if (!student) {
    notFound();
  }

  const issueDate = new Date(student.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const startFormatted = student.startDate
    ? new Date(student.startDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : issueDate;

  const endFormatted = student.endDate
    ? new Date(student.endDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Completion";

  return (
    <div className="min-h-screen bg-neutral-900 py-10 px-4 flex flex-col items-center gap-6 print:bg-white print:py-0">
      {/* Print Controls (Hidden on print) */}
      <div className="w-full max-w-4xl flex items-center justify-between glass-panel p-4 border-white/5 print:hidden">
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-white">Offer Letter Viewer</span>
          <span className="text-[10px] text-foreground/50">Ready for A4 PDF Save/Print</span>
        </div>
        <PrintButton />
      </div>

      {/* A4 Document Body */}
      <div
        className="w-full max-w-4xl bg-white text-neutral-800 p-16 sm:p-20 flex flex-col justify-between shadow-2xl relative border border-neutral-200 aspect-[1/1.414] print:shadow-none print:border-none print:p-10 text-left"
        id="document-print"
      >
        {/* Top Watermark Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

        {/* Document Header */}
        <div className="flex justify-between items-start border-b-2 border-accent-orange pb-8 mb-10 relative z-10">
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-8 h-8 text-accent-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="2" width="20" height="20" rx="4" />
                <path d="M6 12h12M12 6v12" />
              </svg>
              <span className="font-display font-extrabold text-2xl tracking-tight text-neutral-900">
                ProDevOpz
              </span>
            </div>
            <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
              Intelligent Software Engineering
            </span>
            <span className="text-[9px] text-neutral-400 mt-1 font-semibold">prodevopz.in</span>
          </div>

          <div className="text-right flex flex-col gap-1.5 text-[9px] text-neutral-500 font-medium">
            <span className="font-extrabold text-[11px] text-neutral-900 tracking-wide uppercase">ProDevOpz Technologies India</span>
            <span className="bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded font-bold inline-block text-right self-end border border-neutral-200">
              Registration: UDYAM-KR-03-0058472
            </span>
            <span>contactprodevopz@gmail.com</span>
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>

        {/* Letter Body */}
        <div className="flex-grow flex flex-col gap-8 text-[11px] sm:text-xs text-neutral-700 leading-relaxed text-left relative z-10">
          <div className="flex justify-between font-bold text-neutral-800 border-b border-neutral-100 pb-2">
            <span>Ref: {student.internshipId}</span>
            <span>Date: {issueDate}</span>
          </div>

          <div>
            <p className="font-bold text-neutral-900 text-xs">To,</p>
            <p className="font-extrabold text-neutral-900 text-sm mt-1">{student.name}</p>
            <p className="text-neutral-500 font-semibold">{student.college}</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-xs text-neutral-900 uppercase tracking-wider border-b border-neutral-100 pb-2 mb-4">
              Subject: Appointment for Technical Internship in {student.domain}
            </h2>
            <p>Dear {student.name},</p>
            <p className="mt-3">
              We are pleased to offer you a technical internship in the domain of <b className="text-neutral-900">{student.domain}</b> at ProDevOpz Technologies. Your internship is scheduled for a duration of <b className="text-neutral-900">{student.duration}</b>, starting on <b className="text-neutral-900">{startFormatted}</b> and scheduled to complete on <b className="text-neutral-900">{endFormatted}</b>.
            </p>
            <p className="mt-3">
              During this tenure, you will work on structured daily training modules, client project requirements, and industry-standard version-controlled software releases. The program has been custom-designed to bridge the gap between academic theory and high-performing development sprints.
            </p>
            
            <p className="mt-4 font-bold text-neutral-900 uppercase tracking-wide text-[10px]">
              Onboarding Guidelines & Responsibilities:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2 mt-2">
              <li>Complete the initial social validation tasks (Follow Instagram handle <b>prodevopz.in</b> and LinkedIn page <b>prodevopz</b>) to sync with cohort releases.</li>
              <li>Push your daily module deliverables directly onto GitHub and log your links on the student portal.</li>
              <li>Document code structures using clear README guidelines and architectural blueprints.</li>
            </ul>

            <p className="mt-4">
              Upon successful validation of all daily domain checklists, you will graduate from the cohort. You will then be awarded your official **Certificate of Internship** (fully ISO 9001:2015 and MSME certified with a third-party recruiter verification QR code) along with a formal **Letter of Recommendation (LOR)** signed by our engineering desk.
            </p>
            <p className="mt-4">
              We look forward to a highly productive internship cohort with you. Welcome to the ProDevOpz team!
            </p>
          </div>
        </div>

        {/* Letter Footer */}
        <div className="flex justify-between items-end border-t-2 border-neutral-100 pt-8 mt-10 relative z-10">
          <div className="text-left flex items-center gap-4">
            {/* Custom Circular SVG Seal */}
            <svg className="w-16 h-16 text-neutral-400 opacity-80" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <path id="offerCurve" d="M 20 60 A 40 40 0 0 1 100 60" fill="none" stroke="none" />
              <text className="text-[6.5px] font-bold fill-neutral-500 tracking-wider">
                <textPath href="#offerCurve" startOffset="50%" textAnchor="middle">
                  PRODEVOPZ TECHNOLOGIES
                </textPath>
              </text>
              <path id="offerCurveBottom" d="M 100 60 A 40 40 0 0 1 20 60" fill="none" stroke="none" />
              <text className="text-[6.5px] font-bold fill-neutral-500 tracking-wider">
                <textPath href="#offerCurveBottom" startOffset="50%" textAnchor="middle">
                  ESTD 2024 • COHORT BOARD
                </textPath>
              </text>
              <circle cx="60" cy="60" r="32" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <text x="60" y="63" className="text-[9px] font-black fill-neutral-600 tracking-widest text-center" textAnchor="middle">
                SEAL
              </text>
            </svg>
            <div className="flex flex-col text-[9px] text-neutral-400">
              <span className="font-extrabold text-neutral-600">ProDevOpz Technologies</span>
              <span>Onboarding Validation Desk</span>
            </div>
          </div>

          <div className="text-center flex flex-col items-center">
            {/* Cursive Signature */}
            <div className="h-10 flex items-center justify-center select-none mb-1">
              <span className="font-serif italic font-bold text-accent-orange text-lg tracking-widest relative">
                MD Jalaluddin
                <span className="absolute bottom-0.5 left-0 right-0 h-0.5 bg-accent-orange/20 rotate-[-2deg]" />
              </span>
            </div>
            <span className="text-[9px] font-extrabold text-neutral-800 font-display">MD Jalaluddin</span>
            <span className="text-[8px] text-neutral-400 font-semibold">Founder & MD, ProDevOpz</span>
          </div>
        </div>
      </div>
    </div>
  );
}
