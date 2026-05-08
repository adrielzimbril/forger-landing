import type { Metadata } from "next";
import { Inter, Instrument_Serif, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Forger — Build a Job-Winning Resume in Minutes",
  description: "Discover Elite Talent Quicker with Intelligent Routing. A unified recruitment platform built to publish roles, source candidates, and secure the perfect match.",
  alternates: {
    canonical: "https://forger-landing.adrielzimbril.com",
  },
  openGraph: {
    title: "Forger — Build a Job-Winning Resume in Minutes",
    description: "Discover Elite Talent Quicker with Intelligent Routing. A unified recruitment platform built to publish roles, source candidates, and secure the perfect match.",
    url: "https://forger-landing.adrielzimbril.com",
    siteName: "Forger",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ResumeForge Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forger — Build a Job-Winning Resume in Minutes",
    description: "Discover Elite Talent Quicker with Intelligent Routing. A unified recruitment platform built to publish roles, source candidates, and secure the perfect match.",
    images: ["/opengraph-image.png"],
  },
  keywords: [
    "Forger",
    "Resume Builder",
    "ATS Optimized",
    "Career Platform",
    "Job Application",
    "Recruitment Technology",
    "AI Resume",
    "Productivity",
    "Landing Page"
  ],
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL('https://forger-landing.adrielzimbril.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${fraunces.variable} antialiased`}
    >
      <body className="font-sans text-neutral-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
