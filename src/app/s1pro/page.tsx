import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  VolumeX,
  MapPin,
  Compass,
  BellOff,
  ShieldCheck,
  ArrowRight,
  BatteryCharging,
  Clock,
  CheckCircle2,
  Smartphone,
  Sliders,
  Radio,
  Sparkles,
  Layers,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = {
  title: "S1Pro — Auto Mobile Silent App by Geofence Target Area & Range | ProDevOpz",
  description:
    "S1Pro is an automated mobile silent and DND profiler app developed by ProDevOpz. Automatically silences your phone when entering added target areas and range (mosques, colleges, offices, hospitals) and restores sound when leaving.",
  alternates: {
    canonical: "/s1pro",
  },
  keywords: [
    "s1pro",
    "auto mobile silent app",
    "location based silent app",
    "auto silent phone by location",
    "geofence silent app",
    "auto dnd target area",
    "prodevopz s1pro",
    "auto silent mosque temple church",
    "automatic phone silence by range",
    "smart ringtone switcher"
  ],
  openGraph: {
    title: "S1Pro — Auto Mobile Silent App by Geofence Target Area & Range | ProDevOpz",
    description:
      "Automatically silence your mobile phone upon entering added target areas and radius range. Seamlessly restores your ringtone when leaving. Developed by ProDevOpz.",
    url: "https://prodevopz.jobsio.in/s1pro",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://prodevopz.jobsio.in/products/s1pro-app-icon.png",
        width: 1024,
        height: 1024,
        alt: "S1Pro auto mobile silent mode app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S1Pro — Auto Mobile Silent App by Geofence Target Area & Range",
    description:
      "Automated mobile silent mode according to added target areas and geofence range. Never forget to silence your phone again.",
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
        "alternateName": [
          "S1Pro Silent App",
          "S1 Pro",
          "S1Pro Auto Mobile Silent Profiler",
          "Location Based Phone Silencer"
        ],
        "applicationCategory": "MobileApplication",
        "operatingSystem": "Android, iOS, Mobile",
        "description": "S1Pro is an automated mobile silent and DND profiler developed by ProDevOpz. It detects added target areas and custom radius ranges using battery-optimized geofencing, automatically muting your phone upon entry and restoring ringer volume upon exit.",
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
          "price": "0",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "description": "Smart mobile automation software product engineered by ProDevOpz Technologies"
        },
        "featureList": [
          "Automatic mobile silent and vibrate switching based on target geofence locations",
          "Custom boundary radius and range configuration (25m to 2000m)",
          "Automatic ringtone and volume restoration upon exiting target area",
          "Battery-optimized fused location geofencing with zero battery drain",
          "Scheduled time window filters for recurring prayer times, classes, or meetings",
          "Emergency caller and VIP contact bypass",
          "100% on-device privacy with zero cloud tracking of user locations"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://prodevopz.jobsio.in/s1pro",
        "url": "https://prodevopz.jobsio.in/s1pro",
        "name": "S1Pro — Auto Mobile Silent App by Geofence Target Area & Range | ProDevOpz",
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
      icon: <MapPin className="w-5 h-5 text-accent-orange" />,
      title: "Target Area Pinning & Geofencing",
      desc: "Easily search or pin any location on the map—such as places of worship, educational campuses, hospitals, or conference rooms—as an active silent zone.",
    },
    {
      icon: <Compass className="w-5 h-5 text-accent-blue" />,
      title: "Adjustable Proximity Range & Radius",
      desc: "Set the exact perimeter radius (from 25 meters up to 2 kilometers) for each zone so your phone silences right when you enter the threshold.",
    },
    {
      icon: <VolumeX className="w-5 h-5 text-red-400" />,
      title: "Instant Auto Silent & DND Trigger",
      desc: "Switches your device immediately to Silent, Vibrate, or Do Not Disturb as soon as GPS or fused cell-tower coordinates enter the target radius.",
    },
    {
      icon: <BellOff className="w-5 h-5 text-emerald-400" />,
      title: "Automatic Sound Restoration",
      desc: "Never miss an important call again. As soon as you step outside the target perimeter, S1Pro instantly restores your normal ringtone and alert volume.",
    },
    {
      icon: <BatteryCharging className="w-5 h-5 text-accent-purple" />,
      title: "Ultra-Low Battery Consumption",
      desc: "Engineered with intelligent background geofencing APIs and passive location listeners that consume less than 1% battery over a 24-hour cycle.",
    },
    {
      icon: <Clock className="w-5 h-5 text-accent-orange" />,
      title: "Time-Window & Day Filtering",
      desc: "Combine location with time rules. For instance, silence only during Friday congregational prayers, college lecture hours (9 AM - 4 PM), or office shifts.",
    },
  ];

  const targetUseCases = [
    {
      title: "Places of Worship & Prayers",
      desc: "Mosques, Temples, Churches & Gurudwaras. Avoid embarrassing ringtones during prayer times, sermons, and spiritual gatherings without manual intervention.",
      badge: "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
    },
    {
      title: "Colleges, Schools & Libraries",
      desc: "Classrooms, lecture halls, reading rooms, and exam centers. Keep phones disciplined during study hours and automatically unmute during campus breaks.",
      badge: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    },
    {
      title: "Hospitals & Healthcare Clinics",
      desc: "Intensive care units, doctor consultation chambers, and quiet wards where ringing phones disturb patients and medical operations.",
      badge: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    },
    {
      title: "Corporate Offices & Meeting Rooms",
      desc: "Boardrooms, client pitches, and quiet open-office spaces. S1Pro ensures silence throughout business meetings and restores volume when heading home.",
      badge: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
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
          { label: "S1Pro (Auto Mobile Silent)" },
        ]}
      />

      {/* Hero / Header */}
      <header className="glass-panel border-white/[0.08] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[11px] font-bold text-accent-blue uppercase tracking-wider bg-accent-blue/10 px-3.5 py-1 rounded-full border border-accent-blue/20">
              Official ProDevOpz Software
            </span>
            <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Smart Geofencing Utility
            </span>
            <span className="text-[11px] font-medium text-foreground/50 bg-white/[0.02] px-3 py-1 rounded-full border border-white/5">
              Android &amp; Mobile Automation
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <figure className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black shrink-0">
              <Image
                src="/products/s1pro-app-icon.png"
                alt="S1Pro auto mobile silent mode app icon"
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
              <p className="text-sm sm:text-base font-semibold text-accent-orange mt-1.5 flex items-center gap-2">
                <VolumeX className="w-4 h-4 text-accent-orange inline" />
                <span>Auto Mobile Silent App by Target Area &amp; Range</span>
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed max-w-3xl pt-2 border-t border-white/[0.05]">
            <strong className="text-white">S1Pro</strong> is an intelligent mobile automation application developed by <strong className="text-white">ProDevOpz</strong>. It automatically switches your smartphone into <strong className="text-accent-orange">Silent, Vibrate, or Do Not Disturb (DND)</strong> mode as soon as you enter designated target locations—such as mosques, temples, classrooms, offices, or hospitals—within your selected distance range, and seamlessly restores your normal ringtone volume the moment you step outside.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/pricing"
              className="flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-accent-blue to-accent-purple px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              Get S1Pro for Your Device / Fleet
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/sql-compiler"
              className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2.5 rounded-xl border border-white/5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              SQLite Studio Product
            </Link>
            <Link
              href="/ezbill"
              className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2.5 rounded-xl border border-white/5 transition-colors"
            >
              EzBill Software
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Target Use Cases */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <MapPin className="w-5 h-5 text-accent-orange" />
          <h2 className="font-display font-bold text-xl text-white">
            Silence Phone Where It Matters Most
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {targetUseCases.map((u, i) => (
            <div key={i} className="glass-card p-6 border-white/[0.06] flex flex-col gap-3">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border w-fit ${u.badge}`}>
                {u.title}
              </span>
              <p className="text-xs text-foreground/75 leading-relaxed pt-1">
                {u.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <Smartphone className="w-5 h-5 text-accent-blue" />
          <h2 className="font-display font-bold text-xl text-white">
            Intelligent Features of S1Pro
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

      {/* How It Works Step-by-Step */}
      <section className="glass-panel border-white/[0.08] p-8 md:p-10 flex flex-col gap-6">
        <div className="flex items-center gap-2.5 border-b border-white/[0.05] pb-4">
          <Sliders className="w-5 h-5 text-accent-purple" />
          <h2 className="font-display font-bold text-xl text-white">
            How S1Pro Automates Your Sound Profile
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
            <span className="w-7 h-7 rounded-lg bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-xs font-black flex items-center justify-center">
              1
            </span>
            <h3 className="font-display font-bold text-sm text-white">
              Add Target Area &amp; Range
            </h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Search any place on the map or save your current location. Set your desired boundary range (e.g. 50 meters for a mosque hall or 200 meters for a college campus).
            </p>
          </div>

          <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
            <span className="w-7 h-7 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-black flex items-center justify-center">
              2
            </span>
            <h3 className="font-display font-bold text-sm text-white">
              Auto-Silent On Arrival
            </h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              When your smartphone crosses into the defined target range, S1Pro quietly silences the ringer and notification alerts without any button presses.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
            <span className="w-7 h-7 rounded-lg bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-black flex items-center justify-center">
              3
            </span>
            <h3 className="font-display font-bold text-sm text-white">
              Auto-Restore On Exit
            </h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              The moment you leave the target perimeter, S1Pro automatically returns your phone back to your normal sound profile so you never miss an incoming call.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy & Engineering Highlights */}
      <section className="glass-panel border-white/[0.06] p-8 md:p-10 flex flex-col gap-6">
        <div className="flex items-center gap-2.5 border-b border-white/[0.05] pb-4">
          <Layers className="w-5 h-5 text-accent-purple" />
          <h2 className="font-display font-bold text-xl text-white">
            Engineered by ProDevOpz
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
          S1Pro is engineered by ProDevOpz using native Android hardware APIs, fused location providers, hardware geofencing, and background Android WorkManager tasks. It runs 100% on-device: your private target locations and daily routines never leave your phone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold text-emerald-400">Zero Battery Drain</span>
            <span className="text-xs font-semibold text-white">Passive Fused Geofencing</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold text-accent-blue">100% Private</span>
            <span className="text-xs font-semibold text-white">Local-Only Location Storage</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold text-accent-orange">Emergency Bypass</span>
            <span className="text-xs font-semibold text-white">VIP Caller Exceptions</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="glass-panel border-white/[0.06] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="text-[10px] font-bold text-accent-blue uppercase tracking-wider">
            Smart Mobile Automation
          </span>
          <h2 className="font-display font-bold text-lg text-white">
            Never Forget to Silence Your Phone Again
          </h2>
          <p className="text-xs text-foreground/60 leading-relaxed">
            Interested in S1Pro or need a customized geofenced utility for your institution or enterprise fleet? Connect with the ProDevOpz engineering team.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/pricing"
            className="flex items-center gap-1.5 text-xs font-bold text-white bg-accent-blue px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Contact ProDevOpz
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
