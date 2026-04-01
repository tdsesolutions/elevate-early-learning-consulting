"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Shield,
  ClipboardCheck,
  Apple,
  Utensils,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
  {
    title: "Policies & Procedures",
    description:
      "Develop comprehensive, compliant policy manuals tailored to your childcare center's unique needs and Texas state requirements.",
    icon: FileCheck,
  },
  {
    title: "Risk Management",
    description:
      "Identify potential hazards, implement safety protocols, and create proactive strategies to protect children, staff, and your business.",
    icon: Shield,
  },
  {
    title: "Opening Inspections",
    description:
      "Thorough pre-opening assessments to ensure your facility meets all licensing standards before your official launch day.",
    icon: ClipboardCheck,
  },
  {
    title: "CACFP Guidance",
    description:
      "Navigate the Child and Adult Care Food Program with expert support for compliance, documentation, and reimbursement optimization.",
    icon: Apple,
  },
  {
    title: "Menu Planning",
    description:
      "Create nutritious, age-appropriate meal plans that satisfy CACFP guidelines while delighting young palates.",
    icon: Utensils,
  },
  {
    title: "Curriculum Development",
    description:
      "Design engaging, developmentally appropriate learning experiences that foster growth across all developmental domains.",
    icon: BookOpen,
  },
  {
    title: "Classroom Management",
    description:
      "Establish positive behavior guidance systems and organized learning environments that promote children's success.",
    icon: Users,
  },
  {
    title: "Texas Rising Star & Texas School Ready Support",
    description:
      "Achieve and maintain quality ratings with expert guidance through Texas's esteemed early childhood certification programs.",
    icon: Award,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-zinc-50 py-24 dark:bg-zinc-950 lg:py-32"
    >
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Comprehensive consulting solutions designed to elevate your early
            learning program and ensure your success.
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
        />

        {/* Services grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
