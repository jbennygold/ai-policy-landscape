import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ChatDrawer } from "@/components/chat-drawer";

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
        <Nav />
        {children}
        <Footer />
        <ChatDrawer />
      </body>
    </html>
  );
}
