import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@elevateearlylearning.com",
    href: "mailto:hello@elevateearlylearning.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "123 Education Lane, Learning City, LC 12345",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 8:00 AM - 5:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-amber-50 to-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-amber-800">
                Contact Us
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Elevate Early Learning
              </span>
              {" "}& Consulting
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to take your early learning program to the next level? 
              We&apos;re here to help. Reach out to schedule a consultation or 
              learn more about our services.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We&apos;d love to hear from you. Whether you have questions about 
                  our services, want to schedule a consultation, or are ready to 
                  start working together, our team is here to support you.
                </p>

                <div className="space-y-6">
                  {contactDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-amber-50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white border border-amber-200 flex items-center justify-center flex-shrink-0">
                        <detail.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 mb-1">
                          {detail.label}
                        </div>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-slate-900 font-medium hover:text-amber-600 transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <span className="text-slate-900 font-medium">
                            {detail.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Quick Response Promise
                  </h3>
                  <p className="text-slate-600">
                    We aim to respond to all inquiries within 24 business hours. 
                    Your time is valuable, and we&apos;re committed to providing 
                    prompt, helpful responses.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Send Us a Message
                </h2>
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
