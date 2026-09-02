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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ammar Master (Jalaluddin Master) — Founder of ProDevOpz",
  description:
    "Ammar Master, also known as Jalaluddin Master, is the Founder and Software Engineer behind ProDevOpz and EzBill billing software.",
  alternates: {
    canonical: "/founder/ammar-master",
  },
  openGraph: {
    title: "Ammar Master (Jalaluddin Master) — Founder of ProDevOpz",
    description:
      "Ammar Master, also known as Jalaluddin Master, is the Founder and Software Engineer behind ProDevOpz and EzBill billing software.",
    url: "https://prodevopz.jobsio.in/founder/ammar-master",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://prodevopz.jobsio.in/ammar-master-jalaluddin-master-founder-prodevopz.jpg",
        width: 1000,
        height: 1000,
        alt: "Ammar Master (Jalaluddin Master), Founder of ProDevOpz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammar Master (Jalaluddin Master) — Founder of ProDevOpz",
    description:
      "Ammar Master, also known as Jalaluddin Master, is the Founder and Software Engineer behind ProDevOpz and EzBill.",
    images: ["https://prodevopz.jobsio.in/ammar-master-jalaluddin-master-founder-prodevopz.jpg"],
  },
};

export default function FounderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://prodevopz.jobsio.in/founder/ammar-master",
        "url": "https://prodevopz.jobsio.in/founder/ammar-master",
        "name": "Ammar Master (Jalaluddin Master) — Founder of ProDevOpz",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://prodevopz.jobsio.in/#website",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "mainEntity": {
          "@id": "https://prodevopz.jobsio.in/founder/ammar-master#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://prodevopz.jobsio.in/founder/ammar-master#person",
        "name": "Ammar Master",
        "alternateName": ["Jalaluddin Master", "Md Jalaluddin Master"],
        "jobTitle": "Founder & Software Engineer",
        "description": "Ammar Master (also known as Jalaluddin Master) is the Founder and Software Engineer behind ProDevOpz, leading software engineering, cloud systems, and software products like EzBill.",
        "url": "https://prodevopz.jobsio.in/founder/ammar-master",
        "image": "https://prodevopz.jobsio.in/ammar-master-jalaluddin-master-founder-prodevopz.jpg",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://prodevopz.jobsio.in/#organization",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "sameAs": [
          "https://github.com/Ammarmaster",
          "https://linkedin.com/company/prodevopz",
          "https://instagram.com/prodevopz.in"
        ],
        "knowsAbout": [
          "Software Engineering",
          "Full-Stack Web Architecture",
          "AI Systems & LLM Integrations",
          "Cloud Infrastructure & DevOps",
          "Next.js & React",
          "TypeScript",
          "EzBill Billing Software Development"
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
          "@id": "https://prodevopz.jobsio.in/founder/ammar-master#person"
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
      desc: "Architecting high-performance web applications using Next.js, React, TypeScript, and scalable PostgreSQL/Prisma backends.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-accent-purple" />,
      title: "AI Systems & LLM Integrations",
      desc: "Engineering Retrieval-Augmented Generation (RAG) pipelines, intelligent support agents, and AI automation for business workflows.",
    },
    {
      icon: <Server className="w-5 h-5 text-accent-blue" />,
      title: "Cloud Systems & DevOps",
      desc: "Deploying secure, containerized architectures with Docker, Kubernetes, and automated CI/CD pipelines across AWS, GCP, and Azure.",
    },
    {
      icon: <Receipt className="w-5 h-5 text-emerald-400" />,
      title: "EzBill & Enterprise Solutions",
      desc: "Designing and developing EzBill billing software, enterprise resource planning (ERP), and multi-terminal point-of-sale systems.",
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
          { label: "Ammar Master" },
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
                alt="Ammar Master (Jalaluddin Master), Founder of ProDevOpz"
                fill
                priority
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </figure>
            <figcaption className="text-center text-[11px] font-medium text-foreground/50 mt-3">
              Ammar Master (Jalaluddin Master) — Founder of ProDevOpz
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
                Ammar Master
              </h1>
              <p className="text-sm sm:text-base font-semibold text-accent-purple mt-1.5">
                Also known as Jalaluddin Master
              </p>
            </div>

            <p className="text-sm font-medium text-foreground/80">
              Founder &amp; Software Engineer at{" "}
              <Link
                href="/"
                className="text-white underline decoration-accent-orange/50 hover:decoration-accent-orange transition-colors"
              >
                ProDevOpz
              </Link>
            </p>

            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-2xl pt-2 border-t border-white/[0.05]">
              Ammar Master (also known as Jalaluddin Master) is the Founder and Software Engineer behind ProDevOpz. As principal technologist, Ammar leads the design, technical architecture, and implementation of high-performance software, AI systems, cloud infrastructure, and software products like EzBill across ProDevOpz digital systems.
            </p>

            {/* Social / Direct Connect */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:contactprodevopz@gmail.com?subject=Inquiry for Ammar Master (Founder, ProDevOpz)"
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
                href="https://github.com/Ammarmaster"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-foreground/75 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2 rounded-xl border border-white/5 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-accent-purple" />
                GitHub (@Ammarmaster)
                <ExternalLink className="w-3 h-3 text-foreground/40" />
              </a>
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
            </div>
          </div>
        </div>
      </header>

      {/* Biography & Vision */}
      <section className="glass-panel border-white/[0.06] p-8 md:p-10 flex flex-col gap-6">
        <div className="flex items-center gap-2.5 border-b border-white/[0.05] pb-4">
          <Award className="w-5 h-5 text-accent-orange" />
          <h2 className="font-display font-bold text-xl text-white">
            About Ammar Master
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-xs sm:text-sm text-foreground/70 leading-relaxed">
          <p>
            Ammar Master, also known professionally as Jalaluddin Master, founded ProDevOpz (ProDevOpz Technologies) with the vision of delivering enterprise-grade software engineering, AI-driven architectures, and scalable cloud solutions to modern startups and established businesses.
          </p>
          <p>
            With extensive experience across full-stack engineering, DevOps, and applied artificial intelligence, Ammar guides the technical direction of ProDevOpz. His work emphasizes clean code, robust database architectures, 100% Lighthouse performance standards, and secure, containerized deployments.
          </p>
          <p>
            Under his leadership, ProDevOpz has developed custom software platforms, mobile applications, and software products including <Link href="/ezbill" className="text-accent-orange hover:underline font-semibold">EzBill (EZBill)</Link>, while maintaining registered MSME and ISO-compliant engineering processes.
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

      {/* Relationship with ProDevOpz & EzBill */}
      <section className="glass-panel border-white/[0.06] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider">
            Featured Products &amp; Services
          </span>
          <h2 className="font-display font-bold text-lg text-white">
            Explore EzBill &amp; ProDevOpz Solutions
          </h2>
          <p className="text-xs text-foreground/60 leading-relaxed">
            Discover EzBill billing software, custom web applications, and AI architectures engineered by Ammar Master and the ProDevOpz team.
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
