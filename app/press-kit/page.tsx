import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media Kit | Digital King | Assets for Promoters, Bars & Venues",
  description:
    "Download professional DJ bios, event copy, and high-resolution promotional assets for Digital King, a Tampa Bay DJ serving venues and private events.",
};

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold text-cyan-400 mb-8 uppercase tracking-tight">Media Kit</h1>

        <p className="text-xl text-zinc-300 mb-12">
          Everything you need to promote Digital King at your venue or event. Download assets, copy bios, and link back for better SEO.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Logos & Photos</h2>
            <ul className="space-y-4">
              <li>
                <a href="/dj-crowd.jpg" download className="text-cyan-400 hover:text-cyan-300 font-medium underline">
                  Download Hero Photo (High-Res)
                </a>
              </li>
              <li className="text-zinc-500 text-sm">More brand assets coming soon...</li>
            </ul>
          </div>

          <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Link Back to Me</h2>
            <p className="text-zinc-400 text-sm mb-4">Paste this into your website&apos;s Upcoming Events or DJ section:</p>
            <code className="block bg-black p-4 rounded-lg border border-white/10 text-xs text-cyan-300 break-all">
              {`<a href="https://digitalkingdj.com" target="_blank" rel="noopener">DJ Digital King | Tampa Bay's Premier DJ</a>`}
            </code>
          </div>
        </div>

        <div className="space-y-12 mb-16">
          <div className="border-b border-white/10 pb-8">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 uppercase">Short Bio (Social Media/Events)</h3>
            <p className="text-zinc-300 italic">
              Digital King is Tampa Bay&apos;s premier DJ and producer, delivering high-energy sets across Hip-Hop, DnB, Jungle, and Bass House for clubs and private events.
            </p>
          </div>

          <div className="border-b border-white/10 pb-8">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 uppercase">Medium Bio (Website/Programs)</h3>
            <p className="text-zinc-300 leading-relaxed">
              Based in the heart of Tampa Bay, Digital King has become a staple of the Florida nightlife scene.
              Specializing in high-energy mixing across various genres, including Hip-Hop, Bass House, and DnB,
              he brings a unique sound to every venue. Whether it is a packed club night in St. Petersburg
              or an exclusive private party in Clearwater, Digital King ensures the vibe is unmatched.
            </p>
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/30 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">Need More Info?</h2>
          <p className="text-zinc-300 mb-6">If you need specific custom assets or interviews, please get in touch.</p>
          <Link href="/booking" className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-400 transition-colors">
            Contact for Bookings
          </Link>
        </div>
      </section>
    </main>
  );
}
