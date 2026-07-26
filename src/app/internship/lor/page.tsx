import { db } from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cpu, Award } from "lucide-react";
import PrintButton from "@/components/PrintButton";

interface Props {
  searchParams: Promise<{ studentId?: string }>;
}

export default async function LORPage({ searchParams }: Props) {
  const { studentId } = await searchParams;

  if (!studentId) {
    notFound();
  }

  const student = await db.student.findUnique({
    where: { id: studentId },
  });

  if (!student || student.status !== "COMPLETED") {
    return (
      <div className="max-w-md mx-auto text-center py-20 px-4">
        <h2 className="text-xl font-bold text-white mb-2">LOR Unlocked or Unavailable</h2>
        <p className="text-xs text-foreground/50 mb-6">
          Letter of Recommendation is only issued upon successful completion of all assigned internship modules.
        </p>
        <Link href="/internship" className="px-4 py-2 rounded-xl bg-accent-orange text-white text-xs font-bold">
          Back
        </Link>
      </div>
    );
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
    : "Completion Date";

  return (
    <div className="min-h-screen bg-neutral-900 py-10 px-4 flex flex-col items-center gap-6 print:bg-white print:py-0">
      {/* Print Controls (Hidden on print) */}
      <div className="w-full max-w-4xl flex items-center justify-between glass-panel p-4 border-white/5 print:hidden">
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-white">Letter of Recommendation Viewer</span>
          <span className="text-[10px] text-foreground/50">Ready for A4 PDF Save/Print</span>
        </div>
        <PrintButton />
      </div>

      {/* A4 Document Body */}
      <div
        className="w-full max-w-4xl bg-white text-neutral-800 p-16 sm:p-20 flex flex-col justify-between shadow-2xl relative border border-neutral-200 aspect-[1/1.414] print:shadow-none print:border-none print:p-10 text-left"
        id="lor-print"
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
            <span>Ref: LOR-{student.certificateId}</span>
            <span>Date: {issueDate}</span>
          </div>

          <div className="mb-2">
            <p className="font-display font-black text-xs text-neutral-900 tracking-widest text-center uppercase border-y border-neutral-100 py-3 bg-neutral-50/50">
              TO WHOM IT MAY CONCERN
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p>
              I am writing this letter to formally recommend and verify the professional performance of <b className="text-neutral-900">{student.name}</b>, who has successfully completed their technical internship program in the domain of <b className="text-neutral-900">{student.domain}</b> with ProDevOpz Technologies from <b className="text-neutral-900">{startFormatted}</b> to <b className="text-neutral-900">{endFormatted}</b>.
            </p>
            <p>
              Throughout their tenure, {student.name} demonstrated outstanding technical aptitude, logical reasoning, and a strong drive to learn and master core concepts. They successfully built and deployed multiple domain-specific training modules, maintaining clean coding conventions, robust documentation standards, and proper repository version controls.
            </p>
            
            <p className="font-bold text-neutral-900 uppercase tracking-wide text-[10px] mt-2">
              Intern Evaluation Metrics:
            </p>
            <div className="grid grid-cols-3 gap-4 bg-neutral-50 border border-neutral-150 p-4 rounded-xl text-center">
              <div>
                <span className="text-[9px] text-neutral-400 font-bold block">Modules Completed</span>
                <span className="text-base font-extrabold text-neutral-800 block mt-1">{student.tasksCompletedCount} Modules</span>
              </div>
              <div className="border-x border-neutral-200">
                <span className="text-[9px] text-neutral-400 font-bold block">Performance Rating</span>
                <span className="text-base font-extrabold text-accent-orange block mt-1">{student.rating || 5} / 5 Stars</span>
              </div>
              <div>
                <span className="text-[9px] text-neutral-400 font-bold block">Evaluation Score</span>
                <span className="text-base font-extrabold text-accent-purple block mt-1">{student.performanceScore || 90.0}%</span>
              </div>
            </div>

            {student.feedback && (
              <div className="mt-2">
                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">Mentor Evaluation Feedback:</span>
                <span className="italic text-neutral-600 block bg-neutral-50/50 border-l-2 border-accent-orange p-3 rounded-r-xl">
                  &ldquo;{student.feedback}&rdquo;
                </span>
              </div>
            )}

            <p className="mt-2">
              {student.name} is a dedicated, self-motivated engineer who collaborates effectively and adapts quickly to complex workflows. I have no doubt that they will perform exceptionally in any technical role or corporate software engineering team they join. I highly recommend them for future opportunities and wish them the absolute best in their career ahead.
            </p>
            <p className="mt-4">
              Sincerely,
            </p>
          </div>
        </div>

        {/* Letter Footer */}
        <div className="flex justify-between items-end border-t-2 border-neutral-100 pt-8 mt-10 relative z-10">
          <div className="text-left flex items-center gap-4">
            {/* Circular LOR stamp */}
            <svg className="w-16 h-16 text-neutral-400 opacity-80" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <path id="lorCurve" d="M 20 60 A 40 40 0 0 1 100 60" fill="none" stroke="none" />
              <text className="text-[6.5px] font-bold fill-neutral-500 tracking-wider">
                <textPath href="#lorCurve" startOffset="50%" textAnchor="middle">
                  PRODEVOPZ TECHNOLOGIES
                </textPath>
              </text>
              <path id="lorCurveBottom" d="M 100 60 A 40 40 0 0 1 20 60" fill="none" stroke="none" />
              <text className="text-[6.5px] font-bold fill-neutral-500 tracking-wider">
                <textPath href="#lorCurveBottom" startOffset="50%" textAnchor="middle">
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
              <span>Academic Cohort Review Board</span>
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
