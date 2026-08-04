import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Internship with MSME & ISO Certificate | ProDevOpz",
  description:
    "Join ProDevOpz's industry-grade free internship programs. Excel in Web Development, Mobile Apps, Cloud DevOps, AI/ML, and Cyber Security. Earn verified certificates of completion.",
  keywords: [
    "free internship",
    "internship",
    "internship with certificate",
    "free internship with certificate",
    "web development internship",
    "app development internship",
    "cloud computing internship",
    "cyber security internship",
    "free certificates",
    "msme certified internship",
  ],
};

export default function InternshipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
