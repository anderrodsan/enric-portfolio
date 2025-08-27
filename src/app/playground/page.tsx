import CTACard from "@/components/shared/cta-card";
import GlassCard from "@/components/shared/glass-card";
import Title from "@/components/shared/title";
import { CheckCircle } from "lucide-react";
import React from "react";

export default function Playground() {
  const designSupport = [
    "UX and UI design for web & mobile",
    "Landing pages & marketing materials",
    "Scalable Design Systems",
    "UX audits with clear recommendations",
    "Developer-ready specs and walkthrough videos",
    "Consistent brand application: typography, colors, icons",
    "Project Management & Weekly Updates",
  ];

  const ctaCards = [
    {
      title: "Join the evolution of creativity with our AI-powered art gallery",
      tag: "Case Study",
      color: "light-green",
      image: "/mockups/browser.png",
      href: "/design-support",
    },
    {
      title: "Join the evolution of creativity with our AI-powered art gallery",
      tag: "Case Study",
      color: "light-blue",
      image: "/mockups/browser.png",
      href: "/design-support",
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="flex flex-col items-center space-y-12 max-w-4xl mx-auto">
        <Title>Playground</Title>

        {/* Feature List Card - matches your image */}
        <GlassCard
          className="w-full max-w-2xl p-8"
          borderRadius="rounded-[48px]"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-white leading-relaxed">
              Your design support includes
            </h3>
            <div className="space-y-4">
              {designSupport.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-white/90" />
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed font-light">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        <div className="flex flex-col gap-10 w-full">
          {ctaCards.map((card) => (
            <CTACard key={card.title} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
