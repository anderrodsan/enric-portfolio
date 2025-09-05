import GlassCard from "@/components/shared/glass-card";
import { acornMedium } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";

export default function FeatureCard({
  title,
  features,
  listIcon: ListIcon,
  className,
}: {
  title: string;
  features: string[];
  listIcon: React.ElementType;
  className?: string;
}) {
  return (
    <GlassCard
      className={cn("w-full p-5 lg:px-9 lg:py-10 h-full", className)}
      borderRadius="rounded-[24px] lg:rounded-[48px]"
      hoverEffect={true}
    >
      <div className="space-y-2 lg:space-y-6">
        <h3
          className={cn(
            "text-xl lg:text-3xl font-medium text-white leading-relaxed",
            acornMedium.className
          )}
        >
          {title}
        </h3>
        <div className="space-y-2 lg:space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex-shrink-0 mt-1 h-4 lg:h-6 aspect-square rounded-full flex items-center justify-center bg-white/90">
                <ListIcon
                  className="w-3 lg:w-4 h-3 lg:h-4 text-background"
                  strokeWidth={3}
                />
              </div>
              <p className="text-white text-base lg:text-xl leading-relaxed font-light pt-1">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
