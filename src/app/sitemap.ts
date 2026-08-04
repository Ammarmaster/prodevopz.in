import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prodevopz.in";

  const staticRoutes = [
    "",
    "/about",
    "/portfolio",
    "/pricing",
    "/blog",
    "/careers",
    "/internship",
    "/verify-certificate",
    "/services/ai-development",
    "/services/mobile-development",
    "/services/cloud-services",
    "/services/erp-crm-systems",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") || route === "/internship" ? 0.9 : 0.7,
  }));
}
