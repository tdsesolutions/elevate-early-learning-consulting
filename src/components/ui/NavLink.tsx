"use client";

import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  isScrolled: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export default function NavLink({
  href,
  label,
  isActive,
  isScrolled,
  onClick,
}: NavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group ${
        isScrolled
          ? isActive
            ? "text-[#c9a227]"
            : "text-white/90 hover:text-white hover:bg-white/10"
          : isActive
          ? "text-[#c9a227]"
          : "text-[#1a2744]/80 hover:text-[#1a2744] hover:bg-[#1a2744]/5"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{label}</span>

      {/* Animated underline */}
      <motion.span
        className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-[#c9a227] ${
          isActive ? "w-6" : "w-0 group-hover:w-4"
        }`}
        initial={false}
        animate={{
          width: isActive ? 24 : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Hover underline effect */}
      <motion.span
        className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-[#c9a227]/50 w-0 group-hover:w-4 transition-all duration-300"
        initial={false}
      />
    </motion.a>
  );
}
