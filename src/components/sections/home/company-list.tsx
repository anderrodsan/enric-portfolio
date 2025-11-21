"use client";

import { cn } from "@/lib/utils";
import { acornMedium, acornRegular } from "@/lib/custom-fonts";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// 👉 Add your Product Sans class here
// Example: const productSans = { className: "font-product-sans" };
const productSans = { className: "font-product-sans" };

export function CompanyLogos() {
  const LOGOS = [
    { name: "aalborg-university", tag: "Case study", href: "/work" },
    { name: "cantilever", tag: "Case study", href: "/work" },
    { name: "milestone-systems", tag: "Case study", href: "/work" },
    { name: "national-children-museum", tag: "Case study", href: "/work" },
  ];

  // Defining the exact complex style, but REPLACING GRADIENT with fixed background
  const consistentFlatGlassStyle = "relative border-2 border-transparent backdrop-blur-md bg-white/5 hover:outline hover:outline-4 hover:outline-white hover:outline-offset-[-2px] transition-all rounded-[24px] w-full p-5 h-full";


  return (
    <section className="w-full flex flex-col items-center px-5 md:px-20 max-w-[1400px] mx-auto pb-20">
      {/* Logos row (unchanged) */}
      <div className="flex flex-wrap justify-center w-full py-12 items-center gap-2 lg:gap-10">
        {LOGOS.map((logo) => (
          <div
            className="overflow-hidden h-auto relative pb-5 last:hidden md:last:block scale-[0.8] md:scale-100"
            key={logo.name}
          >
            <Image
              src={`/logos/hero/${logo.name}.png`}
              alt={logo.name}
              width={100}
              height={100}
              className="w-40 h-auto object-contain"
            />

            <Link
              href={logo.href}
              className={cn("group absolute bottom-0 -right-5 opacity-80")}
            >
              <div className="group-hover:-translate-x-6 transition-all duration-600 flex items-center gap-2">
                <span
                  className={cn(
                    "group-hover:underline underline-offset-4 text-sm tracking-[-0.01em] text-light-green",
                    acornMedium.className
                  )}
                >
                  {logo.tag}
                </span>

                <div className="flex justify-center items-center h-4 aspect-square rounded-full bg-[#D3EDE5] text-[#5A8F7D] opacity-70">
                  <ArrowUpRight size={12} className="text-background" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* -------------------------------------------------- */}
      {/* Testimonials under logos (FLAT BACKGROUND APPLIED) */}
      {/* -------------------------------------------------- */}

      <section
        className="w-full flex justify-center mt-6 md:mt-10"
        aria-label="Client testimonials"
      >
        {/* Reduced max-width for less prominence */}
        <div className="w-full max-w-[800px] flex flex-col md:flex-row gap-8 md:gap-10">
          
          {/* Testimonial 1 - Applying the consistent flat glass style */}
          <article className={cn("flex-1 flex flex-col gap-3", consistentFlatGlassStyle)}>
            <div className="flex items-center gap-3">
              {/* Reduced Avatar Size */}
              <Image
                src="/images/shopie3.png"
                width={40}
                height={40}
                alt="Sophie"
                className="rounded-full shrink-0"
              />
              <div>
                {/* Reduced Name/Role Text Size */}
                <p
                  className={cn(
                    "font-semibold text-sm",
                    productSans.className
                  )}
                >
                  Ida
                </p>
                <p className="text-xs text-white/60">Product Lead FinTech</p>
              </div>
            </div>

            {/* Quote Text Size Adjusted, ITALIC REMOVED */}
            <p
              className={cn(
                "text-sm leading-relaxed text-white/90", 
                productSans.className
              )}
            >
              "Enric quickly understood our product and shipped clean, intuitive designs that our users finally ‘got.’ Everything was developer-ready, fast, and effortless to collaborate on. He felt like part of our team from day one."
            </p>
          </article>

          {/* Testimonial 2 - Applying the consistent flat glass style */}
          <article className={cn("flex-1 flex flex-col gap-3", consistentFlatGlassStyle)}>
            <div className="flex items-center gap-3">
              {/* Reduced Avatar Size */}
              <Image
                src="/images/milan3.png"
                width={40}
                height={40}
                alt="Milan Bakker"
                className="rounded-full shrink-0"
              />
              <div>
                {/* Reduced Name/Role Text Size */}
                <p
                  className={cn(
                    "font-semibold text-sm",
                    productSans.className
                  )}
                >
                  Oliver 
                </p>
                <p className="text-xs text-white/60">
                  Founder of SaaS StartUp
                </p>
              </div>
            </div>

            {/* Quote Text Size Adjusted, ITALIC REMOVED */}
            <p
              className={cn(
                "text-sm leading-relaxed text-white/90",
                productSans.className
              )}
            >
              “Enric brought clarity and structure to our product when we needed it most. He turned rough ideas into polished, scalable designs our developers could build without friction. Fast, reliable, and incredibly easy to work with.”
            </p>
          </article>

        </div>
      </section>
    </section>
  );
}