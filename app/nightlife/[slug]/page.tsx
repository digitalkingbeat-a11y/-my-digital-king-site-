import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoArticlePage from "@/components/SeoArticlePage";
import { getCollection, getContentEntry, getFaqSchema, siteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return (getCollection("/nightlife")?.entries ?? []).map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentEntry("/nightlife", slug);

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

export default async function NightlifeArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getContentEntry("/nightlife", slug);

  if (!entry) {
    notFound();
  }

  const nightlifeSchema = {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([nightlifeSchema, getFaqSchema()]) }}
      />
      <SeoArticlePage
        eyebrow="Nightlife Guide"
        title={entry.title}
        description={entry.description}
        backHref="/nightlife"
        backLabel="Back to Nightlife"
      />
    </>
  );
}
