"use client";
import { motion } from "motion/react";

interface BlurPopUpProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  margin?: string;
}

export function BlurPopUp({
  children,
  className,
  delay,
  duration = 0.4,
  margin = "100px",
}: BlurPopUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "20%", filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: "20%", filter: "blur(10px)" }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
