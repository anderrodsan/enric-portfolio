import Title from "@/components/shared/title";
import { projects } from "@/db/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectHeader({ meta }: any) {
  //find the project.id that matches the slug

  const data = [
    {
      title: "Company",
      values: [meta.company],
    },
    {
      title: "Role",
      values: [meta.role],
    },
    {
      title: "Team",
      values: meta.team.split(",").map((team) => {
        return team;
      }),
    },
    {
      title: "Duration",
      values: [meta.duration],
    },
  ];

  return (
    <section className="flex flex-col items-center w-full gap-10 py-16">
      <Title className="text-5xl sm:5xl lg:5xl lg:text-8xl max-w-4xl text-balance">
        {meta.title}
      </Title>
      <ul className="flex flex-col md:flex-row items-start md:justify-center gap-10 md:gap-16 w-full">
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
      </ul>
    </section>
  );
}
function parseArrayField(team: any) {
  throw new Error("Function not implemented.");
}
