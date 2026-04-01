import {
  BookOpen,
  Users,
  ClipboardCheck,
  Heart,
  Building,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Curriculum Development",
    description:
      "Custom curriculum design aligned with early learning standards, focusing on play-based and developmentally appropriate practices.",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Staff Training & Development",
    description:
      "Comprehensive professional development workshops and ongoing coaching to empower your educators with the latest best practices.",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: ClipboardCheck,
    title: "Program Assessment",
    description:
      "In-depth evaluation of your early learning program with actionable recommendations for improvement and growth.",
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Heart,
    title: "Family Engagement",
    description:
      "Strategies and resources to build strong partnerships with families, creating a supportive network around each child.",
    color: "from-pink-400 to-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: Building,
    title: "Classroom Design",
    description:
      "Expert guidance on creating inspiring, safe, and functional learning environments that promote exploration and discovery.",
    color: "from-amber-400 to-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Sparkles,
    title: "Specialized Support",
    description:
      "Individualized assistance for children with diverse learning needs, ensuring inclusive practices in your program.",
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-slate-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-amber-800">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Comprehensive Solutions for{" "}
            <span className="text-amber-600">Early Learning Programs</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            We offer a full spectrum of consulting services designed to elevate
            every aspect of your early childhood education program.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-amber-200"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon
                  className={`w-7 h-7 bg-gradient-to-br ${service.color} bg-clip-text`}
                  style={{
                    color:
                      index === 0
                        ? "#3b82f6"
                        : index === 1
                        ? "#22c55e"
                        : index === 2
                        ? "#a855f7"
                        : index === 3
                        ? "#ec4899"
                        : index === 4
                        ? "#f59e0b"
                        : "#f97316",
                  }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Looking for a customized solution for your program?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-white font-semibold hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/25"
          >
            Let&apos;s Discuss Your Needs
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
