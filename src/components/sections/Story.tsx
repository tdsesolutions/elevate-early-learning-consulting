"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, slideInLeft, slideInRight, viewportConfig } from "@/lib/animations";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  "Over a decade of experience in early childhood education",
  "Licensed by the Texas Department of Family and Protective Services",
  "Masters Degree in Education (M.Ed.)",
  "Passionate about child safety, development, and quality care",
  "Dedicated to empowering centers, directors, and owners",
];

export function Story() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={slideInLeft.initial}
            whileInView={slideInLeft.animate}
            viewport={viewportConfig}
            transition={slideInLeft.transition}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#2DD4BF]/10 to-transparent flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-6 bg-[#2DD4BF]/20 rounded-full flex items-center justify-center">
                    <span className="text-5xl">👩‍🏫</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Ms. Tanisha Butler</h3>
                  <p className="text-white/70">Founder & Lead Consultant</p>
                  <p className="text-[#2DD4BF] mt-2">M.Ed. | Licensed Professional</p>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-[#2DD4BF] text-[#0F172A] rounded-2xl p-6 shadow-lg"
            >
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={slideInRight.initial}
            whileInView={slideInRight.animate}
            viewport={viewportConfig}
            transition={slideInRight.transition}
          >
            <SectionHeading
              subtitle="Our Story"
              title="Meet the Heart Behind Elevate Early Learning"
            />

            <div className="space-y-6 text-[#475569] leading-relaxed">
              <p>
                Elevate Early Learning & Consulting was founded by Ms. Tanisha Butler,
                a passionate early childhood professional with a Master&apos;s Degree in
                Education and over a decade of hands-on experience in the child care
                industry.
              </p>

              <p>
                Licensed by the Texas Department of Family and Protective Services,
                Tanisha has dedicated her career to ensuring that child care centers
                across Texas operate with the highest standards of safety, quality,
                and educational excellence.
              </p>

              <p>
                Her mission is simple yet powerful: to ensure safety, quality, and
                assurance—one child, one center, and one director at a time.
              </p>
            </div>

            {/* Features List */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
              className="mt-8 space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#2DD4BF] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0F172A]">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
