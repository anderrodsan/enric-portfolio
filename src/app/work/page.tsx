import BentoGrid from "@/components/sections/projects/bento-grid";
import Title from "@/components/shared/title";
import { getProjects } from "@/lib/actions";
import React from "react";

export default function Projects() {
  const projects = getProjects();

  return (
    <div className="flex flex-col items-center">
      <div className="space-y-3 pt-4 md:pt-14 pb-11 px-5 md:px-20">
        <Title className="text-5xl sm:text-6xl md:text-7xl leading-[1.2] text-center">
          My work.
        </Title>
        <p className="text-[18px] sm:text-[20px] md:text-[23px] leading-[22px] sm:leading-[30px] md:leading-[35px] text-center md:text-balance w-full">
          Solving problems. From real companies.
        </p>
      </div>
      <div className="py-12 px-5 md:py-16 md:px-20 w-full flex justify-center">
        <BentoGrid projects={projects} />
      </div>
    </div>
  );
}
