import React from "react";
import BentoItem from "./bento-item";

export default function BentoGrid() {
  const projects = [
    {
      id: 1,
      title: "UX Design",
      description: "Lorem Ipsum",
      image: "https://via.placeholder.com/150",
      type: "phone",
      color: "bg-light-blue",
    },
    {
      id: 2,
      title: "Design System",
      description: "Lorem Ipsum",
      image: "https://via.placeholder.com/150",
      type: "browser",
      color: "bg-light-orange",
    },
    {
      id: 3,
      title: "Design System",
      description: "Lorem Ipsum",
      image: "https://via.placeholder.com/150",
      type: "mac",
      color: "bg-light-green",
    },
    {
      id: 4,
      title: "UX Design",
      description: "Lorem Ipsum",
      image: "https://via.placeholder.com/150",
      type: "phone",
      color: "bg-light-pink",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-10 w-full px-10 lg:px-[80px]">
      {projects.map((project) => (
        <BentoItem key={project.id} data={project} />
      ))}
    </div>
  );
}
