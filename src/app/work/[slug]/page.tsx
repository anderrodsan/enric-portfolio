import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/mdx-remote";
import { CustomMDX } from "@/components/mdx/mdx";
import ProjectHeader from "@/components/sections/projects/project-header";

export default function WorkContent({ params }: any) {
  let posts = getBlogPosts("work");
  let post = posts.find((post) => post.slug === params.slug);

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
            //image: `https://andrs.vercel.app/api/og?title=${post.metadata.title}`,
            //url: `https://andrs.vercel.app/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Enric Clemente",
            },
          }),
        }}
      />

      <div className="flex flex-col items-center w-full">
        <ProjectHeader meta={post.metadata} />
        <article className="prose prose-quoteless prose-neutral dark:prose-invert pb-20 pt-3 text-light-green w-full max-w-[1300px]">
          <CustomMDX source={post.content} />
        </article>
      </div>
    </article>
  );
}
