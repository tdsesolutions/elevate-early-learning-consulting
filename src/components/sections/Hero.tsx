"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm font-medium text-amber-800">
                Early Childhood Education Specialists
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Elevating Early
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Learning Experiences
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We partner with early childhood programs to create nurturing,
              developmentally appropriate environments where every child can
              thrive, learn, and grow to their full potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="rounded-full bg-amber-500 px-8 py-4 text-white font-semibold hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 text-center"
              >
                Start Your Journey
              </Link>
              <Link
                href="/#services"
                className="rounded-full border-2 border-slate-200 px-8 py-4 text-slate-700 font-semibold hover:border-amber-500 hover:text-amber-600 transition-all text-center"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">10+</div>
                <div className="text-sm text-slate-500 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-500 mt-1">Children Served</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-500 mt-1">Partner Programs</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-amber-200 rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-orange-200 rounded-full opacity-20 blur-3xl" />

              {/* Main content card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-amber-100">
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-50 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <p className="text-slate-600 font-medium">Building Bright Futures</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
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
                    <span className="text-slate-700">Play-Based Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
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
                    <span className="text-slate-700">Developmental Assessments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-purple-600"
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
                    <span className="text-slate-700">Family Engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
