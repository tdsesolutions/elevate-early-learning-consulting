"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.getElementById(href.replace("#", ""));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#0F172A]/90 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span
                className={cn(
                  "text-xl font-bold transition-colors duration-300",
                  isScrolled ? "text-white" : "text-[#0F172A]"
                )}
              >
                Elevate
              </span>
              <span
                className={cn(
                  "text-xl font-light transition-colors duration-300",
                  isScrolled ? "text-[#2DD4BF]" : "text-[#0F172A]"
                )}
              >
                Early Learning
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-200",
                    isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-[#475569] hover:text-[#0F172A]"
                  )}
                >
                  {link.name}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeSection"
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-0.5",
                        isScrolled ? "bg-[#2DD4BF]" : "bg-[#0F172A]"
                      )}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => handleNavClick("#contact")}
                className={cn(
                  "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  isScrolled
                    ? "bg-[#2DD4BF] text-[#0F172A] hover:bg-[#14B8A6]"
                    : "bg-[#0F172A] text-white hover:bg-[#1E293B]"
                )}
              >
                Schedule Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                isScrolled ? "text-white" : "text-[#0F172A]"
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0F172A] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-medium text-white text-left py-3 border-b border-white/10"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-4 w-full bg-[#2DD4BF] text-[#0F172A] py-4 rounded-lg font-medium text-lg"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
