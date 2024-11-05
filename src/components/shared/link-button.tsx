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
      className="relative group flex items-center justify-center gap-1 bg-white/5 hover:bg-white/10 px-6 pr-16 py-3 rounded-full w-full md:w-auto"
    >
      <p
        className={cn(
          "text-white text-[18px] md:text-[20px] font-bold md:font-normal text-center",
          acornRegular.className,
          className
        )}
      >
        {children}
      </p>
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-[28px] md:w-[36px] h-[28px] md:h-[36px] bg-white rounded-full group-hover:rotate-45 transition duration-300">
        <ArrowUpRight className="text-background w-4 h-4 md:w-6 md:h-6" />
      </div>
    </Link>
  );
}
