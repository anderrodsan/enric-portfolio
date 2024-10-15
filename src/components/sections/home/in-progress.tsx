import React from "react";
import BentoGrid from "../projects/bento-grid";
import { currentProjects } from "@/db/projects";
import Title from "@/components/shared/title";

export default function InProgress() {
  return (
    <div className="py-12 px-5 md:py-16 md:px-20 flex flex-col items-center gap-16 w-full">
      <Title>In Progress.</Title>
      <BentoGrid projects={currentProjects} />
    </div>
  );
}
