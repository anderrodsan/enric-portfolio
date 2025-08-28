import Title from "@/components/shared/title";
import { SERVICE_HEADLINE } from "@/db/services";
import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Headline({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-full gap-10 lg:gap-20",
        className
      )}
    >
      <Title className="sm:text-6xl max-w-[12ch] lg:text-7xl lg:max-w-none">
        {SERVICE_HEADLINE.title}
      </Title>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10">
        <div className="group relative rounded-full bg-[#5A8F7D] hover:bg-[#D094E5] h-60 aspect-square overflow-hidden transition-all duration-1000">
          <Image
            src="/images/enric-without-background.png"
            alt="Hero image"
            width={1000}
            height={1000}
            className="absolute inset-0 top-4 -left-2 h-full w-auto object-cover scale-125 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-1000"
          />
        </div>
        <div className="flex-1 space-y-6 max-w-[60ch] lg:max-w-none">
          <h2
            className={cn(
              "text-2xl lg:text-4xl leading-[1.2] text-start font-bold text-light-green",
              acornRegular.className
            )}
          >
            {SERVICE_HEADLINE.subtitle}
          </h2>
          <p
            className="text-xl lg:text-2xl"
            dangerouslySetInnerHTML={{ __html: SERVICE_HEADLINE.description }}
          />
        </div>
      </div>
    </div>
  );
}
