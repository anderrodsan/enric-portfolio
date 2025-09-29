"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import GlassCard from "./glass-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BookMeeting from "./book-meeting";

export default function MobileMenu({
  paths,
  activePath,
}: {
  paths: any[];
  activePath: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button - always visible and clickable */}
      <button
        className="fixed top-5 right-5 z-[60] md:hidden"
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

      {/* Overlay sidebar - only when open */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 md:hidden">
          <div className="h-full w-full bg-[#16231E] transition ease-in-out duration-300">
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
              <BookMeeting
                title="Contact"
                className="text-3xl"
                onClick={() => setIsOpen(false)}
              />
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
