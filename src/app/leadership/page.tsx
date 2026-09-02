import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Users,
  MapPin,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Building,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership Team | ProDevOpz",
  description:
    "Meet the executive leadership team at ProDevOpz: CEO Saad Mulla, Co-Founder Ruvaid Shaikh, and Managing Director Vaibhav Yalamalle driving software innovation.",
  alternates: {
    canonical: "/leadership",
  },
  openGraph: {
    title: "Leadership Team | ProDevOpz",
    description:
      "Meet the executive leadership team at ProDevOpz: CEO Saad Mulla, Co-Founder Ruvaid Shaikh, and Managing Director Vaibhav Yalamalle.",
    url: "https://prodevopz.jobsio.in/leadership",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://prodevopz.jobsio.in/logo.jpg",
        width: 512,
        height: 512,
        alt: "ProDevOpz Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership Team | ProDevOpz",
    description:
      "Executive leadership at ProDevOpz: Saad Mulla (CEO), Ruvaid Shaikh (Co-Founder), and Vaibhav Yalamalle (MD).",
    images: ["https://prodevopz.jobsio.in/logo.jpg"],
  },
};

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Saad Mulla",
      role: "Chief Executive Officer (CEO)",
      company: "ProDevOpz",
      location: "Dodda Ballapur, Karnataka, India",
      education: "Rani Channamma University (RCUB)",
      image: "/team/saad-mulla-ceo-prodevopz.jpg",
      imageAlt: "Saad Mulla, CEO of ProDevOpz",
      slug: "saad-mulla",
      badgeColor: "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
      bio: "Leading executive strategy, operational execution, strategic industry partnerships, and enterprise client delivery at ProDevOpz.",
    },
    {
      name: "Ruvaid Shaikh",
      role: "Co-Founder",
      company: "ProDevOpz",
      location: "Sangli, Maharashtra, India",
      education: "Sanjay Ghodawat University (2022 – 2026)",
      image: "/team/ruvaid-shaikh-cofounder-prodevopz.jpg",
      imageAlt: "Ruvaid Shaikh, Co-Founder of ProDevOpz",
      slug: "ruvaid-shaikh",
      badgeColor: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
      bio: "Driving technology innovation, co-founding product initiatives, systems engineering, and scalable software ecosystems at ProDevOpz.",
    },
    {
      name: "Vaibhav Yalamalle",
      role: "Managing Director (MD)",
      company: "ProDevOpz",
      location: "Athani, Karnataka, India",
      education: "KLE'S S.C.P Arts & D.D. Shirol Commerce College, Mahalingpur (PG)",
      image: "/team/vaibhav-yalamalle-md-prodevopz.jpg",
      imageAlt: "Vaibhav Yalamalle, Managing Director of ProDevOpz",
      slug: "vaibhav-yalamalle",
      badgeColor: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
      bio: "Managing corporate governance, organizational development, commercial compliance, and strategic management across business units.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://prodevopz.jobsio.in/leadership",
        "url": "https://prodevopz.jobsio.in/leadership",
        "name": "Leadership Team | ProDevOpz",
        "description": "Executive leadership team of ProDevOpz Technologies.",
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
      ...leaders.map((leader) => ({
        "@type": "Person",
        "@id": `https://prodevopz.jobsio.in/leadership/${leader.slug}#person`,
        "name": leader.name,
        "jobTitle": leader.role,
        "worksFor": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        },
        "image": `https://prodevopz.jobsio.in${leader.image}`,
        "url": `https://prodevopz.jobsio.in/leadership/${leader.slug}`,
        "alumniOf": leader.education,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": leader.location
        }
      }))
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-14 text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Leadership" }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-xs font-bold text-accent-orange uppercase tracking-widest bg-accent-orange/10 px-3.5 py-1.5 rounded-full w-fit mx-auto border border-accent-orange/20">
          Executive Leadership
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
          Meet Our Leadership Team
        </h1>
        <p className="text-sm text-foreground/60 leading-relaxed">
          The visionary leaders guiding ProDevOpz in delivering world-class software engineering, AI innovations, enterprise ERP solutions, and digital products.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leaders.map((member, i) => (
          <div
            key={i}
            className="glass-card p-6 flex flex-col justify-between border-white/[0.08] relative overflow-hidden group hover:border-white/20 transition-all"
          >
            <div className="flex flex-col gap-5">
              {/* Image & Badge */}
              <div className="flex flex-col items-center sm:items-start gap-4">
                <figure className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-white/[0.02] shrink-0">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 640px) 112px, 128px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </figure>
                <div className="flex flex-col gap-1 text-center sm:text-left">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border w-fit mx-auto sm:mx-0 ${member.badgeColor}`}
                  >
                    {member.role}
                  </span>
                  <h2 className="font-display font-bold text-xl text-white mt-1">
                    {member.name}
                  </h2>
                  <span className="text-xs font-semibold text-foreground/50 flex items-center justify-center sm:justify-start gap-1">
                    <Building className="w-3.5 h-3.5 text-accent-orange" />
                    {member.company}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <p className="text-xs text-foreground/70 leading-relaxed border-t border-white/[0.05] pt-4">
                {member.bio}
              </p>

              <div className="flex flex-col gap-2 text-[11px] text-foreground/60 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent-orange shrink-0 mt-0.5" />
                  <span>{member.location}</span>
                </div>
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-accent-purple shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{member.education}</span>
                </div>
              </div>
            </div>

            {/* Profile Link Button */}
            <div className="border-t border-white/[0.05] pt-4 mt-6">
              <Link
                href={`/leadership/${member.slug}`}
                className="flex items-center justify-between text-xs font-bold text-white bg-white/[0.04] hover:bg-white/[0.08] px-4 py-2.5 rounded-xl border border-white/10 transition-colors group-hover:border-accent-orange/40"
              >
                <span>View Full Profile</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent-orange group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Founder Reference Banner */}
      <section className="glass-panel border-white/[0.06] p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider">
            Founder &amp; Principal Technologist
          </span>
          <h2 className="font-display font-bold text-xl text-white">
            Looking for Founder Ammar Master?
          </h2>
          <p className="text-xs text-foreground/60 leading-relaxed">
            Learn about Ammar Master (Jalaluddin Master), the Founder and Software Engineer behind ProDevOpz, systems architecture, and the EzBill billing platform.
          </p>
        </div>
        <Link
          href="/founder/ammar-master"
          className="inline-flex items-center gap-2 text-xs font-bold text-white bg-accent-orange px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity shrink-0"
        >
          <UserCheck className="w-4 h-4" />
          Founder Profile
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}
