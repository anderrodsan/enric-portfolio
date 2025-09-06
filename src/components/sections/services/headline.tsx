import Title from "@/components/shared/title";
import { SERVICE_HEADLINE } from "@/db/services";
import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Headline({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row gap-5 lg:gap-16 items-center md:items-start w-full max-w-screen-lg mx-auto",
        className
      )}
    >
      {/* Image block */}
      <div className="relative block rounded-full overflow-hidden aspect-square h-[210px] md:h-[310px]">
        <Image
          src="/images/enric-headshot.png"
          alt="profile"
          width={500}
          height={500}
          style={{ objectFit: "cover", height: "115%" }}
          className="h-full w-full"
        />
      </div>

      {/* Text block */}
      <div className="flex-1">
        <h1
          className={cn(
            "text-3xl md:text-5xl font-bold text-light-green text-balance max-w-[65ch] pb-5 md:pb-10",
            acornRegular.className
          )}
        >
          {SERVICE_HEADLINE.title}
        </h1>

        <p
          className="md:text-[20px] pb-[14px] max-w-[70ch]"
          dangerouslySetInnerHTML={{ __html: SERVICE_HEADLINE.description }}
        />
      </div>
    </div>
  );
}
