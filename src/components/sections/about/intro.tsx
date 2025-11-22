// src/components/sections/about/intro.tsx
"use client";

import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    // Reduced main gap for mobile (gap-8) while keeping desktop gap (md:gap-12).
    <div className="flex flex-col gap-8 md:gap-12 w-full"> 
      
      {/* ======================================================= */}
      {/* 🎯 Section 1 & 2: Title and Description (Horizontally Aligned on MD+) */}
      {/* ======================================================= */}
      {/* Container: Stacks on mobile, splits 50/50 on desktop */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 w-full">
        
        {/* Left Half: Title */}
        {/* Title is left-aligned on desktop, centered on mobile for better visual flow */}
        <div className="w-full md:w-1/2 flex items-start text-center md:text-left">
          <h1
            className={cn(
              "text-3xl md:text-5xl font-bold text-light-green w-full",
              acornRegular.className
            )}
          >
            {/* UPDATED TITLE HERE: More comprehensive statement */}
            I build Websites, Products, and User Experiences.
          </h1>
        </div>

        {/* Right Half: Description Paragraphs */}
        {/* Text is left-aligned in its 50% column on desktop, but centered on mobile */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left">
          <p className="md:text-[20px] text-white/90">
            I partner with founders to solve complex problems, turning ambiguous ideas into polished, effective products that deliver measurable results.
          </p>
          <p className="md:text-[20px] text-white/90">
            I thrive when collaborating with ambitious teams that prioritize user empathy and are determined to build impactful digital experiences that stand out.
          </p>
        </div>
      </div>

      {/* ======================================================= */}
      {/* 📸 Section 3: Two Separate, Horizontally Aligned Images */}
      {/* ======================================================= */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        
        {/* Image 1 Container (Retains Hover Effect) */}
        <div
          className={cn(
              "group relative w-full md:w-1/2 rounded-[24px] overflow-hidden shadow-lg outline-none",
              "border border-white/10 aspect-video" 
          )}
          tabIndex={0}
          aria-label="Image of Enric in Gulu, Uganda with additional information on hover"
        >
          <Image
            src="/images/uganda.jpeg"
            alt="Enric in Gulu, Uganda"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />

          {/* Overlay for Image 1 (Group Hover Effect) */}
          <div className="pointer-events-none absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="max-w-[70ch] text-center text-white">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Research in Gulu, Uganda
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                Workshops and hybrid teaching methods in Gulu, Uganda.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image 2 Container (Hover Effect REMOVED) */}
        <div
          className={cn(
              "relative w-full md:w-1/2 rounded-[24px] overflow-hidden shadow-lg outline-none", 
              "border border-white/10 aspect-video" 
          )}
          tabIndex={0} 
          aria-label="Second image: Enric conducting research" 
        >
          <Image
            src="/images/enriquepastor.png" // Placeholder for a second image
            alt="Enric conducting research"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />

          {/* Overlay for Image 2 (No Hover Effect) */}
          <div className="pointer-events-none absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300"> 
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="max-w-[70ch] text-center text-white">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Field Work Insights
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                Applying human-centered design principles in real-world scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ======================================================= */}
      {/* 💡 Section 4: Human-Centered Design */}
      {/* ======================================================= */}
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
          <p className="md:text-[20px] text-white/90">
            For me, design is about people, the clarity it brings and the ease it adds
            to daily life. I value empathy, honesty, and collaboration, and believe the
            best work stays open, adaptable, and grounded in real human needs.
          </p>
        </div>
      </div>
    </div>
  );
}