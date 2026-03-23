import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Policy Landscape",
  description:
    "A comparative analysis of major U.S. AI regulation proposals (2024–2026)",
  openGraph: {
    title: "AI Policy Landscape",
    description:
      "Compare and contrast major U.S. AI policy proposals",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-stone-50 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
