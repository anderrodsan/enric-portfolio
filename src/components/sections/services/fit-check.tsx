import CTACard from "@/components/shared/cta-card";
import FeatureCard from "@/components/shared/feature-card";
import { Subtitle } from "@/components/shared/title";
import {
  SERVICE_FIT_CTA_CARD,
  SERVICE_RIGHT_FIT,
  SERVICE_WRONG_FIT,
} from "@/db/services";
import { acornMedium } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleX } from "lucide-react";

export default function FitCheck() {
  return (
    <div className="flex flex-col items-center w-full gap-10 py-10">
      <Subtitle>Am I a right fit?</Subtitle>
      <div className="grid lg:grid-cols-2 lg:grid-rows-1 gap-10">
        <div className="flex-1 flex row-span-1 h-full items-center">
          <FeatureCard
            title="This is a great fit for you if:"
            features={SERVICE_RIGHT_FIT}
            listIcon={CircleCheck}
          />
        </div>
        <div className="flex-1 flex row-span-1 h-full items-center">
          <FeatureCard
            title="This is a great fit for you if:"
            features={SERVICE_WRONG_FIT}
            listIcon={CircleX}
          />
        </div>
      </div>
      <CTACard data={SERVICE_FIT_CTA_CARD} />
    </div>
  );
}
