import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Navbar } from "../components/navbar/Navbar";
import { CookieConsentProvider } from "@/lib/cookie-consent-context";
import { LocationProvider } from "@/lib/location-context";
import { CookieConsentBanner } from "@/components/cookie-consent/CookieConsentBanner";
import "./globals.scss";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.SITE_URL || "https://tasmimstudio.netlify.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tasmim - Premium Websites & Intelligent Automations",
    template: "%s | Tasmim",
  },
  description:
    "Premium websites and intelligent automations for agencies and experts who value calm operations as much as strong first impressions.",
  keywords: [
    "web design",
    "web development",
    "automation",
    "AI systems",
    "brand systems",
    "CRM integration",
    "business automation",
  ],
  authors: [{ name: "Tasmim" }],
  creator: "Tasmim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tasmim",
    title: "Tasmim - Premium Websites & Intelligent Automations",
    description:
      "Premium websites and intelligent automations for agencies and experts who value calm operations.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tasmim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasmim - Premium Websites & Intelligent Automations",
    description: "Premium websites and intelligent automations for agencies and experts.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interTight.variable}>
        <CookieConsentProvider>
          <LocationProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <CookieConsentBanner />
          </LocationProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
