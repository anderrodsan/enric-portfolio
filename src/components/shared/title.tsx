import React from "react";

import { cn } from "@/lib/utils";
import { acron } from "@/lib/custom-fonts";

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
        "text-center text-[60px] sm:text-[120px] lg:text-[170px] leading-[70px] sm:leading-[120px] lg:leading-[170px] letter-spacing-[-1.7px] text-light-green",
        acron.className,
        className
      )}
    >
      {children}
    </h1>
  );
}
