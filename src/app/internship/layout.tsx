import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Internships for Students in India with Certificate & LOR | ProDevOpz",
  description:
    "Apply for free online technical internships in India at ProDevOpz. Remote project-based tracks in Web Development, Full Stack, AI/ML, Cloud DevOps, Android & Cyber Security for BCA, BTech, BE & MCA students. Earn verified MSME & ISO certificates, LOR & Offer Letter.",
  alternates: {
    canonical: "/internship",
  },
  keywords: [
    "internship for students",
    "internships for students in india",
    "free internship",
    "free internships in india",
    "free internship with certificate",
    "internship with certificate",
    "internship with offer letter",
    "internship with LOR",
    "internship certificate",
    "internship for BCA students",
    "internship for BTech students",
    "internship for BE students",
    "internship for computer science students",
    "software development internship",
    "web development internship",
    "full stack development internship",
    "Python internship",
    "Java internship",
    "AI internship",
    "machine learning internship",
    "data science internship",
    "frontend internship",
    "backend internship",
    "React internship",
    "Next.js internship",
    "remote internship for students",
    "online internship for students",
    "virtual internship",
    "internship for freshers",
    "internship for college students",
    "internship for final year students",
    "internship without experience",
    "work from home internship",
    "free technical internship",
    "msme certified internship",
    "iso certified internship",
  ],
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
    title: "Free Internships for Students in India with Certificate & LOR | ProDevOpz",
    description:
      "Join ProDevOpz remote technical internship programs. Practical engineering projects in Web Development, AI/ML, Cloud DevOps & Cyber Security with verified MSME/ISO certificates and LOR.",
    url: "https://prodevopz.jobsio.in/internship",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://prodevopz.jobsio.in/logo.jpg",
        width: 512,
        height: 512,
        alt: "ProDevOpz Technical Internship Program in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Internships for Students in India with Certificate & LOR | ProDevOpz",
    description:
      "Apply for free online technical internships in India. Remote training in Web Dev, AI/ML, Cloud & DevOps with MSME/ISO certificates.",
    images: ["https://prodevopz.jobsio.in/logo.jpg"],
  },
};

export default function InternshipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
