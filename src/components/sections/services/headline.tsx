"use client";

import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";

export default function HorizontalHeadline() {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-5 md:px-10">
      {/* 9xl title centered */}
      <h1
        className={cn(
          "text-5xl sm:text-7xl md:text-9xl font-extrabold text-light-green text-balance text-center mb-8 md:mb-12",
          acornRegular.className
        )}
      >
        Service.
      </h1>

      {/* Subtitle + description stacked */}
      <div className="flex flex-col items-center text-center gap-6 md:gap-8">
        <h2
          className={cn(
            "text-3xl md:text-5xl font-bold text-light-green",
            acornRegular.className
          )}
        >
          I handle your product design, <br />
          so you can focus on what matters.
        </h2>

        <p className="text-[18px] md:text-[20px] max-w-[70ch]">
          For <span className="font-semibold">12,000 DKK/month</span>, get up to
          20 hours of expert product, UX &amp; UI design. <br />
          Start with a free discovery call to set priorities, then focus on what
          matters each month.
        </p>
      </div>
    </div>
  );
}
