"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [eventType, setEventType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Custom Playlist Request");
    const body = encodeURIComponent(
      `Event Type: ${eventType}\nGenre Vibe: ${genre}\n\nPlaylist Description:\n${description}`
    );
    window.location.href = `mailto:Digitalkingbeat@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="text-pink-400 hover:text-pink-300 transition-colors mb-10 inline-block font-semibold">
          Back to Home
        </Link>

        <h1 className="text-5xl font-extrabold text-pink-400 mb-4 uppercase tracking-tight">
          Custom DJ Sets
        </h1>

        <p className="text-xl text-zinc-300 leading-relaxed mb-10">
          Describe the vibe you want and Digital King will build the perfect set around your crowd.
        </p>

        <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">What You Get:</h2>
          <ul className="space-y-4 text-zinc-400">
            <li><strong className="text-pink-400">Unique Soundscapes:</strong> Expertly curated sets that reflect your brand or personal style.</li>
            <li><strong className="text-pink-400">Multi-Genre Mastery:</strong> Seamlessly blending Hip-Hop, DnB, Jungle, and Bass House.</li>
            <li><strong className="text-pink-400">Creative Transitions:</strong> Innovative mixing that keeps the listener engaged.</li>
            <li><strong className="text-pink-400">High-Fidelity Audio:</strong> Crystal clear sound for the ultimate listening experience.</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Describe Your Playlist</h2>

          <div>
            <label className="block text-sm font-semibold text-zinc-400 mb-2">Event Type</label>
            <input
              type="text"
              placeholder="e.g. Birthday party, club night, house party..."
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-400 mb-2">Genre Vibe</label>
            <input
              type="text"
              placeholder="e.g. Hip-Hop, DnB, R&B, Bass House, mix of everything..."
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-400 mb-2">
              Describe the playlist you want
            </label>
            <textarea
              rows={6}
              required
              placeholder="Tell me the energy you want, artists you love, songs you want played, how you want the crowd feeling..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-rose-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:scale-105 transition-all"
          >
            Send My Playlist Request
          </button>

          {submitted && (
            <p className="text-center text-green-400 font-semibold">
              Your email client should have opened - send it and Digital King will be in touch.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
