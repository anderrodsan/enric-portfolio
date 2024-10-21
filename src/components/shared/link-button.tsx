import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LinkButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="relative group flex gap-4 justify-center items-center bg-white/5 hover:bg-white/10 pl-8 pr-16 py-3 md:py-4  rounded-full w-full md:w-auto"
    >
      <p
        className={cn(
          "flex-1 text-white text-[16px] md:text-[25px] leading-[20px] pt-1 font-bold md:font-normal text-center",
          acornRegular.className,
          className
        )}
      >
        {children}
      </p>
      <div className="absolute right-[10px] top-[10px] md:top-2 flex items-center justify-center w-[28px] md:w-[40px] h-[28px] md:h-[40px] bg-white rounded-full group-hover:rotate-45 transition duration-300">
        <ArrowUpRight className="text-background w-4 h-4 md:w-6 md:h-6" />
      </div>
    </Link>
  );
}
