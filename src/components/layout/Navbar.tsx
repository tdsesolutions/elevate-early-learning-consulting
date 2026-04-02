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
      setIsScrolled(window.scrollY > 50);
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
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#0F172A]/95 backdrop-blur-xl shadow-lg"
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
            <div className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                    isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-[#475569] hover:text-[#0F172A]"
                  )}
                >
                  {link.name}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="active-nav-underline"
                      className={cn(
                        "absolute bottom-0 left-2 right-2 h-0.5 rounded-full",
                        isScrolled ? "bg-[#2DD4BF]" : "bg-[#0F172A]"
                      )}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 30 
                      }}
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
                Get in Touch
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

      {/* Mobile Menu - Panel Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0F172A]/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col justify-center h-full px-8">
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-3xl font-light text-white text-left py-4 border-b border-white/10 hover:text-[#2DD4BF] transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.3 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-8 w-full bg-[#2DD4BF] text-[#0F172A] py-4 rounded-xl font-medium text-lg hover:bg-[#14B8A6] transition-colors"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
