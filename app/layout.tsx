import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalkingdj.com"),
  title: {
    default: "Digital King | Tampa Bay DJ for Clubs, Events, and AI-Powered Entertainment",
    template: "%s | Digital King",
  },
  description:
    "Book Digital King for Tampa Bay club nights, private events, custom DJ sets, and AI-assisted entertainment workflows across Tampa, St. Petersburg, and Clearwater.",
  keywords: [
    "Tampa Bay DJ",
    "Club DJ Tampa",
    "Private Event DJ Tampa",
    "Digital King DJ",
    "Event DJ Clearwater",
    "AI entertainment automation",
  ],
  authors: [{ name: "Digital King" }],
  creator: "Digital King",
  publisher: "Digital King",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Digital King",
    title: "Digital King | Tampa Bay DJ",
    description:
      "High-energy DJ services, private event entertainment, custom sets, and future-ready AI automation for Tampa Bay nightlife and brands.",
    images: [
      {
        url: "/dj-crowd.jpg",
        width: 1200,
        height: 630,
        alt: "Digital King performing for a Tampa Bay crowd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital King | Tampa Bay DJ",
    description:
      "Book Digital King for Tampa Bay clubs, private events, custom DJ sets, and AI-powered entertainment workflows.",
    images: ["/dj-crowd.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "name": "Digital King",
    "image": "https://digitalkingdj.com/dj-crowd.jpg",
    "@id": "https://digitalkingdj.com",
    "url": "https://digitalkingdj.com",
    "telephone": "+17278083842",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tampa",
      "addressRegion": "FL",
      "postalCode": "33602",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.9506,
      "longitude": -82.4572
    },
    "areaServed": ["Tampa", "St. Petersburg", "Clearwater"],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+17278083842",
      "email": "Digitalkingbeat@gmail.com",
      "contactType": "booking"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
