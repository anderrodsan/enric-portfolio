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
      <div className="flex gap-2 justify-center items-center text-sm md:text-base">
        <p className="text-center">
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
        <p className="text-center">
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
        <p className="text-center">© 2024</p>
      </div>
    </footer>
  );
}
