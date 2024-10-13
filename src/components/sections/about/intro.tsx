import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 items-center md:items-start">
      {/** Image with rounded top corners */}
      <div className="relative h-[100%] lg:min-h-[420px] w-full lg:w-[35%] rounded-t-[64px] lg:rounded-t-full overflow-hidden bg-white">
        <Image
          src="/images/video-image.png"
          alt="profile"
          width={500}
          height={500}
          style={{ objectFit: "cover", height: "100%" }}
          className="w-full h-full scale-[130%] lg:scale-[170%] translate-y-6 lg:translate-y-24"
        />
      </div>
      <div className="flex-1">
        <h1
          className={cn(
            "text-4xl md:text-6xl font-bold text-light-green text-balance max-w-[65ch] pb-5 md:pb-10",
            acornRegular.className
          )}
        >
          I'm a UX Designer working remotely from 14°C Copenhagen.
        </h1>
        <p className="md:text-[25px] pb-[14px]">
          Over the past 14 years, I've worked in various areas of digital
          design, including front-end development, email, marketing, and app
          UI/UX. I'm proud to have worn many hats.
        </p>
        <p className="md:text-[25px]">
          These days, I focus on leading design at GiveDirectly, a nonprofit
          that lets donors send money directly to the world's poorest
          households.
        </p>
      </div>
    </div>
  );
}
