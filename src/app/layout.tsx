import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elevate Early Learning & Consulting | Child Care Consulting in Texas",
  description: "One Child, One Director, & One Owner at a Time. Professional early childhood consulting for child care centers, directors, and owners in Texas.",
  keywords: ["child care consulting", "early learning", "Texas child care", "daycare consulting", "childcare licensing", "Tanisha B"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-full bg-[#F8FAFC] text-[#0F172A] font-sans">
        {children}
      </body>
    </html>
  );
}
