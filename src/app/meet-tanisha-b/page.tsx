import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MeetTanishaBContent } from "@/components/sections/MeetTanishaBContent";

export const metadata: Metadata = {
  title: "Meet Tanisha B | Elevate Early Learning & Consulting",
  description: "Meet Tanisha B, founder of Elevate Early Learning & Consulting. Child Development Specialist with over 20 years of experience supporting early childhood programs in Houston, Texas.",
};

export default function MeetTanishaBPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <MeetTanishaBContent />
      </main>
      <Footer />
    </>
  );
}
