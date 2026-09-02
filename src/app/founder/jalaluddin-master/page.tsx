import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Md Jalaluddin Master (Ammar Master) — Founder of ProDevOpz",
  description:
    "Md Jalaluddin Master, also known as Ammar Master, is the Founder and Software Engineer behind ProDevOpz and EzBill billing software.",
  alternates: {
    canonical: "/founder/ammar-master",
  },
  openGraph: {
    title: "Md Jalaluddin Master (Ammar Master) — Founder of ProDevOpz",
    description:
      "Md Jalaluddin Master, also known as Ammar Master, is the Founder and Software Engineer behind ProDevOpz and EzBill.",
    url: "https://prodevopz.jobsio.in/founder/ammar-master",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://prodevopz.jobsio.in/ammar-master-jalaluddin-master-founder-prodevopz.jpg",
        width: 1000,
        height: 1000,
        alt: "Md Jalaluddin Master (Ammar Master), Founder of ProDevOpz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Jalaluddin Master (Ammar Master) — Founder of ProDevOpz",
    description:
      "Md Jalaluddin Master, also known as Ammar Master, is the Founder and Software Engineer behind ProDevOpz and EzBill.",
    images: ["https://prodevopz.jobsio.in/ammar-master-jalaluddin-master-founder-prodevopz.jpg"],
  },
};

export default function JalaluddinMasterAliasPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-8 text-left">
      <Breadcrumbs
        items={[
          { label: "Founder", href: "/about" },
          { label: "Md Jalaluddin Master" },
        ]}
      />

      <div className="glass-panel border-white/[0.08] p-8 md:p-12 flex flex-col sm:flex-row items-center gap-8 text-left">
        <figure className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shrink-0 bg-white/[0.02]">
          <Image
            src="/ammar-master-jalaluddin-master-founder-prodevopz.jpg"
            alt="Md Jalaluddin Master (Ammar Master), Founder of ProDevOpz"
            fill
            priority
            sizes="192px"
            className="object-cover object-top"
          />
        </figure>

        <div className="flex flex-col gap-4">
          <span className="text-[11px] font-bold text-accent-orange uppercase tracking-wider bg-accent-orange/10 px-3.5 py-1 rounded-full border border-accent-orange/20 w-fit">
            Founder Profile
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-white">
            Md Jalaluddin Master
          </h1>
          <p className="text-sm font-semibold text-accent-purple">
            Also known professionally as Ammar Master / Jalaluddin Master
          </p>
          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
            Md Jalaluddin Master (Ammar Master) is the Founder and Software Engineer behind ProDevOpz and the EzBill billing software platform.
          </p>
          <div className="pt-2">
            <Link
              href="/founder/ammar-master"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-accent-orange px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              <UserCheck className="w-4 h-4" />
              View Full Profile (Ammar Master)
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
