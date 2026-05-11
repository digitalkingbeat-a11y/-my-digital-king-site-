import BookingForm from "@/components/BookingForm";
import Link from "next/link";

export const metadata = {
  title: "Book Digital King | Tampa Bay DJ",
  description: "Book Digital King for your next club night, private party, or custom event.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen py-24 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-cyan-400 drop-shadow-[0_4px_18px_rgba(0,255,255,0.35)]">
            Book Your Event
          </h1>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            Ready to elevate your event? Fill out the details below and I will get back to you with availability and a custom quote.
          </p>
        </div>

        <BookingForm />
      </div>
    </div>
  );
}
