"use client";

import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { AchievementStat } from "@/components/achievement-stat";
import { Award, HeartHandshake, Clock, Headset } from "lucide-react";

export function AchievementsSection() {
    const achievements = [
        {
          icon: <Award className="h-10 w-10 text-primary" />,
          label: "Successful Projects",
          value: 100,
          unit: "+",
          progress: 85,
          progressColor: "bg-blue-500",
        },
        {
          icon: <HeartHandshake className="h-10 w-10 text-primary" />,
          label: "Satisfied Clients",
          value: 50,
          unit: "+",
          progress: 90,
          progressColor: "bg-green-500",
        },
        {
          icon: <Clock className="h-10 w-10 text-primary" />,
          label: "Years of Experience",
          value: 10,
          unit: "+",
          progress: 70,
          progressColor: "bg-yellow-500",
        },
        {
            icon: <Headset className="h-10 w-10 text-primary" />,
            label: "Customer Support",
            value: 24,
            unit: "/7",
            progress: 100,
            progressColor: "bg-red-500",
          },
      ];

  return (
    <section id="achievements" className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll animation="fadeInUp" className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Our Achievements
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering value and building trust with every project.
          </p>
        </AnimatedOnScroll>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <AnimatedOnScroll
              key={achievement.label}
              animation="fadeInUp"
              delay={index * 0.2}
            >
              <AchievementStat {...achievement} />
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
