import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://darktidestudio.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://darktidestudio/es",
          en: "https://darktidestudio/en",
        },
      },
    },
  ];
}
