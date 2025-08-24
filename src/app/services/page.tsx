import Title from "@/components/shared/title";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <div className="flex flex-col items-center gap-14 md:gap-20 w-[100%] max-w-6xl py-4 px-5 md:py-14 md:px-20">
        <Title className="lg:text-7xl">Design support. Monthly plan.</Title>
      </div>
    </div>
  );
}
