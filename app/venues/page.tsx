import type { Metadata } from "next";
import SeoCollectionHub from "@/components/SeoCollectionHub";
import { getCollection } from "@/lib/seo";

const collection = getCollection("/venues");

export const metadata: Metadata = {
  title: "Tampa Bay DJ Venue Resources",
  description:
    "Venue-focused DJ planning pages for Tampa Bay clubs, private event spaces, bars, and hospitality teams booking Digital King.",
  alternates: {
    canonical: "/venues",
  },
};

export default function VenuesPage() {
  return (
    <SeoCollectionHub
      eyebrow="Venue SEO"
      title="DJ Venue Planning Resources"
      description="Resources for venue owners, promoters, and event planners who need a professional Tampa Bay DJ booking workflow."
      basePath="/venues"
      entries={collection?.entries ?? []}
    />
  );
}
