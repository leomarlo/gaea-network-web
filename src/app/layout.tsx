import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaea Network - Environmental Impact Certificates",
  description: "Gaea.network is a platform for environmental impact certificates. Trade, manage, and track your environmental contributions.",
  keywords: ["environmental", "certificates", "sustainability", "carbon credits", "green energy", "nature preservation"],
  authors: [{ name: "Gaea.network Team" }],
  creator: "Gaea.network",
  publisher: "Gaea.network",
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Gaea Network - Environmental Impact Certificates",
    description: "Trade and manage environmental impact certificates",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaea Network - Environmental Impact Certificates",
    description: "Trade and manage environmental impact certificates",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
