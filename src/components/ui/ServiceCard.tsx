"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative"
    >
      <div
        className="relative h-full overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white p-6 transition-all duration-500 ease-out
          hover:-translate-y-2 hover:border-[#2DD4BF]/50 hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15)]"
      >
        {/* Subtle gradient glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(45, 212, 191, 0.08), transparent 40%)",
          }}
        />

        {/* Icon container */}
        <div className="mb-4 inline-flex">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8FAFC] transition-all duration-500 
              group-hover:scale-110 group-hover:bg-[#2DD4BF]/10"
          >
            <Icon
              className="h-5 w-5 text-[#0F172A]/60 transition-colors duration-500 group-hover:text-[#2DD4BF]"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Content */}
        <h3
          className="mb-2 text-lg font-semibold tracking-tight text-[#0F172A] transition-colors duration-300 
            group-hover:text-[#0F172A]"
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#0F172A]/60">
          {description}
        </p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#2DD4BF] to-[#5EEAD4] 
            transition-all duration-500 ease-out group-hover:w-full"
        />
      </div>
    </motion.div>
  );
}
