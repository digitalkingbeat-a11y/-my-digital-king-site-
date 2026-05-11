import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoArticlePage from "@/components/SeoArticlePage";
import { getCollection, getContentEntry, getFaqSchema, siteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return (getCollection("/blog")?.entries ?? []).map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentEntry("/blog", slug);

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

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getContentEntry("/blog", slug);

  if (!entry) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: entry.title,
    description: entry.description,
    url: `${siteUrl}${entry.path}`,
    author: {
      "@type": "Person",
      name: "Digital King",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, getFaqSchema()]) }}
      />
      <SeoArticlePage
        eyebrow="DJ Planning Guide"
        title={entry.title}
        description={entry.description}
        backHref="/blog"
        backLabel="Back to Blog"
      />
    </>
  );
}
