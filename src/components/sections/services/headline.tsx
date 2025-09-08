"use client";

import { SERVICE_HEADLINE } from "@/db/services";
import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

export default function Headline({ className }: { className?: string }) {
  // 🎥 Pick a random video between 1–7 on mount
  const randomVideo = useMemo(() => {
    const index = Math.floor(Math.random() * 7) + 1; // 1 → 7
    return `/video/video${index}.mp4`;
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center text-center w-full max-w-screen-lg mx-auto min-h-[60vh]",
        className
      )}
    >
      {/* Main title */}
      <h1
        className={cn(
          "text-3xl md:text-5xl font-bold text-light-green text-balance max-w-[65ch] mb-6 md:mb-8",
          acornRegular.className
        )}
      >
        {SERVICE_HEADLINE.title}
      </h1>

      {/* Description */}
      <p
        className="md:text-[20px] max-w-[70ch] mb-12 md:mb-16"
        dangerouslySetInnerHTML={{ __html: SERVICE_HEADLINE.description }}
      />

      {/* Video block */}
      <div className="w-full rounded-2xl overflow-hidden shadow-md">
        <video
          key={randomVideo} // ensures it reloads properly
          src={randomVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
        />
      </div>

      {/* New section title (not a caption) */}
      <h1
        className={cn(
          "text-3xl md:text-5xl font-bold text-light-green text-balance max-w-[65ch] mt-20 md:mt-28",
          acornRegular.className
        )}
      >
        What’s included in your monthly plan?
      </h1>
    </div>
  );
}
