import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import AIChatbot from "@/components/AIChatbot";

export const metadata: Metadata = {
  title: {
    default: "ProDevOpz | Software Development & Technology Company",
    template: "%s | ProDevOpz",
  },
  description:
    "ProDevOpz is a custom software development and technology company building scalable web applications, mobile apps, AI solutions, and software products including EzBill.",
  keywords: [
    "ProDevOpz",
    "ProDevOpz company",
    "ProDevOpz software",
    "ProDevOpz jobs",
    "EzBill",
    "EZBill",
    "EZ Bill",
    "software development company",
    "custom software development",
    "technology company",
    "AI development",
    "mobile app development",
    "web development company",
    "enterprise software",
    "billing software",
    "MSME certified software firm",
  ],
  manifest: "/manifest.json",
  verification: {
    google: "cPtP_zDyyYBryhpHiTEuNMxlYvTjaKErYo9cMyyPLI4",
  },
  metadataBase: new URL("https://prodevopz.jobsio.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ProDevOpz | Software Development & Technology Company",
    description:
      "ProDevOpz is a custom software development and technology company building scalable web applications, mobile apps, AI solutions, and software products including EzBill.",
    url: "https://prodevopz.jobsio.in",
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
    title: "ProDevOpz | Software Development & Technology Company",
    description:
      "ProDevOpz is a custom software development and technology company building scalable web applications, mobile apps, AI solutions, and software products including EzBill.",
    images: ["https://prodevopz.jobsio.in/logo.jpg"],
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
