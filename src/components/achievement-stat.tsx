
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
}

function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) {
        setDisplayValue(end);
        return;
      };
      
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const counter = () => {
        frame++;
        const progress = frame / totalFrames;
        // Ease-out quadratic easing function
        const easedProgress = progress * (2 - progress);
        const currentVal = Math.round(end * easedProgress);

        if (frame >= totalFrames) {
          setDisplayValue(end);
          return;
        }

        setDisplayValue(currentVal);
        requestAnimationFrame(counter);
      };

      requestAnimationFrame(counter);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

interface AchievementStatProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  unit?: string;
  progress: number;
}

export function AchievementStat({ icon, label, value, unit, progress }: AchievementStatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsAnimated(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative p-1 overflow-hidden rounded-xl h-full">
        <div className={cn(
            "absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 transition-all duration-[2500ms] ease-in-out",
            isAnimated ? "opacity-100 [clip-path:circle(150%_at_50%_50%)]" : "opacity-0 [clip-path:circle(0%_at_50%_50%)]"
        )}></div>
        <Card className="relative text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full bg-card/80 backdrop-blur-sm">
        <CardHeader className="items-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            {icon}
            </div>
            <CardTitle className="mt-4 text-xl">{label}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-center">
            <p className="text-5xl font-bold text-primary tracking-tighter">
            <AnimatedCounter value={value} />
            {unit}
            </p>
        </CardContent>
        </Card>
    </div>
  );
}
