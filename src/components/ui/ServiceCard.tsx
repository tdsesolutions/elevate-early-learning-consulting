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
        className="relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-500 ease-out
          hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]
          dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-500/30 dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]"
      >
        {/* Subtle gradient glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.06), transparent 40%)",
          }}
        />

        {/* Icon container */}
        <div className="mb-4 inline-flex">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 transition-all duration-500 
              group-hover:scale-110 group-hover:bg-emerald-50/80 dark:bg-zinc-800/50 dark:group-hover:bg-emerald-900/20"
          >
            <Icon
              className="h-5 w-5 text-zinc-600 transition-colors duration-500 group-hover:text-emerald-600 
                dark:text-zinc-400 dark:group-hover:text-emerald-400"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Content */}
        <h3
          className="mb-2 text-lg font-semibold tracking-tight text-zinc-900 transition-colors duration-300 
            group-hover:text-emerald-700 dark:text-zinc-100 dark:group-hover:text-emerald-400"
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {description}
        </p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-teal-400 
            transition-all duration-500 ease-out group-hover:w-full"
        />
      </div>
    </motion.div>
  );
}
