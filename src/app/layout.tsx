import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elevate Early Learning & Consulting | Child Care Consulting",
  description: "Ensuring Safety, Quality, & Assurance one Child, Center & Director at a time. Professional early childhood consulting for child care centers, directors, and owners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-full bg-[#F8FAFC] text-[#0F172A] font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
