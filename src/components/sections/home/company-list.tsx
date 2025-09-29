import { cn } from "@/lib/utils";
import { acornMedium, acornRegular } from "@/lib/custom-fonts";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CompanyLogos() {
  const LOGOS = [
    {
      name: "aalborg-university",
      tag: "Case study",
      href: "/work",
    },
    {
      name: "cantilever",
      tag: "Case study",
      href: "/work",
    },
    {
      name: "eye10",
      tag: "Case study",
      href: "/work",
    },
    {
      name: "milestone-systems",
      tag: "Case study",
      href: "/work",
    },
    {
      name: "national-children-museum",
      tag: "Case study",
      href: "/work",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center w-full py-12 items-center gap-2 lg:gap-10 px-5 md:px-20 max-w-[1400px]">
      {LOGOS.map((logo) => (
        <div
          className="overflow-hidden h-auto relative pb-5 last:hidden md:last:block scale-[0.8] md:scale-10"
          key={logo.name}
        >
          <Image
            key={logo.name}
            src={`/logos/hero/${logo.name}.png`}
            alt={logo.name}
            width={100}
            height={100}
            className="w-40 h-auto object-contain"
          />
          <Link
            href={logo.href}
            className={cn("group absolute bottom-0 -right-5 opacity-80")}
          >
            <div className="group-hover:-translate-x-6 transition-all duration-600 flex items-center gap-2">
              <span
                className={cn(
                  "group-hover:underline underline-offset-4 text-sm tracking-[-0.01em] text-light-green",
                  acornMedium.className
                )}
              >
                {logo.tag}
              </span>
              <div
                className={`flex justify-center items-center h-4 aspect-square rounded-full bg-[#D3EDE5] text-[#5A8F7D] opacity-70`}
              >
                <ArrowUpRight size={12} className="text-background" />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
