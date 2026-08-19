"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Marquee({
  children,
  duration = 28,
  className,
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-abyss to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-abyss to-transparent sm:w-32" />
      <motion.div
        className="flex w-max shrink-0 items-center gap-8"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
