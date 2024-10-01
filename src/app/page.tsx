import Hero from "@/components/sections/home/hero";
import ShortProjects from "@/components/sections/home/short-projects";

export default function Home() {
  return (
    <div className="max-w-[1352px]">
      <Hero />
      <ShortProjects />
    </div>
  );
}
