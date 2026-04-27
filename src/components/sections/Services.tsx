"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cardStagger, viewportConfig } from "@/lib/animations";

// Service data with images
const FEATURED_SERVICES = [
  {
    title: "Instructional Support",
    description: "Expert guidance on curriculum development, lesson planning, and instructional strategies tailored to early childhood education.",
    image: "/images/service-1.jpg",
  },
  {
    title: "Staffing Solutions",
    description: "Comprehensive support for hiring, training, and retaining qualified early childhood educators and staff.",
    image: "/images/service-2.jpg",
  },
  {
    title: "Program Development",
    description: "Strategic planning and systems development to create structured, compliant, and effective child care programs.",
    image: "/images/service-3.jpg",
  },
  {
    title: "Student Engagement",
    description: "Proven approaches to create active, positive learning environments where children thrive and develop.",
    image: "/images/service-4.jpg",
  },
];

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
            From instructional support to program development, we provide expert
            guidance tailored to your center&apos;s unique needs.
          </p>
        </div>

        {/* Services Grid with Illustration Placeholders */}
        <motion.div
          variants={cardStagger.container}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-8"
        >
          {FEATURED_SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={cardStagger.item}
              whileHover={{ 
                y: -4, 
                boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)"
              }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0] cursor-pointer"
            >
              {/* Service Illustration - Aspect Ratio 4:3 */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
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
