"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2DD4BF]/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2DD4BF]/10 text-[#0F172A] text-sm font-medium mb-6">
              <Award className="w-4 h-4 text-[#2DD4BF]" />
              Professional Child Care Consulting
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
              Elevate Your{" "}
              <span className="text-[#2DD4BF]">Child Care Center</span> to New
              Heights
            </h1>

            <p className="text-lg text-[#475569] leading-relaxed mb-8 max-w-xl">
              Ensuring Safety, Quality, & Assurance one Child, Center & Director
              at a Time. Expert guidance for child care centers, directors, and
              owners across Texas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E2E8F0]">
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">10+</div>
                <div className="text-sm text-[#475569]">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">50+</div>
                <div className="text-sm text-[#475569]">Centers Helped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">100%</div>
                <div className="text-sm text-[#475569]">Commitment</div>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-[#2DD4BF]/20 to-[#14B8A6]/20 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="w-20 h-20 mx-auto mb-4 text-[#2DD4BF]" />
                  <p className="text-2xl font-bold">Building Bright Futures</p>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-8 top-1/4 bg-white rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2DD4BF]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#2DD4BF]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">
                      Quick Response
                    </div>
                    <div className="text-xs text-[#475569]">24hr Support</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-4 bottom-1/4 bg-white rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2DD4BF] rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">
                      Licensed Expert
                    </div>
                    <div className="text-xs text-[#475569]">M.Ed. Certified</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
