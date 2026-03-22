import type { Metadata } from "next";
import { Bodoni_Moda, Syne } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jordangoren.com"),
  title: "Jordan Goren — AI & Creative Technology",
  description:
    "Personal portfolio of Jordan Goren. Building at the intersection of artificial intelligence, design, and technology.",
  keywords: [
    "Jordan Goren",
    "AI",
    "creative technology",
    "portfolio",
    "design",
    "developer",
  ],
  authors: [{ name: "Jordan Goren" }],
  creator: "Jordan Goren",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jordangoren.com",
    siteName: "Jordan Goren",
    title: "Jordan Goren — AI & Creative Technology",
    description:
      "Building at the intersection of artificial intelligence, design, and technology.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Goren — AI & Creative Technology",
    description:
      "Building at the intersection of artificial intelligence, design, and technology.",
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
        className={`${bodoni.variable} ${syne.variable} antialiased bg-primary text-cream`}
      >
        {children}
      </body>
    </html>
  );
}
