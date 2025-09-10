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
          <div key={step.title} className="relative">
            <GlassCard
              className="w-full p-5 lg:px-7 lg:py-6 space-y-2 h-full"
              borderRadius="rounded-[18px] lg:rounded-[34px]"
              hoverEffect={true}
            >
              {/* Title + description */}
              <div className="flex flex-col gap-2">
                <p className={cn("text-xl lg:text-2xl", acornMedium.className)}>
                  {step.title}
                </p>
                <p className="text-xl">{step.description}</p>
              </div>
            </GlassCard>

            {/* Number badge floating outside top-right */}
            <div className="absolute -top-3 -right-3">
              <div className="h-7 lg:h-10 w-7 lg:w-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-black text-sm lg:text-xl font-bold">
                  {index + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CTACard data={SERVICE_STEPS_CTA_CARD} />
    </div>
  );
}
