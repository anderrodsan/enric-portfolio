import Headline, {
  ServiceFeatures,
} from "@/components/sections/services/headline";
import CTACard from "@/components/shared/cta-card";
import Title from "@/components/shared/title";
import React from "react";

const ctaCardData = {
  title: "Join the evolution of creativity with our AI-powered art gallery",
  tag: "Case study",
  color: "light-green",
  image: "/mockups/browser.png",
  href: "/services",
};

export default function About() {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <div className="flex flex-col items-center gap-10 w-[100%] max-w-6xl py-4 px-5 md:py-14 md:gap-20">
        <Headline />
        <ServiceFeatures />
      </div>
    </div>
  );
}
