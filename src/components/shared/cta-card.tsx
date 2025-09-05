import { acornMedium } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type CTACardType = {
  title: string;
  tag: string;
  color: string;
  image: string;
  href: string;
};

export default function CTACard({ data }: { data: CTACardType }) {
  return (
    <Link
      href={data.href}
      className={cn(
        "relative group w-full flex items-center justify-between gap-[38px] p-5 lg:p-10 rounded-[24px] lg:rounded-[42px] overflow-hidden",
        "hover:outline hover:outline-4 hover:outline-white hover:outline-offset-[-2px] transition-all duration-300",
        "bg-" + data.color
      )}
    >
      <div className="space-y-1.5 w-[200px] lg:w-[400px]">
        <span className="uppercase text-xs lg:text-sm text-black">
          {data.tag}
        </span>
        <h2
          className={cn(
            "text-xl lg:text-3xl text-black leading-[120%] tracking-[-0.01em]",
            acornMedium.className
          )}
        >
          {data.title}
        </h2>
      </div>
      <div className="absolute top-5 lg:top-10 left-[260px] md:left-[300px] lg:left-[600px] lg:right-20 min-w-[300px] md:min-w-[400px] h-full group-hover:lg:-translate-y-3 transition-all duration-700">
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={300}
          className="relative w-full"
        />
      </div>
    </Link>
  );
}
