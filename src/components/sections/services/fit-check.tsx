import CTACard from "@/components/shared/cta-card";
import FeatureCard from "@/components/shared/feature-card";
import { Subtitle } from "@/components/shared/title";
import {
  SERVICE_FIT_CTA_CARD,
  SERVICE_RIGHT_FIT,
  SERVICE_WRONG_FIT,
} from "@/db/services";
import { Check, X } from "lucide-react";

export default function FitCheck() {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto gap-6 lg:gap-10 py-10">
      <Subtitle>Am I the right fit?</Subtitle>
      <div className="grid lg:grid-cols-2 lg:grid-rows-1 gap-4 lg:gap-10 w-full">
        <div className="h-full lg:flex">
          <FeatureCard
            title="This is a great fit for you if:"
            features={SERVICE_RIGHT_FIT}
            listIcon={Check}
          />
        </div>
        <div className="h-full lg:flex">
          <FeatureCard
            title="This is not a great fit for you if:"
            features={SERVICE_WRONG_FIT}
            listIcon={X}
          />
        </div>
      </div>
      <CTACard data={SERVICE_FIT_CTA_CARD} />
    </div>
  );
}
