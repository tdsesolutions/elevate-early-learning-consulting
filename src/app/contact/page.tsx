import { ContactForm } from "@/components/ui/ContactForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | Elevate Early Learning & Consulting",
  description: "Get in touch with Elevate Early Learning & Consulting. We're here to support child care centers, directors, and owners throughout Texas.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="bg-[#0F172A] py-16 md:py-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #2DD4BF 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 text-center relative">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Contact Elevate Early Learning & Consulting
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We&apos;re here to support child care centers, directors, and owners with guidance,
              structure, and confidence. Reach out to start the conversation.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Get In Touch</h2>
                  <p className="text-[#0F172A]/70 mb-8">
                    Have questions about our services? We&apos;d love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-[#2DD4BF]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2DD4BF]/20 transition-colors">
                      <MapPin className="w-5 h-5 text-[#2DD4BF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A] mb-1">Location</h3>
                      <p className="text-[#0F172A]/70">
                        The Woodlands, TX 77386
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-[#2DD4BF]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2DD4BF]/20 transition-colors">
                      <Phone className="w-5 h-5 text-[#2DD4BF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A] mb-1">Phone</h3>
                      <a
                        href="tel:7138287862"
                        className="text-[#0F172A]/70 hover:text-[#2DD4BF] transition-colors"
                      >
                        (713) 828-7862
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-[#2DD4BF]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2DD4BF]/20 transition-colors">
                      <Mail className="w-5 h-5 text-[#2DD4BF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A] mb-1">Email</h3>
                      <a
                        href="mailto:tanishab@elevateconsultinghtx.com"
                        className="text-[#0F172A]/70 hover:text-[#2DD4BF] transition-colors"
                      >
                        tanishab@elevateconsultinghtx.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-[#2DD4BF]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2DD4BF]/20 transition-colors">
                      <Clock className="w-5 h-5 text-[#2DD4BF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A] mb-1">Hours</h3>
                      <p className="text-[#0F172A]/70">
                        Mon - Fri: 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
