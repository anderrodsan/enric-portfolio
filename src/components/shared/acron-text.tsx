import React from "react";
import { cn } from "@/lib/utils";

export default function AcornText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("text-light-green", className)}>{children}</p>;
}
