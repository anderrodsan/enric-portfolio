import Title from "@/components/shared/title";
import Image from "next/image";
import React from "react";
import { MotionDiv } from "@/components/framer-motion/motion-div";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-6 mx-5 my-8 md:mx-20 md:my-14 max-w-6xl">
      <div className="relative">
        <Title>
          Hej. I&apos;m Enric. <br /> A Designer.
        </Title>
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

      <p className="text-[14px] md:text-[23px] leading-[20px] md:leading-[35px] text-center md:text-balance max-w-[30ch] md:max-w-[65ch]">
        I&apos;m a UX Designer, passionate about crafting experiences that are
        engaging, accessible, and user-centric.
      </p>
    </div>
  );
}
