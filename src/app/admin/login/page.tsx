import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ShieldCheck, Lock, Mail, AlertCircle } from "lucide-react";

interface Props {
  searchParams: Promise<{ error?: string }>;
}

export default async function AdminLoginPage({ searchParams }: Props) {
  const { error } = await searchParams;

  // Server Action to process login
  async function adminLoginAction(formData: FormData) {
    "use server";
    const email = (formData.get("email") as string || "").trim();
    const password = (formData.get("password") as string || "").trim();

    const adminEmail = process.env.ADMIN_EMAIL || "admin@prodevopz.in";
    const adminPassword = process.env.ADMIN_PASSWORD || "AmmarAdmin@786";

    if (email === adminEmail && password === adminPassword) {
      const cookieStore = await cookies();
      const sessionSecret = process.env.ADMIN_SESSION_SECRET || "authenticated_ammar_cohort";
      cookieStore.set("admin_session", sessionSecret, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 12, // 12 hours session
        path: "/",
      });
      redirect("/admin");
    } else {
      redirect("/admin/login?error=Invalid email or password credentials. Make sure there are no spaces.");
    }
  }

  return (
    <div className="max-w-md mx-auto py-24 px-4 flex flex-col gap-6">
      <div className="glass-panel border-white/[0.08] p-8 shadow-2xl text-center flex flex-col gap-6 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent-orange/5 rounded-full filter blur-2xl pointer-events-none" />

        <div className="w-12 h-12 rounded-2xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center mx-auto text-accent-orange">
          <ShieldCheck className="w-6 h-6" />
        </div>

        <div>
          <h2 className="font-display font-bold text-lg text-white">Admin Console Login</h2>
          <p className="text-xs text-foreground/50 mt-1">
            Authorized administrator access only. Enter credentials to manage cohort evaluations.
          </p>
        </div>

        {error && (
          <div className="flex gap-2.5 p-3 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-xs text-left items-start">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form action={adminLoginAction} className="flex flex-col gap-4 text-left">
          <div>
            <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 w-4 h-4 text-foreground/30" />
              <input
                type="email"
                name="email"
                required
                placeholder="admin@prodevopz.in"
                className="w-full bg-white/5 text-xs text-white rounded-xl pl-10 pr-3 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
              Secret Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 w-4 h-4 text-foreground/30" />
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full bg-white/5 text-xs text-white rounded-xl pl-10 pr-3 py-2.5 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
              />
            </div>
            <span className="text-[9px] text-foreground/40 mt-1 block">
              *Default Login Pass: <b>AmmarAdmin@786</b>
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-accent-orange text-white text-xs font-bold shadow-lg hover:opacity-90 transition-opacity mt-2"
          >
            Authenticate Access
          </button>
        </form>
      </div>
    </div>
  );
}
