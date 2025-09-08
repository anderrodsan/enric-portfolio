import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type SectionProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  paragraphs: string[];
  imageLabel?: string;
  reverse?: boolean; // image on the right when true (lg+)
};

function IntroSection({
  imageSrc,
  imageAlt,
  title,
  paragraphs,
  imageLabel = "",
  reverse = false,
}: SectionProps) {
  return (
    <div
      className={cn(
        "grid gap-6 lg:gap-16 w-full lg:grid-cols-2 lg:items-stretch",
        reverse && "lg:[&>*:first-child]:col-start-2 lg:[&>*:last-child]:col-start-1"
      )}
    >
      {/* Image column */}
      <div className="group relative w-full overflow-hidden rounded-2xl shadow-lg min-h-[260px] md:min-h-[360px] lg:min-h-0 lg:h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={false}
        />

        {/* Hover overlay label */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="rounded-xl bg-black/60 backdrop-blur-sm px-3 py-2 text-white text-sm md:text-base">
              {imageLabel}
            </div>
          </div>
        </div>
      </div>

      {/* Text column */}
      <div className="flex flex-col justify-center">
        <h1
          className={cn(
            "text-3xl md:text-5xl font-bold text-light-green text-balance max-w-[65ch] pb-5 md:pb-10",
            acornRegular.className
          )}
        >
          {title}
        </h1>
        {paragraphs.map((p, i) => (
          <p key={i} className="md:text-[20px] pb-[14px]">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Intro() {
  return (
    <div className="flex flex-col gap-16 w-full">
      {/* Row 1: image left, text right */}
      <IntroSection
        imageSrc="/images/newenric1.png"
        imageAlt="Enric portrait 1"
        imageLabel="Exploring product direction, early sketches → wireframes"
        title="I'm a Product Designer based in Copenhagen."
        paragraphs={[
          "I am passionate about solving problems with design and technology and transforming new ideas into meaningful results.",
          "I enjoy working together with smart, creative, international, and passionate people determined to achieve more than required and challenge the status quo.",
        ]}
      />

      {/* Row 2: image right, text left */}
      <IntroSection
        reverse
        imageSrc="/images/newenric1.png" // 🔁 can be changed later to another image
        imageAlt="Enric portrait 2"
        imageLabel="From discovery to delivery — pragmatic, outcome-driven"
        title="I bridge creativity with strategy."
        paragraphs={[
          "With a background in UX and product design, I bring a structured approach to creating intuitive and impactful user experiences.",
          "My work is driven by curiosity and the belief that thoughtful design can shape better digital products for people everywhere.",
        ]}
      />
    </div>
  );
}
