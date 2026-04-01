"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    centerName: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xnqevwdr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", centerName: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#0F172A]/5 text-center"
      >
        <div className="w-20 h-20 bg-[#2DD4BF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#2DD4BF]" />
        </div>
        <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Thank You!</h3>
        <p className="text-[#0F172A]/70">
          Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-3 rounded-xl border-2 border-[#0F172A]/20 text-[#0F172A] font-medium hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-[#0F172A]/5 space-y-6"
    >
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-red-700"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">Something went wrong. Please try again or email directly at tanishab@elevateconsultinghtx.com</p>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#0F172A] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#0F172A]/10 bg-[#F8FAFC] focus:border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/20 transition-all outline-none"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#0F172A] mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#0F172A]/10 bg-[#F8FAFC] focus:border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/20 transition-all outline-none"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#0F172A] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#0F172A]/10 bg-[#F8FAFC] focus:border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/20 transition-all outline-none"
            placeholder="(713) 555-0123"
          />
        </div>

        <div>
          <label htmlFor="centerName" className="block text-sm font-medium text-[#0F172A] mb-2">
            Center Name
          </label>
          <input
            type="text"
            id="centerName"
            name="centerName"
            value={formData.centerName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#0F172A]/10 bg-[#F8FAFC] focus:border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/20 transition-all outline-none"
            placeholder="Your child care center"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#0F172A] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[#0F172A]/10 bg-[#F8FAFC] focus:border-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/20 transition-all outline-none resize-none"
          placeholder="Tell us how we can help..."
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-6 py-4 text-white font-semibold transition-all duration-300 hover:bg-[#1E293B] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </motion.form>
  );
}
