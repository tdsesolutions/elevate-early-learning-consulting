"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeInUp, slideInLeft, slideInRight, viewportConfig } from "@/lib/animations";
import Link from "next/link";
import { Heart, MessageCircle } from "lucide-react";

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF7F6]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#2DD4BF]/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image - Featured prominently */}
            <motion.div
              initial={slideInLeft.initial}
              animate={slideInLeft.animate}
              transition={slideInLeft.transition}
              className="relative order-2 lg:order-1"
            >
              {/* Image with frame treatment */}
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-[#2DD4BF]/10 rounded-2xl transform rotate-2" />
                <div className="absolute -inset-4 bg-[#0F172A]/5 rounded-2xl transform -rotate-1" />
                
                {/* Main image */}
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/elevate-early-learning-consulting/ElevateBio.png" 
                    alt="Tanisha B"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Accent badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -bottom-6 -right-6 bg-[#0F172A] text-white rounded-2xl p-5 shadow-xl"
                >
                  <div className="text-sm font-semibold">20+ Years</div>
                  <div className="text-xs text-[#2DD4BF]">Experience</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={slideInRight.initial}
              animate={slideInRight.animate}
              transition={slideInRight.transition}
              className="order-1 lg:order-2"
            >
              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-8">
                About{" "}
                <span className="italic font-serif text-[#0F172A]">Tanisha B</span>
              </h1>

              {/* Intro paragraph */}
              <p className="text-lg text-[#475569] leading-relaxed">
                My name is Tanisha Butler, M.S., but you can call me Tanisha B.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Content Section - EXACT COPY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-10">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportConfig}
            transition={fadeInUp.transition}
            className="space-y-8"
          >
            {/* Block 1 */}
            <p className="text-lg text-[#475569] leading-relaxed">
              I&apos;m an East Texas native who has called Houston home for over 20 years. I earned my degree in Political Science and my Master&apos;s in Child Development from Prairie View A&amp;M University and Texas Southern University, and I&apos;ve been rooted in early childhood care since the age of 15.
            </p>

            {/* Block 2 - Highlighted */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 md:p-10">
              <p className="text-lg text-[#475569] leading-relaxed">
                This work is personal for me. It&apos;s not just about programs, it&apos;s about people, families, and the environments that shape children during their most important years.
              </p>
            </div>

            {/* Block 3 */}
            <p className="text-lg text-[#475569] leading-relaxed">
              Over time, I&apos;ve developed a reputation for helping programs find their footing, bring structure to their operations, and create spaces where both staff and children can thrive with intention.
            </p>

            {/* Block 4 - Highlighted with border */}
            <div className="border-l-4 border-[#2DD4BF] pl-6 py-2">
              <p className="text-lg text-[#0F172A] leading-relaxed font-medium">
                I specialize in supporting after-school programs, CACFP, and childcare operations by bringing clarity, organization, and systems that align with real day-to-day needs. My approach is centered on building strong foundations so programs are not only functional, but positioned for long-term impact.
              </p>
            </div>

            {/* Block 5 */}
            <p className="text-lg text-[#475569] leading-relaxed">
              As I continue to grow in this field, I&apos;m expanding into residential child care and pursuing TBRI and CPI certifications to deepen the level of care, understanding, and support I bring to every space I serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Emphasis Section - Son/Purpose */}
      <section className="py-20 md:py-28 bg-[#0F172A] relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2DD4BF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2DD4BF]/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-10">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportConfig}
            transition={fadeInUp.transition}
            className="text-center"
          >
            {/* Heart icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2DD4BF]/20 rounded-full mb-8">
              <Heart className="w-8 h-8 text-[#2DD4BF]" />
            </div>

            {/* Quote/Highlight - EXACT COPY */}
            <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
              &ldquo;At the center of everything I do is my son. His presence, his energy, and the way he moves through the world keeps me grounded and reminds me that the work we do behind the scenes directly shapes what children experience every day.&rdquo;
            </blockquote>

            {/* Supporting text - EXACT COPY */}
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
              I believe when programs are built with care, intention, and structure, children don&apos;t just attend, they flourish.
            </p>

            {/* CTA - EXACT COPY */}
            <p className="text-xl text-white font-medium">
              Let&apos;s connect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF7F6]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-10 text-center">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportConfig}
            transition={fadeInUp.transition}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
              Ready to Work Together?
            </h2>
            
            <p className="text-lg text-[#475569] mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how Elevate Early Learning & Consulting can support your program.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </Link>
              
              <Link href="/">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
