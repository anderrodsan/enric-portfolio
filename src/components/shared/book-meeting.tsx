"use client";
import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function BookMeeting({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#FFFFFF" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      console.log("cal", cal);
    })();
  }, []);

  return (
    <button
      className={className}
      data-cal-namespace=""
      data-cal-link="enric-clemente-pttwxh/30min"
      data-cal-config='{"layout":"month_view","theme":"light"}'
    >
      {title}
    </button>
  );
}
