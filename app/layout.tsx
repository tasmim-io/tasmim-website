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
  title: "TASMIM",
  description: "Premium Websites, Intelligent Automations",
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
