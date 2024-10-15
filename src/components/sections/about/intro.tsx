import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 items-center md:items-start">
      {/** Image with rounded top corners */}
      <div className="relative hidden lg:block rounded-full overflow-hidden aspect-square h-[200px] md:h-[300px]">
        <Image
          src="/images/enric-headshot.png"
          alt="profile"
          width={500}
          height={500}
          style={{ objectFit: "cover", height: "100%" }}
          className="h-full w-full"
        />
      </div>
      <div className="flex-1">
        <h1
          className={cn(
            "text-3xl md:text-5xl font-bold text-light-green text-balance max-w-[65ch] pb-5 md:pb-10",
            acornRegular.className
          )}
        >
          I'm a UX Designer working remotely from 14°C Copenhagen.
        </h1>
        <p className="md:text-[23px] pb-[14px]">
          Over the past 14 years, I've worked in various areas of digital
          design, including front-end development, email, marketing, and app
          UI/UX. I'm proud to have worn many hats.
        </p>
      </div>
    </div>
  );
}
