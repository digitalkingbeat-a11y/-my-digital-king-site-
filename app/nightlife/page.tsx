import type { Metadata } from "next";
import SeoCollectionHub from "@/components/SeoCollectionHub";
import { getCollection } from "@/lib/seo";

const collection = getCollection("/nightlife");

export const metadata: Metadata = {
  title: "Tampa Bay Nightlife DJ",
  description:
    "Nightlife-focused DJ pages for Tampa Bay clubs, bars, promoters, and venues looking for high-energy Digital King sets.",
  alternates: {
    canonical: "/nightlife",
  },
};

export default function NightlifePage() {
  return (
    <SeoCollectionHub
      eyebrow="Nightlife SEO"
      title="Tampa Bay Nightlife DJ Sets"
      description="Search-focused nightlife pages for clubs, bars, promoters, and venues that need a crowd-aware DJ in Tampa Bay."
      basePath="/nightlife"
      entries={collection?.entries ?? []}
    />
  );
}
