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
          aspectRatio: "16/9", // Maintain aspect ratio
        }}
      >
        <video
          ref={videoRef}
          className="rounded-[16px] w-full h-full"
          src="/video/video-enric.mp4" // Ensure correct path for production
          poster="/video/video-enric.mp4" // Add a poster image here
          style={{
            objectFit: "cover",
          }}
        />
        <button
          onClick={togglePlay}
          className="absolute flex items-center justify-center text-white text-lg w-12 h-12 sm:w-14 sm:h-14 rounded-full"
          style={{
            backgroundColor: "#243831", // Button background color
            top: "1rem", // Padding from top
            left: "1rem", // Padding from left
          }}
          title={isPlaying ? "Pause" : "Play"}
        >
          <span className="text-white">{isPlaying ? "⏸" : "▶"}</span>
        </button>
      </div>
    </div>
  );
}
