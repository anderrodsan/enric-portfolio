"use client";

import React, { useEffect, useMemo, useRef } from "react";
import Title from "@/components/shared/title";

// ----- Data -----
const bites = [
  // Videos (1–8)
  { id: 1, type: "video" as const, src: "/video/video1.mp4", poster: "/images/image1.jpeg" },
  { id: 2, type: "video" as const, src: "/video/video2.mp4", poster: "/images/image2.jpeg" },
  { id: 3, type: "video" as const, src: "/video/video3.mp4", poster: "/images/image3.avif" },
  { id: 4, type: "video" as const, src: "/video/video4.mp4", poster: "/images/image4.jpeg" },
  { id: 5, type: "video" as const, src: "/video/video5.mp4", poster: "/images/image5.jpeg" },
  { id: 6, type: "video" as const, src: "/video/video6.mp4", poster: "/images/image6.jpeg" },
  { id: 7, type: "video" as const, src: "/video/video7.mp4", poster: "/images/image7.jpeg" },
  { id: 8, type: "video" as const, src: "/video/video8.mp4", poster: "/images/image8.jpeg" },

  // Images (9–24)
  { id: 9, type: "image" as const, src: "/images/image1.jpeg" },
  { id: 10, type: "image" as const, src: "/images/image2.jpeg" },
  { id: 11, type: "image" as const, src: "/images/image3.avif" },
  { id: 12, type: "image" as const, src: "/images/image4.jpeg" },
  { id: 13, type: "image" as const, src: "/images/image5.jpeg" },
  { id: 14, type: "image" as const, src: "/images/image6.jpeg" },
  { id: 15, type: "image" as const, src: "/images/image7.jpeg" },
  { id: 16, type: "image" as const, src: "/images/image8.jpeg" },
  { id: 17, type: "image" as const, src: "/images/image9.jpeg" },
  { id: 18, type: "image" as const, src: "/images/image10.jpeg" },
  { id: 19, type: "image" as const, src: "/images/image11.jpeg" },
  { id: 20, type: "image" as const, src: "/images/image12.jpeg" },
  { id: 21, type: "image" as const, src: "/images/image13.jpeg" },
  { id: 22, type: "image" as const, src: "/images/image14.avif" },
  { id: 23, type: "image" as const, src: "/images/image15.jpeg" },
  { id: 24, type: "image" as const, src: "/images/image16.jpeg" },
];

type Bite = (typeof bites)[number];

// ----- Autoplay-on-view hook -----
function useAutoplayOnView() {
  const refs = useRef<Record<number, HTMLVideoElement | null>>({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (items) => {
        items.forEach((it) => {
          const el = it.target as HTMLVideoElement;
          if (!el) return;
          if (it.isIntersecting) el.play().catch(() => {});
          else el.pause();
        });
      },
      { threshold: 0.35 }
    );

    Object.values(refs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const attach = (id: number) => (node: HTMLVideoElement | null) => {
    refs.current[id] = node;
  };

  return { attach };
}

// ----- Shuffle utility -----
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ----- Page -----
export default function BitesPage() {
  const { attach } = useAutoplayOnView();

  // Shuffle bites once on mount
  const ordered = useMemo(() => shuffleArray(bites), []);

  return (
    <div className="flex flex-col items-center">
      {/* Title + Description */}
      <div className="space-y-3 pt-4 md:pt-14 pb-11 px-5 md:px-20">
        <Title
          gradient={false}
          className="text-5xl sm:text-6xl md:text-7xl leading-[1.2] text-center"
        >
          Snapshots.
        </Title>
        <p className="text-[18px] sm:text-[20px] md:text-[23px] text-center">
        A living gallery of my craft. Scroll, wander, and discover my work in motion.
        </p>
      </div>

      {/* Grid: 1 col on mobile, 2 cols on small+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-5 md:px-20 w-full max-w-[1600px]">
        {ordered.map((item) =>
          item.type === "video" ? (
            <video
              key={item.id}
              ref={attach(item.id)}
              src={item.src}
              poster={item.poster}
              autoPlay
              muted
              loop
              playsInline
              // Mobile: smaller height + contain so nothing gets cropped
              // Tablet/Desktop: larger height + cover for a tight crop
              className="w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[500px] object-contain md:object-cover object-center rounded-xl shadow-lg bg-black"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={item.id}
              src={item.src}
              alt={`Bite ${item.id}`}
              loading="lazy"
              className="w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[500px] object-contain md:object-cover object-center rounded-xl shadow-lg bg-black"
            />
          )
        )}
      </div>
    </div>
  );
}
