import type { Metadata } from "next";
import SeoCollectionHub from "@/components/SeoCollectionHub";
import { getCollection } from "@/lib/seo";

const collection = getCollection("/events");

export const metadata: Metadata = {
  title: "Tampa Bay Wedding and Event DJ",
  description:
    "Wedding, corporate event, birthday party, and private event DJ planning pages for Digital King in Tampa Bay.",
  alternates: {
    canonical: "/events",
  },
};

export default function EventsPage() {
  return (
    <SeoCollectionHub
      eyebrow="Event SEO"
      title="Wedding and Private Event DJ Pages"
      description="Planning pages for Tampa Bay weddings, birthdays, corporate events, private parties, and event hosts looking for a professional DJ."
      basePath="/events"
      entries={collection?.entries ?? []}
    />
  );
}
