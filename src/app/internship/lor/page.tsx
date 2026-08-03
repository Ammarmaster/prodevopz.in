import { db } from "@/lib/db";
import { notFound } from "next/navigation";
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
    notFound();
  }

  const issueDate = new Date(student.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const ratingStr = student.rating ? `${student.rating} / 5 Stars` : "5 / 5 Stars";

  return (
    <div className="min-h-screen bg-neutral-900 py-10 px-4 flex flex-col items-center gap-6 print:bg-white print:py-0">
      {/* Google Fonts for Cursive Signature */}
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />

      {/* Print Controls (Hidden on print) */}
      <div className="w-full max-w-4xl flex items-center justify-between glass-panel p-4 border-white/5 print:hidden">
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-white">Letter of Recommendation (LOR)</span>
          <span className="text-[10px] text-foreground/50">Ready for A4 PDF Save/Print</span>
        </div>
        <PrintButton />
      </div>

      {/* A4 Document Body */}
      <div
        className="w-full max-w-4xl bg-white text-neutral-800 p-16 sm:p-20 flex flex-col justify-between shadow-2xl relative border-t-8 border-accent-purple aspect-[1/1.414] print:shadow-none print:border-t-4 print:border-accent-purple print:p-10 text-left select-none"
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
            <span>Ref: LOR-{student.certificateId}</span>
            <span>Date: {issueDate}</span>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-xs text-neutral-950 uppercase tracking-wider border-b border-neutral-100 pb-2 mb-6 text-center">
              LETTER OF RECOMMENDATION
            </h2>
            
            <p className="font-bold text-neutral-950 text-xs mb-4">TO WHOM IT MAY CONCERN,</p>
            
            <p>
              I am writing this letter of recommendation with absolute confidence for <b className="text-neutral-950">{student.name}</b>, who has recently completed a professional technical internship under my direct supervision in the domain of <b className="text-neutral-950 uppercase">{student.domain}</b> at ProDevOpz Technologies.
            </p>

            <p className="mt-3">
              Throughout their tenure, {student.name} demonstrated outstanding technical expertise, software delivery standards, and analytical problem-solving skills. The internship curriculum was structured to mirror production-level environments, requiring the candidate to deliver daily code updates, validate logic checkpoints, manage version control repositories, and deploy dynamic capstone web projects.
            </p>

            <p className="mt-3">
              Specifically, {student.name} excelled at modular coding practices, documentation standards, and adapting quickly to modern software tools. They maintained an exceptional work ethic, delivering clean components that achieved an overall mentor evaluation score of <b className="text-neutral-950">{ratingStr}</b>.
            </p>

            {student.feedback && (
              <div className="mt-3">
                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">Mentor Evaluation Feedback:</span>
                <span className="italic text-neutral-600 block bg-neutral-50/50 border-l-2 border-accent-purple p-3 rounded-r-xl">
                  &ldquo;{student.feedback}&rdquo;
                </span>
              </div>
            )}

            <p className="mt-3">
              Aside from their individual coding competence, they displayed excellent communication, adaptiveness, and response times to developer review suggestions. I have no doubt that they will perform exceptionally in any technical role or collaborative software engineering team they join.
            </p>
            
            <p className="mt-3">
              I highly recommend {student.name} for future professional placements or engineering roles and wish them the absolute best in their career ahead.
            </p>
            
            <p className="mt-4">
              Sincerely,
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
              <span 
                className="text-accent-purple text-2xl tracking-wide relative block"
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
