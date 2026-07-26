import { db } from "@/lib/db";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  Monitor,
  FolderGit,
  ArrowUpRight,
  TrendingUp,
  FileText,
  Calendar,
  MessageSquare,
  Zap,
  CheckCircle,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Plus,
} from "lucide-react";

interface Props {
  searchParams: Promise<{ clientId?: string }>;
}

export default async function ClientPortal({ searchParams }: Props) {
  const { clientId } = await searchParams;

  // Fetch the first client as default fallback to make it easy to demonstrate
  let client = null;
  if (clientId) {
    client = await db.client.findUnique({
      where: { id: clientId },
      include: {
        projects: true,
        invoices: true,
      },
    });
  }

  // Server Action: Handle Mock login redirect
  async function handleLogin(formData: FormData) {
    "use server";
    const email = formData.get("email") as string;
    
    // Find client by email
    const record = await db.client.findUnique({
      where: { email },
    });

    if (record) {
      redirect(`/client?clientId=${record.id}`);
    } else {
      // Create a mock client if not exists to ensure it always works!
      const newRecord = await db.client.create({
        data: {
          name: "John Doe",
          email: email || "client@prodevopz.in",
          companyName: "Stellar AI Inc.",
          projects: {
            create: [
              {
                title: "Stellar SaaS Platform",
                description: "Build an AI-powered automated video creation and scheduling SaaS platform for marketing agencies.",
                status: "DEVELOPMENT",
                progress: 65,
                nextMilestone: "AI Video Editor Pipeline Integration",
                deadline: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000),
              },
            ],
          },
          invoices: {
            create: [
              {
                invoiceNumber: `INV-${Math.floor(1000 + Math.random() * 9000)}`,
                amount: 150000,
                dueDate: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
                status: "UNPAID",
              },
            ],
          },
        },
      });
      redirect(`/client?clientId=${newRecord.id}`);
    }
  }

  // Server Action: Simulate Ticket Submission
  async function createTicketAction(formData: FormData) {
    "use server";
    // Simulated ticket creation
    revalidatePath("/client");
  }

  if (!client) {
    return (
      <div className="max-w-md mx-auto py-24 px-4">
        <div className="glass-panel border-white/[0.08] p-8 shadow-2xl text-center flex flex-col gap-6">
          <div className="w-12 h-12 rounded-2xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center mx-auto text-accent-orange">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-display font-bold text-lg text-white">Client Hub Access</h2>
            <p className="text-xs text-foreground/50 mt-1">
              Enter your email to verify contracts and inspect development milestones.
            </p>
          </div>

          <form action={handleLogin} className="flex flex-col gap-4 text-left">
            <div>
              <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                Client Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                defaultValue="client@prodevopz.in"
                placeholder="client@prodevopz.in"
                className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
              />
              <span className="text-[9px] text-foreground/40 mt-1 block leading-relaxed">
                *Use <b>client@prodevopz.in</b> to test our pre-seeded client demo data.
              </span>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-accent-orange text-white text-xs font-bold shadow-lg hover:opacity-90 transition-opacity"
            >
              Verify & Enter Hub
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-10">
      {/* Header Info */}
      <div className="glass-panel border-white/[0.06] p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="text-left">
          <div className="flex items-center gap-2">
            <h1 className="font-display font-extrabold text-xl text-white">{client.companyName}</h1>
            <span className="text-[9px] font-bold text-accent-orange bg-accent-orange/10 px-2 py-0.5 rounded uppercase tracking-wider">
              Client Portal
            </span>
          </div>
          <p className="text-xs text-foreground/50 mt-0.5">Primary Contact: {client.name} ({client.email})</p>
        </div>

        <Link
          href="/client"
          className="text-xs font-bold text-foreground/50 hover:text-white border border-white/10 hover:bg-white/5 px-4 py-2 rounded-xl"
        >
          Sign Out
        </Link>
      </div>

      {/* Grid: Projects and Invoices */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Projects Progress & Milestones (2 columns) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h3 className="font-display font-bold text-base text-white border-b border-white/[0.05] pb-2">
            Active Project Sprints
          </h3>

          <div className="flex flex-col gap-6">
            {client.projects.map((proj) => (
              <div key={proj.id} className="glass-panel border-white/[0.06] p-6 flex flex-col gap-6 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display font-bold text-base text-white">{proj.title}</h4>
                    <p className="text-xs text-foreground/50 mt-0.5 leading-relaxed">{proj.description}</p>
                  </div>
                  <span className="text-[10px] font-bold text-accent-purple bg-accent-purple/10 px-2.5 py-1 rounded-full uppercase tracking-wider w-fit">
                    {proj.status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="flex flex-col gap-2 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground/50">Development Sprint Progress</span>
                    <span className="font-bold text-accent-orange">{proj.progress}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden mt-1">
                    <div
                      className="bg-gradient-to-r from-accent-orange to-accent-purple h-full rounded-full transition-all duration-500"
                      style={{ width: `${proj.progress}%` }}
                    />
                  </div>
                </div>

                {/* Milestones Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-wider">
                      Next Major Milestone
                    </span>
                    <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
                      <Zap className="w-4 h-4 text-accent-orange animate-pulse" /> {proj.nextMilestone || "Sprint Review"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-wider">
                      Target Deployment Date
                    </span>
                    <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-4 h-4 text-accent-purple" />{" "}
                      {proj.deadline ? new Date(proj.deadline).toLocaleDateString("en-IN") : "TBD"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Invoices and Support Tickets (1 column) */}
        <div className="flex flex-col gap-8">
          {/* Invoices */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-base text-white border-b border-white/[0.05] pb-2">
              Billing & Invoices
            </h3>
            <div className="glass-panel border-white/[0.06] p-4 flex flex-col gap-3">
              {client.invoices.map((inv) => (
                <div
                  key={inv.id}
                  className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.01] text-xs text-left"
                >
                  <div>
                    <h4 className="font-bold text-white">{inv.invoiceNumber}</h4>
                    <span className="text-[10px] text-foreground/40 block mt-0.5">
                      Due: {new Date(inv.dueDate).toLocaleDateString("en-IN")}
                    </span>
                    <span className="text-xs font-extrabold text-accent-orange block mt-1">
                      ₹{inv.amount.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      inv.status === "PAID"
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-amber-400/10 text-amber-400"
                    }`}
                  >
                    {inv.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Support Ticket Scheduler */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-base text-white border-b border-white/[0.05] pb-2">
              Support Desk
            </h3>
            <div className="glass-panel border-white/[0.06] p-5 flex flex-col gap-4 text-left">
              <div className="flex gap-2">
                <MessageSquare className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Need an Engineering Call?</h4>
                  <p className="text-[10px] text-foreground/50 leading-relaxed mt-0.5">
                    Schedule a brief meeting with your coordinator or raise a support ticket.
                  </p>
                </div>
              </div>

              <form action={createTicketAction} className="flex flex-col gap-3 mt-1">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Ticket Subject (e.g. API Integration issue)"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-accent-orange text-white text-xs font-bold shadow hover:opacity-95 flex items-center justify-center gap-1.5"
                >
                  Create Support Ticket <Plus className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
