import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prodevopz.jobsio.in";

  const staticRoutes = [
    "",
    "/about",
    "/founder/ammar-master",
    "/ezbill",
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
    "/services/web-development",
    "/services/restaurant-erp",
    "/services/restaurant-pos",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") || route === "/ezbill" || route === "/internship" ? 0.9 : 0.7,
  }));
}
