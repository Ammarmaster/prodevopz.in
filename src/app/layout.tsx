import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import AIChatbot from "@/components/AIChatbot";

export const metadata: Metadata = {
  title: "ProDevOpz | Custom Software Development, Internships & AI Solutions",
  description:
    "ProDevOpz is a leading custom software development agency, mobile app builder, and AI engineering firm. Join our industry-recognized free internships with verified MSME & ISO certificates of completion.",
  keywords: [
    "prodevopz",
    "internship",
    "free internship",
    "certificate",
    "free certificate",
    "software making agency",
    "custom software development company",
    "software development agency",
    "free internship with certificate",
    "online web development internship",
    "app development internship",
    "cloud and devops internship",
    "msme certified certificate",
    "iso certified certificate",
    "verified certificate registry",
  ],
  manifest: "/manifest.json",
  verification: {
    google: "cPtP_zDyyYBryhpHiTEuNMxlYvTjaKErYo9cMyyPLI4",
  },
  metadataBase: new URL("https://prodevopz.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ProDevOpz | Custom Software Development, Internships & AI Solutions",
    description:
      "ProDevOpz is a leading custom software development agency and AI engineering firm. Apply for our free internships with verified MSME & ISO certificates.",
    url: "https://prodevopz.in",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProDevOpz | Custom Software & Internships",
    description:
      "Leading custom software development agency and AI engineering firm. Join our free internships with verified certificates.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#030303] text-[#f5f5f7] relative">
        <MouseGlow />
        
        {/* Ambient Aurora glow layout backgrounds */}
        <div className="aurora-bg">
          <div className="aurora-glow-1" />
          <div className="aurora-glow-2" />
          <div className="aurora-glow-3" />
        </div>

        <Navbar />
        <main className="flex-grow flex flex-col relative z-10">
          {children}
        </main>
        <AIChatbot />
        <Footer />
      </body>
    </html>
  );
}
