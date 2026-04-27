"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { fadeInUp, slideInLeft, slideInRight, viewportConfig } from "@/lib/animations";
import { SITE_CONFIG } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

import Link from "next/link";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: `${SITE_CONFIG.contact.address}, ${SITE_CONFIG.contact.city}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.contact.phone,
    href: `tel:${SITE_CONFIG.contact.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.contact.email,
    href: `mailto:${SITE_CONFIG.contact.email}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 8:00 AM - 5:00 PM",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={slideInLeft.initial}
            whileInView={slideInLeft.animate}
            viewport={viewportConfig}
            transition={slideInLeft.transition}
          >
            <SectionHeading
              subtitle="Get In Touch"
              title="Let's Start a Conversation"
            />

            <p className="text-[#475569] mb-8 leading-relaxed">
              Ready to elevate your child care center? We&apos;re here to provide 
              guidance, support, and partnership every step of the way. Reach out 
              to discuss how we can work together.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0F172A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#475569] mb-1">
                      {detail.label}
                    </div>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-[#0F172A] font-medium hover:text-[#2DD4BF] transition-colors"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-[#0F172A] font-medium">
                        {detail.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/contact">
              <Button size="lg">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Visual - Contact/CTA Illustration Placeholder */}
          <motion.div
            initial={slideInRight.initial}
            whileInView={slideInRight.animate}
            viewport={viewportConfig}
            transition={slideInRight.transition}
            className="relative"
          >
            {/* Aspect Ratio 1:1 for Contact/CTA */}
            <div className="aspect-[1/1] w-full rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/images/contact.jpg"
                alt="Partnership and collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
