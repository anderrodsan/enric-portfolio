import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Socials({ className }: { className?: string }) {
  const gmail = "mailto:enricclemente59@gmail.com";
  const linkedin = "https://www.linkedin.com/in/enricclemente/";

  return (
    <div className={cn("flex gap-5 items-center justify-center", className)}>
      <div className="relative group">
        <Link className="hover:opacity-80 transition-all" href={gmail}>
          <Image
            src="/logos/gmail.png"
            alt="gmail"
            width={500}
            height={500}
            className="w-7 h-7 text-white"
          />
        </Link>
        <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#243831] text-white text-base font-bold rounded-xl px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          enricclemente59@gmail.com
        </span>
      </div>
      <Link
        className="hover:opacity-80 transition-all"
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/logos/linkedin-icon.png"
          alt="LinkedIn"
          width={22}
          height={22}
          className="w-7 h-7"
        />
      </Link>
    </div>
  );
}
