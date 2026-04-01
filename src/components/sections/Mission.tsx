"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, slideInLeft, slideInRight, viewportConfig } from "@/lib/animations";
import { Target, Heart, Lightbulb, Quote } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To ensure Safety, Quality, & Assurance one Child, Center & Director at a Time. We empower child care professionals with the knowledge and tools they need to create exceptional learning environments.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "A Texas where every child care center operates with excellence, every director leads with confidence, and every child receives the highest quality of care and early education.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, Excellence, Compassion, and Continuous Improvement guide everything we do. We believe in building lasting partnerships with the centers and directors we serve.",
  },
];

export function Mission() {
  return (
    <section id="mission" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            subtitle="Mission & Vision"
            title="Guided by Purpose, Driven by Passion"
            centered
          />
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={viewportConfig}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-[#F8FAFC] rounded-2xl p-8 h-full border border-[#E2E8F0] hover:border-[#2DD4BF]/50 transition-colors duration-300">
                <div className="w-14 h-14 bg-[#0F172A] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2DD4BF] transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={viewportConfig}
          transition={fadeInUp.transition}
          className="relative bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2DD4BF]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2DD4BF]/5 rounded-full blur-2xl" />

          <div className="relative max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-[#2DD4BF] mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8">
              &ldquo;The goal of early childhood education should be to activate the
              child&apos;s own natural desire to learn.&rdquo;
            </blockquote>
            <cite className="text-white/60 not-italic">
              — Maria Montessori
            </cite>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={viewportConfig}
          transition={fadeInUp.transition}
          className="mt-16 text-center"
        >
          <p className="text-[#475569] mb-6 max-w-2xl mx-auto">
            Ready to join us in our mission to elevate early childhood education
            across Texas? Let&apos;s work together to create safer, higher-quality
            learning environments.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2DD4BF] text-[#0F172A] font-semibold rounded-lg hover:bg-[#14B8A6] transition-colors duration-200"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
