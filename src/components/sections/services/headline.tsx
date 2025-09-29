"use client";

import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";

export default function HorizontalHeadline() {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      {/* 9xl title centered */}
      <h1
        className={cn(
          "text-5xl sm:text-7xl md:text-9xl font-extrabold text-light-green text-balance text-center mb-8 md:mb-12",
          acornRegular.className
        )}
      >
        Service.
      </h1>

      {/* Subtitle + description: left on mobile, centered on desktop */}
      <div className="flex flex-col items-start text-left md:items-center md:text-center gap-6 md:gap-8 w-full">
        <h2
          className={cn(
            "text-3xl md:text-5xl font-bold text-light-green w-full tracking-tight md:tracking-normal",
            acornRegular.className
          )}
        >
          I handle your product design, <br />
          so you can focus on what matters.
        </h2>

        {/* Two real paragraphs; extra spacing only on mobile */}
        <div className="w-full">
          <p className="text-[18px] md:text-[20px] w-full mb-4 md:mb-0">
            Starting at <span className="font-semibold">6,000 DKK/month</span>,
            get up to
            <span className="font-semibold"> 10 hours</span> of expert product,
            UX &amp; UI design.
          </p>
          <p className="text-[18px] md:text-[20px] w-full">
            Perfect for startups who need design help without the commitment of
            a full-time hire.
          </p>
        </div>
      </div>
    </div>
  );
}
