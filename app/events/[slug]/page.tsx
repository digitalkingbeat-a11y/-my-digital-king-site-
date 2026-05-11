import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoArticlePage from "@/components/SeoArticlePage";
import { getCollection, getContentEntry, getFaqSchema, siteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return (getCollection("/events")?.entries ?? []).map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentEntry("/events", slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.title,
    description: entry.description,
    alternates: {
      canonical: entry.path,
    },
  };
}

export default async function EventArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getContentEntry("/events", slug);

  if (!entry) {
    notFound();
  }

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.description,
    url: `${siteUrl}${entry.path}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([eventSchema, getFaqSchema()]) }}
      />
      <SeoArticlePage
        eyebrow="Event Guide"
        title={entry.title}
        description={entry.description}
        backHref="/events"
        backLabel="Back to Events"
      />
    </>
  );
}
