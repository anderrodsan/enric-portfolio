import Hero from "@/components/sections/home/hero";
import InProgress from "@/components/sections/home/in-progress";
import ShortProjects from "@/components/sections/home/short-projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <Hero />
      <ShortProjects />
      <InProgress />
    </div>
  );
}
