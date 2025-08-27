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
        "relative group w-full flex items-center justify-between gap-[38px] p-10 rounded-[42px] overflow-hidden",
        "hover:outline hover:outline-4 hover:outline-white hover:outline-offset-[-2px] transition-all duration-300",
        "bg-" + data.color
      )}
    >
      <div className="space-y-1.5 w-[300px] md:w-[400px]">
        <span className="uppercase text-sm text-black">{data.tag}</span>
        <h2
          className={cn(
            "text-[28px] text-black leading-[120%] tracking-[-0.01em] group-hover:underline transition-all duration-300",
            acornMedium.className
          )}
        >
          {data.title}
        </h2>
      </div>
      <div className="absolute top-10 left-[350px] md:left-[600px] lg:right-20 min-w-[300px] md:min-w-[400px] h-full">
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
