"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUp } from "lucide-react";
import { useState } from "react";
import GlassCard from "./glass-card";

interface AccordionProps {
  title: string;
  description: string;
}

export default function Accordion({ title, description }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <GlassCard
        className="p-4 lg:p-5 lg:px-8 lg:py-6 w-full"
        borderRadius="rounded-[18px] lg:rounded-[28px]"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between"
        >
          <h3 className="text-lg lg:text-2xl font-semibold">{title}</h3>
          <div className="flex items-center justify-center bg-white rounded-full h-10 w-10 scale-75 lg:scale-100">
            <ArrowRight
              size={28}
              className={cn(
                "transition-transform duration-700 text-background",
                isOpen && "transform rotate-90"
              )}
            />
          </div>
        </button>

        <div
          className={cn(
            "overflow-hidden transition-all duration-700",
            isOpen ? "max-h-[500px] " : "max-h-0 mt-0"
          )}
        >
          <div className="my-4 h-0.5 bg-white/20 mr-20" />
          <p className="text-lg lg:text-2xl">{description}</p>
        </div>
      </GlassCard>
    </div>
  );
}
