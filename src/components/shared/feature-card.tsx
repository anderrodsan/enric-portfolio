import GlassCard from "@/components/shared/glass-card";
import { acornMedium } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";

export default function FeatureCard({
  title,
  features,
  listIcon: ListIcon,
}: {
  title: string;
  features: string[];
  listIcon: React.ElementType;
}) {
  return (
    <GlassCard
      className="w-full px-9 py-10 flex-1"
      borderRadius="rounded-[48px]"
      hoverEffect={true}
    >
      <div className="space-y-6">
        <h3
          className={cn(
            "text-2xl lg:text-3xl font-medium text-white leading-relaxed",
            acornMedium.className
          )}
        >
          {title}
        </h3>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <ListIcon className="w-7 h-7 text-background" fill="white" />
              </div>
              <p className="text-white/90 text-xl leading-relaxed font-light">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
