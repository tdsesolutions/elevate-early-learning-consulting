"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={viewportConfig}
      transition={fadeInUp.transition}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${light ? "text-white" : "text-[#0F172A]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl max-w-3xl ${centered ? "mx-auto" : ""} ${light ? "text-white/80" : "text-[#475569]"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
