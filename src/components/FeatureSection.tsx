
import { Brain, Zap, Target, Users } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";

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
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}