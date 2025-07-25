import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-hero rounded-3xl p-12 border border-border/50 shadow-large">
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Learning?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of students who are already experiencing the power of AI-driven education. 
            Start your personalized learning journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="default" size="lg" className="px-8 py-3 text-base">
              Start Learning Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-3 text-base">
              View Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}