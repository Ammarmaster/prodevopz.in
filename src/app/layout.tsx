import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import AIChatbot from "@/components/AIChatbot";

export const metadata: Metadata = {
  title: "ProDevOpz | Building Intelligent Software for the Future",
  description:
    "Transforming complex startup and enterprise ideas into AI-powered digital products. Leading custom web development, android apps, iOS apps, cloud migrations, and DevOps services.",
  keywords: [
    "Software Development Company India",
    "AI Development Company",
    "React Native Development Company",
    "Flutter Development Company",
    "Android App Development",
    "iOS App Development",
    "ERP Development",
    "CRM Software",
    "POS Software",
    "Restaurant ERP",
    "DevOps Company",
    "Online Internship India",
    "Web Development Internship",
    "Internship Belagavi",
  ],
  metadataBase: new URL("https://prodevopz.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ProDevOpz | Custom Software & AI Development Solutions",
    description:
      "Official website of ProDevOpz. Custom website development, mobile apps, artificial intelligence engineering, and DevOps automation.",
    url: "https://prodevopz.in",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProDevOpz | AI & Cloud Software Engineering",
    description:
      "Accelerating startup growth with next-gen AI applications, microservices, and premium UX.",
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
