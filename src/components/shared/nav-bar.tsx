"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

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
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
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
    <div className="sticky z-50 top-0 py-[20px] md:py-[40px] px-5 md:px-10 flex flex-col items-center">
      <div
        className={`p-4 grid grid-cols-4 gap-5 rounded-full transition ease-in-out duration-700 backdrop-blur-md ${
          scrollValue > 40 ? "bg-dark-green bg-opacity-80" : "bg-white/0"
        }`}
      >
        {paths.map((path) => (
          <Link href={path.path} key={path.name} className={`relative`}>
            {activePath === path.path && (
              <motion.div
                layoutId="active-link"
                className="absolute inset-0 w-full h-full bg-white/10 rounded-full"
              />
            )}
            <div className="relative flex items-center justify-center gap-2 py-3 px-4">
              <p className="text-[14px] md:text-[20px]">{path.name}</p>
              {activePath === path.path ? (
                <motion.div
                  layoutId="active-dot"
                  className={`h-3 w-3 rounded-full bg-white hidden md:block`}
                />
              ) : (
                <div className="w-3" />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
