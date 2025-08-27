import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const enricGmail = "mailto:enricclemente59@gmail.com";
  const enricLinkedin = "https://www.linkedin.com/in/enricclemente/";
  const AnderLinkedin = "https://www.linkedin.com/in/anderrodsan/";

  return (
    <footer className="px-5 lg:px-20 py-10 space-y-4 bg-dark-green w-full">
      {/* <div className="flex gap-5 items-center justify-center">
        <div className="relative group">
          <Link className="hover:opacity-80 transition-all" href={enricGmail}>
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
          href={enricLinkedin}
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
      </div> */}
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
        <span className="hidden md:block">•</span>
        <p className="text-center text-lg md:text-xl">
          Crafted by{" "}
          <span>
            <Link
              className="hover:opacity-80 transition-all underline"
              href={enricLinkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enric
            </Link>
          </span>
        </p>
        <span className="hidden md:block">•</span>
        <p className="text-center text-lg md:text-xl">
          Brought to life by{" "}
          <span>
            <Link
              className="hover:opacity-80 transition-all underline"
              href={AnderLinkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ander
            </Link>
          </span>
        </p>
        <p className="text-center text-lg md:text-xl">© 2024</p>
      </div>
    </footer>
  );
}
