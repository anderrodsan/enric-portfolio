import CTACard from "@/components/shared/cta-card";
import GlassCard from "@/components/shared/glass-card";
import { Subtitle } from "@/components/shared/title";
import { SERVICE_STEPS, SERVICE_STEPS_CTA_CARD } from "@/db/services";
import { acornMedium } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";

export default function ServiceSteps() {
  return (
    <div className="flex flex-col items-center w-full gap-10">
      <Subtitle>Simple, transparent & flexible</Subtitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-5 w-full">
        {SERVICE_STEPS.map((step, index) => (
          <GlassCard
            key={step.title}
            className="relative w-full px-7 py-6 space-y-2 h-full"
            borderRadius="rounded-[34px]"
            hoverEffect={true}
          >
            <p className={cn("text-2xl", acornMedium.className)}>
              {step.title}
            </p>
            <p className="text-xl">{step.description}</p>
            <div className="absolute -top-4 -left-3 h-9 w-9 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-2xl font-bold">{index + 1}</span>
            </div>
          </GlassCard>
        ))}
      </div>
      <CTACard data={SERVICE_STEPS_CTA_CARD} />
    </div>
  );
}
