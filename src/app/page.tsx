import { CTASection } from "@/components/CTASection";
import { FeatureSection } from "@/components/FeatureSection";
import { HeroSection } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
     <div className="min-h-screen bg-background">
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}
