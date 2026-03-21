import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atar-bclick.vercel.app"),
  title: {
    default: 'אתר בקליק | אתר אינטרנט מקצועי ב-500 ש"ח',
    template: '%s | אתר בקליק',
  },
  description:
    'אתר אינטרנט מקצועי לעסקים קטנים בישראל — דפי נחיתה מעוצבים, מותאמים לנייד ומוכנים תוך 48 שעות. מחיר קבוע ₪500 בלבד. בנוי עם בינה מלאכותית.',
  keywords: [
    "אתר אינטרנט",
    "דף נחיתה",
    "עסקים קטנים",
    "ישראל",
    "אתר בקליק",
    "אתר לעסק",
    "בניית אתרים",
    "דפי נחיתה בעברית",
    "אתר זול",
    "אתר מקצועי",
  ],
  authors: [{ name: "אתר בקליק" }],
  creator: "אתר בקליק",
  publisher: "אתר בקליק",
  alternates: {
    canonical: "https://atar-bclick.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://atar-bclick.vercel.app",
    siteName: "אתר בקליק",
    title: 'אתר בקליק | אתר אינטרנט מקצועי ב-500 ש"ח',
    description:
      'אתר אינטרנט מקצועי לעסקים קטנים בישראל — דפי נחיתה מעוצבים, מותאמים לנייד ומוכנים תוך 48 שעות. מחיר קבוע ₪500 בלבד.',
  },
  twitter: {
    card: "summary_large_image",
    title: 'אתר בקליק | אתר אינטרנט מקצועי ב-500 ש"ח',
    description:
      'דפי נחיתה מקצועיים לעסקים קטנים בישראל. ₪500 בלבד, תוך 48 שעות.',
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
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
