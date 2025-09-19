import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Gaea Network - Environmental Impact Certificates | Preserving Nature Through Technology",
  description: "Gaea.network is a revolutionary platform for environmental impact certificates. Trade, manage, and track your environmental contributions while preserving Earth's ecosystems through innovative blockchain technology.",
  keywords: [
    "environmental impact certificates", 
    "sustainability", 
    "carbon credits", 
    "green energy", 
    "nature preservation", 
    "blockchain environmental", 
    "ecosystem protection", 
    "environmental trading", 
    "green technology", 
    "climate action",
    "biodiversity conservation",
    "environmental finance"
  ],
  authors: [{ name: "Gaea.network Team" }],
  creator: "Gaea.network",
  publisher: "Gaea.network",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0f4c3a",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Gaea Network - Environmental Impact Certificates",
    description: "Revolutionary platform for environmental impact certificates. Preserve nature through innovative blockchain technology.",
    type: "website",
    locale: "en_US",
    siteName: "Gaea Network",
    url: "https://gaea.network",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Gaea Network - Environmental Impact Certificates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaea Network - Environmental Impact Certificates",
    description: "Revolutionary platform for environmental impact certificates. Preserve nature through innovative blockchain technology.",
    images: ["/hero-bg.jpg"],
    creator: "@gaea_network",
  },
  alternates: {
    canonical: "https://gaea.network",
  },
  category: "Technology",
  classification: "Environmental Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>
          <div className="flex h-screen bg-gray-900">
            <Sidebar />
            <main className="flex-1 overflow-auto lg:ml-0">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
