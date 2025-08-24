import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
  hoverEffect?: boolean;
}

interface GradientBorderCardProps {
  children: React.ReactNode;
  className?: string;
}

interface FeatureListProps {
  title: string;
  features: string[];
  className?: string;
}

export function GlassCard({
  children,
  className,
  borderRadius = "rounded-[50px]",
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <div className={cn("group relative", borderRadius)}>
      <div
        className={cn(
          "absolute inset-0 grid grid-cols-2 gap-4 bg-white/20 backdrop-blur-sm p-4 rounded-full border-2 border-white",
          borderRadius
        )}
      />
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent to-black/40",
          borderRadius
        )}
      />
      <div
        className={cn(
          "relative border-2 border-transparent backdrop-blur-0 bg-clip-padding",
          hoverEffect &&
            "hover:outline hover:outline-4 hover:outline-white hover:outline-offset-[-2px] transition-all",
          borderRadius,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

// export function GlassCard({ children, className }: GlassCardProps) {
//     return (
//       <div className="group relative rounded-2xl p-0.5">
//         <div className="z-0 absolute inset-0 bg-gradient-to-tr from-white to-white/30 rounded-2xl group-hover:scale-[1.005] group-hover:bg-white transition-all duration-300 ease-in-out" />
//         <div className="z-10 w-full h-full p-8 bg-[#243831] rounded-2xl backdrop-blur-sm">
//           {children}
//         </div>
//       </div>
//     );
//   }

export function GradientBorderCard({
  children,
  className,
}: GradientBorderCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl p-4 transition-all duration-300 ease-in-out",
        "bg-gradient-to-tr from-white to-[#C9C9C900]",
        "hover:p-2 hover:bg-white group",
        className
      )}
    >
      <div className="relative rounded-3xl bg-transparent backdrop-blur-sm p-8 h-full">
        {children}
      </div>
    </div>
  );
}

export default GlassCard;
