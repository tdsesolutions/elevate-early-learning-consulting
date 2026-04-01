"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  activeSection: string;
  onNavClick: (href: string) => void;
}

export default function MobileMenu({ isOpen, onClose, links, activeSection, onNavClick }: MobileMenuProps) {
  const handleClick = (href: string) => {
    onNavClick(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0F172A]/60 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0F172A] z-50 md:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6">
              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick(link.href);
                        }}
                        className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 ${
                          activeSection === link.href.slice(1)
                            ? "bg-[#2DD4BF]/10 text-[#2DD4BF]"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="font-medium">{link.label}</span>
                        {activeSection === link.href.slice(1) && (
                          <motion.div
                            layoutId="mobileActive"
                            className="w-2 h-2 rounded-full bg-[#2DD4BF]"
                          />
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick("#contact");
                  }}
                  className="flex items-center justify-center w-full py-3.5 bg-[#2DD4BF] text-[#0F172A] font-semibold rounded-xl transition-all duration-300 hover:bg-[#14B8A6]"
                >
                  Get Started
                </a>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <p className="text-white/50 text-sm text-center">
                  tanishab@elevateconsultinghtx.com
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
