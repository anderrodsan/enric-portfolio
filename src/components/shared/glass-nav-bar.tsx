"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SlashSquare } from "lucide-react";
import BookMeeting from "./book-meeting";
import GlassCard from "./glass-card";
import MobileMenu from "./mobile-menu";

export default function GlassNavBar() {
  const paths = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/work" },
    { name: "Snapshots", path: "/bites" },
    { name: "Contact", path: "/contact" }, // kept for mobile
  ];

  // Remove "Contact" from desktop nav to avoid duplication with BookMeeting
  const desktopPaths = paths.filter((p) => p.name !== "Contact");
  const activePath = usePathname();

  return (
    <>
      {/* Mobile: shows Contact from paths once */}
      <MobileMenu paths={paths} activePath={activePath} />

      {/* Desktop */}
      <div className="hidden sticky z-50 top-0 py-4 px-6 md:py-5 md:px-16 md:flex flex-col items-center">
        <GlassCard
          className="py-3 px-3 flex items-center justify-center gap-3 rounded-full"
          borderRadius="rounded-full"
        >
          {desktopPaths.map((path, index) => (
            <Link href={path.path} key={path.name} className="relative">
              {activePath === path.path && (
                <motion.div
                  layoutId="active-link"
                  className="absolute inset-0 w-full h-full bg-white/10 rounded-full"
                />
              )}
              <div
                className={cn(
                  "relative flex items-center justify-center gap-2 rounded-full transition-colors",
                  activePath === path.path
                    ? "px-3 lg:px-4 py-1.5"
                    : "px-2.5 lg:px-3.5 py-1"
                )}
              >
                <p className="text-[16px] md:text-[20px] font-semibold">
                  {path.name}
                </p>
                {index === 0 && (
                  <SlashSquare className="text-light-green h-4 w-4 md:h-[20px] md:w-[20px]" />
                )}
              </div>
            </Link>
          ))}

          {/* Desktop-only Contact action */}
          <BookMeeting
            title="Contact"
            className="text-[16px] md:text-[20px] px-2.5 lg:px-3.5 py-1 font-semibold"
          />
        </GlassCard>
      </div>
    </>
  );
}
