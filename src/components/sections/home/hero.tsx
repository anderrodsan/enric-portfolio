// src/components/sections/hero/hero.tsx
"use client";

import GlassCard from "@/components/shared/glass-card";
import Title from "@/components/shared/title";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { HeroLinks } from "./hero-links";
import Link from "next/link";
import Socials from "@/components/shared/socials";
import { cn } from "@/lib/utils";

// Updated data structure for impact (4 metrics for 2x2 grid)
const METRICS = [
  { value: "50+", label: "Projects done" },
  { value: "20+", label: "Satisfied clients" },
  { value: "København", label: "Based in" },
  { value: "10+", label: "Countries" }, // New 4th Metric
];

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-20 px-5 mt-4 lg:mx-20 lg:mt-14 max-w-6xl w-full"> {/* Reduced mobile gap from gap-10 to gap-8 */}
      <Socials className="hidden lg:flex absolute top-14 right-20" />

      <HeroTitle />

      {/* Main Content Area Container: Reduced mobile gap from gap-2 to gap-1 */}
      <div className="relative flex flex-col items-center justify-center gap-1 lg:gap-[22px] w-full">
        {/* Left: Lead value card (UPDATED TEXT AND LIVE ELEMENT) */}
        <div className="relative md:absolute top-0 left-0 z-10 py-3 lg:py-0 w-full max-w-xl md:w-auto">
          <Image
            src="/svg/corner-lines.svg"
            alt=""
            width={1000}
            height={1000}
            className="absolute -top-3 -left-3 w-4 lg:w-5 select-none pointer-events-none"
            priority={false}
          />
          <GlassCard
            hoverEffect
            className="p-5 md:p-8 w-full lg:w-auto flex flex-col gap-3" // Adjusted padding p-6 -> p-5
            borderRadius="rounded-[28px] md:rounded-[48px]"
          >
            {/* Removed Tagline: Design & Velocity Partner */}
            
            {/* Quote: Reduced font size slightly for better mobile wrap */}
            <p className="md:max-w-[28ch] text-base sm:text-lg lg:text-xl font-medium text-white/90">
                I help founders and team bring their products and websites to life with clear, polished, developer ready design.
            </p>
            
            {/* Live Element Hint: Updated emoji and sentence */}
            <div className="flex items-center gap-2 text-white/70">
                <span className="text-xl animate-pulse">
                🚀
                </span>
                <span className="text-sm">
                    Ready to launch your vision.
                </span>
            </div>
          </GlassCard>
        </div>

        {/* Center: Hero visual */}
        {/* Adjusted negative margin for mobile: -mt-10 vs -mt-20 */}
        <div className="relative flex flex-col items-center justify-center max-w-5xl -mt-10 lg:-mt-28 overflow-hidden z-30 md:z-0">
          <svg
            viewBox="0 0 813 406"
            preserveAspectRatio="xMidYMax meet"
            className="absolute inset-x-0 bottom-0 w-full aspect-[813/406] max-w-[900px] md:max-w-none -z-10"
            aria-hidden="true"
          >
            <path
              d="M812.673 406C542.08 406 271.487 406 0.894409 406C0.894409 181.833 182.617 0.110596 406.784 0.110596C630.95 0.110596 812.673 181.833 812.673 406Z"
              fill="#17241F"
            />
          </svg>

          <Image
            src="/images/enric-without-background.png"
            alt="Enric, Product Designer — hero illustration"
            width={1000}
            height={1000}
            sizes="(min-width:1024px) 900px, 100vw"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Bottom: CTAs */}
        <div className="md:absolute bottom-10 w-full flex items-center justify-center pt-3 lg:pt-0">
          <HeroLinks />
        </div>

        {/* Right: Metrics + Reviews (2x2 Grid) */}
        <div className="hidden md:block md:absolute top-0 right-0 w-full md:w-auto">
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 w-full">
            {METRICS.map((metric) => (
              <GlassCard
                key={metric.label}
                hoverEffect
                // Center content for grid item
                className="py-4 px-5 flex flex-col items-center justify-center min-w-[100px]"
                borderRadius="rounded-[28px]"
              >
                {/* Value: Slightly reduced size for grid fit */}
                <span className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-none">
                  {metric.value}
                </span>
                {/* Small Label */}
                <span className="text-xs font-medium text-white/60 mt-1 text-center">
                  {metric.label}
                </span>
              </GlassCard>
            ))}
          </div>
          
          {/* Reviews Mini (Below the 2x2 Grid) */}
          <ReviewsMini className="mt-3" />
        </div>
      </div>
    </div>
  );
}

