import BentoGrid from "@/components/sections/projects/bento-grid";
import Title from "@/components/shared/title";
import { projects } from "@/db/projects";
import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col items-center">
      <div className="space-y-9 py-11 px-20">
        <Title>My work</Title>
        <p className="text-[18px] md:text-[25px] leading-[35px] md:leading-[45px] text-center text-balance max-w-[65ch]">
          I&apos;m a UX Designer, passionate about crafting experiences.
        </p>
      </div>
      <div className="py-12 px-5 md:py-16 md:px-20 w-full">
        <BentoGrid projects={projects} />
      </div>
    </div>
  );
}
