import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Building,
  MapPin,
  GraduationCap,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Award,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vaibhav Yalamalle — Managing Director at ProDevOpz | Leadership",
  description:
    "Vaibhav Yalamalle is the Managing Director (MD) of ProDevOpz, overseeing enterprise governance, financial strategy, and business management.",
  alternates: {
    canonical: "/leadership/vaibhav-yalamalle",
  },
  openGraph: {
    title: "Vaibhav Yalamalle — Managing Director at ProDevOpz | Leadership",
    description:
      "Vaibhav Yalamalle is the Managing Director (MD) of ProDevOpz, overseeing enterprise governance, financial strategy, and business management.",
    url: "https://prodevopz.jobsio.in/leadership/vaibhav-yalamalle",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://prodevopz.jobsio.in/team/vaibhav-yalamalle-md-prodevopz.jpg",
        width: 800,
        height: 1000,
        alt: "Vaibhav Yalamalle, Managing Director of ProDevOpz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Yalamalle — Managing Director at ProDevOpz",
    description:
      "Vaibhav Yalamalle is the Managing Director (MD) of ProDevOpz.",
    images: ["https://prodevopz.jobsio.in/team/vaibhav-yalamalle-md-prodevopz.jpg"],
  },
};

export default function VaibhavYalamallePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://prodevopz.jobsio.in/leadership/vaibhav-yalamalle",
        "url": "https://prodevopz.jobsio.in/leadership/vaibhav-yalamalle",
        "name": "Vaibhav Yalamalle — Managing Director at ProDevOpz | Leadership",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://prodevopz.jobsio.in/#website",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "mainEntity": {
          "@id": "https://prodevopz.jobsio.in/leadership/vaibhav-yalamalle#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://prodevopz.jobsio.in/leadership/vaibhav-yalamalle#person",
        "name": "Vaibhav Yalamalle",
        "jobTitle": "Managing Director (MD)",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://prodevopz.jobsio.in/#organization",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "image": "https://prodevopz.jobsio.in/team/vaibhav-yalamalle-md-prodevopz.jpg",
        "url": "https://prodevopz.jobsio.in/leadership/vaibhav-yalamalle",
        "alumniOf": "KLE'S S.C.P Arts & D.D. Shirol Commerce College, Mahalingpur (PG)",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Athani",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "knowsAbout": [
          "Enterprise Governance",
          "Commercial & Business Management",
          "Operational Strategy",
          "Financial Operations",
          "Quality Compliance"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://prodevopz.jobsio.in/#organization",
        "name": "ProDevOpz",
        "legalName": "ProDevOpz Technologies",
        "url": "https://prodevopz.jobsio.in/",
        "logo": "https://prodevopz.jobsio.in/logo.jpg"
      }
    ]
  };

  const focusAreas = [
    {
      icon: <TrendingUp className="w-5 h-5 text-accent-blue" />,
      title: "Commercial & Financial Governance",
      desc: "Supervising fiscal planning, resource allocation, contract lifecycles, and sustainable commercial operations.",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-accent-orange" />,
      title: "Enterprise Strategy & Operations",
      desc: "Managing operational workflows and cross-departmental alignment to deliver high-standard software solutions.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Standards & Compliance",
      desc: "Guiding compliance with national MSME registries and international ISO 9001:2015 organizational benchmarks.",
    },
    {
      icon: <Building className="w-5 h-5 text-accent-purple" />,
      title: "Organizational Development",
      desc: "Expanding corporate structures and managing vendor, institutional, and client management infrastructures.",
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
          { label: "Leadership", href: "/leadership" },
          { label: "Vaibhav Yalamalle" },
        ]}
      />

      {/* Hero / Header */}
      <header className="glass-panel border-white/[0.08] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Photo Column */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <figure className="relative w-full max-w-[260px] sm:max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]">
              <Image
                src="/team/vaibhav-yalamalle-md-prodevopz.jpg"
                alt="Vaibhav Yalamalle, Managing Director of ProDevOpz"
                fill
                priority
                sizes="(max-width: 768px) 260px, 280px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </figure>
            <figcaption className="text-center text-[11px] font-medium text-foreground/50 mt-3">
              Vaibhav Yalamalle — Managing Director (MD), ProDevOpz
            </figcaption>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-bold text-accent-blue uppercase tracking-wider bg-accent-blue/10 px-3.5 py-1 rounded-full border border-accent-blue/20">
                Managing Director (MD)
              </span>
              <span className="text-[11px] font-medium text-foreground/50 bg-white/[0.02] px-3 py-1 rounded-full border border-white/5">
                Executive Leadership
              </span>
            </div>

            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Vaibhav Yalamalle
              </h1>
              <p className="text-sm sm:text-base font-semibold text-accent-orange mt-1.5">
                Managing Director at ProDevOpz
              </p>
            </div>

            {/* Quick Meta */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs text-foreground/70 py-2 border-y border-white/[0.05]">
              <div className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-accent-orange" />
                <span>ProDevOpz Technologies</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent-purple" />
                <span>Athani, Karnataka, India</span>
              </div>
            </div>

            {/* Education Info */}
            <div className="flex items-center gap-2 text-xs text-foreground/80 bg-white/[0.02] px-3.5 py-2 rounded-xl border border-white/5 w-fit">
              <GraduationCap className="w-4 h-4 text-accent-blue" />
              <span>KLE&apos;S S.C.P Arts &amp; D.D. Shirol Commerce College, Mahalingpur (PG)</span>
            </div>

            {/* Connect / Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:contactprodevopz@gmail.com?subject=Inquiry for Vaibhav Yalamalle (MD, ProDevOpz)"
                className="flex items-center gap-2 text-xs font-semibold text-white bg-accent-blue px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact Managing Director
              </a>
              <Link
                href="/leadership"
                className="text-xs font-semibold text-foreground/80 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2 rounded-xl border border-white/5 transition-colors"
              >
                Leadership Team
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Biography & Governance Overview */}
      <section className="glass-panel border-white/[0.06] p-8 md:p-10 flex flex-col gap-6">
        <div className="flex items-center gap-2.5 border-b border-white/[0.05] pb-4">
          <Award className="w-5 h-5 text-accent-blue" />
          <h2 className="font-display font-bold text-xl text-white">
            About Vaibhav Yalamalle
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-xs sm:text-sm text-foreground/70 leading-relaxed">
          <p>
            Vaibhav Yalamalle is the Managing Director (MD) of ProDevOpz. In this key executive capacity, Vaibhav oversees corporate governance, organizational compliance, operational workflows, and strategic business initiatives across the enterprise.
          </p>
          <p>
            Located in Athani, Karnataka, and having completed his postgraduate education at KLE&apos;S S.C.P Arts &amp; D.D. Shirol Commerce College in Mahalingpur, Vaibhav brings valuable management discipline and structured oversight to ProDevOpz&apos;s fast-scaling business operations.
          </p>
        </div>
      </section>

      {/* Core Executive Focus */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <TrendingUp className="w-5 h-5 text-accent-blue" />
          <h2 className="font-display font-bold text-xl text-white">
            Managing Director Focus Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, i) => (
            <div key={i} className="glass-card p-6 border-white/[0.06] flex flex-col gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                {area.icon}
              </div>
              <h3 className="font-display font-bold text-sm text-white">
                {area.title}
              </h3>
              <p className="text-xs text-foreground/60 leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="glass-panel border-white/[0.06] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-[10px] font-bold text-accent-blue uppercase tracking-wider">
            Explore Leadership
          </span>
          <h2 className="font-display font-bold text-lg text-white">
            Meet the ProDevOpz Team
          </h2>
          <p className="text-xs text-foreground/60 leading-relaxed">
            Discover the CEO, Co-Founder, and Founder driving ProDevOpz&apos;s software systems.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/leadership"
            className="text-xs font-semibold text-foreground/80 hover:text-white px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
          >
            All Leaders
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-accent-blue px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            ProDevOpz Home
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
