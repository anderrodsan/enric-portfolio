import BentoGrid from "@/components/sections/projects/bento-grid";
import Title from "@/components/shared/title";
import { getProjects } from "@/lib/actions";
import React from "react";

export default function Projects() {
  const projects = getProjects();

  return (
    <div className="flex flex-col items-center">
      <div className="space-y-3 py-11 px-20">
        <Title className="text-4xl sm:text-5xl md:text-6xl text-center">
          My work.
        </Title>
        <p className="text-[18px] sm:text-[20px] md:text-[23px] leading-[22px] sm:leading-[30px] md:leading-[35px] text-center text-balance max-w-[65ch]">
          I&apos;m a UX Designer, passionate about crafting experiences.
        </p>
      </div>
      <div className="py-12 px-5 md:py-16 md:px-20 w-full flex justify-center">
        <BentoGrid projects={projects} />
      </div>
    </div>
  );
}
