import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  borderRadius = "rounded-[50px]",
  hoverEffect = false,
}: GlassCardProps) {
  return (
    <div className={cn("group relative", borderRadius)}>
      <div
        className={cn(
          "absolute inset-0 grid grid-cols-2 gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-full border-2 border-white",
          borderRadius
        )}
      />
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent to-black/60",
          borderRadius
        )}
      />
      <div
        className={cn(
          "relative border-2 border-transparent backdrop-blur-0 bg-clip-padding bg-gradient-to-tr from-transparent to-white/20",
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
