"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/types";
import { acornMedium } from "@/lib/custom-fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  data: any;
  className?: string;
};

export default function BentoItem({ data, className }: Props) {
  const router = useRouter();
  //console.log("data", data.tag);
  const imgClassName =
    data?.type === "phone"
      ? "min-w-[450px] lg:min-w-[100px] px-10"
      : data?.type === "mac"
      ? "min-w-[500px] sm:min-w-[800px] lg:min-w-[100px] -left-3"
      : "min-w-[900px] lg:min-w-[100px] px-10";

  return (
    <div
      className={cn(
        "flex justify-center w-full",
        data?.type === "phone"
          ? "col-span-full lg:col-span-2 aspect-square"
          : "col-span-full lg:col-span-3 aspect-square lg:aspect-auto",
        data?.type === "browser" ? "items-end" : "items-center",
        className
      )}
    >
      <div
        onClick={() => {
          if (data.finished === "true") {
            router.push("/work/" + data?.slug);
          }
        }}
        className={cn(
          "group relative flex flex-col rounded-[64px]  overflow-hidden w-full max-w-[500px] sm:max-w-[700px] sm:max-h-[700px] md:min-h-[400px] lg:max-w-full lg:w-full h-full",
          "bg-" + data?.color,
          data.finished === "true"
            ? "cursor-pointer hover:-translate-y-2 transition duration-700"
            : "cursor-default"
        )}
      >
        <div className="pt-7 px-10 sm:pt-10 sm:px-20 w-full">
          <p
            className={cn(
              "text-[10px] sm:text-[14px] text-end text-background",
              data?.color === "black" ? "text-white" : "text-background"
            )}
          >
            {data?.tag.toUpperCase()}
          </p>
          <h2
            className={cn(
              "text-2xl sm:text-[28px] text-end",
              data?.color === "black" ? "text-white" : "text-background",
              acornMedium.className
            )}
          >
            {data?.title}
          </h2>
        </div>
        <div
          className={cn(
            "absolute top-32 sm:top-40 left-0 lg:left-auto w-full flex items-end",
            imgClassName,
            data.finished === "true" &&
              "group-hover:translate-y-5 transition duration-700"
          )}
        >
          <Image
            src={"/work/" + data?.slug + "/cover.png"}
            width={1000}
            height={1000}
            alt="Project image"
            style={{}}
            className={`w-full`}
          />
        </div>
      </div>
    </div>
  );
}
