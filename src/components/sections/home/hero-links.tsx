"use client";

import GlassCard from "@/components/shared/glass-card";
import { acornMedium, acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface HeroLinkItemProps {
  label: "portfolio" | "services";
  isActive: boolean;
  href: string;
  onMouseEnter: () => void;
}

function HeroLinkItem({
  label,
  isActive,
  href,
  onMouseEnter,
}: HeroLinkItemProps) {
  return (
    <Link
      className={`rounded-full py-2 flex items-center transition-all duration-300 relative cursor-pointer ${
        isActive
          ? "bg-[#5A8F7D] px-4 pr-14"
          : "bg-transparent hover:bg-[#5A8F7D]/20 px-6"
      }`}
      onMouseEnter={onMouseEnter}
      href={href}
    >
      <p
        className={cn(
          "text-2xl font-medium whitespace-nowrap capitalize font-acorn leading-[100%] tracking-[0.03em] text-center align-middle py-2 px-2",
          isActive && "text-white",
          isActive ? acornMedium.className : acornRegular.className
        )}
      >
        {label}
      </p>
      <div
        className={`absolute right-2 flex justify-center items-center gap-2 rounded-full bg-white text-[#5A8F7D] transition-all duration-300 ${
          isActive
            ? "opacity-100 scale-100 w-10 h-10"
            : "opacity-0 scale-0 max-w-0 overflow-hidden"
        }`}
      >
        <ArrowUpRight size={24} className="text-[#5A8F7D]" />
      </div>
    </Link>
  );
}

function HeroLinkItemMobile({ label, isActive, href }: HeroLinkItemProps) {
  return (
    <Link className="w-full" href={href}>
      <GlassCard
        className={cn(
          "flex justify-center items-center gap-2 w-full h-14",
          isActive && "bg-[#5A8F7D]"
        )}
        borderRadius="rounded-2xl"
      >
        <p
          className={cn(
            "text-2xl font-medium whitespace-nowrap capitalize font-acorn leading-[100%] tracking-[0.03em] text-center align-middle py-2",
            acornRegular.className
          )}
        >
          {label}
        </p>
        <div
          className={`flex justify-center items-center p-1 rounded-full bg-white text-[#5A8F7D]`}
        >
          <ArrowUpRight size={16} className="text-black/80" strokeWidth={2} />
        </div>
      </GlassCard>
    </Link>
  );
}

export function HeroLinks() {
  const [activeItem, setActiveItem] = useState<"portfolio" | "services">(
    "portfolio"
  );

  //check if its mobile screen

  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <HeroLinkItemMobile
          label="portfolio"
          isActive={activeItem === "portfolio"}
          onMouseEnter={() => setActiveItem("portfolio")}
          href="/work"
        />
        <HeroLinkItemMobile
          label="services"
          isActive={activeItem === "services"}
          onMouseEnter={() => setActiveItem("services")}
          href="/services"
        />
      </div>
    );
  }

  return (
    <GlassCard
      className="p-2 rounded-full flex gap-4"
      borderRadius="rounded-full"
    >
      <HeroLinkItem
        label="portfolio"
        isActive={activeItem === "portfolio"}
        onMouseEnter={() => setActiveItem("portfolio")}
        href="/work"
      />
      <HeroLinkItem
        label="services"
        isActive={activeItem === "services"}
        onMouseEnter={() => setActiveItem("services")}
        href="/services"
      />
    </GlassCard>
  );
}
