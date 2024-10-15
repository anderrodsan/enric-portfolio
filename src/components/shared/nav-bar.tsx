"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { SlashSquare } from "lucide-react";
import BookMeeting from "./book-meeting";

export default function NavBar() {
  const paths = [
    {
      name: "Home",
      path: "/",
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

  //detect scroll value with framer motion
  const { scrollY } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollValue(latest);
    //console.log(scrollValue);
  });

  return (
    <div className="sticky z-50 top-0 py-5 px-8 md:py-6 md:px-20 flex flex-col items-center">
      <div
        className={`p-3 flex items-center justify-center gap-5 rounded-full transition ease-in-out duration-700 backdrop-blur-md ${
          scrollValue > 40 ? "bg-dark-green bg-opacity-80" : "bg-white/0"
        }`}
      >
        {paths.map((path, index) => (
          <Link href={path.path} key={path.name} className={`relative`}>
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
              <p className="text-[14px] md:text-[20px]">{path.name}</p>
              {/** add svg icon here */}
              {index === 0 && (
                <SlashSquare className="text-light-green h-4 w-4 md:h-[22px] md:w-[22px]" />
              )}
            </div>
          </Link>
        ))}
        <BookMeeting title={"Contact"} className="text-[14px] md:text-[20px]" />
      </div>
    </div>
  );
}
