import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Private Party DJ Tampa Bay | Professional Event DJ | Digital King",
  description:
    "Professional DJ for private parties, house events, weddings, birthdays, and celebrations in Tampa Bay with custom playlists and seamless mixing.",
};

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors mb-10 inline-block font-semibold">
          Back to Home
        </Link>

        <h1 className="text-5xl font-extrabold text-purple-400 mb-8 uppercase tracking-tight">Private Parties & Events</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-zinc-300 leading-relaxed mb-8">
            Book a professional Tampa Bay DJ for birthdays, house parties, weddings, and private events.
            Custom playlists and seamless mixing create the perfect vibe for any celebration.
          </p>

          <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Event Services Include:</h2>
            <ul className="space-y-4 text-zinc-400">
              <li><strong className="text-purple-400">Custom Playlists:</strong> Music tailored specifically to your event&apos;s theme and guests.</li>
              <li><strong className="text-purple-400">Full Sound Setup:</strong> Professional audio equipment provided for any venue size.</li>
              <li><strong className="text-purple-400">Vibe Control:</strong> From background chill to high-energy dance floors.</li>
              <li><strong className="text-purple-400">Reliable & Professional:</strong> On-time, prepared, and focused on making your event a success.</li>
            </ul>
          </div>

          <Link href="/booking" className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all">
            Book Your Private Event
          </Link>
        </div>
      </section>
    </main>
  );
}
