"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cardStagger, viewportConfig, hoverLift, hoverGlow } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import {
  FileText,
  Shield,
  ClipboardCheck,
  Apple,
  Utensils,
  BookOpen,
  Users,
  Star,
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  FileText,
  Shield,
  ClipboardCheck,
  Apple,
  Utensils,
  BookOpen,
  Users,
  Star,
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            subtitle="Our Services"
            title="Comprehensive Solutions for Your Child Care Center"
            centered
          />
          <p className="text-[#475569] mt-4">
            From licensing preparation to curriculum development, we provide expert
            guidance tailored to your center&apos;s unique needs.
          </p>
        </div>

        <motion.div
          variants={cardStagger.container}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={index}
                variants={cardStagger.item}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
                  borderColor: "rgba(45, 212, 191, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] cursor-pointer"
              >
                <motion.div 
                  className="w-14 h-14 bg-[#0F172A] rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#2DD4BF]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {Icon && (
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                  )}
                </motion.div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3 group-hover:text-[#0F172A]">
                  {service.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[#475569] mb-6">
            Need a service not listed here? We offer customized consulting solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[#0F172A] font-semibold hover:text-[#2DD4BF] transition-colors group"
          >
            Let&apos;s discuss your needs
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
