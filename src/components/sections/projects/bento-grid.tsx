import React from "react";
import BentoItem from "./bento-item";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  projects: Project[];
  className?: string;
}

export default function BentoGrid({ projects, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-5 gap-6 md:gap-12 w-full max-w-6xl",
        className
      )}
    >
      {projects.map((project, idx) => (
        <BentoItem key={idx} data={project} />
      ))}
    </div>
  );
}
