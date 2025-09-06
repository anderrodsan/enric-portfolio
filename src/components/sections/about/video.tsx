"use client";

import Image from "next/image";
import React from "react";

export default function Video() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 w-full">
      {/* First image */}
      <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src="/images/enric-headshot.png"
          alt="Presentation preview 1"
          width={1000}
          height={750}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Second image */}
      <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src="/images/enric-headshot.png"
          alt="Presentation preview 2"
          width={1000}
          height={750}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
