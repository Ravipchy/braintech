
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { FaqSection } from "@/components/common/faq-section";
import { AchievementsSection } from "@/components/achievements-section";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Lightbulb, Gem, Users, Award, BrainCircuit, Target, CheckCircle, Rocket } from "lucide-react";
import { motion } from 'framer-motion';

const aboutFaqs = [
  {
    question: "What is the core mission of BrainTech?",
    answer: "Our core mission is to empower businesses with transformative AI and web technologies, creating intelligent solutions that drive growth, efficiency, and a competitive edge."
  },
  {
    question: "How was BrainTech founded?",
    answer: "BrainTech was founded by Ravi P Choudhary with the vision of making cutting-edge technology accessible and practical for businesses of all sizes, aiming to solve real-world problems through innovation."
  },
  {
    question: "What kind of company culture do you have?",
    answer: "We foster a collaborative and innovative culture where continuous learning is encouraged. Our team is passionate about technology and dedicated to pushing the boundaries of what's possible."
  },
  {
    question: "How can I join the BrainTech team?",
    answer: "We are always looking for talented individuals to join us. You can check our open positions and apply on our Careers page."
  }
];

const values = [
    {
        icon: <Lightbulb className="h-10 w-10 text-primary" />,
        title: "Innovation",
        description: "We constantly explore new ideas and technologies to deliver cutting-edge solutions.",
    },
    {
        icon: <Gem className="h-10 w-10 text-primary" />,
        title: "Integrity",
        description: "We operate with transparency and honesty in everything we do, building trust with our clients.",
    },
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: "Customer First",
        description: "Our clients' success is our success. We prioritize their needs and goals above all else.",
    },
    {
        icon: <Award className="h-10 w-10 text-primary" />,
        title: "Quality Excellence",
        description: "We are committed to the highest standards of quality in our work, ensuring robust and reliable solutions.",
    },
     {
        icon: <BrainCircuit className="h-10 w-10 text-primary" />,
        title: "Continuous Learning",
        description: "The tech world never stops evolving, and neither do we. We are dedicated to lifelong learning.",
    },
];

const whyChooseUsPoints = [
    "Years of expertise in the IT industry",
    "Certified and experienced developers & engineers",
    "Proven track record with over 120 satisfied clients",
    "End-to-end services from design to support",
    "Focus on cutting-edge tech like AI, Cloud, and Automation",
];

export function AboutClientPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedOnScroll animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">About BrainTech</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              BrainTech Technology Pvt. Ltd. is a leading IT solutions provider, helping businesses harness the power of Web Development, AI, and Cloud Solutions.
            </p>
          </AnimatedOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedOnScroll animation="fadeInLeft">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
                <p className="mt-4 text-muted-foreground max-w-md">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and a competitive edge.
                </p>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInRight">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold font-headline">Our Vision</h2>
                <p className="mt-4 text-muted-foreground max-w-md">
                  To become a global leader in delivering smart, sustainable, and impactful digital solutions that shape the future.
                </p>
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </section>

      <section id="values" className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <AnimatedOnScroll animation="fadeInUp" className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Core Values</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    The principles that guide our work and our relationships.
                </p>
            </AnimatedOnScroll>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {values.slice(0, 3).map((value, index) => (
                    <AnimatedOnScroll key={value.title} animation="fadeInUp" delay={index * 0.1}>
                         <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="group relative h-full"
                          >
                            <Card className="relative text-center funky-shadow transition-all duration-300 flex flex-col h-full">
                                <CardHeader>
                                    <motion.div 
                                      whileHover={{ scale: 1.2, rotate: 10 }}
                                      transition={{ type: "spring", stiffness: 300 }}
                                      className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                                        {value.icon}
                                    </motion.div>
                                    <CardTitle className="mt-6">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                         </motion.div>
                    </AnimatedOnScroll>
                ))}
            </div>
             <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-2 md:w-2/3 mx-auto">
                {values.slice(3).map((value, index) => (
                    <AnimatedOnScroll key={value.title} animation="fadeInUp" delay={(index + 3) * 0.1}>
                         <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="group relative h-full"
                          >
                            <Card className="relative text-center funky-shadow transition-all duration-300 flex flex-col h-full">
                                <CardHeader>
                                    <motion.div 
                                      whileHover={{ scale: 1.2, rotate: 10 }}
                                      transition={{ type: "spring", stiffness: 300 }}
                                      className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                                        {value.icon}
                                    </motion.div>
                                    <CardTitle className="mt-6">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                         </motion.div>
                    </AnimatedOnScroll>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <AnimatedOnScroll animation="fadeInUp" className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Why Choose Us?</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Partner with us for unparalleled expertise and results.
                </p>
            </AnimatedOnScroll>
            <div className="mt-12 max-w-4xl mx-auto">
                <ul className="space-y-4">
                    {whyChooseUsPoints.map((point, index) => (
                        <AnimatedOnScroll key={index} animation="fadeInLeft" delay={index * 0.1}>
                            <li className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                <span className="text-lg text-muted-foreground">{point}</span>
                            </li>
                        </AnimatedOnScroll>
                    ))}
                </ul>
            </div>
        </div>
      </section>

      <AchievementsSection />
      
      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimatedOnScroll animation="fadeInUp">
                <h2 className="text-3xl font-bold font-headline">Let's Build Something Great Together</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/80">
                    Ready to start your next project? Get in touch with our team of experts today.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                     <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary transition-colors">
                        <Link href="/contact">Schedule a Meeting</Link>
                    </Button>
                </div>
            </AnimatedOnScroll>
          </div>
      </section>

      <FaqSection items={aboutFaqs} />
    </>
  );
}
