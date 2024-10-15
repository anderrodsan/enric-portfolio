import React from "react";

import { cn } from "@/lib/utils";
import { acornMedium } from "@/lib/custom-fonts";

export default function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "text-center text-5xl sm:text-8xl lg:text-9xl leading-[48px] md:leading-[128px] letter-spacing-[-2em] text-light-green",
        "bg-gradient-to-b from-light-green to-[#66c0a2] inline-block text-transparent bg-clip-text",
        acornMedium.className,
        className
      )}
    >
      {children}
    </h1>
  );
}
