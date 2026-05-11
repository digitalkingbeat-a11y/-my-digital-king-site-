import Image from "next/image";
import Link from "next/link";

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
    </main>
  );
}
