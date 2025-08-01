import { CTASection } from "@/components/CTASection";
import { FeatureSection } from "@/components/FeatureSection";
import { HeroSection } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <div
      className="
        min-h-screen
        bg-[#f5e9ff]
        bg-[linear-gradient(to_right,_rgba(227,209,250,0.3)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(227,209,250,0.3)_1px,_transparent_1px)]
        [background-size:32px_32px]
      "
    >
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}
