import React from "react";

import { cn } from "@/lib/utils";
import { acornMedium } from "@/lib/custom-fonts";

export default function Title({
  children,
  className,
  gradient = true,
}: {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}) {
  return (
    <h1
      className={cn(
        "text-medium w-full text-center text-5xl sm:text-8xl lg:text-9xl leading-[55px] sm:leading-[140px] tracking-tight text-light-green",
        gradient &&
          "bg-gradient-to-b from-light-green to-[#5eb195] inline-block text-transparent bg-clip-text",
        acornMedium.className,
        "pb-2 sm:pb-4",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Subtitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl lg:text-5xl font-medium text-light-green mb-5 text-center",
        acornMedium.className,
        className
      )}
    >
      {children}
    </h2>
  );
}
