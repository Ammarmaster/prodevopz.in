import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowUpRight, Zap, Monitor, Smartphone, Cpu, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Software Projects & Portfolio | ProDevOpz",
  description:
    "Explore digital products and custom software solutions engineered by ProDevOpz, including EzBill billing software, AI platforms, and mobile applications.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Software Projects & Portfolio | ProDevOpz",
    description:
      "Explore digital products and custom software solutions engineered by ProDevOpz, including EzBill billing software, AI platforms, and mobile applications.",
    url: "https://prodevopz.jobsio.in/portfolio",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "website",
  },
};

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Portfolio() {
  const projects = [
    {
      title: "Stellar SaaS Video Platform",
      category: "AI & SaaS",
      desc: "Built an AI-driven automated video creation and scheduling SaaS platform for marketing agencies.",
      tech: ["Next.js 15", "FastAPI", "OpenAI", "Cloudflare R2", "Prisma"],
      roi: "65% time savings in video production",
      icon: <Cpu className="w-5 h-5 text-accent-orange" />,
      href: "/services/ai-development",
    },
    {
      title: "Fintech Mobile Wallet",
      category: "Mobile Apps",
      desc: "Cross-platform mobile billing and peer-to-peer transaction app running Swift, Kotlin, and React Native.",
      tech: ["React Native", "TypeScript", "Node.js", "Redis", "AWS Lambda"],
      roi: "Over 50,000 active transactions verified daily",
      icon: <Smartphone className="w-5 h-5 text-accent-purple" />,
      href: "/services/mobile-development",
    },
    {
      title: "EzBill — Enterprise Billing & ERP",
      category: "Billing & ERP",
      desc: "Custom retail and enterprise ERP billing software with real-time GST invoicing, inventory tracking, and revenue analytics.",
      tech: ["Next.js", "Express", "PostgreSQL", "Tailwind CSS v4", "Docker"],
      roi: "Unified billing & order workflows with real-time sales reporting",
      icon: <Monitor className="w-5 h-5 text-accent-blue" />,
      href: "/ezbill",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-16 text-left">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Portfolio" }]} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
        <span className="text-xs font-bold text-accent-blue uppercase tracking-widest bg-accent-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto">
          Case Studies
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
          Our Shipped Products
        </h1>
        <p className="text-sm text-foreground/50 leading-relaxed">
          Explore custom solutions engineered by ProDevOpz. We combine aesthetic UI designs with scalable backend infrastructure.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="glass-card p-6 flex flex-col justify-between border-white/[0.06] relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  {project.icon}
                </div>
                <span className="text-[10px] font-bold text-accent-orange bg-accent-orange/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-3">{project.title}</h3>
              <p className="text-xs text-foreground/50 leading-relaxed mb-4">{project.desc}</p>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, ti) => (
                  <span
                    key={ti}
                    className="text-[9px] font-bold text-foreground/40 border border-white/5 bg-white/[0.01] px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/[0.05] pt-4 flex flex-col gap-4">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-white bg-white/[0.02] border border-white/5 px-2.5 py-1.5 rounded-lg w-fit">
                <Zap className="w-3.5 h-3.5 text-accent-orange" />
                <span>ROI: {project.roi}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-foreground/60 mt-2">
                <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
                  <GithubIcon className="w-4 h-4" /> Architecture
                </span>
                <Link
                  href={project.href}
                  className="flex items-center gap-0.5 text-accent-orange hover:text-white transition-all font-bold"
                >
                  View Product <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
