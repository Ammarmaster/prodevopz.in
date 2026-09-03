import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Cpu,
  Code2,
  Server,
  Sparkles,
  ArrowRight,
  Award,
  Globe,
  Mail,
  Receipt,
  Terminal,
  ExternalLink,
  UserCheck,
  Building,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Md Jalaluddin Master — Founder of ProDevOpz",
  description:
    "Md Jalaluddin Master (also known as Jalaluddin Master and Mohammad Jalaluddin Master) is the Founder and Lead Software Engineer behind ProDevOpz and EzBill billing software.",
  alternates: {
    canonical: "/founder/jalaluddin-master",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Md Jalaluddin Master — Founder of ProDevOpz",
    description:
      "Md Jalaluddin Master (also known as Jalaluddin Master and Mohammad Jalaluddin Master) is the Founder and Lead Software Engineer behind ProDevOpz and EzBill billing software.",
    url: "https://prodevopz.jobsio.in/founder/jalaluddin-master",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://prodevopz.jobsio.in/ammar-master-jalaluddin-master-founder-prodevopz.jpg",
        width: 1000,
        height: 1000,
        alt: "Md Jalaluddin Master - Founder of ProDevOpz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Jalaluddin Master — Founder of ProDevOpz",
    description:
      "Md Jalaluddin Master is the Founder and Lead Software Engineer behind ProDevOpz and EzBill.",
    images: ["https://prodevopz.jobsio.in/ammar-master-jalaluddin-master-founder-prodevopz.jpg"],
  },
};

