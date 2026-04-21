"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  const activeSection = useActiveSection(
    isHomePage ? NAV_LINKS.map((l) => l.href.replace("#", "")) : []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#") && isHomePage) {
      const element = document.getElementById(href.replace("#", ""));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Determine if a nav link is active
  const isLinkActive = (href: string) => {
    if (href.startsWith("/")) {
      return pathname === href;
    }
    return isHomePage && activeSection === href.replace("#", "");
  };

  // Nav link component - uses Link for external routes, button for anchor links
  const NavLink = ({ link }: { link: { name: string; href: string } }) => {
    const isExternal = link.href.startsWith("/");
    const active = isLinkActive(link.href);
    
    const baseClasses = cn(
      "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
      isScrolled || !isHomePage
        ? "text-white/80 hover:text-white"
        : "text-[#475569] hover:text-[#0F172A]"
    );

    if (isExternal) {
      return (
        <Link
          href={link.href}
          className={baseClasses}
        >
          {link.name}
          {active && (
            <motion.div
              layoutId="active-nav-underline"
              className={cn(
                "absolute bottom-0 left-2 right-2 h-0.5 rounded-full",
                isScrolled || !isHomePage ? "bg-[#2DD4BF]" : "bg-[#0F172A]"
              )}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30 
              }}
            />
          )}
        </Link>
      );
    }

    return (
      <button
        onClick={() => handleNavClick(link.href)}
        className={baseClasses}
      >
        {link.name}
        {active && (
          <motion.div
            layoutId="active-nav-underline"
            className={cn(
              "absolute bottom-0 left-2 right-2 h-0.5 rounded-full",
              isScrolled || !isHomePage ? "bg-[#2DD4BF]" : "bg-[#0F172A]"
            )}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 30 
            }}
          />
        )}
      </button>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || !isHomePage
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
                  isScrolled || !isHomePage ? "text-white" : "text-[#0F172A]"
                )}
              >
                Elevate
              </span>
              <span
                className={cn(
                  "text-xl font-light transition-colors duration-300",
                  isScrolled || !isHomePage ? "text-[#2DD4BF]" : "text-[#0F172A]"
                )}
              >
                Early Learning
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.name} link={link} />
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/contact">
                <button
                  className={cn(
                    "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                    isScrolled || !isHomePage
                      ? "bg-[#2DD4BF] text-[#0F172A] hover:bg-[#14B8A6]"
                      : "bg-[#0F172A] text-white hover:bg-[#1E293B]"
                  )}
                >
                  Get in Touch
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                isScrolled || !isHomePage ? "text-white" : "text-[#0F172A]"
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
              {NAV_LINKS.map((link, index) => {
                const isExternal = link.href.startsWith("/");
                const content = (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                    className="text-3xl font-light text-white text-left py-4 border-b border-white/10 hover:text-[#2DD4BF] transition-colors block"
                  >
                    {link.name}
                  </motion.span>
                );
                
                if (isExternal) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {content}
                    </Link>
                  );
                }
                
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {content}
                  </button>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.3 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 w-full bg-[#2DD4BF] text-[#0F172A] py-4 rounded-xl font-medium text-lg hover:bg-[#14B8A6] transition-colors block text-center"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
