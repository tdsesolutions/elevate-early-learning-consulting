import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About Tanisha B | Elevate Early Learning & Consulting",
  description: "Meet Tanisha B, founder of Elevate Early Learning & Consulting. Child Development Specialist with over 20 years of experience supporting early childhood programs in Houston, Texas.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
