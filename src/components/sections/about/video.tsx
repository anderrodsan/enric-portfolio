"use client";

import { Pause, PlayIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Listen for when the video ends
      video.addEventListener("ended", () => {
        setIsPlaying(false); // Set isPlaying to false when the video ends
      });
    }

    // Cleanup event listeners
    return () => {
      if (video) {
        video.removeEventListener("ended", () => {
          setIsPlaying(false); // Cleanup the ended listener
        });
      }
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
          src="/video/video-presentation.mp4" // Ensure correct path for production
          poster="/video/video-cover.jpg" // Add a poster image here
          style={{
            objectFit: "cover",
          }}
        />
        <button
          onClick={togglePlay}
          className={
            "transition duration-300 absolute top-5 left-5 z-20 group-hover:scale-110 group-hover:opacity-100 opacity-70"
          }
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
