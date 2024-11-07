import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { cn } from "@/lib/utils";
import { acornMedium } from "@/lib/custom-fonts";
import { Lightbulb } from "lucide-react";
import { iframe } from "framer-motion/client";

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Heading = ({ children }: { children: string }) => {
    let slug = slugify(children);

    //different size classNames depending on the level
    const className = cn(
      acornMedium.className,
      "text-start text-light-green group mb-3 mt-10 relative w-full max-w-[650px]",
      level === 1 && "text-4xl md:text-5xl",
      level === 2 && "text-xl md:text-2xl"
    );

    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: className,
      },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className:
            "absolute -left-10 top-0 anchor opacity-0 group-hover:opacity-20 inline-block ml-2",
          children: "#",
        }),
        children,
      ]
    );
  };

  Heading.displayName = `HeadingLevel${level}`;
  return Heading;
}

function Text({ children }: any) {
  return (
    <p className="prose dark:prose-invert max-w-none text-base">{children}</p>
  );
}

function MaxWidth({ children }: any) {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[650px]">{children}</div>
    </div>
  );
}

// Full Width Image Component
function FullWidthImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl overflow-hidden max-w-[1200px] max-h-[650px]">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={650}
        className="w-full object-cover rounded-2xl"
      />
    </div>
  );
}

// Two Column Image Layout
function TwoColumnImages({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
      {images.map((image, i) => (
        <div key={i} className="rounded-2xl overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            width={580}
            height={350}
            className="w-full object-cover rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
}

// Three Column Image Layout
function ThreeColumnImages({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((image, i) => (
        <div key={i} className="rounded-2xl overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            width={380}
            height={280}
            className="w-full object-cover rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
}

// Caption Component
function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex justify-center items-start gap-2 text-center text-white opacity-90 mb-5 text-sm md:text-lg -mt-3">
      <span>
        <Lightbulb
          size={20}
          className="text-light-green"
          style={{ marginTop: 6 }}
        />
      </span>
      {children}
    </p>
  );
}

function IFrame({ src }: { src: string }) {
  return (
    <div className="w-full flex flex-col items-center mt-10 mb-5">
      <iframe
        style={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        }}
        width={1200}
        height={650}
        src={src}
        allowFullScreen
      />
    </div>
  );
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  p: (props: any) => (
    <div className="flex flex-col items-center -my-5 w-full">
      <p
        className="text-start w-full text-lg mb-6 leading-relaxed text-white max-w-[650px]"
        {...props}
      />
    </div>
  ),
  li: (props: any) => (
    <div className="flex flex-col items-center -my-5 w-full max-w-[650px] -ml-6 md:ml-0">
      <ul className="w-full -mb-1">
        <li
          className="text-start w-full text-lg leading-relaxed text-white"
          {...props}
        />
      </ul>
    </div>
  ),
  FullWidthImage,
  TwoColumnImages,
  ThreeColumnImages,
  Caption,
  MaxWidth,
  IFrame,
};

export function CustomMDX(props: any) {
  return (
    <article className="prose dark:prose-invert max-w-none flex flex-col items-center">
      <MDXRemote
        {...props}
        components={{ ...components, ...props.components }}
      />
    </article>
  );
}
