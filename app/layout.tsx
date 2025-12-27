import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hashify — Trending Instagram Hashtags",
  description: "Find trending Instagram hashtags optimized for Reels to boost reach and engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground`}
        style={{
          background: "linear-gradient(180deg, #FDECF7 0%, #E6F6FF 35%, #FFF7E6 75%, #F8FFF7 100%)",
        }}
      >
  <Navbar />
  {/* smaller min-height on mobile to reduce space between last content and footer */}
  <main className="min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
