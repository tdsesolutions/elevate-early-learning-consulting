"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, slideInLeft, slideInRight, viewportConfig } from "@/lib/animations";
import Image from "next/image";

export function Story() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
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

            {/* Accent badge - removed years stat */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-[#2DD4BF] text-[#0F172A] rounded-2xl p-5 shadow-lg"
            >
              <div className="text-sm font-medium">Child Development</div>
              <div className="text-xs opacity-80">Specialist</div>
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
                Ms. Tanisha Butler founded Elevate Early Learning & Consulting with a deeply 
                personal mission. After earning her Master&apos;s Degree in Child Development 
                and successfully owning two child care centers, she experienced something that 
                changed everything—the traumatic closure of one of her facilities due to 
                circumstances that could have been prevented with proper guidance.
              </p>

              <p>
                That experience stayed with her. It became the driving force behind her work 
                today. She knows firsthand the challenges that keep center owners awake at 
                night—the compliance concerns, the safety protocols, the overwhelming feeling 
                of trying to do everything right while keeping children safe and thriving.
              </p>

              <p>
                Now, she uses that hard-won knowledge to help other directors and owners 
                navigate the same systems. Her goal is simple: prevent others from going 
                through what she did. Every consultation, every policy review, every moment 
                of guidance is rooted in real experience and genuine care for the people 
                she serves.
              </p>

              <p className="text-[#0F172A] font-medium">
                This isn&apos;t just consulting—it&apos;s partnership born from experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
