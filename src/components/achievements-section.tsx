
"use client";

import { useState } from "react";
import { AchievementStat } from "@/components/achievement-stat";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, Star } from "lucide-react";
import { ScheduleMeetingPopup } from "@/components/schedule-meeting-popup";

const achievements = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    label: "Total Clients",
    value: 120,
    unit: "+",
    progress: 100,
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    label: "Projects Completed",
    value: 250,
    unit: "+",
    progress: 100,
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    label: "Client Satisfaction",
    value: 95,
    unit: "%",
    progress: 95,
  },
];

export function AchievementsSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section id="achievements" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll animation="fadeInUp" className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Achievements</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering quality services with proven results
            </p>
          </AnimatedOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((stat, index) => (
              <AnimatedOnScroll key={stat.label} animation="fadeInUp" delay={index * 0.1}>
                <AchievementStat {...stat} />
              </AnimatedOnScroll>
            ))}
          </div>
          <AnimatedOnScroll animation="fadeInUp" delay={0.5} className="mt-12 text-center">
             <Button size="lg" onClick={() => setIsPopupOpen(true)}>Schedule a Meeting</Button>
          </AnimatedOnScroll>
        </div>
      </section>
      <ScheduleMeetingPopup isOpen={isPopupOpen} onOpenChange={setIsPopupOpen} />
    </>
  );
}
