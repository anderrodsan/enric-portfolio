import Title from "@/components/shared/title";
import { tools } from "@/db/tools";
import { acornRegular } from "@/lib/custom-fonts";
import { Tool } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Tools() {
  return (
    <section className="w-full flex flex-col items-center gap-8 md:gap-16">
      <Title>Tools.</Title>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 w-full">
        {tools.slice(0, 5).map((item: Tool) => (
          <ToolCard key={item.id} item={item} />
        ))}
        <ul className="flex flex-col">
          <ToolCard item={tools[5]} className="h-1/2" />
          <ToolCard item={tools[6]} className="h-1/2" />
        </ul>
      </ul>
    </section>
  );
}

function ToolCard({ item, className }: { item: Tool; className?: string }) {
  return (
    <li className="flex flex-col items-center gap-5">
      <h3
        className={cn(
          "font-medium text-xl md:text-2xl text-light-green",
          acornRegular.className
        )}
      >
        {item.type}
      </h3>
      <div
        className={cn(
          "bg-muted-green/10 rounded-[64px] py-10 md:py-14 px-5 flex flex-col items-center justify-center gap-10 w-full h-full",
          className
        )}
      >
        {item.tools.map((tool: string) => (
          <Image
            src={`/logos/${tool}.png`}
            alt={tool}
            width={500}
            height={500}
            key={tool}
            className="w-[150px] object-contain"
          />
        ))}
      </div>
    </li>
  );
}
