const stats = [
  {
    number: "1M+",
    label: "Students Helped",
    description: "Learners worldwide trust Grasp IQ"
  },
  {
    number: "95%",
    label: "Success Rate",
    description: "Students improve their grades"
  },
  {
    number: "24/7",
    label: "AI Support",
    description: "Always available when you need help"
  },
  {
    number: "50+",
    label: "Subjects Covered",
    description: "From basic math to advanced physics"
  }
];

export function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1 opacity-90">
                {stat.label}
              </div>
              <div className="text-sm opacity-75">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}