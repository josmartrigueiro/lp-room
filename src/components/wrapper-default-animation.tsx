"use client";
import { motion } from "motion/react";

interface BlurPopUpProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function BlurPopUp({
  children,
  className,
  delay,
  duration = 0.4,
}: BlurPopUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "20%", filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: "20%", filter: "blur(10px)" }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileInView="animate"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
