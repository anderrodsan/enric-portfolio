import Background from "@/components/sections/about/background";
import Intro from "@/components/sections/about/intro";
import Tools from "@/components/sections/about/tools";
import Video from "@/components/sections/about/video";
import Title from "@/components/shared/title";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <div className="flex flex-col items-center gap-14 md:gap-20 w-[100%] max-w-6xl py-8 px-5 md:py-16 md:px-20">
        <Title className="-mb-8 md:-mb-12">I&apos;m Enric.</Title>
        <Intro />
        <Video />
        <Background />
        <Tools />
      </div>
    </div>
  );
}
