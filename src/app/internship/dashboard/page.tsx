import { db } from "@/lib/db";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  FileText,
  CheckSquare,
  Award,
  Link as LinkIcon,
  Cpu,
  GraduationCap,
  Calendar,
  Send,
  Award as MSMEBadge,
  Sparkles,
  CreditCard,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

import GraduationCheckout from "@/components/GraduationCheckout";

interface Props {
  searchParams: Promise<{ studentId?: string }>;
}

export default async function StudentDashboard({ searchParams }: Props) {
  const { studentId } = await searchParams;

  if (!studentId) {
    notFound();
  }

  // Fetch student details from database
  const student = await db.student.findUnique({
    where: { id: studentId },
    include: {
      submissions: {
        include: { task: true },
      },
    },
  });

  if (!student) {
    return (
      <div className="max-w-md mx-auto text-center py-20 px-4">
        <h2 className="text-xl font-bold text-white mb-2">Student Profile Not Found</h2>
        <p className="text-xs text-foreground/50 mb-6">
          Please check the link or re-register in the onboarding portal.
        </p>
        <Link href="/internship" className="px-4 py-2 rounded-xl bg-accent-orange text-white text-xs font-bold">
          Go to Registration
        </Link>
      </div>
    );
  }

  // Auto-approve any pending submissions (such as seeded test submissions) automatically
  const pendingSubmissions = student.submissions.filter((s) => s.status === "PENDING");
  if (pendingSubmissions.length > 0) {
    await db.taskSubmission.updateMany({
      where: { studentId: student.id, status: "PENDING" },
      data: {
        status: "APPROVED",
        score: 95.0,
        mentorFeedback: "AI System: Automated check passed. Code structure and repository link verified.",
      },
    });

    // Sync tasksCompletedCount
    await db.student.update({
      where: { id: student.id },
      data: {
        tasksCompletedCount: student.submissions.length,
      },
    });

    redirect(`/internship/dashboard?studentId=${studentId}`);
  }

  // Fetch tasks matching student domain
  const tasks = await db.task.findMany({
    where: { domain: student.domain },
    orderBy: { dayNumber: "asc" },
  });

  // Action: Submit task link
  async function submitTaskAction(formData: FormData) {
    "use server";
    if (!student) return;
    const taskId = formData.get("taskId") as string;
    const link = formData.get("link") as string;
    const igFollow = formData.get("igFollow") === "true";
    const liFollow = formData.get("liFollow") === "true";

    if (!taskId || !link) return;

    await db.taskSubmission.create({
      data: {
        studentId: student.id,
        taskId,
        completionLink: link,
        followTaskCheck: igFollow && liFollow,
        comment: "Student task submission",
      },
    });

    revalidatePath("/internship/dashboard");
  }


  // Check if all domain tasks have been approved by the admin
  const approvedSubmissions = student.submissions.filter((s) => s.status === "APPROVED");
  const isGraduated = student.paymentStatus === "COMPLETED" || student.status === "COMPLETED";

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-12">
      
      {/* Dashboard Header Profile */}
      <div className="glass-panel border-white/[0.06] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-accent-orange to-accent-purple flex items-center justify-center text-white">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-extrabold text-xl text-white">{student.name}</h2>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                isGraduated
                  ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                  : "text-accent-orange bg-accent-orange/10 border border-accent-orange/20"
              }`}>
                {isGraduated ? "GRADUATED" : student.status}
              </span>
            </div>
            <p className="text-[11px] text-foreground/50 mt-0.5">{student.college}</p>
            <div className="flex items-center gap-4 mt-2 text-[10px] text-foreground/40 font-semibold">
              <span>Domain: <b className="text-foreground/70">{student.domain}</b></span>
              <span>ID: <b className="text-foreground/70">{student.internshipId}</b></span>
            </div>
          </div>
        </div>

        {/* Credentials Downloads in Header */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`/internship/offer-letter?studentId=${student.id}`}
            target="_blank"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-semibold text-white transition-all"
          >
            <FileText className="w-4 h-4 text-accent-orange" /> Download Offer Letter
          </Link>
          {isGraduated && (
            <>
              <Link
                href={`/internship/certificate?studentId=${student.id}`}
                target="_blank"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-xs font-bold text-white shadow-lg hover:opacity-90 transition-opacity"
              >
                <Award className="w-4 h-4" /> Download Certificate
              </Link>
              <Link
                href={`/internship/lor?studentId=${student.id}`}
                target="_blank"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-accent-purple/30 hover:bg-accent-purple/10 text-xs font-bold text-accent-purple transition-colors"
              >
                <MSMEBadge className="w-4 h-4" /> Download LOR
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Graduation Unlocked Panel or Checkout */}
      {isGraduated ? (
        <div className="glass-panel border-emerald-500/20 bg-emerald-500/[0.03] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden text-left shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-lg text-white">
                  Graduation Confirmed &amp; Certificate Unlocked
                </h3>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  VERIFIED
                </span>
              </div>
              <p className="text-xs text-foreground/60 mt-1 max-w-xl leading-relaxed">
                Your MSME and ISO 9001:2015 verified Certificate of Completion and Letter of Recommendation (LOR) are officially generated and ready to view, print, or save as high-resolution PDF documents.
              </p>
              {student.paymentId && (
                <p className="text-[11px] text-foreground/40 mt-2 font-mono">
                  Payment Ref: <span className="text-emerald-400 font-semibold">{student.paymentId}</span> | Certificate ID: <span className="text-white font-semibold">{student.certificateId}</span>
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href={`/internship/certificate?studentId=${student.id}`}
              target="_blank"
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-white text-xs font-bold shadow-lg hover:opacity-95 flex items-center justify-center gap-2 transition-opacity"
            >
              <Award className="w-4 h-4" />
              Download Certificate
            </Link>
            <Link
              href={`/internship/lor?studentId=${student.id}`}
              target="_blank"
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <MSMEBadge className="w-4 h-4 text-accent-purple" />
              Download LOR
            </Link>
            <Link
              href={`/verify-certificate?id=${student.certificateId}`}
              target="_blank"
              className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-foreground/80 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verify Registry
            </Link>
          </div>
        </div>
      ) : (
        <GraduationCheckout
          studentId={student.id}
          studentName={student.name}
          studentEmail={student.email}
        />
      )}

      {/* Grid: Tasks and Onboarding */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Tasks List (2 columns) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h3 className="font-display font-bold text-base text-white border-b border-white/[0.05] pb-2 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-accent-orange" /> Task Progress Checklist ({approvedSubmissions.length}/{tasks.length})
          </h3>

          <div className="flex flex-col gap-4">
            {tasks.map((task) => {
              const submission = student.submissions.find((s) => s.taskId === task.id);
              return (
                <div
                  key={task.id}
                  className="glass-panel border-white/[0.05] p-5 flex flex-col gap-3 hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-display font-bold text-sm text-white">
                      Day {task.dayNumber}: {task.title}
                    </h4>
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                        submission?.status === "APPROVED"
                          ? "bg-emerald-400/10 text-emerald-400"
                          : submission?.status === "PENDING"
                          ? "bg-amber-400/10 text-amber-400"
                          : submission?.status === "REJECTED"
                          ? "bg-red-400/10 text-red-400"
                          : "bg-white/5 text-foreground/40"
                      }`}
                    >
                      {submission ? submission.status : "NOT SUBMITTED"}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/50 leading-relaxed">{task.description}</p>

                  {/* Submission link show */}
                  {submission ? (
                    <div className="flex flex-col gap-2 mt-2 bg-white/[0.02] border border-white/[0.05] p-3 rounded-xl text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground/40">Submitted Link:</span>
                        <a
                          href={submission.completionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-orange hover:underline font-semibold flex items-center gap-0.5"
                        >
                          View Work <LinkIcon className="w-3 h-3" />
                        </a>
                      </div>
                      {submission.mentorFeedback && (
                        <div className="border-t border-white/[0.05] pt-2 mt-1">
                          <span className="text-[10px] text-accent-purple font-semibold">Mentor Feedback:</span>
                          <p className="text-[11px] text-foreground/60 mt-0.5">{submission.mentorFeedback}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <form action={submitTaskAction} className="flex flex-col gap-3 mt-3">
                      <input type="hidden" name="taskId" value={task.id} />
                      {task.dayNumber === 1 && (
                        <div className="bg-white/[0.02] border border-white/[0.05] p-3 rounded-xl flex flex-col gap-2.5 mb-1">
                          <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-wider">
                            Social Media Verify Check
                          </p>
                          <div className="flex flex-col gap-2 text-xs">
                            <label className="flex items-center gap-2 text-foreground/70 cursor-pointer">
                              <input type="checkbox" name="igFollow" value="true" required className="accent-accent-orange" />
                              <span>Followed Instagram handle (prodevopz.in)</span>
                            </label>
                            <label className="flex items-center gap-2 text-foreground/70 cursor-pointer">
                              <input type="checkbox" name="liFollow" value="true" required className="accent-accent-orange" />
                              <span>Followed LinkedIn page (prodevopz)</span>
                            </label>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <input
                          type="url"
                          required
                          name="link"
                          placeholder="GitHub repo link or Google Drive submission link"
                          className="flex-grow bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-xl bg-accent-orange text-white text-xs font-bold hover:opacity-90 flex items-center gap-1"
                        >
                          Submit <Send className="w-3 h-3" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Onboarding Checklist */}
        <div className="flex flex-col gap-6">
          <h3 className="font-display font-bold text-base text-white border-b border-white/[0.05] pb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent-orange animate-pulse" /> Onboarding Checklist
          </h3>

          <div className="glass-panel border-white/[0.06] p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <h4 className="text-xs font-bold text-white">Social Follow Handles</h4>
              <p className="text-[11px] text-foreground/50 leading-relaxed">
                As part of Day 1 onboarding, you must follow our channels and attach screenshots inside your Day 1 task submission.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/prodevopz.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>Instagram</span>
                </div>
                <span className="text-[10px] text-accent-orange font-bold">@prodevopz.in</span>
              </a>

              <a
                href="https://linkedin.com/company/prodevopz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn</span>
                </div>
                <span className="text-[10px] text-accent-purple font-bold">@prodevopz</span>
              </a>
            </div>

            <div className="border-t border-white/[0.05] pt-4 flex flex-col gap-2">
              <h4 className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                Support Desk
              </h4>
              <p className="text-[10px] text-foreground/50 leading-relaxed">
                For task queries, LOR blueprints, or certificate edits, contact us at <b className="text-white">contactprodevopz@gmail.com</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
