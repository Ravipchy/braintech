
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { FaqSection } from "@/components/common/faq-section";
import { AchievementsSection } from "@/components/achievements-section";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Lightbulb, Gem, Users, Award, BrainCircuit, Target, CheckCircle, Rocket, Handshake, Star } from "lucide-react";
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
        icon: <Rocket className="h-10 w-10 text-primary" />,
        title: "Innovation",
        description: "Always exploring new possibilities.",
    },
    {
        icon: <Handshake className="h-10 w-10 text-primary" />,
        title: "Integrity",
        description: "Building trust through transparency.",
    },
    {
        icon: <Lightbulb className="h-10 w-10 text-primary" />,
        title: "Customer First",
        description: "Your success is our priority.",
    },
    {
        icon: <Award className="h-10 w-10 text-primary" />,
        title: "Excellence",
        description: "Delivering high-quality solutions.",
    },
     {
        icon: <BrainCircuit className="h-10 w-10 text-primary" />,
        title: "Continuous Learning",
        description: "Growing with evolving tech.",
    },
];

const whyChooseUsPoints = [
    "10+ years of combined IT expertise",
    "120+ satisfied clients worldwide",
    "250+ successful projects delivered",
    "Certified developers & engineers",
    "Specialized in cutting-edge technologies: AI, Cloud, Automation",
];

export function AboutClientPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedOnScroll animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">About BrainTech Technology Pvt. Ltd.</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Delivering innovation, efficiency, and growth through technology.
            </p>
          </AnimatedOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <AnimatedOnScroll animation="fadeInUp">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Who We Are</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    BrainTech Technology Pvt. Ltd. is a trusted partner in digital transformation. We specialize in Web Development, AI Solutions, and Cloud Automation—helping businesses turn bold ideas into reality.
                </p>
            </AnimatedOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedOnScroll animation="fadeInLeft">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
                <p className="mt-4 text-muted-foreground max-w-md">
                  To empower businesses with innovative technology solutions that drive measurable results.
                </p>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInRight">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold font-headline">Our Vision</h2>
                <p className="mt-4 text-muted-foreground max-w-md">
                  To be recognized globally as a leader in creating smart, sustainable, and impactful digital solutions.
                </p>
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </section>

      <section id="values" className="w-full py-16 md:py-24">
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
      
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <AnimatedOnScroll animation="fadeInUp" className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Why Choose Us?</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Partner with us for unparalleled expertise and results.
                </p>
            </AnimatedOnScroll>
            <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {whyChooseUsPoints.map((point, index) => (
                    <AnimatedOnScroll key={index} animation="fadeInLeft" delay={index * 0.1}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                        <Card className="p-4 flex items-center gap-4 h-full funky-shadow">
                            <Star className="w-8 h-8 text-primary flex-shrink-0" />
                            <span className="text-lg text-muted-foreground">{point}</span>
                        </Card>
                        </motion.div>
                    </AnimatedOnScroll>
                ))}
            </div>
        </div>
      </section>

      <AchievementsSection />
      
      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimatedOnScroll animation="fadeInUp">
                <h2 className="text-3xl font-bold font-headline">Let's Build Something Extraordinary Together</h2>
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
