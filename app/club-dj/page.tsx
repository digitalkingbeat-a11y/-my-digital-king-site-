import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Club DJ Services Tampa Bay | High-Energy Sets | Digital King",
  description:
    "Book Digital King for your next club night in Tampa, St. Pete, or Clearwater. High-energy Hip-Hop, DnB, Jungle, and Bass House sets for nightlife venues.",
};

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors mb-10 inline-block font-semibold">
          Back to Home
        </Link>

        <h1 className="text-5xl font-extrabold text-cyan-400 mb-8 uppercase tracking-tight">Club DJ Services</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-zinc-300 leading-relaxed mb-8">
            Bring the energy to your venue with a Tampa Bay DJ specializing in Hip-Hop, DnB, Jungle, and Bass House.
            Perfect for bars, clubs, and nightlife events looking to keep the crowd moving all night.
          </p>

          <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Why Book Digital King for Your Club?</h2>
            <ul className="space-y-4 text-zinc-400">
              <li><strong className="text-cyan-400">Genre Expertise:</strong> Deep knowledge of Hip-Hop, DnB, and Bass House.</li>
              <li><strong className="text-cyan-400">Crowd Reading:</strong> Expertly adjusting the energy to match the room&apos;s vibe.</li>
              <li><strong className="text-cyan-400">Professional Gear:</strong> High-end sound and performance equipment.</li>
              <li><strong className="text-cyan-400">Nightlife Experience:</strong> Familiar with the unique demands of Tampa Bay&apos;s club scene.</li>
            </ul>
          </div>

          <Link href="/booking" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
            Book a Club Set
          </Link>
        </div>
      </section>
    </main>
  );
}
