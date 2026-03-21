import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "../globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "דוגמאות דפי נחיתה | אתר בקליק",
  description: "דוגמאות של דפי נחיתה מקצועיים לעסקים שונים — מסעדות, ספרות, משרדי עורכי דין, חדרי כושר, רופאי שיניים.",
};

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${heebo.variable} font-sans antialiased`} dir="rtl">
      {children}
    </div>
  );
}
