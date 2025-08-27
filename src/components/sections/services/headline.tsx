import Title from "@/components/shared/title";
import { cn } from "@/lib/utils";
import { acornRegular } from "@/lib/custom-fonts";
import Image from "next/image";
import GlassCard from "@/components/shared/glass-card";
import { CheckCircle } from "lucide-react";
import CTACard from "@/components/shared/cta-card";

export default function Headline({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-full gap-10 lg:gap-20",
        className
      )}
    >
      <Title className="sm:text-6xl max-w-[12ch] lg:text-7xl lg:max-w-none">
        Design support. Monthly plan.
      </Title>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10">
        <div className="group relative rounded-full bg-[#5A8F7D] hover:bg-[#D094E5] h-60 aspect-square overflow-hidden transition-all duration-1000">
          <Image
            src="/images/enric-without-background.png"
            alt="Hero image"
            width={1000}
            height={1000}
            className="absolute inset-0 top-4 -left-2 h-full w-auto object-cover scale-125 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-1000"
          />
        </div>
        <div className="flex-1 space-y-6 max-w-[60ch] lg:max-w-none">
          <h2
            className={cn(
              "text-2xl lg:text-[42px] leading-[1.2] text-start font-bold text-light-green",
              acornRegular.className
            )}
          >
            I&apos;ll take care of your product&apos;s design needs. So you can
            focus on what matters.
          </h2>
          <p className="text-2xl">
            For <b>12,000 DKK per month</b>, get up to <b>20 hours</b> of expert
            product, UX, and UI design. We&apos;ll start with a{" "}
            <b>free discovery call</b> to set priorities, then focus on what
            matters most each month.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServiceFeatures() {
  const designSupport = [
    "UX and UI design for web & mobile",
    "Landing pages & marketing materials",
    "Scalable Design Systems",
    "UX audits with clear recommendations",
    "Developer-ready specs and walkthrough videos",
    "Consistent brand application: typography, colors, icons",
    "Project Management & Weekly Updates",
  ];

  const benefits = [
    {
      title: "We set priorities together",
      description: "Focus on what matters.",
    },
    {
      title: "Fast turnaround",
      description: "Tasks completed within 48 hours.",
    },
    {
      title: "Cancel anytime",
      description: "No hiring hassle, no long contracts.",
    },
    {
      title: "One trusted partner",
      description: "From audits to dev handoffs.",
    },
  ];

  const ctaCardData = {
    title: "Join the evolution of creativity with our AI-powered art gallery",
    tag: "Case study",
    color: "light-green",
    image: "/mockups/browser.png",
    href: "/services",
  };

  return (
    <div className="flex flex-col items-center w-full gap-10">
      <div className="flex flex-col gap-4 lg:flex-row items-center w-full lg:gap-10">
        <div className="flex-1 w-full lg:w-auto">
          <GlassCard
            className="w-full px-9 py-10 flex-1"
            borderRadius="rounded-[48px]"
            hoverEffect={true}
          >
            <div className="space-y-6">
              <h3
                className={cn(
                  "text-3xl font-medium text-white leading-relaxed",
                  acornRegular.className
                )}
              >
                Your design support includes
              </h3>
              <div className="space-y-4">
                {designSupport.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-white/90" />
                    </div>
                    <p className="text-white/90 text-xl leading-relaxed font-light">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
        <div className="flex flex-col gap-4 h-full lg:max-w-[460px] w-full">
          {benefits.map((benefit, index) => (
            <GlassCard
              key={benefit.title}
              className="w-full px-7 py-6"
              borderRadius="rounded-[34px]"
              hoverEffect={true}
            >
              <p className="text-xl">
                <b>{benefit.title}. </b>
                <span>{benefit.description}</span>
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
      <CTACard data={ctaCardData} />
    </div>
  );
}
