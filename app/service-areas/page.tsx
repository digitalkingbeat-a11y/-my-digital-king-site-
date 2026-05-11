import type { Metadata } from "next";
import Link from "next/link";
import { faqs, serviceAreaCities } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tampa Bay DJ Service Areas",
  description:
    "Explore Digital King DJ service areas across Tampa, St. Pete, Clearwater, Largo, New Port Richey, and the greater Tampa Bay region.",
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors mb-10 inline-block font-semibold">
          Back to Home
        </Link>

        <div className="max-w-3xl">
          <p className="text-cyan-300 font-semibold uppercase tracking-[0.2em] text-sm">
            Service Areas
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white">
            Tampa Bay DJ Services by City
          </h1>
          <p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed">
            Digital King serves Tampa Bay clubs, weddings, private events, nightlife rooms, and brand activations with city-specific DJ planning.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceAreaCities.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="block rounded-2xl border border-white/10 bg-zinc-900 p-6 hover:border-cyan-400/60 transition-colors"
            >
              <h2 className="text-2xl font-bold text-cyan-300">{area.city} DJ Services</h2>
              <p className="mt-3 text-zinc-400">{area.metaDescription}</p>
              <p className="mt-5 text-sm font-bold text-white">View local page</p>
            </Link>
          ))}
        </div>

        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-3xl font-bold text-white">Tampa Bay DJ FAQ</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-zinc-950 border border-white/10 p-6">
                <h3 className="font-bold text-cyan-300">{faq.question}</h3>
                <p className="mt-3 text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
