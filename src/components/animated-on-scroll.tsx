
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type AnimationType = "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight";

interface AnimatedOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  as?: React.ElementType;
}

const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },
};

export function AnimatedOnScroll({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.5,
  once = true,
  className,
  as: Component = "div",
}: AnimatedOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const variants = animationVariants[animation];

  return (
    <Component ref={ref} className={cn(className)}>
      <motion.div
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
