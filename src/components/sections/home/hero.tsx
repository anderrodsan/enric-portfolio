"use client";

import GlassCard from "@/components/shared/glass-card";
import Title from "@/components/shared/title";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { HeroLinks } from "./hero-links";
import Link from "next/link";
import Socials from "@/components/shared/socials";
import { cn } from "@/lib/utils";

const METRICS = [
  "+50 projects completed",
  "+20 clients satisfied",
  "Based in København",
];

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-10 md:gap-20 px-5 mt-4 lg:mx-20 lg:mt-14 max-w-6xl w-full">
      <Socials className="hidden lg:flex absolute top-14 right-20" />

      <HeroTitle />

      <div className="relative flex flex-col items-center justify-center gap-2 lg:gap-[22px] w-full">
        {/* Lead value card */}
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
            className="p-6 md:p-8 w-full lg:w-auto"
            borderRadius="rounded-[28px] md:rounded-[48px]"
          >
            <p className="md:max-w-[22ch] text-wrap text-lg lg:text-2xl">
              I help teams stuck with unclear, slow, or inconsistent design get fast, polished,
              developer-ready UX/UI—without the hassle of hiring full-time.
            </p>
          </GlassCard>
        </div>

        {/* Hero visual */}
        <div className="relative flex flex-col items-center justify-center max-w-5xl -mt-20 lg:-mt-28 overflow-hidden z-30 md:z-0">
          {/* Custom ellipse — responsive, keeps ellipse on mobile */}
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

        {/* CTAs */}
        <div className="md:absolute bottom-10 w-full flex items-center justify-center pt-3 lg:pt-0">
          <HeroLinks />
        </div>

        {/* Metrics + Reviews */}
        <div className="hidden md:block md:absolute top-0 right-0 space-y-3 w-full md:w-auto">
          {METRICS.map((metric) => (
            <GlassCard
              key={metric}
              hoverEffect
              className="py-3 px-[18px] flex flex-col items-center w-full lg:w-auto"
              borderRadius="rounded-[28px]"
            >
              <span className="text-lg lg:text-2xl font-medium text-center w-full">
                {metric}
              </span>
            </GlassCard>
          ))}

          {/* Reviews stars + text */}
          <ReviewsMini />
        </div>
      </div>
    </div>
  );
}

function HeroTitle() {
  return (
    <div className="relative flex flex-col justify-center items-center text-center">
      <span className="text-[20px] leading-[28px] lg:text-[28px] font-medium md:leading-[40px] mb-4">
        Hej!
      </span>

      {/* Line 1 */}
      <div className="flex items-center justify-center gap-2 md:gap-[22px]">
        <Title gradient={false} className="text-5xl sm:text-6xl lg:text-8xl leading-[1.2]">
          I&apos;m
        </Title>
        <Link
          href={"/about"}
          className="group cursor-pointer relative focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
          aria-label="Go to About — Enric"
        >
          <Title
            gradient={false}
            className="text-5xl sm:text-6xl lg:text-8xl leading-[1.2] group-hover:text-[#EFB594] transition-colors"
          >
            Enric.
          </Title>
          {/* Hover bubble (desktop only) */}
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

      {/* Line 2 */}
      <div className="flex items-center justify-center gap-2 md:gap-[22px] -mt-4">
        <Title gradient={false} className="text-5xl sm:text-6xl lg:text-8xl leading-[1.2]">
          Product
        </Title>
        <Link
          href={"/about"}
          className="group cursor-pointer relative focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
          aria-label="See work — Product Designer"
        >
          <Title
            gradient={false}
            className="text-5xl sm:text-6xl lg:text-8xl leading-[1.2] group-hover:text-[#D094E5] transition-colors"
          >
            Designer.
          </Title>

          {/* Hover cards (desktop only) */}
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
        "mt-3 flex items-center justify-center w-full lg:w-auto min-h-[64px]",
        className
      )}
      aria-label={`Client reviews: ${rating} out of 5 from ${total} reviews`}
    >
      <div className="flex items-center gap-2">
        <Stars rating={rating} />
        <span className="text-base lg:text-lg font-medium">{rating.toFixed(1)}/5</span>
        <span className="text-base lg:text-lg text-white/70">({total}+ reviews)</span>
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
          return <Star key={i} className="h-4 w-4 fill-current text-yellow-300" />;
        }
        if (i === full && hasHalf) {
          return <StarHalf key={i} className="h-4 w-4 fill-current text-yellow-300" />;
        }
        return <Star key={i} className="h-4 w-4 text-yellow-300" />;
      })}
    </div>
  );
}
