import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { cn } from "@/lib/utils";
import { acornMedium } from "@/lib/custom-fonts";
import { Lightbulb } from "lucide-react";

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
    const className = {
      1: `text-4xl mt-10`,
      2: "text-3xl mt-8",
      3: "text-2xl mt-6",
      4: "text-xl",
      5: "text-lg",
      6: "text-base",
    };

    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: cn(
          acornMedium.className,
          "text-5xl text-light-green group mb-3 mt-12 relative"
        ),
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
    <div className="mt-12 mb-2 rounded-2xl overflow-hidden bg-light-green">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="w-full object-cover"
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-2">
      {images.map((image, i) => (
        <div key={i} className="rounded-2xl overflow-hidden bg-light-green">
          <Image
            src={image.src}
            alt={image.alt}
            width={580}
            height={400}
            className="w-full object-cover"
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-2">
      {images.map((image, i) => (
        <div key={i} className="rounded-2xl overflow-hidden bg-light-green">
          <Image
            src={image.src}
            alt={image.alt}
            width={380}
            height={280}
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

// Caption Component
function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex justify-center items-start gap-1 text-xs text-center text-light-green italic mt-2 mb-10">
      <Lightbulb
        size={20}
        className="text-light-green"
        style={{ marginTop: 26 }}
      />
      {children}
    </p>
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
    <p className="text-lg mb-6 leading-relaxed text-light-green" {...props} />
  ),
  li: (props: any) => (
    <li className="text-lg leading-relaxed text-light-green" {...props} />
  ),
  FullWidthImage,
  TwoColumnImages,
  ThreeColumnImages,
  Caption,
  MaxWidth,
};

export function CustomMDX(props: any) {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <MDXRemote
        {...props}
        components={{ ...components, ...props.components }}
      />
    </article>
  );
}
