import React from "react";
import BentoItem from "./bento-item";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function BentoGrid({
  projects,
  className,
}: {
  projects: Project[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-5 gap-6 md:gap-12 w-full", className)}>
      {projects.map((project: Project, idx: number) => (
        <BentoItem key={idx} data={project} />
      ))}
    </div>
  );
}
