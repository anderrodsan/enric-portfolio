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
        className="relative group rounded-[32px] overflow-hidden hover:scale-105 transition duration-300"
        style={{
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <video
          ref={videoRef}
          className="rounded-[32px] w-full"
          src="/video/video-enric.mp4"
          style={{
            objectFit: "cover",
            aspectRatio: "16/9", // Ensures proper aspect ratio
          }}
        />
        <button
          onClick={togglePlay}
          className="absolute top-4 left-4 flex items-center justify-center text-white text-3xl w-14 h-14 sm:w-16 sm:h-16 rounded-full transition-all duration-300"
          style={{
            backgroundColor: "#243831", // Updated to your preferred color
          }}
          title={isPlaying ? "Pause" : "Play"}
        >
          <span className="w-5 h-5 flex items-center justify-center">
            {isPlaying ? "⏸" : "▶"}
          </span>
        </button>
      </div>
    </div>
  );
}
