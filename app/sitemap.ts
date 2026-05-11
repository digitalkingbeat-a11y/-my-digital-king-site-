import type { MetadataRoute } from "next";
import { contentCollections, serviceAreaCities, services, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/booking",
    "/press-kit",
    "/service-areas",
    "/blog",
    "/venues",
    "/nightlife",
    "/events",
  ];

  const serviceRoutes = services
    .filter((service) => service.path !== "/booking")
    .map((service) => service.path);

  const cityRoutes = serviceAreaCities.map((city) => `/service-areas/${city.slug}`);

  const contentRoutes = contentCollections.flatMap((collection) => [
    collection.basePath,
    ...collection.entries.map((entry) => `${collection.basePath}/${entry.slug}`),
  ]);

  const routes = Array.from(new Set([...staticRoutes, ...serviceRoutes, ...cityRoutes, ...contentRoutes]));

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/service-areas") ? 0.85 : 0.7,
  }));
}
