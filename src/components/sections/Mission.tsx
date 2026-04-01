import { Target, Lightbulb, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    content:
      "To elevate the quality of early childhood education by empowering programs with the knowledge, tools, and support they need to create exceptional learning experiences for every child.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    content:
      "A world where every child has access to high-quality early education that honors their unique potential, fosters a love of learning, and builds a strong foundation for lifelong success.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Heart,
    title: "Our Values",
    content:
      "We believe in child-centered practices, continuous growth, inclusive environments, collaborative partnerships, and the transformative power of play-based learning.",
    color: "from-pink-400 to-rose-500",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="w-full bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-amber-800">
              Mission & Vision
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Guided by Purpose,{" "}
            <span className="text-amber-600">Driven by Passion</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="relative bg-gradient-to-b from-slate-50 to-white rounded-2xl p-8 border border-slate-100 hover:border-amber-200 transition-all duration-300 h-full">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.content}
                </p>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.color} opacity-5 rounded-tr-2xl rounded-bl-full`} />
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl transform rotate-1" />
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-amber-100">
            <div className="max-w-4xl mx-auto text-center">
              <svg
                className="w-12 h-12 text-amber-400 mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 mb-6 leading-relaxed">
                Every child is a different kind of flower, and all together,
                they make this world a beautiful garden.
              </blockquote>
              <cite className="text-slate-500 not-italic">
                — Inspired by our work with children every day
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
