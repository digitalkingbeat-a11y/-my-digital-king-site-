"use client";

import { useState } from "react";

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Booking error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
      {submitStatus === "success" ? (
        <div className="text-center py-10">
          <h3 className="text-2xl font-bold text-cyan-400 mb-2">Request Sent Successfully!</h3>
          <p className="text-zinc-300">
            Thank you for your booking inquiry. I will review the details and get back to you shortly to confirm availability and discuss the next steps.
          </p>
          <button
            onClick={() => setSubmitStatus("idle")}
            className="mt-8 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-2 rounded-xl transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-zinc-300 mb-2">Full Name *</label>
              <input required type="text" id="name" name="name" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="John Doe" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-zinc-300 mb-2">Email Address *</label>
              <input required type="email" id="email" name="email" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="john@example.com" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-zinc-300 mb-2">Phone Number *</label>
              <input required type="tel" id="phone" name="phone" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="(555) 123-4567" />
            </div>

            <div>
              <label htmlFor="eventDate" className="block text-sm font-semibold text-zinc-300 mb-2">
                Event Date * <span className="text-zinc-500 font-normal ml-2">(Select a date)</span>
              </label>
              <input
                required
                type="date"
                id="eventDate"
                name="eventDate"
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all cursor-pointer min-h-[50px] [color-scheme:dark]"
              />
            </div>

            <div>
              <label htmlFor="eventTime" className="block text-sm font-semibold text-zinc-300 mb-2">
                Event Time * <span className="text-zinc-500 font-normal ml-2">(Select start time)</span>
              </label>
              <input
                required
                type="time"
                id="eventTime"
                name="eventTime"
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all cursor-pointer min-h-[50px] [color-scheme:dark]"
              />
            </div>

            <div>
              <label htmlFor="eventType" className="block text-sm font-semibold text-zinc-300 mb-2">Event Type *</label>
              <select required id="eventType" name="eventType" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all">
                <option value="">Select event type...</option>
                <option value="Club Night">Club Night</option>
                <option value="Private Party">Private Party</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Festival">Festival</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-zinc-300 mb-2">Venue / Location *</label>
              <input required type="text" id="location" name="location" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="City, State, or Venue Name" />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-zinc-300 mb-2">Estimated Budget *</label>
              <select required id="budget" name="budget" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all">
                <option value="">Select budget range...</option>
                <option value="Under $500">Under $500</option>
                <option value="$500 - $1,000">$500 - $1,000</option>
                <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                <option value="$2,500+">$2,500+</option>
              </select>
            </div>

            <div>
              <label htmlFor="musicStyle" className="block text-sm font-semibold text-zinc-300 mb-2">Preferred Music Style</label>
              <input type="text" id="musicStyle" name="musicStyle" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="E.g. Hip-Hop, House, Top 40" />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-zinc-300 mb-2">Message / Details *</label>
            <textarea required id="message" name="message" rows={4} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="Tell me more about your event..."></textarea>
          </div>

          {submitStatus === "error" && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl text-sm">
              An error occurred while submitting your request. Please try again later or contact me directly via phone/email.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 rounded-xl text-lg transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Request...
              </>
            ) : (
              "Submit Booking Request"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
