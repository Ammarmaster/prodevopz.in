import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowUpRight, Zap, Smartphone, Cpu, ArrowRight, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Software Portfolio | ProDevOpz",
  description:
    "Explore flagship software products and custom systems engineered by ProDevOpz, including EzBill billing software, S1Pro field service management, and AI architectures.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Products & Software Portfolio | ProDevOpz",
    description:
      "Explore flagship software products and custom systems engineered by ProDevOpz, including EzBill billing software, S1Pro field service management, and AI architectures.",
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
  const flagshipProducts = [
    {
      title: "EzBill (EZBill)",
      tagline: "Business Billing, Invoicing & Management Software",
      desc: "Enterprise-grade retail & wholesale software engineered by ProDevOpz. Features fast GST billing, real-time inventory management, sales reporting, and multi-counter POS synchronization.",
      icon: "/products/ezbill-app-icon.png",
      alt: "EzBill business billing software app icon",
      href: "/ezbill",
      category: "Billing & Enterprise ERP",
      tech: ["Next.js", "Express", "PostgreSQL", "Tailwind CSS", "Docker"],
      badgeColor: "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
      features: [
        "Fast GST Invoicing & Digital Receipts",
        "Real-Time Stock & Inventory Ledger",
        "Revenue Analytics & Sales Dashboards",
      ],
    },
    {
      title: "S1Pro",
      tagline: "Field Service Workforce Management Platform",
      desc: "Comprehensive workforce platform connecting customers, service professionals, and business administrators. Streamlines service discovery, instant booking, live tracking, and dispatch operations.",
      icon: "/products/s1pro-app-icon.png",
      alt: "S1Pro field service management app icon",
      href: "/s1pro",
      category: "Field Service & Workforce",
      tech: ["Next.js", "React Native", "WebSockets", "Cloud APIs", "GPS Tracking"],
      badgeColor: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
      features: [
        "Customer Booking & Issue Descriptions",
        "Live Technician Tracking & Dispatch",
        "Technician Profiles & Rating Records",
      ],
    },
  ];

  const caseStudies = [
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
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-16 text-left">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Products & Portfolio" }]} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
        <span className="text-xs font-bold text-accent-blue uppercase tracking-widest bg-accent-blue/10 px-3.5 py-1.5 rounded-full w-fit mx-auto border border-accent-blue/20">
          ProDevOpz Software Ecosystem
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
          Our Products &amp; Solutions
        </h1>
        <p className="text-sm text-foreground/50 leading-relaxed">
          Explore official software products and custom client architectures engineered by ProDevOpz. We combine aesthetic UI designs with scalable backend infrastructure.
        </p>
      </div>

      {/* Flagship Products Section */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-2 border-b border-white/[0.05] pb-4">
          <Layers className="w-5 h-5 text-accent-orange" />
          <h2 className="font-display font-extrabold text-2xl text-white">
            Official Software Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {flagshipProducts.map((prod, i) => (
            <div
              key={i}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between border-white/[0.08] relative overflow-hidden group hover:border-white/20 transition-all"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <figure className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black shrink-0">
                      <Image
                        src={prod.icon}
                        alt={prod.alt}
                        fill
                        sizes="(max-width: 640px) 64px, 80px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </figure>
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border w-fit ${prod.badgeColor}`}>
                        {prod.category}
                      </span>
                      <h3 className="font-display font-black text-2xl text-white mt-1.5">
                        {prod.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-accent-purple">
                  {prod.tagline}
                </p>

                <p className="text-xs text-foreground/70 leading-relaxed">
                  {prod.desc}
                </p>

                {/* Features list */}
                <ul className="flex flex-col gap-2 py-2 border-y border-white/[0.05]">
                  {prod.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-foreground/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-orange shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {prod.tech.map((t, ti) => (
                    <span
                      key={ti}
                      className="text-[9px] font-bold text-foreground/50 border border-white/5 bg-white/[0.02] px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/[0.05] pt-5 mt-6 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-foreground/50">
                  Developed by ProDevOpz
                </span>
                <Link
                  href={prod.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/[0.04] hover:bg-white/[0.08] px-4 py-2.5 rounded-xl border border-white/10 group-hover:border-accent-orange/40 transition-all"
                >
                  <span>View Product Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent-orange group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-2 border-b border-white/[0.05] pb-4">
          <Cpu className="w-5 h-5 text-accent-purple" />
          <h2 className="font-display font-extrabold text-2xl text-white">
            Custom Client Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((project, i) => (
            <div key={i} className="glass-card p-6 flex flex-col justify-between border-white/[0.06] relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-bold text-accent-purple bg-accent-purple/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{project.title}</h3>
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
                    View Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
