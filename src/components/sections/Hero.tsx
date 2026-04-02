"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { heroTextReveal, floatAnimation, viewportConfig } from "@/lib/animations";
import Link from "next/link";

export function Hero() {
  const headlineWords = "Ensuring Safety, Quality, & Assurance".split(" ");
  const subHeadlineWords = "One Child, One Center, & One Director at a Time".split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF7F6]" />
      
      {/* Subtle brand accent shapes */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#2DD4BF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0F172A]/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Main headline - staggered word reveal */}
            <motion.div
              variants={heroTextReveal.container}
              initial="hidden"
              animate="visible"
              className="mb-4"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={heroTextReveal.child}
                    className="inline-block mr-[0.3em]"
                  >
                    {word === "Assurance" ? (
                      <span className="text-[#2DD4BF]">{word}</span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* Sub headline */}
            <motion.div
              variants={heroTextReveal.container}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-[#475569] font-light">
                {subHeadlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={heroTextReveal.child}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-[#475569] leading-relaxed mb-8"
            >
              At Elevate Early Learning & Consulting, we are dedicated to enhancing 
              the quality of early childhood education through structured support, 
              compliance guidance, and real-world expertise.
            </motion.p>

            {/* Authority block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4 mb-10 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-[#E2E8F0]"
            >
              <div className="w-12 h-12 bg-[#2DD4BF]/10 rounded-full flex items-center justify-center">
                <span className="text-xl">👩‍🏫</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#0F172A]">
                  Led by Ms. Tanisha Butler, M.Ed
                </p>
                <p className="text-sm text-[#475569]">
                  Child Development Specialist & Former Center Owner
                </p>
              </div>
            </motion.div>

            {/* CTA - appears last */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Link href="/contact">
                <Button size="lg">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right visual - illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={floatAnimation}
              className="relative"
            >
              {/* Hero Illustration - Aspect Ratio 16:10 */}
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/elevate-early-learning-consulting/images/hero.jpg" 
                  alt="Educational consultant collaborating with school leader"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating accent cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -left-8 top-1/3 bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2DD4BF]/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🛡️</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">Safety First</div>
                    <div className="text-xs text-[#475569]">Always</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute -right-4 bottom-1/4 bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0F172A] rounded-lg flex items-center justify-center">
                    <span className="text-lg text-white">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">Quality</div>
                    <div className="text-xs text-[#475569]">Assured</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
