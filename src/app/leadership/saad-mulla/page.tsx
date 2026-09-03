import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Building,
  MapPin,
  GraduationCap,
  Briefcase,
  Target,
  Users,
  ArrowRight,
  Award,
  Globe,
  Mail,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Saad Mulla — CEO at ProDevOpz | Executive Leadership",
  description:
    "Saad Mulla is the Chief Executive Officer (CEO) of ProDevOpz, leading strategic business growth, operational execution, and enterprise client partnerships.",
  alternates: {
    canonical: "/leadership/saad-mulla",
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
    title: "Saad Mulla — CEO at ProDevOpz | Executive Leadership",
    description:
      "Saad Mulla is the Chief Executive Officer (CEO) of ProDevOpz, leading strategic business growth, operational execution, and enterprise partnerships.",
    url: "https://prodevopz.jobsio.in/leadership/saad-mulla",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://prodevopz.jobsio.in/team/saad-mulla-ceo-prodevopz.jpg",
        width: 800,
        height: 1000,
        alt: "Saad Mulla, CEO of ProDevOpz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Mulla — CEO at ProDevOpz",
    description:
      "Saad Mulla is the Chief Executive Officer (CEO) of ProDevOpz.",
    images: ["https://prodevopz.jobsio.in/team/saad-mulla-ceo-prodevopz.jpg"],
  },
};

export default function SaadMullaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://prodevopz.jobsio.in/leadership/saad-mulla",
        "url": "https://prodevopz.jobsio.in/leadership/saad-mulla",
        "name": "Saad Mulla — CEO at ProDevOpz | Executive Leadership",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://prodevopz.jobsio.in/#website",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "mainEntity": {
          "@id": "https://prodevopz.jobsio.in/leadership/saad-mulla#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://prodevopz.jobsio.in/leadership/saad-mulla#person",
        "name": "Saad Mulla",
        "jobTitle": "Chief Executive Officer (CEO)",
        "description": "Saad Mulla is the Chief Executive Officer (CEO) of ProDevOpz, leading strategic corporate expansion, operational execution, and enterprise client relationships.",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://prodevopz.jobsio.in/#organization",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "image": "https://prodevopz.jobsio.in/team/saad-mulla-ceo-prodevopz.jpg",
        "url": "https://prodevopz.jobsio.in/leadership/saad-mulla",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Rani Channamma University (RCUB)"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dodda Ballapur",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://linkedin.com/company/prodevopz",
          "https://instagram.com/prodevopz.in"
        ],
        "knowsAbout": [
          "Executive Management",
          "Strategic Growth",
          "Business Operations",
          "Enterprise Software Solutions",
          "Client Partnerships",
          "Corporate Governance"
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
      icon: <Target className="w-5 h-5 text-accent-orange" />,
      title: "Strategic Business Expansion",
      desc: "Directing high-growth market strategy, technology solutions adoption, and commercial scaling for ProDevOpz client accounts.",
    },
    {
      icon: <Users className="w-5 h-5 text-accent-purple" />,
      title: "Executive Leadership & Operations",
      desc: "Aligning multidisciplinary engineering, product, and delivery teams to execute high-impact software milestones.",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-accent-blue" />,
      title: "Client & Enterprise Partnerships",
      desc: "Establishing strategic business relationships with corporate enterprises, startups, and tech ecosystem leaders globally.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Organizational Excellence",
      desc: "Upholding registered MSME and ISO 9001:2015 operational quality standards across all business deliverables.",
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
          { label: "Saad Mulla" },
        ]}
      />

      {/* Hero / Header */}
      <header className="glass-panel border-white/[0.08] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Photo Column */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <figure className="relative w-full max-w-[260px] sm:max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02]">
              <Image
                src="/team/saad-mulla-ceo-prodevopz.jpg"
                alt="Saad Mulla, CEO of ProDevOpz"
                fill
                priority
                sizes="(max-width: 768px) 260px, 280px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </figure>
            <figcaption className="text-center text-[11px] font-medium text-foreground/50 mt-3">
              Saad Mulla — Chief Executive Officer (CEO), ProDevOpz
            </figcaption>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-bold text-accent-orange uppercase tracking-wider bg-accent-orange/10 px-3.5 py-1 rounded-full border border-accent-orange/20">
                Chief Executive Officer
              </span>
              <span className="text-[11px] font-medium text-foreground/50 bg-white/[0.02] px-3 py-1 rounded-full border border-white/5">
                Executive Leadership
              </span>
            </div>

            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Saad Mulla
              </h1>
              <p className="text-sm sm:text-base font-semibold text-accent-purple mt-1.5">
                Chief Executive Officer at ProDevOpz
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
                <span>Dodda Ballapur, Karnataka, India</span>
              </div>
            </div>

            {/* Education Info */}
            <div className="flex items-center gap-2 text-xs text-foreground/80 bg-white/[0.02] px-3.5 py-2 rounded-xl border border-white/5 w-fit">
              <GraduationCap className="w-4 h-4 text-accent-blue" />
              <span>Rani Channamma University (RCUB)</span>
            </div>

            {/* Connect / Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:contactprodevopz@gmail.com?subject=Inquiry for Saad Mulla (CEO, ProDevOpz)"
                className="flex items-center gap-2 text-xs font-semibold text-white bg-accent-orange px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact CEO
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

      {/* Biography & Role Overview */}
      <section className="glass-panel border-white/[0.06] p-8 md:p-10 flex flex-col gap-6">
        <div className="flex items-center gap-2.5 border-b border-white/[0.05] pb-4">
          <Award className="w-5 h-5 text-accent-orange" />
          <h2 className="font-display font-bold text-xl text-white">
            About Saad Mulla
          </h2>
        </div>
        <div className="flex flex-col gap-4 text-xs sm:text-sm text-foreground/70 leading-relaxed">
          <p>
            Saad Mulla serves as the Chief Executive Officer (CEO) of ProDevOpz. In this capacity, he leads the company&apos;s overarching corporate strategy, market expansion, organizational alignment, and client relations across technology verticals.
          </p>
          <p>
            Based in Dodda Ballapur, Karnataka, and educated at Rani Channamma University (RCUB), Saad brings strategic discipline and commercial leadership to ProDevOpz. He works closely with co-founders and technical directors to guarantee the high-standard execution of custom software products, enterprise ERP platforms, and AI engineering services.
          </p>
        </div>
      </section>

      {/* Core Executive Focus */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <Target className="w-5 h-5 text-accent-purple" />
          <h2 className="font-display font-bold text-xl text-white">
            Executive Leadership &amp; Focus
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
          <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider">
            Explore ProDevOpz
          </span>
          <h2 className="font-display font-bold text-lg text-white">
            Meet the Rest of Our Leadership
          </h2>
          <p className="text-xs text-foreground/60 leading-relaxed">
            Discover the co-founders, managing directors, and technical leaders driving ProDevOpz.
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
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-accent-orange px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            ProDevOpz Home
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
