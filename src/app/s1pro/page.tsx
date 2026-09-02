import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Wrench,
  CalendarCheck,
  UserCheck,
  ShieldCheck,
  ArrowRight,
  Cpu,
  Layers,
  Clock,
  MapPin,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "S1Pro | Field Service Management Software | ProDevOpz",
  description:
    "S1Pro is a field service management platform developed by ProDevOpz for managing customers, service professionals, bookings, jobs and service operations.",
  alternates: {
    canonical: "/s1pro",
  },
  openGraph: {
    title: "S1Pro | Field Service Management Software | ProDevOpz",
    description:
      "S1Pro is a field service management platform developed by ProDevOpz for managing customers, service professionals, bookings, jobs and service operations.",
    url: "https://prodevopz.jobsio.in/s1pro",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://prodevopz.jobsio.in/products/s1pro-app-icon.png",
        width: 1024,
        height: 1024,
        alt: "S1Pro field service management app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S1Pro | Field Service Management Software | ProDevOpz",
    description:
      "S1Pro is a field service management platform developed by ProDevOpz.",
    images: ["https://prodevopz.jobsio.in/products/s1pro-app-icon.png"],
  },
};

export default function S1ProPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://prodevopz.jobsio.in/s1pro#software",
        "name": "S1Pro",
        "alternateName": ["S1Pro Software", "S1 Pro", "S1Pro Field Service Platform"],
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Android, iOS, Cloud",
        "description": "S1Pro is a field service management platform developed by ProDevOpz for managing customers, service professionals, bookings, jobs and service operations.",
        "url": "https://prodevopz.jobsio.in/s1pro",
        "image": "https://prodevopz.jobsio.in/products/s1pro-app-icon.png",
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
          "description": "Enterprise field service deployment and software solutions by ProDevOpz Technologies"
        },
        "featureList": [
          "Customer registration and secure authentication",
          "Interactive service catalog and discovery",
          "Smart booking engine with date, time, and location selection",
          "Real-time job dispatch and status tracking",
          "Technician/service professional profiles with verified ratings",
          "In-app customer-to-technician communication channel",
          "Complete booking history and digital job cards",
          "Centralized admin operational dispatch and revenue dashboards"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://prodevopz.jobsio.in/s1pro",
        "url": "https://prodevopz.jobsio.in/s1pro",
        "name": "S1Pro | Field Service Management Software | ProDevOpz",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://prodevopz.jobsio.in/#website",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        }
      }
    ]
  };

  const capabilities = [
    {
      icon: <CalendarCheck className="w-5 h-5 text-accent-orange" />,
      title: "Service Discovery & Smart Booking",
      desc: "Intuitive customer registration, instant service search, and structured booking workflows with date, time, address, and issue description inputs.",
    },
    {
      icon: <Clock className="w-5 h-5 text-accent-purple" />,
      title: "Live Job Status Tracking",
      desc: "Real-time updates as service requests transition from pending to dispatched, in-progress, completed, and invoiced.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-accent-blue" />,
      title: "Technician & Pro Profiles",
      desc: "Detailed service professional profiles showcasing verified expertise, skills, customer ratings, and active assignment queues.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      title: "Direct In-App Communication",
      desc: "Seamless communication channels enabling customers and technicians to coordinate job requirements, arrival times, and notes.",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-accent-orange" />,
      title: "Centralized Admin Operations",
      desc: "Powerful command center for business managers to dispatch jobs, track field technicians via GPS, oversee revenues, and generate reports.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent-purple" />,
      title: "Booking History & Job Logs",
      desc: "Comprehensive historical logs of all completed bookings, digital service receipts, warranty statuses, and customer feedback.",
    },
  ];

  const stakeholders = [
    {
      role: "For Customers",
      desc: "Effortless service discovery, transparent pricing, appointment scheduling, live technician tracking, and verified service guarantees.",
      badge: "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
    },
    {
      role: "For Technicians & Service Pros",
      desc: "Mobile-first job management app, real-time dispatch alerts, route navigation, job checklist completion, and performance metrics.",
      badge: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
    },
    {
      role: "For Business Administrators",
      desc: "End-to-end operational visibility, technician scheduling, automatic dispatch rules, customer CRM, invoicing, and revenue dashboards.",
      badge: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
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
          { label: "S1Pro" },
        ]}
      />

      {/* Hero / Header */}
      <header className="glass-panel border-white/[0.08] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[11px] font-bold text-accent-blue uppercase tracking-wider bg-accent-blue/10 px-3.5 py-1 rounded-full border border-accent-blue/20">
              Official Software Product
            </span>
            <span className="text-[11px] font-medium text-foreground/50 bg-white/[0.02] px-3 py-1 rounded-full border border-white/5">
              Developed by ProDevOpz
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <figure className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black shrink-0">
              <Image
                src="/products/s1pro-app-icon.png"
                alt="S1Pro field service management app icon"
                fill
                priority
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover"
              />
            </figure>
            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                S1Pro
              </h1>
              <p className="text-sm sm:text-base font-semibold text-accent-orange mt-1.5">
                Field Service Workforce Management Platform
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-3xl pt-2 border-t border-white/[0.05]">
            S1Pro is an enterprise-ready field service management platform developed by ProDevOpz (ProDevOpz Technologies). S1Pro seamlessly unites customers, field technicians, and business administrators into one high-efficiency ecosystem—automating service discovery, appointment bookings, live job status tracking, dispatching, and field communication.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/pricing"
              className="flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-accent-blue to-accent-purple px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              Request S1Pro Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/ezbill"
              className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2.5 rounded-xl border border-white/5 transition-colors"
            >
              Explore EzBill Software
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/leadership"
              className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2.5 rounded-xl border border-white/5 transition-colors"
            >
              <Users className="w-3.5 h-3.5 text-accent-blue" />
              Leadership Team
            </Link>
          </div>
        </div>
      </header>

      {/* Tripartite Ecosystem */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <Users className="w-5 h-5 text-accent-blue" />
          <h2 className="font-display font-bold text-xl text-white">
            Connecting Customers, Technicians &amp; Admins
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stakeholders.map((s, i) => (
            <div key={i} className="glass-card p-6 border-white/[0.06] flex flex-col gap-3">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border w-fit ${s.badge}`}>
                {s.role}
              </span>
              <p className="text-xs text-foreground/70 leading-relaxed pt-1">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <Cpu className="w-5 h-5 text-accent-orange" />
          <h2 className="font-display font-bold text-xl text-white">
            Core Capabilities of S1Pro
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="glass-card p-6 border-white/[0.06] flex flex-col gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                {cap.icon}
              </div>
              <h3 className="font-display font-bold text-sm text-white">
                {cap.title}
              </h3>
              <p className="text-xs text-foreground/60 leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture & Engineering */}
      <section className="glass-panel border-white/[0.06] p-8 md:p-10 flex flex-col gap-6">
        <div className="flex items-center gap-2.5 border-b border-white/[0.05] pb-4">
          <Layers className="w-5 h-5 text-accent-purple" />
          <h2 className="font-display font-bold text-xl text-white">
            Engineered by ProDevOpz
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
          S1Pro is engineered by ProDevOpz using scalable cloud microservices, real-time WebSocket job feeds, mobile GPS synchronization, and secure role-based API access. Designed for high availability, S1Pro helps service companies automate dispatching, optimize technician routing, and boost customer satisfaction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold text-accent-blue">Real-Time Sync</span>
            <span className="text-xs font-semibold text-white">Live Status &amp; Geolocation</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold text-accent-purple">Cross-Platform</span>
            <span className="text-xs font-semibold text-white">Web, Android &amp; iOS Apps</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold text-accent-orange">Scalability</span>
            <span className="text-xs font-semibold text-white">Enterprise Fleet Ready</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="glass-panel border-white/[0.06] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-[10px] font-bold text-accent-blue uppercase tracking-wider">
            Enterprise Field Solutions
          </span>
          <h2 className="font-display font-bold text-lg text-white">
            Deploy S1Pro for Your Service Enterprise
          </h2>
          <p className="text-xs text-foreground/60 leading-relaxed">
            ProDevOpz customizes and deploys S1Pro for appliance repair, facility management, home maintenance, HVAC, and on-demand technician fleets.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/pricing"
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-accent-blue px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Get Custom Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
