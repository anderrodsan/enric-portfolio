import { acornRegular } from "@/lib/custom-fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type SectionProps = {
  title: string;
  paragraphs: string[];
  imageLabel?: string;
  reverse?: boolean;          // image on the right when true (lg+)
  imageSrc?: string;          // optional: set a custom image path (e.g. "/images/myphoto.jpg")
  imageAlt?: string;          // optional alt text
};

// Default placeholders (replace these filenames with any you like inside /public/images)
const DEFAULT_LEFT_PLACEHOLDER = "/images/newenric1.png";
const DEFAULT_RIGHT_PLACEHOLDER = "/images/newenric1.png";

function IntroSection({
  title,
  paragraphs,
  imageLabel = "",
  reverse = false,
  imageSrc,
  imageAlt = "Section image",
}: SectionProps) {
  const resolvedImageSrc =
    imageSrc ?? (reverse ? DEFAULT_RIGHT_PLACEHOLDER : DEFAULT_LEFT_PLACEHOLDER);

  return (
    <div
      className={cn(
        "grid gap-6 lg:gap-16 w-full lg:grid-cols-2 lg:items-stretch",
        reverse &&
          "lg:[&>*:first-child]:col-start-2 lg:[&>*:last-child]:col-start-1"
      )}
    >
      {/* Image column */}
      <div className="group relative w-full overflow-hidden rounded-2xl shadow-lg aspect-[4/3] md:aspect-[16/10]">
        <Image
          src={resolvedImageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={false}
        />

        {/* Hover/touch overlay label */}
        <div className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
          <div className="absolute inset-0 bg-black/20" />
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
      {/* Row 1 */}
      <IntroSection
        imageSrc="/images/newenric1.png"
        imageAlt="Enric portrait"
        imageLabel="Exploring product direction, early sketches → wireframes"
        title="I'm a Product Designer based in Copenhagen."
        paragraphs={[
          "I am passionate about solving problems with design and technology and transforming new ideas into meaningful results.",
          "I enjoy working together with smart, creative, international, and passionate people determined to achieve more than required and challenge the status quo.",
        ]}
      />

      {/* Row 2 (duplicate of Row 1) */}
      <IntroSection
        imageSrc="/images/newenric1.png"
        imageAlt="Enric portrait"
        imageLabel="Exploring product direction, early sketches → wireframes"
        title="I'm a Product Designer based in Copenhagen."
        paragraphs={[
          "I am passionate about solving problems with design and technology and transforming new ideas into meaningful results.",
          "I enjoy working together with smart, creative, international, and passionate people determined to achieve more than required and challenge the status quo.",
        ]}
      />
    </div>
  );
}
