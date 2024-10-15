ºimport { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Video() {
  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="relative group w-full min-h-[400px] lg:max-h-[700px] rounded-[64px] overflow-hidden hover:scale-105 transition duration-300">
        <Image
          src="/images/enric-headshot.png"
          alt="profile"
          width={1000}
          height={1000}
          style={{ objectFit: "cover", height: "100%" }}
          className="w-full h-full scale-[200%] lg:scale-[100%] translate-y-24 lg:translate-y-0"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 cursor-pointer transition duration-300">
          <div className="hover:opacity-80 transition duration-300 h-12 w-12 md:h-20 md:w-20 rounded-full bg-white flex items-center justify-center">
            <Play
              fill="black"
              className="text-black w-6 h-6 md:w-10 md:h-10 opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
