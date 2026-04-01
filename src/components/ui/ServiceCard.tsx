"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[icon];

  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={viewportConfig}
      transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#E2E8F0] hover:shadow-xl hover:border-[#2DD4BF]/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2DD4BF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="w-12 h-12 bg-[#0F172A] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2DD4BF] transition-colors duration-300">
          {IconComponent && <IconComponent className="w-6 h-6 text-white group-hover:text-[#0F172A] transition-colors duration-300" />}
        </div>
        
        <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0F172A]">
          {title}
        </h3>
        
        <p className="text-[#475569] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
