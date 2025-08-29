
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { FaqSection } from "@/components/common/faq-section";
import { AchievementsSection } from "@/components/achievements-section";
import { motion } from "framer-motion";
import { Bot, Code, LineChart, Cloud, Smartphone, PenTool, ShieldCheck } from "lucide-react";
import Link from 'next/link';

const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Custom Web Development",
      description: "Tailored websites and web apps built with modern frameworks to meet your specific needs.",
      link: "/services"
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile App Development",
      description: "Cross-platform Android & iOS apps with smooth performance and engaging user experiences.",
      link: "/services"
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Cloud & DevOps Solutions",
      description: "Scalable cloud hosting, automation, and deployment services for optimal performance.",
      link: "/services"
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI & Machine Learning",
      description: "Smart AI tools and predictive analytics for business growth and data-driven decisions.",
      link: "/services"
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Cybersecurity Services",
      description: "Protect your digital assets with enterprise-grade security solutions and threat mitigation.",
      link: "/services"
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description: "Modern, user-friendly, and accessible designs to enhance user engagement and satisfaction.",
      link: "/services"
    },
  ];

const servicesFaqs = [
  {
    question: "Which service is right for my business?",
    answer: "The right service depends on your specific goals. We recommend starting with a technology consultation so we can understand your needs and provide a tailored recommendation. You can contact us to schedule a free consultation."
  },
  {
    question: "Do you work with startups as well as large enterprises?",
    answer: "Yes, we work with businesses of all sizes. Our solutions are scalable and can be tailored to fit the unique needs and budgets of both startups and established enterprises."
  },
  {
    question: "How do you handle project management and communication?",
    answer: "We use agile methodologies and dedicated project managers to ensure clear communication and transparency. You'll receive regular updates and have direct access to our team throughout the project lifecycle."
  },
  {
    question: "Can you integrate your solutions with my existing systems?",
    answer: "Absolutely. We specialize in building applications that integrate seamlessly with existing enterprise systems, APIs, and third-party services to ensure a cohesive technology ecosystem."
  },
  {
    question: "What does the typical process for a new project look like?",
    answer: "Our process typically involves an initial discovery phase, followed by strategy and planning, design, development, testing, and deployment. We work collaboratively with you at every stage to ensure the final product meets your expectations."
  }
];

export function ServicesClientPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedOnScroll animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Our Services</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Comprehensive technology solutions designed for impact and scale.
            </p>
          </AnimatedOnScroll>
        </div>
      </section>

      <section id="services" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedOnScroll key={service.title} animation="fadeInUp" delay={index * 0.1}>
                 <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <Card className="relative text-center funky-shadow transition-all duration-300 flex flex-col h-full bg-card">
                    <CardHeader>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
                      >
                        {service.icon}
                      </motion.div>
                      <CardTitle className="mt-6">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground flex-grow">{service.description}</p>
                      <Button asChild variant="link" className="mt-4">
                          <Link href={service.link}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>
      <AchievementsSection />
      <FaqSection items={servicesFaqs} />
    </>
  );
}
