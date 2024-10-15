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
        theme: "dark",
        styles: { branding: { brandColor: "#FFFFFF" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      className={className}
      data-cal-namespace="30min"
      data-cal-link="enric-clemente-pttwxh/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      {title}
    </button>
  );
}
