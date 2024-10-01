import React from "react";
import { acronMedium } from "@/app/layout";
import { cn } from "@/lib/utils";

export default function AcornText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-light-green", acronMedium.className, className)}>
      {children}
    </p>
  );
}
