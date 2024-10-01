import Title from "@/components/shared/title";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { MotionDiv } from "@/components/framer-motion/motion-div";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center space-y-[50px] p-5 md:p-[80px]">
      <Title>
        Hej. I&apos;m Enric. <br /> A Designer.
      </Title>
      <p className="text-[18px] md:text-[25px] leading-[45px] text-center text-balance max-w-[65ch]">
        I&apos;m a UX Designer, passionate about crafting experiences that are
        engaging, accessible, and user-centric.
      </p>
      {/* Floating Figma Logo */}
      <div className="absolute -top-14 right-0 translate-x-[30%]">
        <MotionDiv
          animate={{
            y: [0, -5, 5, 5, 0],
            x: [0, 5, -5, 5, 0],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <Image
            src="/images/figma.png"
            width={180}
            height={180}
            alt="Hero image"
            className="w-[180px] h-[180px]"
          />
        </MotionDiv>
      </div>
    </div>
  );
}
