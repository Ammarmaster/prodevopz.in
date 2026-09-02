import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/admin/*",
        "/internship/dashboard",
        "/client",
      ],
    },
    sitemap: "https://prodevopz.jobsio.in/sitemap.xml",
  };
}