function HeroTitle() {
  return (
    <div className="relative flex flex-col justify-center items-center text-center">
      {/* Top Badge: Greeting + Status */}
      <div className="mb-8 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm md:text-base font-medium text-white backdrop-blur-md">
        <span>Based in Copenhagen</span>
        <span className="hidden sm:block h-4 w-px bg-white/20" /> {/* Separator */}
        <span className="flex items-center gap-2 text-white/80">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Open for new projects
        </span>
      </div>

      {/* Title Line 1 (I'm Enric.) - Adjusted size: text-[3rem] vs text-[3.2rem] */}
      <div className="flex items-center justify-center gap-2 md:gap-[22px]">
        <Title
          gradient={false}
          className="text-[3rem] sm:text-6xl lg:text-8xl leading-[1.2]"
        >
          I&apos;m
        </Title>
        <Link
          href={"/about"}
          className="group relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
          aria-label="Go to About — Enric"
        >
          <Title
            gradient={false}
            className="text-[3rem] sm:text-6xl lg:text-8xl leading-[1.2] group-hover:text-[#EFB594] transition-colors"
          >
            Enric.
          </Title>
          <div className="hidden lg:block scale-0 group-hover:scale-100 transition-transform duration-300 absolute top-0 left-[45%] -translate-y-[20%] group-hover:-translate-y-[72%] opacity-0 group-hover:opacity-100">
            <Image
              src="/images/enric-headshot.png"
              width={100}
              height={100}
              alt="Enric headshot"
              className="w-[100px] h-[100px] rounded-full shadow-lg"
            />
          </div>
        </Link>
      </div>

      {/* Title Line 2 (Product Designer.) - Adjusted size and margin: -mt-3 vs -mt-4 */}
      <div className="flex items-center justify-center gap-2 md:gap-[22px] -mt-3">
        <Title
          gradient={false}
          className="text-[3rem] sm:text-6xl lg:text-8xl leading-[1.2] whitespace-nowrap"
        >
          Product
        </Title>
        <Link
          href={"/services"}
          className="group cursor-pointer relative focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
          aria-label="See work — Product Designer"
        >
          <Title
            gradient={false}
            className="text-[3rem] sm:text-6xl lg:text-8xl leading-[1.2] group-hover:text-[#D094E5] transition-colors"
          >
            Designer.
          </Title>

          <Image
            alt="Selected project 1"
            src="/images/hero-card1.png"
            width={100}
            height={100}
            className="hidden lg:block absolute bottom-5 -right-10 translate-x-[50%] opacity-0 group-hover:opacity-100 translate-y-[0%] group-hover:-translate-y-[50%] rotate-[25deg] group-hover:rotate-0 transition duration-500 rounded-xl z-10 shadow-xl"
          />

          <Image
            alt="Selected project 2"
            src="/images/hero-card2.png"
            width={110}
            height={110}
            className="hidden lg:block absolute bottom-5 -right-10 opacity-0 group-hover:opacity-100 -translate-y-[0%] group-hover:-translate-y-[50%] translate-x-[50%] group-hover:translate-x-[70%] rotate-0 group-hover:rotate-[20deg] transition duration-500 delay-200 rounded-xl z-10 shadow-xl"
          />
        </Link>
      </div>
    </div>
  );
}

function ReviewsMini({ className }: { className?: string }) {
  const rating = 4.9;
  const total = 27;

  return (
    <div
      className={cn(
        "flex items-center justify-end w-full lg:w-auto min-h-[64px]",
        className
      )}
      aria-label={`Client reviews: ${rating} out of 5 from ${total} reviews`}
    >
      <div className="flex items-center gap-2">
        <Stars rating={rating} />
        <span className="text-base lg:text-lg font-medium text-white">
          {rating.toFixed(1)}/5
        </span>
        <span className="text-base lg:text-lg text-white/70">
          ({total}+ reviews)
        </span>
      </div>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const fraction = rating - full;
  const hasHalf = fraction >= 0.25 && fraction < 0.75;
  const count = 5;

  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        if (i < full) {
          return (
            <Star key={i} className="h-4 w-4 fill-current text-yellow-300" />
          );
        }
        if (i === full && hasHalf) {
          return (
            <StarHalf
              key={i}
              className="h-4 w-4 fill-current text-yellow-300"
            />
          );
        }
        return <Star key={i} className="h-4 w-4 text-yellow-300" />;
      })}
    </div>
  );
}