import Image from "next/image";
import Link from "next/link";
import { contentCollections, serviceAreaCities } from "@/lib/seo";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/dj-crowd.jpg"
            alt="Digital King performing for a Tampa Bay crowd"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-cyan-400 drop-shadow-[0_4px_18px_rgba(0,255,255,0.45)]">
            Tampa Bay&apos;s Premier DJ
          </h1>

          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-cyan-300">
            DJ & Music Producer
          </h2>

          <p className="mt-4 text-lg text-zinc-300">
            Professional Tampa Bay DJ for clubs, parties, and private events
          </p>

          <Link
            href="/booking"
            className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-pink-500 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Book Now
          </Link>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="sms:17278083842"
              className="bg-green-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-400 transition-colors"
            >
              Text Me
            </a>
            <a
              href="mailto:Digitalkingbeat@gmail.com?subject=Booking Inquiry - Digital King&body=Name:%0A%0AEvent Type:%0A%0ADate:%0A%0ALocation:%0A%0ABudget:%0A%0ADetails:%0A"
              className="bg-blue-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-400 transition-colors"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-cyan-400 drop-shadow-[0_4px_18px_rgba(0,255,255,0.35)]">
            Book Digital King
          </h2>
          <p className="mt-4 text-zinc-400 text-lg">
            Ready to elevate your event? Reach out directly and let&apos;s make it happen.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5">
              <div className="text-cyan-400 font-extrabold text-lg mb-1">Step 1</div>
              <p className="text-white font-semibold">Text or email your event details</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5">
              <div className="text-cyan-400 font-extrabold text-lg mb-1">Step 2</div>
              <p className="text-white font-semibold">I confirm availability</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5">
              <div className="text-cyan-400 font-extrabold text-lg mb-1">Step 3</div>
              <p className="text-white font-semibold">Pay deposit to secure the date</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/booking"
              className="inline-block rounded-full bg-purple-600 px-8 py-4 text-white font-bold text-lg hover:bg-purple-500 transition-colors hover:scale-105 transition-transform"
            >
              Request Deposit Link
            </Link>
            <p className="mt-3 text-sm text-zinc-400">
              Booking is confirmed after availability is approved and deposit is paid.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="sms:17278083842"
              className="flex-1 bg-green-600 hover:bg-green-500 text-white px-8 py-5 rounded-2xl text-xl font-bold transition-colors"
            >
              Text Me
            </a>
            <Link
              href="/booking"
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-2xl text-xl font-bold transition-colors flex items-center justify-center gap-2"
            >
              Open Booking Form
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-white text-lg">Club Nights</h3>
              <p className="mt-1 text-zinc-400 text-sm">
                High-energy sets for Tampa Bay&apos;s top venues.
              </p>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-white text-lg">Private Events</h3>
              <p className="mt-1 text-zinc-400 text-sm">
                Birthdays, weddings, corporate events - fully customized.
              </p>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-white text-lg">Custom Sets</h3>
              <p className="mt-1 text-zinc-400 text-sm">
                Bespoke mixes tailored to your vibe and crowd.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-cyan-300 font-semibold uppercase tracking-[0.2em] text-sm">
              Tampa Bay DJ
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
              Local DJ Services Across Tampa Bay
            </h2>
            <p className="mt-5 text-lg text-zinc-300 leading-relaxed">
              Digital King serves Tampa Bay clubs, weddings, private parties, corporate events, nightlife venues, and custom music experiences with local pages built for the searches people actually use.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceAreaCities.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="rounded-2xl border border-white/10 bg-zinc-900 p-6 hover:border-cyan-400/60 transition-colors"
              >
                <h3 className="text-2xl font-bold text-cyan-300">{area.city} DJ Services</h3>
                <p className="mt-3 text-zinc-400">{area.metaDescription}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/service-areas"
              className="inline-block rounded-full border border-white/20 px-6 py-3 font-bold text-white hover:border-cyan-400 transition-colors"
            >
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-cyan-300 font-semibold uppercase tracking-[0.2em] text-sm">
              SEO Content Engine
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
              DJ Planning Resources for Events, Venues, and Nightlife
            </h2>
            <p className="mt-5 text-lg text-zinc-300 leading-relaxed">
              These clusters support Tampa Bay DJ searches beyond the homepage: city pages, event planning pages, venue resources, nightlife topics, and booking guides.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {contentCollections.map((collection) => (
              <Link
                key={collection.basePath}
                href={collection.basePath}
                className="rounded-2xl border border-white/10 bg-black p-6 hover:border-cyan-400/60 transition-colors"
              >
                <h3 className="text-xl font-bold text-cyan-300">{collection.type} Pages</h3>
                <p className="mt-3 text-zinc-400">
                  {collection.entries.length} starter SEO page{collection.entries.length === 1 ? "" : "s"} for this cluster.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
