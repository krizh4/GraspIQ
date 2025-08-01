import React from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

export function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  // Use a soft purple gradient background for all cards, matching homepage feel
  return (
    <div className="group p-6 bg-[linear-gradient(135deg,_#f5e9ff_60%,_#e3d1fa_100%)] rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-border transform hover:scale-105">
      <div
        className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-200 to-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
      >
        <Icon className={`w-6 h-6 text-purple-500`} />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
