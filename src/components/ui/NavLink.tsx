"use client";

import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  isScrolled: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export default function NavLink({ href, label, isActive, isScrolled, onClick }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
        isActive
          ? isScrolled
            ? "text-[#2DD4BF]"
            : "text-[#0F172A]"
          : isScrolled
          ? "text-white/80 hover:text-white hover:bg-white/10"
          : "text-[#0F172A]/70 hover:text-[#0F172A] hover:bg-[#0F172A]/5"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="activeNav"
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
            isScrolled ? "bg-[#2DD4BF]" : "bg-[#2DD4BF]"
          }`}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.a>
  );
}
