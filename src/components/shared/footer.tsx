import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const enricGmail = "mailto:6vSgC@example.com";
  const enricLinkedin = "https://www.linkedin.com/in/enricclemente/";
  const AnderLinkedin = "https://www.linkedin.com/in/anderrodsan/";

  return (
    <footer className="px-5 lg:px-20 py-10 space-y-4 bg-dark-green w-full">
      <div className="flex gap-5 items-center justify-center">
        <Link className="hover:opacity-80 transition-all" href={enricGmail}>
          <Image
            src="/logos/gmail.png"
            alt="gmail"
            width={500}
            height={500}
            className="w-7 h-7 text-white"
          />
        </Link>
        <Link className="hover:opacity-80 transition-all" href={enricLinkedin}>
          <FaLinkedinIn size={22} />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
        <p className="text-center text-[15px] md:text-[20px]">© 2024</p>
        <span className="hidden md:block">•</span>
        <p className="text-center text-[15px] md:text-[20px]">
          Crafted by{" "}
          <span>
            <Link
              className="hover:opacity-80 transition-all underline"
              href={enricLinkedin}
            >
              Enric
            </Link>
          </span>
        </p>
        <span className="hidden md:block">•</span>
        <p className="text-center text-[15px] md:text-[20px]">
          Brought to life by{" "}
          <span>
            <Link
              className="hover:opacity-80 transition-all underline"
              href={AnderLinkedin}
            >
              Ander
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