export default function JalaluddinMasterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://prodevopz.jobsio.in/founder/jalaluddin-master",
        "url": "https://prodevopz.jobsio.in/founder/jalaluddin-master",
        "name": "Md Jalaluddin Master — Founder of ProDevOpz",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://prodevopz.jobsio.in/#website",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "mainEntity": {
          "@id": "https://prodevopz.jobsio.in/founder/jalaluddin-master#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://prodevopz.jobsio.in/founder/jalaluddin-master#person",
        "name": "Md Jalaluddin Master",
        "alternateName": [
          "Jalaluddin Master",
          "Mohammad Jalaluddin Master",
          "Md. Jalaluddin Master"
        ],
        "jobTitle": "Founder & Lead Software Engineer",
        "description": "Md Jalaluddin Master (also known as Jalaluddin Master and Mohammad Jalaluddin Master) is the Founder and Lead Software Engineer behind ProDevOpz, directing full-stack software architecture, applied AI systems, and software products like EzBill.",
        "url": "https://prodevopz.jobsio.in/founder/jalaluddin-master",
        "image": "https://prodevopz.jobsio.in/ammar-master-jalaluddin-master-founder-prodevopz.jpg",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://prodevopz.jobsio.in/#organization",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "sameAs": [
          "https://linkedin.com/company/prodevopz",
          "https://instagram.com/prodevopz.in"
        ],
        "knowsAbout": [
          "Software Engineering",
          "Full-Stack Web Architecture",
          "AI Systems & LLM Integrations",
          "Cloud Infrastructure & DevOps",
          "Next.js & React",
          "TypeScript & Node.js",
          "EzBill Billing Software Development",
          "Enterprise Systems Design"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://prodevopz.jobsio.in/#organization",
        "name": "ProDevOpz",
        "legalName": "ProDevOpz Technologies",
        "url": "https://prodevopz.jobsio.in/",
        "logo": "https://prodevopz.jobsio.in/logo.jpg",
        "founder": {
          "@id": "https://prodevopz.jobsio.in/founder/jalaluddin-master#person"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://prodevopz.jobsio.in/ezbill#software",
        "name": "EzBill",
        "alternateName": ["EZBill", "EZ Bill"],
        "url": "https://prodevopz.jobsio.in/ezbill",
        "author": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        }
      }
    ]
  };

  const skills = [
    {
      icon: <Code2 className="w-5 h-5 text-accent-orange" />,
      title: "Full-Stack Web Architecture",
      desc: "Engineering scalable web platforms with Next.js, React, TypeScript, and high-throughput PostgreSQL/Prisma backends.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-accent-purple" />,
      title: "Applied AI & LLM Workflows",
      desc: "Designing custom Retrieval-Augmented Generation (RAG) pipelines, conversational agents, and workflow automations.",
    },
    {
      icon: <Server className="w-5 h-5 text-accent-blue" />,
      title: "Cloud Infrastructure & DevOps",
      desc: "Deploying production-grade containerized systems with Docker, Kubernetes, and CI/CD pipelines on AWS, GCP, and Azure.",
    },
    {
      icon: <Receipt className="w-5 h-5 text-emerald-400" />,
      title: "EzBill & Enterprise Solutions",
      desc: "Architecting EzBill billing software, enterprise ERP tools, and multi-terminal point-of-sale platforms.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-12 text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: "Founder", href: "/about" },
          { label: "Md Jalaluddin Master" },
        ]}
      />

      {/* Hero / Header with Official Founder Image */}
      <header className="glass-panel border-white/[0.08] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Founder Image Column */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <figure className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]">
              <Image
                src="/ammar-master-jalaluddin-master-founder-prodevopz.jpg"
                alt="Md Jalaluddin Master - Founder of ProDevOpz"
                fill
                priority
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </figure>
            <figcaption className="text-center text-[11px] font-medium text-foreground/50 mt-3">
              Md Jalaluddin Master (Jalaluddin Master) — Founder of ProDevOpz
            </figcaption>
          </div>

          {/* Founder Bio Column */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-bold text-accent-orange uppercase tracking-wider bg-accent-orange/10 px-3.5 py-1 rounded-full border border-accent-orange/20">
                Founder Profile
              </span>
              <span className="text-[11px] font-medium text-foreground/50 bg-white/[0.02] px-3 py-1 rounded-full border border-white/5">
                ProDevOpz Leadership
              </span>
            </div>

            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Md Jalaluddin Master
              </h1>
              <p className="text-sm sm:text-base font-semibold text-accent-purple mt-1.5">
                Also known as Jalaluddin Master &amp; Mohammad Jalaluddin Master
              </p>
            </div>

            <p className="text-sm font-medium text-foreground/80">
              Founder &amp; Lead Software Engineer at{" "}
              <Link
                href="/"
                className="text-white underline decoration-accent-orange/50 hover:decoration-accent-orange transition-colors"
              >
                ProDevOpz
              </Link>
            </p>

            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-2xl pt-2 border-t border-white/[0.05]">
              Md Jalaluddin Master (also known professionally as Jalaluddin Master and Mohammad Jalaluddin Master) is the Founder and Lead Software Engineer behind ProDevOpz. As principal technologist, Md Jalaluddin Master directs technical architecture, system design, and software product engineering including the EzBill billing platform.
            </p>

            {/* Social / Direct Connect */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:contactprodevopz@gmail.com?subject=Inquiry for Md Jalaluddin Master (Founder, ProDevOpz)"
                className="flex items-center gap-2 text-xs font-semibold text-white bg-accent-orange px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact Founder
              </a>
              <Link
                href="/ezbill"
                className="flex items-center gap-2 text-xs font-semibold text-white bg-accent-purple/80 hover:bg-accent-purple px-4 py-2 rounded-xl transition-colors"
              >
                <Receipt className="w-3.5 h-3.5" />
                Explore EzBill Software
              </Link>
              <a
                href="https://linkedin.com/company/prodevopz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-foreground/75 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2 rounded-xl border border-white/5 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-accent-blue" />
                LinkedIn (ProDevOpz)
                <ExternalLink className="w-3 h-3 text-foreground/40" />
              </a>
              <Link
                href="/leadership"
                className="text-xs font-semibold text-foreground/80 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2 rounded-xl border border-white/5 transition-colors"
              >
                Leadership Directory
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Biography & Vision */}
      <section className="glass-panel border-white/[0.06] p-8 md:p-10 flex flex-col gap-6">
        <div className="flex items-center gap-2.5 border-b border-white/[0.05] pb-4">
          <Award className="w-5 h-5 text-accent-orange" />
          <h2 className="font-display font-bold text-xl text-white">
            About Md Jalaluddin Master
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-xs sm:text-sm text-foreground/70 leading-relaxed">
          <p>
            Md Jalaluddin Master (also known as Jalaluddin Master and Mohammad Jalaluddin Master) founded ProDevOpz (ProDevOpz Technologies) with the vision of providing high-performance software engineering, AI-driven architectures, and scalable cloud systems to startups and expanding enterprises.
          </p>
          <p>
            With extensive hands-on expertise in full-stack web development, DevOps automation, and applied artificial intelligence, Md Jalaluddin Master oversees technical standards, database architectures, and production reliability across all software deliverables.
          </p>
          <p>
            Under his leadership, ProDevOpz has launched bespoke web applications, mobile platforms, and software products including <Link href="/ezbill" className="text-accent-orange hover:underline font-semibold">EzBill (EZBill)</Link> and <Link href="/s1pro" className="text-accent-blue hover:underline font-semibold">S1Pro</Link>, adhering to registered MSME and ISO-compliant engineering benchmarks.
          </p>
        </div>
      </section>

      {/* Technical Focus Areas */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <Cpu className="w-5 h-5 text-accent-purple" />
          <h2 className="font-display font-bold text-xl text-white">
            Engineering &amp; Technology Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="glass-card p-6 border-white/[0.06] flex flex-col gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                {skill.icon}
              </div>
              <h3 className="font-display font-bold text-sm text-white">
                {skill.title}
              </h3>
              <p className="text-xs text-foreground/60 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Relationship with ProDevOpz & Products */}
      <section className="glass-panel border-white/[0.06] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider">
            Featured Products &amp; Services
          </span>
          <h2 className="font-display font-bold text-lg text-white">
            Explore EzBill, S1Pro &amp; ProDevOpz Solutions
          </h2>
          <p className="text-xs text-foreground/60 leading-relaxed">
            Discover EzBill billing software, S1Pro workforce management, and custom AI architectures engineered by Md Jalaluddin Master and the ProDevOpz engineering team.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/ezbill"
            className="text-xs font-semibold text-foreground/80 hover:text-white px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
          >
            Explore EzBill
          </Link>
          <Link
            href="/s1pro"
            className="text-xs font-semibold text-foreground/80 hover:text-white px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
          >
            Explore S1Pro
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-accent-orange to-accent-purple px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Visit Homepage
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
