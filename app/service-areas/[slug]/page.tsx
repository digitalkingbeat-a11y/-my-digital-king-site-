import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  business,
  faqs,
  getCityBySlug,
  getFaqSchema,
  serviceAreaCities,
  services,
  siteUrl,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreaCities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {};
  }

  return {
    title: city.title,
    description: city.metaDescription,
    alternates: {
      canonical: `/service-areas/${city.slug}`,
    },
    openGraph: {
      type: "website",
      url: `/service-areas/${city.slug}`,
      title: city.title,
      description: city.metaDescription,
      images: [
        {
          url: "/dj-crowd.jpg",
          width: 1200,
          height: 630,
          alt: `${business.name} DJ services in ${city.city}`,
        },
      ],
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${business.name} ${city.city} DJ Services`,
    description: city.metaDescription,
    provider: {
      "@type": "EntertainmentBusiness",
      name: business.name,
      image: business.image,
      url: siteUrl,
      telephone: business.phone,
      email: business.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: business.city,
        addressRegion: business.region,
        postalCode: business.postalCode,
        addressCountry: business.country,
      },
    },
    areaServed: {
      "@type": "City",
      name: city.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.county,
      },
    },
    serviceType: services.map((service) => service.name),
    url: `${siteUrl}/service-areas/${city.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: `${siteUrl}/service-areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${city.city} DJ Services`,
        item: `${siteUrl}/service-areas/${city.slug}`,
      },
    ],
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, getFaqSchema()]),
        }}
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Home
          </Link>
          <span className="text-zinc-600">/</span>
          <Link href="/service-areas" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Service Areas
          </Link>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <p className="text-cyan-300 font-semibold uppercase tracking-[0.2em] text-sm">
              {city.county} DJ
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white">
              {city.h1}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed">
              {city.intro}
            </p>
            <p className="mt-5 text-zinc-400 leading-relaxed">
              {city.localAngle} Every booking can be shaped around the venue, timeline, audience, and exact music direction.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="rounded-full bg-cyan-500 px-8 py-4 text-center font-bold text-black hover:bg-cyan-400 transition-colors"
              >
                Request a {city.city} DJ Quote
              </Link>
              <a
                href={`mailto:${business.email}?subject=${encodeURIComponent(`${city.city} DJ Booking Inquiry`)}`}
                className="rounded-full border border-white/20 px-8 py-4 text-center font-bold text-white hover:border-cyan-400 transition-colors"
              >
                Email Digital King
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <h2 className="text-2xl font-bold text-white">Popular {city.city} Event Types</h2>
            <ul className="mt-5 space-y-3 text-zinc-300">
              {city.eventTypes.map((eventType) => (
                <li key={eventType} className="border-b border-white/10 pb-3 last:border-b-0">
                  {eventType}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <section className="mt-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white">DJ Services in {city.city}</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={service.path}
                  className="rounded-2xl bg-zinc-900 border border-white/10 p-5 hover:border-cyan-400/60 transition-colors"
                >
                  <h3 className="font-bold text-cyan-300">{service.name}</h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Learn how Digital King supports {service.name.toLowerCase()} across Tampa Bay.
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">Neighborhoods and Nearby Areas</h2>
            <p className="mt-4 text-zinc-400">
              Digital King can support events across {city.city} and nearby areas including:
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {city.neighborhoods.map((neighborhood) => (
                <span key={neighborhood} className="rounded-full bg-zinc-900 border border-white/10 px-4 py-2 text-sm text-zinc-300">
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-3xl font-bold text-white">{city.city} DJ FAQ</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-zinc-950 border border-white/10 p-6">
                <h3 className="font-bold text-cyan-300">{faq.question}</h3>
                <p className="mt-3 text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-3xl font-bold text-white">Other Tampa Bay DJ Service Areas</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {serviceAreaCities
              .filter((area) => area.slug !== city.slug)
              .map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-cyan-400 hover:text-white transition-colors"
                >
                  {area.city} DJ Services
                </Link>
              ))}
          </div>
        </section>
      </section>
    </main>
  );
}
