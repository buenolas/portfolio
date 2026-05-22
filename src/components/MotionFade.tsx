"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionFade({ children, className, delay = 0 }: MotionFadeProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
