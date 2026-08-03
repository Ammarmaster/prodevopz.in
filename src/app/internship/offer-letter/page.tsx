import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
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
    : "Onboarding";

  const endFormatted = student.endDate
    ? new Date(student.endDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Completion";

  return (
    <div className="min-h-screen bg-neutral-900 py-10 px-4 flex flex-col items-center gap-6 print:bg-white print:py-0">
      {/* Google Fonts for Cursive Signature */}
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />

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
        className="w-full max-w-4xl bg-white text-neutral-800 p-16 sm:p-20 flex flex-col justify-between shadow-2xl relative border-t-8 border-accent-orange aspect-[1/1.414] print:shadow-none print:border-t-4 print:border-accent-orange print:p-10 text-left select-none"
        id="document-print"
      >
        {/* Top Watermark Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

        {/* Document Header */}
        <div className="flex justify-between items-start border-b border-neutral-200 pb-8 mb-6 relative z-10">
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo.jpg" alt="ProDevOpz Logo" className="w-8 h-8 rounded-lg object-contain bg-black" />
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
        <div className="flex-grow flex flex-col gap-6 text-[11px] sm:text-xs text-neutral-700 leading-relaxed text-left relative z-10">
          <div className="flex justify-between font-bold text-neutral-800 border-b border-neutral-100 pb-2">
            <span>Ref: {student.internshipId}</span>
            <span>Date: {issueDate}</span>
          </div>

          <div>
            <p className="font-bold text-neutral-950 text-xs">To,</p>
            <p className="font-extrabold text-neutral-950 text-sm mt-1">{student.name}</p>
            <p className="text-neutral-500 font-semibold">{student.college}</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-xs text-neutral-950 uppercase tracking-wider border-b border-neutral-100 pb-2 mb-4">
              Subject: Appointment for Technical Internship in {student.domain}
            </h2>
            <p>Dear {student.name},</p>
            <p className="mt-2">
              We are pleased to offer you a technical internship in the domain of <b className="text-neutral-950">{student.domain}</b> at ProDevOpz Technologies. Your internship is scheduled for a duration of <b className="text-neutral-900">{student.duration}</b>, starting on <b className="text-neutral-900">{startFormatted}</b> and scheduled to complete on <b className="text-neutral-900">{endFormatted}</b>.
            </p>
            
            <p className="mt-2">
              During this tenure, you will work on structured daily training modules, client project requirements, and industry-standard version-controlled software releases. The program has been custom-designed to bridge the gap between academic theory and high-performing development sprints.
            </p>

            <div className="mt-4 flex flex-col gap-3 bg-neutral-50/50 p-4 border border-neutral-100 rounded-xl">
              <div>
                <span className="font-bold text-neutral-900 uppercase block text-[9px] tracking-wider mb-1">1. Scope of Internship & Deliverables</span>
                <p className="text-[10px] text-neutral-600">
                  The candidate will engage in structured daily modules, git commits, code reviews, and capstone compilation. Deliverables must be pushed directly to version control dashboards according to mentor guidelines.
                </p>
              </div>

              <div>
                <span className="font-bold text-neutral-900 uppercase block text-[9px] tracking-wider mb-1">2. Non-Disclosure & Confidentiality (NDA)</span>
                <p className="text-[10px] text-neutral-600">
                  You will not disclose, release, or use any intellectual property, source code, data sheets, or client projects belonging to ProDevOpz or its partners during or after the cohort training period.
                </p>
              </div>

              <div>
                <span className="font-bold text-neutral-900 uppercase block text-[9px] tracking-wider mb-1">3. Intellectual Property Rights</span>
                <p className="text-[10px] text-neutral-600">
                  All codes, wireframes, models, databases, and digital assets generated during the execution of daily modules and capstone projects shall remain the sole and exclusive property of ProDevOpz.
                </p>
              </div>

              <div>
                <span className="font-bold text-neutral-900 uppercase block text-[9px] tracking-wider mb-1">4. Graduation & Credentials Release</span>
                <p className="text-[10px] text-neutral-600">
                  Upon successful validation of all daily checklists and payment of the standard ₹200 fee (for database synchronization and metadata compilation), you will graduate with a verified ISO 9001:2015 / MSME completion certificate and Letter of Recommendation (LOR).
                </p>
              </div>
            </div>

            <p className="mt-3">
              We look forward to a highly productive engineering experience with us. Welcome to the ProDevOpz team!
            </p>
          </div>
        </div>

        {/* Letter Footer */}
        <div className="flex justify-between items-end border-t border-neutral-100 pt-6 mt-6 relative z-10">
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
              <span 
                className="text-accent-orange text-2xl tracking-wide relative block"
                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
              >
                Ammar Master
              </span>
            </div>
            <span className="text-[9px] font-extrabold text-neutral-900 font-display">Ammar Master</span>
            <span className="text-[8px] text-neutral-400 font-semibold">Founder & CEO, ProDevOpz</span>
          </div>
        </div>
      </div>
    </div>
  );
}
