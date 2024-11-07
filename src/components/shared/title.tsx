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
        "text-medium w-full text-center text-5xl sm:text-8xl lg:text-9xl leading-[55px] sm:leading-[140px] tracking-tight text-light-green",
        "bg-gradient-to-b from-light-green to-[#5eb195] inline-block text-transparent bg-clip-text",
        acornMedium.className,
        className,
        "pb-2 sm:pb-4"
      )}
    >
      {children}
    </h1>
  );
}
