import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { ChevronRight, ExternalLink, File, Folder } from "lucide-react";

function Table({ data }: any) {
  let headers = data.headers.map((header: string, index: number) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row: string[], index: number) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="hover:opacity-90"
    />
  );
}

function RoundedImage(props: any) {
  return (
    <>
      <Image alt={props.alt} className="rounded-lg" {...props} />
      <p className="text-center w-full text-sm font-bold">{props.alt}</p>
    </>
  );
}

function Callout(props: any) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-slate-200 dark:bg-slate-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Heading = ({ children }: { children: string }) => {
    let slug = slugify(children);
    console.log("slug", slug);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `HeadingLevel${level}`;
  return Heading;
}

//Card with inside text as markdown
function Card({ children }: { children: React.ReactNode }) {
  return <p className="w-full py-3 px-3 rounded-xl bg-muted">{children}</p>;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  Table,
  Card,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
