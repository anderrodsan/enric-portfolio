import React from "react";
import BentoGrid from "../projects/bento-grid";
import AcornText from "@/components/shared/acron-text";
import { ArrowUpRight } from "lucide-react";

export default function ShortProjects() {
  return (
    <div className="py-[80px] flex flex-col items-center gap-10">
      <BentoGrid />
      <button className="group flex gap-4 justify-center items-center bg-white/5 hover:bg-white/10 pl-7 pr-5 py-3 rounded-full">
        <AcornText className="text-xl md:text-3xl leading-[10px] text-white translate-y-1">
          See All Work
        </AcornText>
        <div className="flex items-center justify-center w-[30px] md:w-[41px] h-[30px] md:h-[41px] bg-white rounded-full group-hover:rotate-45 transition duration-300">
          <ArrowUpRight size={28} className="text-background" />
        </div>
      </button>
    </div>
  );
}
