"use client";

import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.replace("#", ""));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-16">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={viewportConfig}
          transition={fadeInUp.transition}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">Elevate</span>
              <span className="text-2xl font-light text-[#2DD4BF]"> Early Learning</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              One Child, One Director, & One Owner at a Time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-[#2DD4BF] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>Policies & Procedures</li>
              <li>Risk Management</li>
              <li>Opening Inspections</li>
              <li>CACFP Guidance</li>
              <li>Curriculum Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2DD4BF] flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  {SITE_CONFIG.contact.address}
                  <br />
                  {SITE_CONFIG.contact.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#2DD4BF] flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="text-white/60 hover:text-[#2DD4BF] transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2DD4BF] flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-white/60 hover:text-[#2DD4BF] transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {currentYear} Elevate Early Learning & Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
