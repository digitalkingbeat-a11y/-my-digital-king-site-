import Link from "next/link";

type Entry = {
  slug: string;
  title: string;
  description: string;
};

type SeoCollectionHubProps = {
  eyebrow: string;
  title: string;
  description: string;
  basePath: string;
  entries: Entry[];
};

export default function SeoCollectionHub({
  eyebrow,
  title,
  description,
  basePath,
  entries,
}: SeoCollectionHubProps) {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors mb-10 inline-block font-semibold">
          Back to Home
        </Link>

        <p className="text-cyan-300 font-semibold uppercase tracking-[0.2em] text-sm">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed">
          {description}
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`${basePath}/${entry.slug}`}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-6 hover:border-cyan-400/60 transition-colors"
            >
              <h2 className="text-2xl font-bold text-cyan-300">{entry.title}</h2>
              <p className="mt-3 text-zinc-400">{entry.description}</p>
              <p className="mt-5 text-sm font-bold text-white">Read page</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
