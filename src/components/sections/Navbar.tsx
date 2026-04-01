"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-amber-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-semibold text-slate-800">
              Elevate<span className="text-amber-600">Early</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#story"
              className="text-slate-600 hover:text-amber-600 transition-colors font-medium"
            >
              Our Story
            </Link>
            <Link
              href="/#services"
              className="text-slate-600 hover:text-amber-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/#mission"
              className="text-slate-600 hover:text-amber-600 transition-colors font-medium"
            >
              Mission
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-amber-500 px-5 py-2.5 text-white font-medium hover:bg-amber-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-amber-100">
            <div className="flex flex-col gap-4">
              <Link
                href="/#story"
                onClick={() => setIsOpen(false)}
                className="text-slate-600 hover:text-amber-600 transition-colors font-medium px-2 py-1"
              >
                Our Story
              </Link>
              <Link
                href="/#services"
                onClick={() => setIsOpen(false)}
                className="text-slate-600 hover:text-amber-600 transition-colors font-medium px-2 py-1"
              >
                Services
              </Link>
              <Link
                href="/#mission"
                onClick={() => setIsOpen(false)}
                className="text-slate-600 hover:text-amber-600 transition-colors font-medium px-2 py-1"
              >
                Mission
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-amber-600 font-medium px-2 py-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
