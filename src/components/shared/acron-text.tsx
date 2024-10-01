import React from "react";
import { cn } from "@/lib/utils";
import { acron } from "@/lib/custom-fonts";

export default function AcornText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-light-green", acron.className, className)}>
      {children}
    </p>
  );
}
