import CTACard from "@/components/shared/cta-card";
import GlassCard from "@/components/shared/glass-card";
import { Subtitle } from "@/components/shared/title";
import { SERVICE_STEPS, SERVICE_STEPS_CTA_CARD } from "@/db/services";
import { acornMedium } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";

export default function ServiceSteps() {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto gap-6 lg:gap-10">
      <Subtitle>Simple, transparent & flexible</Subtitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 w-full">
        {SERVICE_STEPS.map((step, index) => (
          <GlassCard
            key={step.title}
            className="relative w-full p-5 lg:px-7 lg:py-6 space-y-2 h-full"
            borderRadius="rounded-[18px] lg:rounded-[34px]"
            hoverEffect={true}
          >
            <div className="flex items-center gap-2">
              <div className="lg:absolute -top-4 -left-3 h-6 lg:h-9 aspect-square bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-sm lg:text-2xl font-bold">
                  {index + 1}
                </span>
              </div>
              <p className={cn("text-xl lg:text-2xl", acornMedium.className)}>
                {step.title}
              </p>
            </div>

            <p className="text-xl">{step.description}</p>
          </GlassCard>
        ))}
      </div>
      <CTACard data={SERVICE_STEPS_CTA_CARD} />
    </div>
  );
}
