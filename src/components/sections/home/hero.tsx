import GlassCard from "@/components/shared/glass-card";
import Title from "@/components/shared/title";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { HeroLinks } from "./hero-links";
import Link from "next/link";

const METRICS = [
  "+50 projects completed",
  "+20 clients satisfied",
  "Based in København",
];

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-20 px-5 mt-4 lg:mx-20 lg:mt-14 max-w-6xl w-full">
      <HeroTitle />
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
        <div className="relative lg:absolute top-0 left-0 z-10 py-3 lg:py-0">
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

function HeroTitle() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <span className="text-[20px] leading-[28px] lg:text-[28px] font-medium md:leading-[40px] text-center align-middle mb-4">
        Hej!
      </span>
      <div className="flex items-center justify-center gap-2 md:gap-[22px]">
        <Title className="text-5xl sm:text-6xl lg:text-8xl leading-[1.2]">
          I&apos;m
        </Title>
        <Link href={"/about"} className="group cursor-pointer relative">
          <Title className="text-5xl sm:text-6xl lg:text-8xl leading-[1.2] group-hover:text-[#EFB594] transition-all">
            Enric.
          </Title>
          <div className="hidden md:block scale-0 group-hover:scale-100 transition-all absolute top-0 left-[45%] transform -translate-y-[20%] group-hover:-translate-y-[72%] opacity-0 group-hover:opacity-100">
            <Image
              src="/images/enric-headshot.png"
              width={100}
              height={100}
              alt="Hero image"
              className="w-[100px] h-[100px] rounded-full animate-move"
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-[22px] -mt-4">
        <Title className="text-5xl sm:text-6xl lg:text-8xl leading-[1.2]">
          A Product
        </Title>
        <Link href={"/about"} className="group cursor-pointer relative">
          <Title className="text-5xl sm:text-6xl lg:text-8xl leading-[1.2] group-hover:text-[#D094E5] transition-all">
            Designer.
          </Title>

          <Image
            alt="project1"
            src="/images/hero-card1.png"
            width={100}
            height={100}
            className="hidden md:block absolute bottom-5 -right-10 translate-x-[50%] opacity-0 group-hover:opacity-100 translate-y-[0%] group-hover:-translate-y-[50%] rotate-[25deg] group-hover:rotate-0 transition duration-500 rounded-xl z-10 shadow-xl"
          />
          <Image
            alt="project2"
            src="/images/hero-card2.png"
            width={110}
            height={110}
            className="hidden md:block absolute bottom-5 -right-10 opacity-0 group-hover:opacity-100 -translate-y-[0%] group-hover:-translate-y-[50%] translate-x-[50%] group-hover:translate-x-[70%] rotate-0 group-hover:rotate-[20deg] transition duration-500 delay-200 rounded-xl z-10 shadow-xl"
          />
        </Link>
      </div>
    </div>
  );
}
