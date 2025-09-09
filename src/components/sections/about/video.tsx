"use client";

import React from "react";

export default function Video() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 w-full">
      {/* First image - hidden */}
      {false && (
        <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
          {/* Image is not rendered */}
        </div>
      )}

      {/* Second image - hidden */}
      {false && (
        <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
          {/* Image is not rendered */}
        </div>
      )}
    </div>
  );
}
