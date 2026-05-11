import Link from "next/link";
import { faqs, serviceAreaCities, services } from "@/lib/seo";

type SeoArticlePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
};

export default function SeoArticlePage({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
}: SeoArticlePageProps) {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <Link href={backHref} className="text-cyan-400 hover:text-cyan-300 transition-colors mb-10 inline-block font-semibold">
          {backLabel}
        </Link>

        <p className="text-cyan-300 font-semibold uppercase tracking-[0.2em] text-sm">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed">
          {description}
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {services.slice(0, 3).map((service) => (
            <Link
              key={service.slug}
              href={service.path}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-5 hover:border-cyan-400/60 transition-colors"
            >
              <h2 className="font-bold text-cyan-300">{service.name}</h2>
              <p className="mt-2 text-sm text-zinc-400">
                Connect this topic to a booking-ready Digital King service page.
              </p>
            </Link>
          ))}
        </div>

        <section className="mt-14 space-y-8 text-zinc-300 leading-relaxed">
          <div>
            <h2 className="text-3xl font-bold text-white">Planning Notes</h2>
            <p className="mt-4">
              A strong event starts with the room, the timeline, and the crowd. Digital King uses those details to shape music direction, pacing, announcements, transitions, and the final booking plan.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Tampa Bay Service Fit</h2>
            <p className="mt-4">
              This page supports searches across Tampa Bay while linking users toward city pages and booking actions. It gives search engines a clear relationship between local intent, event type, and DJ service pages.
            </p>
          </div>
        </section>

        <section className="mt-14 border-t border-white/10 pt-10">
          <h2 className="text-3xl font-bold text-white">Related Service Areas</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {serviceAreaCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-cyan-400 hover:text-white transition-colors"
              >
                {city.city} DJ
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-white/10 pt-10">
          <h2 className="text-3xl font-bold text-white">FAQ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {faqs.slice(0, 2).map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
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
