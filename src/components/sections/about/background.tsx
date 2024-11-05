import LinkButton from "@/components/shared/link-button";
import { education } from "@/db/education";
import { experience } from "@/db/experience";
import { acornRegular } from "@/lib/custom-fonts";
import { Education, Experience } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Background() {
  return (
    <section className="w-full grid grid-cols-5 gap-14 lg:gap-10">
      {/** Experience */}
      <div className="col-span-5 lg:col-span-3 flex flex-col gap-5 lg:gap-10 items-center lg:items-start">
        <Title>Work experience.</Title>
        {/** Item list */}
        <ul className="flex flex-col gap-5">
          {experience.map((experience: Experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
          <li className="flex lg:hidden justify-start pt-3">
            <LinkButton href="/about">Read full CV</LinkButton>
          </li>
        </ul>
      </div>
      {/** Education */}
      <div className="col-span-5 lg:col-span-2 flex flex-col gap-5 lg:gap-10 items-center lg:items-start">
        <Link href="/education" passHref>
          <Title>Education.</Title>
        </Link>
        {/** Item list */}
        <ul className="flex flex-col gap-5">
          {education.map((education: Education, index) => (
            <EducationItem key={index} education={education} />
          ))}
          <li className="flex justify-start pt-3">
            <LinkButton href="/about">Read full CV</LinkButton>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Title({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1
      className={cn(
        "text-4xl lg:text-6xl text-light-green font-bold text-center lg:text-start w-full",
        acornRegular.className,
        className
      )}
    >
      {children}
    </h1>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <li
      className={cn(
        "p-[14px] rounded-[30px] border-2 border-white/10 flex gap-[18px] items-center",
        "pr-[30px]"
      )}
    >
      <div className="relative bg-white/5  rounded-xl lg:rounded-3xl">
        <Image
          src={experience?.logo}
          alt={experience.company}
          width={100}
          height={100}
          className="object-contain h-[60px] md:h-[100px] aspect-square p-3 lg:p-6"
        />
      </div>
      <div className="space-y-1">
        <div className="flex gap-2 items-center">
          {experience?.endDate ? (
            <p className="py-1 px-3 bg-white/10 text-white rounded-full text-[10px] lg:text-[14px]">
              {experience.type}
            </p>
          ) : (
            <p className="py-1 px-3 bg-[#5A8F7D] text-white rounded-full text-[10px] lg:text-[14px]">
              Current
            </p>
          )}

          <p className="py-1 px-3 bg-white/[0.03] text-white rounded-full text-[10px] lg:text-[14px]">
            {experience.startDate} -{" "}
            {experience.endDate ? experience.endDate : "Present"}
          </p>
        </div>
        <h2 className="text-[14px] lg:text-[25px] font-bold">
          {experience.title}
        </h2>
        <p className="text-[10px] lg:text-[14px]">{experience.company}</p>
      </div>
    </li>
  );
}

function EducationItem({ education }: { education: Education }) {
  return (
    <li className="p-[20px] rounded-[30px] border-2 border-white/10 space-y-1">
      <h2 className="text-[14px] lg:text-[20px] font-bold">
        {education.title}
      </h2>
      <p className="text-[10px] lg:text-[16px]">{education.university}</p>
    </li>
  );
}
