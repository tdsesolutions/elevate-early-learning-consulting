"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#mission", label: "Mission" },
  { href: "#contact", label: "Contact" },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "713-828-7862",
    href: "tel:713-828-7862",
  },
  {
    icon: Mail,
    label: "Email",
    value: "tanishab@elevateconsultinghtx.com",
    href: "mailto:tanishab@elevateconsultinghtx.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "25700 I-45 N, Suite 4200, The Woodlands, TX 77386",
    href: "https://maps.google.com/?q=25700+I-45+N+Suite+4200+The+Woodlands+TX+77386",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1a2744] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <a href="#home" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight">Elevate</span>
              <span className="text-2xl font-light text-[#c9a227]">
                {" "}
                Early Learning
              </span>
            </a>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering early childhood educators with professional development,
              curriculum support, and instructional coaching to create
              exceptional learning environments.
            </p>
            <p className="text-[#c9a227] font-medium">
              Building brighter futures, one classroom at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-300 hover:text-[#c9a227] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#c9a227] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.icon === MapPin ? "_blank" : undefined}
                    rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 text-gray-300 hover:text-[#c9a227] transition-colors duration-300 group"
                  >
                    <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#c9a227] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm leading-relaxed">{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Elevate Early Learning Consulting. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#c9a227] text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#c9a227] text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
