import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veribite — verify every bite",
  description:
    "Scan any supermarket product and get a personal Go/No-Go verdict with clear reasons and healthier swaps.",
  icons: {
    icon: "/veribite-icon.svg",
  },
  openGraph: { 
    title: "Veribite", 
    url: "https://veribite.com", 
    siteName: "Veribite", 
    type: "website" 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
