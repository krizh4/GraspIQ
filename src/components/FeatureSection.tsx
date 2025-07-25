import { Brain, Zap, Target, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Advanced AI understands your learning style and adapts explanations to match your comprehension level.",
    color: "text-education-blue"
  },
  {
    icon: Zap,
    title: "Instant Explanations",
    description: "Get immediate, detailed answers to any question across all subjects and difficulty levels.",
    color: "text-education-green"
  },
  {
    icon: Target,
    title: "Personalized Practice",
    description: "Receive customized practice problems and exercises based on your strengths and areas for improvement.",
    color: "text-education-purple"
  },
  {
    icon: Users,
    title: "Study Together",
    description: "Collaborate with peers, share insights, and learn from a community of motivated learners.",
    color: "text-education-orange"
  }
];

export function FeatureSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose 
            <span className="bg-gradient-primary bg-clip-text"> Grasp IQ</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of personalized education with features designed to accelerate your learning journey.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-border transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${feature.color.split('-')[1]}-100 to-${feature.color.split('-')[1]}-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}