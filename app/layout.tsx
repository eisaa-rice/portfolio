import type { Metadata } from "next";

import { Inter, Sour_Gummy } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jésus orozco.",
  description: "jésus orozco's software development portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sourGummy.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
