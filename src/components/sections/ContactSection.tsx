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

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-slate-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-amber-800">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Let&apos;s Start a{" "}
              <span className="text-amber-600">Conversation</span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Ready to elevate your early learning program? We&apos;d love to hear
              from you. Reach out to discuss how we can support your goals and
              help every child in your care thrive.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-amber-200 flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-5 h-5 text-amber-600" />
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
          </div>

          {/* Visual/CTA Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl transform rotate-3 opacity-50" />
            <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-amber-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Schedule a Consultation
                </h3>
                <p className="text-slate-600">
                  Book a free 30-minute consultation to discuss your program&apos;s
                  needs and how we can help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-700 font-bold">1</span>
                  </div>
                  <span className="text-slate-700">Share your program goals</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-700 font-bold">2</span>
                  </div>
                  <span className="text-slate-700">
                    Get personalized recommendations
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-700 font-bold">3</span>
                  </div>
                  <span className="text-slate-700">
                    Start your elevation journey
                  </span>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-8 w-full block text-center rounded-full bg-amber-500 px-8 py-4 text-white font-semibold hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/25"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
