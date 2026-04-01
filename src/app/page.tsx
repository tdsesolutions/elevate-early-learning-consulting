import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Services from "@/components/sections/Services";
import Mission from "@/components/sections/Mission";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <Story />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="mission">
          <Mission />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
