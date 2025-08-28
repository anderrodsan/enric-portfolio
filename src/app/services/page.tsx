import FitCheck from "@/components/sections/services/fit-check";
import Headline from "@/components/sections/services/headline";
import ServiceFeatures from "@/components/sections/services/features";
import ServiceSteps from "@/components/sections/services/steps";
import ServiceFAQ from "@/components/sections/services/faq";

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
        <FitCheck />
        <ServiceSteps />
        <ServiceFAQ />

        <p className="text-xl max-w-[60ch] text-center py-10">
          If you made it this far, thank you. This space holds my passion and
          dreams, and having you here means the world. Hope you have an amazing
          day.
        </p>
      </div>
    </div>
  );
}
