"use client";

import { Pause, PlayIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Video() {
  // 🔒 Disable the video (set to false to re-enable)
  const DISABLE_VIDEO = true;
  if (DISABLE_VIDEO) {
    return null; // or return a static poster (see alternative below)
  }

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onEnded = () => setIsPlaying(false);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div
        onClick={togglePlay}
        className="group relative w-full aspect-[1043/697] hover:opacity-100 hover:scale-[1.01] cursor-pointer transition duration-300 rounded-2xl"
      >
        <video
          width="100%"
          controls={false}
          preload="none"
          ref={videoRef}
          className="rounded-[16px] w-full h-full"
          src="/video/video-presentation.mp4"
          poster="/video/video-cover.jpg"
          style={{ objectFit: "cover" }}
        />
        <button
          onClick={togglePlay}
          className="transition duration-300 absolute top-5 left-5 z-20 group-hover:scale-110 group-hover:opacity-100 opacity-70"
        >
          {isPlaying ? (
            <Pause fill="white" className="w-7 h-7 text-white" />
          ) : (
            <PlayIcon fill="white" className="w-7 h-7 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}
