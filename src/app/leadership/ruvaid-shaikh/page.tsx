import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Building,
  MapPin,
  GraduationCap,
  Sparkles,
  Layers,
  Code2,
  ArrowRight,
  Award,
  Globe,
  Mail,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ruvaid Shaikh — Co-Founder at ProDevOpz | Executive Leadership",
  description:
    "Ruvaid Shaikh is the Co-Founder of ProDevOpz, driving technology innovation, product engineering, and business expansion.",
  alternates: {
    canonical: "/leadership/ruvaid-shaikh",
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
    title: "Ruvaid Shaikh — Co-Founder at ProDevOpz | Executive Leadership",
    description:
      "Ruvaid Shaikh is the Co-Founder of ProDevOpz, driving technology innovation, product engineering, and business expansion.",
    url: "https://prodevopz.jobsio.in/leadership/ruvaid-shaikh",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://prodevopz.jobsio.in/team/ruvaid-shaikh-cofounder-prodevopz.jpg",
        width: 1024,
        height: 1007,
        alt: "Ruvaid Shaikh, Co-Founder of ProDevOpz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruvaid Shaikh — Co-Founder at ProDevOpz",
    description:
      "Ruvaid Shaikh is the Co-Founder of ProDevOpz.",
    images: ["https://prodevopz.jobsio.in/team/ruvaid-shaikh-cofounder-prodevopz.jpg"],
  },
};

export default function RuvaidShaikhPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://prodevopz.jobsio.in/leadership/ruvaid-shaikh",
        "url": "https://prodevopz.jobsio.in/leadership/ruvaid-shaikh",
        "name": "Ruvaid Shaikh — Co-Founder at ProDevOpz | Executive Leadership",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://prodevopz.jobsio.in/#website",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "mainEntity": {
          "@id": "https://prodevopz.jobsio.in/leadership/ruvaid-shaikh#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://prodevopz.jobsio.in/leadership/ruvaid-shaikh#person",
        "name": "Ruvaid Shaikh",
        "jobTitle": "Co-Founder",
        "description": "Ruvaid Shaikh is the Co-Founder of ProDevOpz, guiding technology innovation, product engineering, and scalable software ecosystems.",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://prodevopz.jobsio.in/#organization",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "image": "https://prodevopz.jobsio.in/team/ruvaid-shaikh-cofounder-prodevopz.jpg",
        "url": "https://prodevopz.jobsio.in/leadership/ruvaid-shaikh",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Sanjay Ghodawat University (2022 - 2026)"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sangli",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://linkedin.com/company/prodevopz",
          "https://instagram.com/prodevopz.in"
        ],
        "knowsAbout": [
          "Software Co-Founding & Product Strategy",
          "Technology Systems & Web Architectures",
          "Full-Stack Engineering",
          "Product Innovation",
          "Digital Ecosystems"
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
      icon: <Sparkles className="w-5 h-5 text-accent-purple" />,
      title: "Technology Innovation & Product Vision",
      desc: "Architecting modern digital products and accelerating software technology adoption for ProDevOpz software solutions.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-accent-orange" />,
      title: "Software Engineering Excellence",
      desc: "Championing clean code, scalable microservices, and AI-enabled workflows across enterprise platforms.",
    },
    {
      icon: <Layers className="w-5 h-5 text-accent-blue" />,
      title: "Co-Founding & Ecosystem Growth",
      desc: "Building long-term startup value, developer community relationships, and talent pipelines for tech cohorts.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Quality Benchmarks",
      desc: "Ensuring all product lines adhere to rigorous ISO quality benchmarks and production-ready resilience.",
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
          { label: "Ruvaid Shaikh" },
        ]}
      />

      {/* Hero / Header */}
      <header className="glass-panel border-white/[0.08] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Photo Column */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <figure className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]">
              <Image
                src="/team/ruvaid-shaikh-cofounder-prodevopz.jpg"
                alt="Ruvaid Shaikh, Co-Founder of ProDevOpz"
                fill
                priority
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </figure>
            <figcaption className="text-center text-[11px] font-medium text-foreground/50 mt-3">
              Ruvaid Shaikh — Co-Founder, ProDevOpz
            </figcaption>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-bold text-accent-purple uppercase tracking-wider bg-accent-purple/10 px-3.5 py-1 rounded-full border border-accent-purple/20">
                Co-Founder
              </span>
              <span className="text-[11px] font-medium text-foreground/50 bg-white/[0.02] px-3 py-1 rounded-full border border-white/5">
                Executive Leadership
              </span>
            </div>

            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Ruvaid Shaikh
              </h1>
              <p className="text-sm sm:text-base font-semibold text-accent-orange mt-1.5">
                Co-Founder at ProDevOpz
              </p>
            </div>

            {/* Quick Meta */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs text-foreground/70 py-2 border-y border-white/[0.05]">
              <div className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-accent-orange" />
                <Link href="/" className="hover:text-white transition-colors">
                  ProDevOpz Technologies
                </Link>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent-purple" />
                <span>Sangli, Maharashtra, India</span>
              </div>
            </div>

            {/* Education Info */}
            <div className="flex items-center gap-2 text-xs text-foreground/80 bg-white/[0.02] px-3.5 py-2 rounded-xl border border-white/5 w-fit">
              <GraduationCap className="w-4 h-4 text-accent-blue" />
              <span>Sanjay Ghodawat University (2022 – 2026)</span>
            </div>

            {/* Connect / Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:contactprodevopz@gmail.com?subject=Inquiry for Ruvaid Shaikh (Co-Founder, ProDevOpz)"
                className="flex items-center gap-2 text-xs font-semibold text-white bg-accent-purple px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact Co-Founder
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

      {/* Biography & Vision */}
      <section className="glass-panel border-white/[0.06] p-8 md:p-10 flex flex-col gap-6">
        <div className="flex items-center gap-2.5 border-b border-white/[0.05] pb-4">
          <Award className="w-5 h-5 text-accent-purple" />
          <h2 className="font-display font-bold text-xl text-white">
            About Ruvaid Shaikh
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-xs sm:text-sm text-foreground/70 leading-relaxed">
          <p>
            Ruvaid Shaikh is the Co-Founder of ProDevOpz. As a key executive and technical stakeholder, Ruvaid helps guide product strategy, system architecture, and modern tech stack decisions across enterprise software builds.
          </p>
          <p>
            Hailing from Sangli, Maharashtra, and studying at Sanjay Ghodawat University (2022 – 2026), Ruvaid combines technical acumen with entrepreneurial drive. He collaborates directly with company leadership to expand ProDevOpz&apos;s product offerings, client engineering solutions, and developer talent initiatives.
          </p>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <Code2 className="w-5 h-5 text-accent-orange" />
          <h2 className="font-display font-bold text-xl text-white">
            Co-Founder Focus Areas
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
          <span className="text-[10px] font-bold text-accent-purple uppercase tracking-wider">
            Leadership Directory
          </span>
          <h2 className="font-display font-bold text-lg text-white">
            Explore ProDevOpz Leadership
          </h2>
          <p className="text-xs text-foreground/60 leading-relaxed">
            Discover the CEO, Managing Director, and Founder driving ProDevOpz&apos;s technical excellence.
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
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-accent-purple px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            ProDevOpz Home
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
