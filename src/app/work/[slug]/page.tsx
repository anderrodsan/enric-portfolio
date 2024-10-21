//from Lee Rob: https://codesandbox.io/p/devbox/leerob-leerob-io-jgf99?file=%2Fapp%2Fblog%2F%5Bslug%5D%2Fpage.tsx%3A124%2C16

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/mdx-remote";
import { CustomMDX } from "@/components/mdx/mdx";
import PostHeader from "@/components/sections/projects/post-header";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  let post = getBlogPosts("work").find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata;
  const ogImage = `https://andrs.vercel.app/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://andrs.vercel.app/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function WorkContent({ params }: any) {
  let posts = getBlogPosts("work");
  let post = posts.find((post) => post.slug === params.slug);

  console.log("post", params);
  //other posts (max 4)
  let otherPosts = posts
    .filter((post) => post.slug !== params.slug)
    .slice(0, 4);

  if (!post) {
    notFound();
  }

  return (
    <article className="w-full flex flex-col items-center px-5">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: `https://andrs.vercel.app/api/og?title=${post.metadata.title}`,
            url: `https://andrs.vercel.app/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Ander Rodriguez",
            },
          }),
        }}
      />
      <PostHeader slug={post.slug} post={post} />
      <div className="flex-1 max-w-[650px] pt-5 md:pl-5 w-full">
        <article className="prose prose-quoteless prose-neutral dark:prose-invert pb-20 pt-3 max-w-[650px]">
          <CustomMDX source={post.content} />
        </article>
      </div>
    </article>
  );
}
