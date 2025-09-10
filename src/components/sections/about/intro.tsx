// src/components/sections/about/intro.tsx
"use client";

import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col gap-16 w-full">
      {/* Chunk 1 — text only, horizontal on md+ */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12">
        <h1
          className={cn(
            "text-3xl md:text-5xl font-bold text-light-green md:w-1/2",
            acornRegular.className
          )}
        >
          I&apos;m a Designer based in Copenhagen.
        </h1>
        <div className="flex flex-col gap-4 md:w-1/2">
          <p className="md:text-[20px]">
            I am passionate about solving problems with design and technology and
            transforming new ideas into meaningful results.
          </p>
          <p className="md:text-[20px]">
            I enjoy working together with smart, creative, international, and
            passionate people determined to achieve more than required and challenge
            the status quo.
          </p>
        </div>
      </div>

      {/* Full-width image between chunks with hover/focus overlay */}
      <div
        className="group relative w-full rounded-2xl overflow-hidden shadow-lg aspect-[16/9] md:aspect-[21/9] outline-none"
        tabIndex={0} // enables keyboard focus to reveal overlay
        aria-label="Enric portrait with additional information on hover"
      >
        <Image
          src="/images/uganda.jpeg"
          alt="Enric portrait"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />

        {/* Overlay (appears on hover or keyboard focus) */}
        <div className="pointer-events-none absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-[70ch] text-center text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Research in Gulu, Uganda
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
              In Gulu, I helped improve Master’s programs through workshops and
        hybrid teaching methods. This experience showed me how empathy and
        human-centered design make technology meaningful by addressing real
        human needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chunk 2 — text only, horizontal on md+ */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12">
        <h1
          className={cn(
            "text-3xl md:text-5xl font-bold text-light-green md:w-1/2",
            acornRegular.className
          )}
        >
          Focused on Human-Centered Design.
        </h1>
        <div className="md:w-1/2">
          <p className="md:text-[20px]">
            For me, design is about people — the clarity it brings and the ease it adds
            to daily life. I value empathy, honesty, and collaboration, and believe the
            best work stays open, adaptable, and grounded in real human needs.
          </p>
        </div>
      </div>
    </div>
  );
}
