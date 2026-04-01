"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ className = "", onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    centerName: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xnqevwdr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          centerName: formData.centerName,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          centerName: "",
          message: "",
        });
        onSuccess?.();
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-emerald-800 mb-2">Message Sent!</h3>
        <p className="text-emerald-600">
          Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-emerald-700 font-medium hover:text-emerald-800 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      {/* Full Name */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-backwards">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200 outline-none"
        />
      </div>

      {/* Email */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-75 fill-mode-backwards">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200 outline-none"
        />
      </div>

      {/* Phone */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-backwards">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="(713) 555-0123"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200 outline-none"
        />
      </div>

      {/* Center Name */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150 fill-mode-backwards">
        <label htmlFor="centerName" className="block text-sm font-medium text-gray-700 mb-1.5">
          Center Name
        </label>
        <input
          type="text"
          id="centerName"
          name="centerName"
          value={formData.centerName}
          onChange={handleChange}
          placeholder="Your child care center name (optional)"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200 outline-none"
        />
      </div>

      {/* Message */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-backwards">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your needs..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200 outline-none resize-none"
        />
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm animate-in fade-in duration-300">
          <p className="font-medium">Oops! Something went wrong.</p>
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-backwards pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 px-6 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
