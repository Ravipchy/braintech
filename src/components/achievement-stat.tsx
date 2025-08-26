
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
      
      const duration = 2000;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const counter = () => {
        frame++;
        const progress = frame / totalFrames;
        const currentVal = Math.round(end * progress);

        if (currentVal >= end) {
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
  progressColor: string;
}

export function AchievementStat({ icon, label, value, unit, progress, progressColor }: AchievementStatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const progressTimer = setTimeout(() => setAnimatedProgress(progress), 300);
      return () => clearTimeout(progressTimer);
    }
  }, [isInView, progress]);

  return (
    <Card ref={ref} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full bg-card">
      <CardHeader className="items-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
        <CardTitle className="mt-6 text-xl">{label}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-5xl font-bold text-primary tracking-tighter">
          <AnimatedCounter value={value} />
          {unit}
        </p>
        <div className="mt-4">
          <Progress value={animatedProgress} className="h-2 [&>div]:transition-all [&>div]:duration-1000" indicatorClassName={progressColor} />
        </div>
      </CardContent>
    </Card>
  );
}
