import GlassCard from "@/components/shared/glass-card";
import Title from "@/components/shared/title";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { HeroLinks } from "./hero-links";

const METRICS = [
  "+50 projects completed",
  "+20 clients satisfied",
  "Based in København",
];

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-20 px-5 mt-4 lg:mx-20 lg:mt-14 max-w-[1300px] w-full">
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-[22px]">
        <span className="text-[20px] leading-[28px] lg:text-[28px] font-medium md:leading-[40px] text-center align-middle">
          Hej!
        </span>
        <Title className="text-[40px] md:text-[96px] leading-[100%] tracking-[-0.02em] text-center text-light-green font-medium font-acorn">
          I&apos;m Enric, <br /> Product Designer.
        </Title>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-2 lg:gap-[22px] w-full">
        <div className="relative flex flex-col items-center justify-center max-w-5xl">
          <Image
            src="/svg/ellipse.svg"
            alt="Hero image"
            width={1000}
            height={1000}
            className="absolute bottom-0 lg:w-[90%] z-[-1]"
          />
          <Image
            src="/images/enric-without-background.png"
            alt="Hero image"
            width={1000}
            height={1000}
            className="w-full -mt-20 lg:-mt-28"
          />
        </div>
        <div className="lg:absolute bottom-10 w-full flex items-center justify-center pt-3 lg:pt-0">
          <HeroLinks />
        </div>
        <div className="relative lg:absolute top-0 left-0 -z-20 py-3 lg:py-0">
          <Image
            src="/svg/corner-lines.svg"
            alt="Hero image"
            width={1000}
            height={1000}
            className="absolute -top-1 -left-1 lg:-top-3 lg:-left-3 w-4 lg:w-5"
          />
          <GlassCard
            className="p-8 w-full lg:w-auto"
            borderRadius="rounded-[48px]"
          >
            <p className="max-w-[22ch] text-wrap text-2xl">
              I help teams stuck with unclear, slow, or inconsistent design get
              fast, polished, developer-ready UX/UI without the hassle of hiring
              full-time.
            </p>
          </GlassCard>
        </div>
        <div className="lg:absolute top-0 right-0 space-y-3 w-full lg:w-auto">
          {METRICS.map((metric) => (
            <GlassCard
              key={metric}
              className="p-[18px] flex flex-col items-center w-full lg:w-auto"
              borderRadius="rounded-[28px]"
            >
              <span className="text-2xl font-medium text-center w-full">
                {metric}
              </span>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
