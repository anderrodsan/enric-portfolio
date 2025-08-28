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
    <div className="w-full ">
      <GlassCard className="px-8 py-6 w-full" borderRadius="rounded-[48px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between"
        >
          <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
          <div className="flex items-center justify-center bg-white rounded-full h-10 w-10">
            <ArrowRight
              size={28}
              className={cn(
                "transition-transform duration-300 text-background",
                isOpen && "transform rotate-90"
              )}
            />
          </div>
        </button>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[500px] " : "max-h-0 mt-0"
          )}
        >
          <div className="my-4 h-0.5 bg-white/20 mr-20" />
          <p className="text-xl lg:text-2xl">{description}</p>
        </div>
      </GlassCard>
    </div>
  );
}
