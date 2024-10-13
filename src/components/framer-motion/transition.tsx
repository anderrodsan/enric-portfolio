"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        exit={{ y: -20, opacity: 0 }}
        className={cn("", className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
