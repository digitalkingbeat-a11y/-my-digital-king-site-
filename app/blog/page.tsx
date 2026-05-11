import type { Metadata } from "next";
import SeoCollectionHub from "@/components/SeoCollectionHub";
import { getCollection } from "@/lib/seo";

const collection = getCollection("/blog");

export const metadata: Metadata = {
  title: "Tampa Bay DJ Blog",
  description:
    "DJ planning guides for Tampa Bay events, private parties, nightlife bookings, weddings, and music strategy from Digital King.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <SeoCollectionHub
      eyebrow="DJ Blog"
      title="Tampa Bay DJ Planning Guides"
      description="Practical local SEO content for people searching how to book a DJ, plan a private event, and build the right music direction for Tampa Bay rooms."
      basePath="/blog"
      entries={collection?.entries ?? []}
    />
  );
}
