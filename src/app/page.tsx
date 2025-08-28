import { CompanyLogos } from "@/components/sections/home/company-list";
import Hero from "@/components/sections/home/hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <CompanyLogos />
    </div>
  );
}
