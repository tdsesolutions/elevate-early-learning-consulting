"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
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
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E2E8F0] hover:border-[#2DD4BF]/50"
              >
                <div className="w-14 h-14 bg-[#0F172A] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2DD4BF] transition-colors duration-300">
                  {Icon && <Icon className="w-7 h-7 text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
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
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={viewportConfig}
          transition={fadeInUp.transition}
          className="mt-16 text-center"
        >
          <p className="text-[#475569] mb-6">
            Need a service not listed here? We offer customized consulting solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[#2DD4BF] font-semibold hover:underline"
          >
            Let&apos;s discuss your needs
            <svg
              className="w-4 h-4"
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
