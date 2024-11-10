"use client";

import React, { useRef, useState } from "react";

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

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div
        className="relative group rounded-[16px] overflow-hidden hover:scale-105 transition duration-300"
        style={{
          width: "100%",
          maxWidth: "1200px",
          aspectRatio: "16/9", // Maintain 16:9 aspect ratio
        }}
      >
        <video
          ref={videoRef}
          className="rounded-[16px] w-full h-full"
          src="/video/video-enric.mp4"
          style={{
            objectFit: "cover", // Ensures video covers the container
          }}
        />
        <button
          onClick={togglePlay}
          className="absolute flex items-center justify-center text-white text-lg md:text-xl lg:text-2xl w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full transition-all duration-300"
          style={{
            backgroundColor: "#243831", // Button background color
            top: "1rem", // Ensure consistent spacing from the top
            left: "1rem", // Ensure consistent spacing from the left
          }}
          title={isPlaying ? "Pause" : "Play"}
        >
          <span className="flex items-center justify-center">
            {isPlaying ? "⏸" : "▶"}
          </span>
        </button>
      </div>
    </div>
  );
}
