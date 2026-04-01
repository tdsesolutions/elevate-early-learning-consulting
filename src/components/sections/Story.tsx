export default function Story() {
  return (
    <section id="story" className="w-full bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-200 rounded-full opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-200 rounded-full opacity-50" />

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
                <div className="aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Passion for Early Learning
                    </h3>
                    <p className="text-slate-500">
                      Where every child&apos;s potential is nurtured
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-amber-800">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Rooted in Passion,{" "}
              <span className="text-amber-600">Growing with Purpose</span>
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Elevate Early Learning & Consulting was born from a deep passion
                for early childhood education and a belief that every child deserves
                the best possible start in life. Founded by educators with decades
                of combined experience, we understand the unique challenges and
                rewards of nurturing young minds.
              </p>

              <p>
                Our journey began in classrooms, where we witnessed firsthand the
                transformative power of quality early education. We saw children
                blossom when given the right environment, caring teachers, and
                developmentally appropriate practices. This inspired us to expand
                our reach and help more programs achieve excellence.
              </p>

              <p>
                Today, we partner with childcare centers, preschools, and early
                learning programs across the region, providing consulting services
                that make a real difference. From curriculum development to staff
                training, we bring expertise, compassion, and a commitment to
                elevating the standard of early childhood education.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <div className="text-2xl font-bold text-slate-900">2014</div>
                <div className="text-sm text-slate-500">Year Founded</div>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-500">Commitment to Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
