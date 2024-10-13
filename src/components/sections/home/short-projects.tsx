import React from "react";
import BentoGrid from "../projects/bento-grid";
import { projects } from "@/db/projects";
import LinkButton from "@/components/shared/link-button";

export default function ShortProjects() {
  return (
    <div className="py-12 px-5 md:py-16 md:px-20 flex flex-col items-center gap-10 w-full">
      {/** Only the first 4 projects */}
      <BentoGrid projects={projects.slice(0, 4)} />
      <LinkButton href="/work">See All Work</LinkButton>
    </div>
  );
}
