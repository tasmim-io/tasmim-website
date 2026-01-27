import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Navbar } from "../components/navbar/Navbar";
import { LocationProvider } from "@/lib/location-context";
import "./globals.scss";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tasmim.com"),
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
    url: "https://tasmim.com",
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
        <LocationProvider>
          <Navbar />
          {children}
        </LocationProvider>
      </body>
    </html>
  );
}
