import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { acron } from "@/lib/custom-fonts";
import { Project } from "@/lib/types";

type Props = {
  data: Project;
  className?: string;
};

export default function BentoItem({ data, className }: Props) {
  const imgClassName =
    data?.type === "phone"
      ? "justify-center px-10"
      : data?.type === "mac"
      ? "justify-center"
      : "left-10 justify-end pl-10 w-[150%]";

  return (
    <div
      className={`group relative flex flex-col rounded-[64px] hover:-translate-y-2 hover:shadow-lg transition duration-300 ${
        data?.color
      } overflow-hidden w-full h-[300px] sm:h-[500px] lg:h-auto ${
        data?.type === "phone"
          ? "col-span-5 lg:col-span-2 lg:aspect-square"
          : "col-span-5 lg:col-span-3"
      }
        ${data.type === "browser" ? "items-end" : "items-center"} ${className}`}
    >
      <div className="p-10 w-full">
        <p className="text-[14px] text-end">
          {data?.description.toUpperCase()}
        </p>
        <h2
          className={`text-[30px] lg:text-[45px] text-end ${acron.className}`}
        >
          {data?.title}
        </h2>
      </div>
      <div
        className={cn(
          "absolute top-36 w-full flex items-end group-hover:translate-y-2 transition duration-500",
          imgClassName
        )}
      >
        <Image
          src={"/mockups/" + data?.type + ".png"}
          width={500}
          height={500}
          alt="Project image"
          style={{}}
          className={`w-full`}
        />
      </div>
    </div>
  );
}
