import React from "react";
import BentoItem from "./bento-item";
import { projects } from "@/db/projects";
import { Project } from "@/lib/types";

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-5 gap-10 w-full px-10 lg:px-[80px]">
      {projects.map((project: Project, idx: number) => (
        <BentoItem key={idx} data={project} />
      ))}
    </div>
  );
}
