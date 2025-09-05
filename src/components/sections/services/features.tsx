import CTACard from "@/components/shared/cta-card";
import FeatureCard from "@/components/shared/feature-card";
import GlassCard from "@/components/shared/glass-card";
import {
  SERVICE_FEATURES_BENEFITS,
  SERVICE_FEATURES_CTA_CARD,
  SERVICE_FEATURES_DESIGN_SUPPORT,
} from "@/db/services";
import { Check } from "lucide-react";

export default function ServiceFeatures() {
  return (
    <div className="flex flex-col items-center w-full gap-6 lg:gap-10">
      <div className="flex flex-col gap-4 lg:flex-row items-center w-full lg:gap-10">
        <div className="flex-1 w-full lg:w-auto">
          <FeatureCard
            title="Your design support includes"
            features={SERVICE_FEATURES_DESIGN_SUPPORT}
            listIcon={Check}
          />
        </div>
        <div className="flex flex-col gap-4 h-full lg:max-w-[460px] w-full">
          {SERVICE_FEATURES_BENEFITS.map((benefit, index) => (
            <GlassCard
              key={benefit.title}
              className="w-full p-5 lg:px-7 lg:py-6"
              borderRadius="rounded-[18px] lg:rounded-[34px]"
              hoverEffect={true}
            >
              <p className="text-lg lg:text-xl">
                <b>{benefit.title}. </b>
                <span>{benefit.description}</span>
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
      <CTACard data={SERVICE_FEATURES_CTA_CARD} />
    </div>
  );
}
