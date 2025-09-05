"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { SlashSquare } from "lucide-react";
import BookMeeting from "./book-meeting";
import GlassCard from "./glass-card";
import MobileMenu from "./mobile-menu";

export default function GlassNavBar() {
  const paths = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Hire me",
      path: "/services",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Work",
      path: "/work",
    },
  ];

  const activePath = usePathname();

  return (
    <>
      <MobileMenu paths={paths} activePath={activePath} />
      <div className="hidden sticky z-50 top-0 py-5 px-8 md:py-6 md:px-20 md:flex flex-col items-center">
        <GlassCard
          className="p-3 flex items-center justify-center gap-2 md:gap-5 rounded-full"
          borderRadius="rounded-full"
        >
          {paths.map((path, index) => (
            <Link href={path.path} key={path.name} className={`relative py-1`}>
              {activePath === path.path && (
                <motion.div
                  layoutId="active-link"
                  className="absolute inset-0 w-full h-full bg-white/10 rounded-full"
                />
              )}
              <div
                className={cn(
                  "relative flex items-center justify-center gap-2 py-[6px] rounded-full",
                  activePath === path.path ? "px-5 lg:px-6" : "px-3 lg:px-5"
                )}
              >
                <p className="text-[16px] md:text-[20px] font-semibold">
                  {path.name}
                </p>
                {/** add svg icon here */}
                {index === 0 && (
                  <SlashSquare className="text-light-green h-4 w-4 md:h-[22px] md:w-[22px]" />
                )}
              </div>
            </Link>
          ))}
          <BookMeeting
            title={"Contact"}
            className="text-[16px] md:text-[20px] px-3 lg:px-5 font-semibold"
          />
        </GlassCard>
      </div>
    </>
  );
}
