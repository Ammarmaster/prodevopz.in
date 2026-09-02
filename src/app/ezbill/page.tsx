import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Receipt,
  BarChart3,
  Boxes,
  ArrowRight,
  Database,
  Cpu,
  Layers,
  UserCheck,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "EzBill — Billing & Business Management Software | ProDevOpz",
  description:
    "EzBill (EZBill) is a business billing and management software product developed by ProDevOpz, with billing, invoicing, sales and analytics capabilities.",
  alternates: {
    canonical: "/ezbill",
  },
  openGraph: {
    title: "EzBill — Billing & Business Management Software | ProDevOpz",
    description:
      "EzBill (EZBill) is a business billing and management software product developed by ProDevOpz, with billing, invoicing, sales and analytics capabilities.",
    url: "https://prodevopz.jobsio.in/ezbill",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://prodevopz.jobsio.in/products/ezbill-app-icon.png",
        width: 1024,
        height: 1024,
        alt: "EzBill business billing software app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EzBill — Billing & Business Management Software | ProDevOpz",
    description:
      "EzBill (EZBill) is a business billing and management software product developed by ProDevOpz.",
    images: ["https://prodevopz.jobsio.in/products/ezbill-app-icon.png"],
  },
};

export default function EzBillPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://prodevopz.jobsio.in/ezbill#software",
        "name": "EzBill",
        "alternateName": ["EZBill", "EZ Bill", "EzBill Software"],
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Android, Windows, Cloud",
        "description": "EzBill (EZBill) is a business billing and management software product developed by ProDevOpz, with billing, invoicing, sales and analytics capabilities.",
        "url": "https://prodevopz.jobsio.in/ezbill",
        "image": "https://prodevopz.jobsio.in/products/ezbill-app-icon.png",
        "author": {
          "@type": "Organization",
          "@id": "https://prodevopz.jobsio.in/#organization",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "creator": {
          "@type": "Organization",
          "@id": "https://prodevopz.jobsio.in/#organization"
        },
        "publisher": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "description": "Custom enterprise deployment and licenses by ProDevOpz Technologies"
        },
        "featureList": [
          "Fast GST invoicing & digital billing receipts",
          "Real-time inventory ledger and stock tracking",
          "Revenue analytics and daily sales reporting dashboards",
          "Multi-terminal point-of-sale (POS) synchronization",
          "Secure cloud database with RESTful APIs"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://prodevopz.jobsio.in/ezbill",
        "url": "https://prodevopz.jobsio.in/ezbill",
        "name": "EzBill — Billing & Business Management Software | ProDevOpz",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://prodevopz.jobsio.in/#website",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        }
      }
    ]
  };

  const features = [
    {
      icon: <Receipt className="w-5 h-5 text-accent-orange" />,
      title: "Fast Invoicing & GST Billing",
      desc: "Generate professional GST-compliant invoices and digital receipts in seconds, optimized for retail, restaurant, and wholesale counters.",
    },
    {
      icon: <Boxes className="w-5 h-5 text-accent-purple" />,
      title: "Real-Time Inventory Tracking",
      desc: "Monitor product stock levels across multiple storage locations with automatic low-stock notifications and supplier purchase logs.",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-accent-blue" />,
      title: "Sales & Revenue Analytics",
      desc: "Interactive analytics dashboards providing deep insight into daily revenue, top-selling items, customer trends, and profit margins.",
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: "Secure Cloud Database & APIs",
      desc: "Engineered on high-performance PostgreSQL and scalable backend APIs with automated backups and encrypted business records.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-12 text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Products", href: "/portfolio" },
          { label: "EzBill" },
        ]}
      />

      {/* Hero / Header */}
      <header className="glass-panel border-white/[0.08] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[11px] font-bold text-accent-orange uppercase tracking-wider bg-accent-orange/10 px-3.5 py-1 rounded-full border border-accent-orange/20">
              Official Software Product
            </span>
            <span className="text-[11px] font-medium text-foreground/50 bg-white/[0.02] px-3 py-1 rounded-full border border-white/5">
              Developed by ProDevOpz
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <figure className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black shrink-0">
              <Image
                src="/products/ezbill-app-icon.png"
                alt="EzBill business billing software app icon"
                fill
                priority
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover"
              />
            </figure>
            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                EzBill (EZBill)
              </h1>
              <p className="text-sm sm:text-base font-semibold text-accent-purple mt-1.5">
                Business Billing, Invoicing &amp; Management Platform
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-3xl pt-2 border-t border-white/[0.05]">
            EzBill (also known as EZBill or EZ Bill) is an enterprise-grade business management and billing software product developed by ProDevOpz (ProDevOpz Technologies). Built for speed and reliability, EzBill streamlines invoicing, inventory tracking, order management, and revenue analytics for modern commercial businesses.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/pricing"
              className="flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-accent-orange to-accent-purple px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              Request EzBill Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/s1pro"
              className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2.5 rounded-xl border border-white/5 transition-colors"
            >
              Explore S1Pro
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/founder/ammar-master"
              className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2.5 rounded-xl border border-white/5 transition-colors"
            >
              <UserCheck className="w-3.5 h-3.5 text-accent-orange" />
              Meet the Founder
            </Link>
          </div>
        </div>
      </header>

      {/* Core Capabilities */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <Cpu className="w-5 h-5 text-accent-orange" />
          <h2 className="font-display font-bold text-xl text-white">
            Core Capabilities of EzBill
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, i) => (
            <div key={i} className="glass-card p-6 border-white/[0.06] flex flex-col gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                {feat.icon}
              </div>
              <h3 className="font-display font-bold text-sm text-white">
                {feat.title}
              </h3>
              <p className="text-xs text-foreground/60 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture & Tech Specs */}
      <section className="glass-panel border-white/[0.06] p-8 md:p-10 flex flex-col gap-6">
        <div className="flex items-center gap-2.5 border-b border-white/[0.05] pb-4">
          <Layers className="w-5 h-5 text-accent-purple" />
          <h2 className="font-display font-bold text-xl text-white">
            Engineered by ProDevOpz
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
          EzBill is engineered from the ground up by the software engineering team at ProDevOpz. Utilizing modern web technologies, offline caching synchronization, and cloud databases, EzBill enables seamless billing operations across desktop, tablet, and mobile interfaces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold text-accent-orange">Deployment</span>
            <span className="text-xs font-semibold text-white">Cloud &amp; On-Premise POS</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold text-accent-purple">Security</span>
            <span className="text-xs font-semibold text-white">Role-Based Access Control</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold text-accent-blue">Compliance</span>
            <span className="text-xs font-semibold text-white">GST &amp; Tax Standard Ready</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="glass-panel border-white/[0.06] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider">
            Enterprise Solutions
          </span>
          <h2 className="font-display font-bold text-lg text-white">
            Need Custom Features for EzBill?
          </h2>
          <p className="text-xs text-foreground/60 leading-relaxed">
            ProDevOpz customizes EzBill for enterprise retail chains, franchise networks, and multi-location warehouses.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/pricing"
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-accent-orange px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Get Custom Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
