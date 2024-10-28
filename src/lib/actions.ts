import { getBlogPosts } from "./mdx-remote";

//get the projects and order them by the index
export function getProjects() {
  //get all the projects and order
  const posts = getBlogPosts("work");

  //order the posts based on the index number of the metadata
  const orderedPosts = posts.sort((a, b) => a.metadata.id - b.metadata.id);

  //get the metadata and put it in an array
  const projects = orderedPosts.map((post) => {
    return {
      id: post.metadata.id,
      title: post.metadata.cardTitle,
      type: post.metadata.type,
      tag: post.metadata.role,
      color: post.metadata.color,
      slug: post.slug,
    };
  });

  return projects;
}
