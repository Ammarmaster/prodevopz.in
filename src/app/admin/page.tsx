import { db } from "@/lib/db";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  approveSubmission,
  rejectSubmission,
} from "@/app/actions/internship";
import {
  Users,
  Award,
  CheckCircle,
  Clock,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  ShieldCheck,
  TrendingUp,
  Cpu,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session || session.value !== "authenticated_ammar_cohort") {
    redirect("/admin/login");
  }

  // Query all database stats
  const totalStudents = await db.student.count();
  const activeStudents = await db.student.count({ where: { status: "ACTIVE" } });
  const completedStudents = await db.student.count({ where: { status: "COMPLETED" } });
  
  // Total Revenue: 200 per student (since all completed students paid)
  const revenue = totalStudents * 200;

  // Fetch pending submissions
  const pendingSubmissions = await db.taskSubmission.findMany({
    where: { status: "PENDING" },
    include: {
      student: true,
      task: true,
    },
    orderBy: { submittedAt: "desc" },
  });

  // Fetch all students
  const students = await db.student.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Server actions wrapper for Form submits
  async function approveForm(formData: FormData) {
    "use server";
    const subId = formData.get("subId") as string;
    const feedback = formData.get("feedback") as string;
    if (subId) {
      await approveSubmission(subId, feedback);
      revalidatePath("/admin");
    }
  }

  async function rejectForm(formData: FormData) {
    "use server";
    const subId = formData.get("subId") as string;
    const feedback = formData.get("feedback") as string;
    if (subId) {
      await rejectSubmission(subId, feedback || "Please revise task specifications.");
      revalidatePath("/admin");
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/[0.05] pb-6">
        <div className="text-left">
          <h1 className="font-display font-black text-3xl text-white flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-accent-orange" /> ProDevOpz Admin Panel
          </h1>
          <p className="text-xs text-foreground/50 mt-0.5">
            Internal Operations, Internship Approvals, and Platform Analytics.
          </p>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Registrations", val: totalStudents, icon: <Users className="w-5 h-5 text-accent-orange" /> },
          { label: "Active Cohort", val: activeStudents, icon: <Clock className="w-5 h-5 text-accent-purple" /> },
          { label: "Graduates Issued", val: completedStudents, icon: <Award className="w-5 h-5 text-accent-blue" /> },
          { label: "Revenue (INR)", val: `₹${revenue.toLocaleString("en-IN")}`, icon: <TrendingUp className="w-5 h-5 text-emerald-400" /> },
        ].map((item, i) => (
          <div key={i} className="glass-panel border-white/[0.05] p-5 flex items-center justify-between">
            <div className="text-left flex flex-col gap-1">
              <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">{item.label}</span>
              <span className="text-2xl font-display font-bold text-white">{item.val}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Grid: Pending Actions and Student Registry */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Pending Submissions (2 columns) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h3 className="font-display font-bold text-base text-white border-b border-white/[0.05] pb-2">
            Pending Code Reviews ({pendingSubmissions.length})
          </h3>

          {pendingSubmissions.length === 0 ? (
            <div className="glass-panel border-white/[0.05] p-8 text-center text-xs text-foreground/40">
              No pending task submissions. Good job! All code reviews are complete.
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {pendingSubmissions.map((sub) => (
                <div key={sub.id} className="glass-panel border-white/[0.05] p-5 flex flex-col gap-4 text-left">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">
                        {sub.student.name} ({sub.student.domain})
                      </h4>
                      <p className="text-[10px] text-foreground/40 mt-0.5">
                        Task: Day {sub.task.dayNumber} - {sub.task.title}
                      </p>
                    </div>
                    <a
                      href={sub.completionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[10px] font-bold text-accent-orange hover:underline bg-accent-orange/5 border border-accent-orange/20 px-2.5 py-1 rounded-lg"
                    >
                      Code Link <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Feedback form */}
                  <form className="flex flex-col sm:flex-row gap-3 items-end">
                    <input type="hidden" name="subId" value={sub.id} />
                    <input
                      type="text"
                      name="feedback"
                      placeholder="Add review feedback comments..."
                      className="flex-grow bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                    />
                    <div className="flex gap-2 shrink-0">
                      <button
                        formAction={rejectForm}
                        className="p-2 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-400 transition-colors"
                        title="Reject Work"
                      >
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                      <button
                        formAction={approveForm}
                        className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-bold transition-colors flex items-center gap-1"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" /> Approve
                      </button>
                    </div>
                  </form>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Students Registry Table (1 column) */}
        <div className="flex flex-col gap-6">
          <h3 className="font-display font-bold text-base text-white border-b border-white/[0.05] pb-2">
            Cohort Members ({students.length})
          </h3>

          <div className="glass-panel border-white/[0.06] p-4 flex flex-col gap-3 max-h-[500px] overflow-y-auto scrollbar-thin">
            {students.map((st) => (
              <div
                key={st.id}
                className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.01] text-xs hover:border-white/10 transition-all text-left"
              >
                <div>
                  <h4 className="font-bold text-white leading-tight">{st.name}</h4>
                  <span className="text-[9px] text-foreground/40 block mt-0.5">{st.domain}</span>
                  <div className="flex items-center gap-2 mt-1.5 text-[8px] text-foreground/50 font-bold uppercase tracking-wider">
                    <span>Tasks: {st.tasksCompletedCount}</span>
                    <span>•</span>
                    <span className={st.status === "COMPLETED" ? "text-emerald-400" : "text-accent-orange"}>
                      {st.status}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/internship/dashboard?studentId=${st.id}`}
                  className="text-[10px] font-bold text-foreground/40 hover:text-white border border-white/10 hover:border-white/20 px-2.5 py-1.5 rounded-lg transition-colors"
                >
                  View Board
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
