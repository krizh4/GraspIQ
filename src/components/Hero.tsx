'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";


export function HeroSection() {
  const router = useRouter();
  // State to manage the prompt input
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle prompt submission here
    console.log("Prompt submitted:", prompt);
    router.push(`/chat`)
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Sparkles className="w-12 h-12 text-primary" />
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text">
            Grasp IQ
          </h1>
        </div>

        {/* Main headline */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Unlock Your Learning
            <span className="block bg-gradient-primary bg-clip-text">
              Potential
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience personalized AI tutoring that adapts to your learning style.
            Ask any question and get instant, intelligent explanations.
          </p>
        </div>

        {/* Prompt input form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex gap-3 p-2 bg-card rounded-2xl shadow-large border border-border/50 backdrop-blur-sm">
            <Input
              placeholder="Ask me anything... e.g., 'Explain quantum physics simply'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="border-0 bg-transparent text-base placeholder:text-muted-foreground/70 focus-visible:ring-0 flex-1 h-12 rounded-xl px-4 shadow-none"
            />
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="h-12 rounded-xl px-6 shadow-none bg-gradient-to-r from-primary to-purple-400 text-white border-0 hover:from-primary/90 hover:to-purple-400/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              Ask
            </Button>
          </div>
        </form>

        {/* Quick suggestions */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            "Explain calculus basics",
            "Help with chemistry",
            "Programming concepts",
            "History timeline"
          ].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setPrompt(suggestion)}
              className="px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary text-secondary-foreground rounded-full border border-border/30 hover:border-border/60 transition-all duration-200 hover:shadow-soft"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}