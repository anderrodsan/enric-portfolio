import Title from "@/components/shared/title";
import { projects } from "@/db/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PostHeader({ slug, post }: any) {
  //find the project.id that matches the slug
  const project = projects.find((project) => project.id === 1);

  if (!project) {
    return null;
  }

  const data = [
    {
      title: "Company",
      values: [project.company],
    },
    {
      title: "Role",
      values: [project.role],
    },
    {
      title: "Team",
      values: project.team,
    },
    {
      title: "Duration",
      values: [project.duration],
    },
  ];

  const tools = {
    title: "Tools",
    values: project.tools,
  };

  console.log(data);

  return (
    <section className="flex flex-col items-center w-full gap-10 py-16">
      <Title className="text-5xl sm:5xl lg:5xl lg:text-8xl max-w-4xl text-balance">
        {post.metadata.title}
      </Title>
      <ul className="flex flex-col md:flex-row items-start md:items-start md:justify-center gap-16 w-full">
        {data.map((item, index) => (
          <li key={index} className="flex flex-col items-start justify-start">
            <h3 className="text-lg">{item.title}</h3>
            {item?.values?.map((value, idx) => {
              if (index === 0) {
                return (
                  <Link
                    href={"https://" + value}
                    target="_blank"
                    key={idx}
                    className="group flex gap-1 items-center cursor-pointer"
                  >
                    <p className="text-light-green text-lg">{value}</p>
                    <div className="flex items-center justify-center w-[20px] h-[20px] bg-light-green rounded-full group-hover:rotate-45 transition duration-300">
                      <ArrowUpRight size={16} className="text-background" />
                    </div>
                  </Link>
                );
              }

              return (
                <li key={idx} className="flex gap-1 items-center">
                  <p className="text-light-green text-lg">{value}</p>
                </li>
              );
            })}
          </li>
        ))}
        <li className="flex flex-col items-start justify-start">
          <h3 className="text-lg">{tools.title}</h3>
          <ul className="flex items-center justify-start gap-1">
            {tools?.values?.map((value, idx) => (
              <li key={idx} className="flex gap-1 items-center">
                <Image
                  src={"/images/logos/" + value + ".png"}
                  alt={value}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
}
