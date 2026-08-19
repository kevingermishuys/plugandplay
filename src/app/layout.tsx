import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plug & Play Event Solutions | Namibia's Premier Audiovisual Partner",
  description:
    "Namibia's premier technical event production company. Sound, AV, lighting, staging and live events for festivals, nightlife and corporate galas in Windhoek & Swakopmund.",
  metadataBase: new URL("https://plugplay.co.za"),
  openGraph: {
    title: "Plug & Play Event Solutions",
    description:
      "Blazing lights, deep beats, and pure summer bliss. Namibia's premier AV & live event production partner.",
    url: "https://plugplay.co.za",
    siteName: "Plug & Play Event Solutions",
    images: ["/images/night.webp"],
    locale: "en_NA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-abyss text-white">{children}</body>
    </html>
  );
}
