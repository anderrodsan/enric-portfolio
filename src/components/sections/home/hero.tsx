import Title from "@/components/shared/title";
import Image from "next/image";
import React from "react";
import { MotionDiv } from "@/components/framer-motion/motion-div";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-3 mx-5 my-4 md:mx-20 md:my-14 max-w-6xl">
      <div className="relative flex flex-col justify-center items-center">
        <div className="flex items-center justify-center gap-2 md:gap-[22px]">
          <Title className="text-4xl sm:text-5xl md:text-6xl">Hej. I&apos;m</Title>
          <Link href={"/about"} className="group cursor-pointer relative">
            <Title className="text-4xl sm:text-5xl md:text-6xl group-hover:text-[#EFB594] transition-all">
              Enric.
            </Title>
            <div className="hidden md:block scale-0 group-hover:scale-100 transition-all absolute top-0 left-1/2 transform -translate-y-[20%] group-hover:-translate-y-[78%] opacity-0 group-hover:opacity-100">
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
          <Title className="text-4xl sm:text-5xl md:text-6xl">A UX</Title>
          <Link href={"/about"} className="group cursor-pointer relative">
            <Title className="text-4xl sm:text-5xl md:text-6xl group-hover:text-[#D094E5] transition-all">
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

        {/* Floating Figma Logo */}
        <div className="absolute top-0 right-0 -translate-y-[70%] md:-translate-y-[50%] translate-x-[80%]  md:translate-x-[100%]">
          <MotionDiv
            animate={{
              y: [0, -5, 5, 5, 0],
              x: [0, 5, -5, 5, 0],
            }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            <Image
              src="/images/figma.png"
              width={100}
              height={180}
              alt="Hero image"
              className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] hover:scale-105 transition duration-300"
            />
          </MotionDiv>
        </div>
      </div>

      <p className="text-[18px] sm:text-[20px] md:text-[23px] leading-[22px] sm:leading-[30px] md:leading-[35px] text-center md:text-balance max-w-[32ch] md:max-w-[65ch]">
        I&apos;m a UX Designer, passionate about crafting experiences that are
        engaging, accessible, and user-centric.
      </p>
    </div>
  );
}
