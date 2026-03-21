import { MetadataRoute } from "next";

const BASE_URL = "https://atar-bclick.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const examples = [
    "restaurant",
    "barbershop",
    "lawyer",
    "gym",
    "dentist",
    "realestate",
    "photographer",
    "electrician",
    "beauty",
    "tutor",
  ];

  const exampleRoutes: MetadataRoute.Sitemap = examples.map((slug) => ({
    url: `${BASE_URL}/examples/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...exampleRoutes,
  ];
}
