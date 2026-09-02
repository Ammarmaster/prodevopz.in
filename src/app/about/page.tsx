import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Sparkles, Calendar, Award, Target, Eye, Users, ArrowRight, UserCheck, Code2, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "About ProDevOpz | Software Development Company",
  description:
    "Learn about ProDevOpz, our mission, values, and leadership. Founded by Ammar Master (Jalaluddin Master), ProDevOpz builds modern software, AI systems, cloud architectures, and products like EzBill.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About ProDevOpz | Software Development Company",
    description:
      "Learn about ProDevOpz, our mission, values, and leadership. Founded by Ammar Master (Jalaluddin Master), ProDevOpz builds modern software, AI systems, cloud architectures, and products like EzBill.",
    url: "https://prodevopz.jobsio.in/about",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://prodevopz.jobsio.in/logo.jpg",
        width: 512,
        height: 512,
        alt: "ProDevOpz Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ProDevOpz | Software Development Company",
    description:
      "Learn about ProDevOpz, our mission, values, and leadership. Founded by Ammar Master (Jalaluddin Master).",
    images: ["https://prodevopz.jobsio.in/logo.jpg"],
  },
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://prodevopz.jobsio.in/about",
        "url": "https://prodevopz.jobsio.in/about",
        "name": "About ProDevOpz | Software Development Company",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://prodevopz.jobsio.in/#website",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "about": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://prodevopz.jobsio.in/#organization",
        "name": "ProDevOpz",
        "legalName": "ProDevOpz Technologies",
        "url": "https://prodevopz.jobsio.in/",
        "logo": "https://prodevopz.jobsio.in/logo.jpg",
        "description": "ProDevOpz is a certified MSME and ISO-compliant software development company providing web development, mobile apps, cloud DevOps, AI engineering, and products like EzBill.",
        "founder": {
          "@type": "Person",
          "@id": "https://prodevopz.jobsio.in/founder/ammar-master#person",
          "name": "Ammar Master",
          "alternateName": ["Jalaluddin Master"],
          "jobTitle": "Founder & Software Engineer",
          "image": "https://prodevopz.jobsio.in/ammar-master-jalaluddin-master-founder-prodevopz.jpg",
          "url": "https://prodevopz.jobsio.in/founder/ammar-master"
        }
      }
    ]
  };

  const milestones = [
    { year: "2024", title: "Company Founded", desc: "ProDevOpz established by Ammar Master to bring modern AI architecture and software engineering to startup web systems." },
    { year: "2025", title: "MSME & ISO Certifications", desc: "Recognized as a registered MSME software enterprise adhering to ISO 9001:2015 standards." },
    { year: "2026", title: "Launch of Automation Platform & EzBill", desc: "Introduced our autonomous internship management platform and EzBill enterprise billing software suite." },
  ];

  const values = [
    { icon: <Target className="w-5 h-5 text-accent-orange" />, title: "Precision", desc: "We build with pixel-perfect design standards and optimized codebase performance." },
    { icon: <Eye className="w-5 h-5 text-accent-purple" />, title: "Visionary", desc: "We construct AI-first systems designed for long-term scalability and business intelligence." },
    { icon: <Users className="w-5 h-5 text-accent-blue" />, title: "Community", desc: "We actively upskill thousands of engineering students via automated mentorship programs." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-20 text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-xs font-bold text-accent-orange uppercase tracking-widest bg-accent-orange/10 px-3.5 py-1.5 rounded-full w-fit mx-auto">
          About Us
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
          Our Story, Vision, &amp; Leadership
        </h1>
        <p className="text-sm text-foreground/50 leading-relaxed">
          ProDevOpz is a certified MSME and ISO-compliant software development company. We partner with startups and enterprises globally to deliver state-of-the-art web products, mobile applications, cloud infrastructures, AI architectures, and software products like EzBill.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <div key={i} className="glass-card p-6 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
              {v.icon}
            </div>
            <h3 className="font-display font-bold text-base text-white">{v.title}</h3>
            <p className="text-xs text-foreground/50 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Meet the Founder Section */}
      <div className="glass-panel border-white/[0.08] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider bg-accent-orange/10 px-3 py-1 rounded-full w-fit">
              Leadership
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-2">
              Meet the Founder
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <figure className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/10 shadow-xl shrink-0 bg-white/[0.02]">
                  <Image
                    src="/ammar-master-jalaluddin-master-founder-prodevopz.jpg"
                    alt="Ammar Master (Jalaluddin Master), Founder of ProDevOpz"
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover object-top"
                  />
                </figure>
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Ammar Master
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-accent-purple">
                    Also known as Jalaluddin Master
                  </p>
                  <p className="text-xs font-medium text-foreground/75 mt-0.5">
                    Founder &amp; Software Engineer at ProDevOpz
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Ammar Master (also known as Jalaluddin Master) is the Founder and Software Engineer behind ProDevOpz. He leads technical architecture, systems engineering, and product development, creating robust web platforms, intelligent AI integrations, cloud infrastructures, and billing software like EzBill for businesses and startups.
              </p>

              <div className="pt-1">
                <Link
                  href="/founder/ammar-master"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 px-4 py-2.5 rounded-xl transition-colors"
                >
                  <UserCheck className="w-4 h-4 text-accent-orange" />
                  View Founder Profile (Ammar Master)
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 glass-card p-6 border-white/[0.06] flex flex-col gap-3">
              <span className="text-[10px] font-bold text-accent-blue uppercase tracking-wider">
                Engineering Focus
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-foreground/70">
                <li className="flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-accent-orange shrink-0" />
                  <span>Next.js &amp; Full-Stack Web Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                  <span>Applied AI &amp; LLM Integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Cloud DevOps &amp; EzBill POS Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="glass-panel border-white/[0.06] p-8 md:p-12">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-8 flex items-center gap-2">
          <Calendar className="w-5.5 h-5.5 text-accent-purple" />
          Milestones &amp; Roadmap
        </h2>
        <div className="flex flex-col gap-8 relative border-l border-white/10 pl-6 ml-2">
          {milestones.map((m, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent-orange border-2 border-[#030303]" />
              <span className="text-xs font-bold text-accent-orange">{m.year}</span>
              <h4 className="font-display font-bold text-sm text-white mt-1 mb-1">{m.title}</h4>
              <p className="text-xs text-foreground/50 max-w-xl leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
