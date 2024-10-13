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
      className="group flex gap-4 justify-center items-center bg-white/5 hover:bg-white/10 pl-7 pr-5 py-3 rounded-full w-full md:w-auto"
    >
      <p
        className={cn(
          "flex-1 text-white text-[16px] md:text-[25px] leading-[20px] pt-1 font-bold md:font-normal",
          acornRegular.className,
          className
        )}
      >
        {children}
      </p>
      <div className="flex items-center justify-center w-[28px] md:w-[40px] h-[28px] md:h-[40px] bg-white rounded-full group-hover:rotate-45 transition duration-300">
        <ArrowUpRight className="text-background w-4 h-4 md:w-6 md:h-6" />
      </div>
    </Link>
  );
}
