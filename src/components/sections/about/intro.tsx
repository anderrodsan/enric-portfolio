import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 items-center md:items-start">
      {/** Image with rounded top corners */}
      <div className="relative hidden lg:block rounded-full overflow-hidden aspect-square h-[210px] md:h-[310px]">
        <Image
          src="/images/enric-headshot.png"
          alt="profile"
          width={500}
          height={500}
          style={{ objectFit: "cover", height: "115%" }}
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
          I'm a UX Designer based in Copenhagen.
        </h1>
        <p className="md:text-[20px] pb-[14px]">
        I am passionate about solving problems with design and technology and transforming new ideas into meaningful results.
        </p>
        <p className="md:text-[20px] pb-[14px]">
        I enjoy working together with smart, creative, international, and passionate people determined to achieve more than required and challenge the status quo.
        </p>
      </div>
    </div>
  );
}
