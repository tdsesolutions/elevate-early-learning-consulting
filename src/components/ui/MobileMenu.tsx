"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

interface Link {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Link[];
  activeSection: string;
  onNavClick: (href: string) => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const panelVariants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linkContainerVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    x: 50,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  activeSection,
  onNavClick,
}: MobileMenuProps) {
  const handleLinkClick = (href: string) => {
    onNavClick(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
          />

          {/* Slide-in Panel */}
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#1a2744] z-50 md:hidden shadow-2xl"
          >
            {/* Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-xl font-bold text-white">
                Menu
              </span>
              <motion.button
                onClick={onClose}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <motion.nav
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col p-6 gap-2"
            >
              {links.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    variants={linkVariants}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`group flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#c9a227] text-[#1a2744]"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{link.label}</span>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.a>
                );
              })}
            </motion.nav>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-[#1a2744]/50"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#c9a227] text-[#1a2744] font-semibold rounded-xl hover:bg-[#b08d1e] transition-colors duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
