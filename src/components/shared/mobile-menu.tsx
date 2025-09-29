"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import GlassCard from "./glass-card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MobileMenu({
  paths,
  activePath,
}: {
  paths: any[];
  activePath: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 md:hidden">
      <button
        className="absolute top-5 right-5 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GlassCard
          className="w-14 h-14 rounded-full flex items-center justify-center"
          borderRadius="rounded-full"
          hoverEffect
        >
          {isOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </GlassCard>
      </button>
      {/** the overlay sidebar */}
      <div
        className={cn(
          "h-full w-full bg-[#16231E] transition ease-in-out duration-300 z-40",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      >
        <ul className="flex flex-col items-center h-full gap-10 pt-24">
          {paths.map((path) => (
            <Link
              href={path.path}
              key={path.name}
              onClick={() => setTimeout(() => setIsOpen(false), 300)}
            >
              <p
                className={cn(
                  "text-3xl font-bold",
                  activePath === path.path && "underline"
                )}
              >
                {path.name}
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
