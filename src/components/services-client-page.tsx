
"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { FaqSection } from "@/components/common/faq-section";
import { AchievementsSection } from "@/components/achievements-section";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom AI & Machine Learning",
    description: "Bespoke AI models and machine learning algorithms.",
    imageUrl: "https://placehold.co/100x100/30D5C8/0B3A7D?text=AI",
    hint: "artificial intelligence"
  },
  {
    title: "Enterprise Web Applications",
    description: "Robust, secure, and scalable web applications.",
    imageUrl: "https://placehold.co/100x100/30D5C8/0B3A7D?text=Web",
    hint: "web development code"
  },
  {
    title: "Advanced Data Analytics & BI",
    description: "End-to-end data analytics and business intelligence.",
    imageUrl: "https://placehold.co/100x100/30D5C8/0B3A7D?text=Data",
    hint: "data analytics chart"
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Cloud and DevOps expertise for resilient infrastructure.",
    imageUrl: "https://placehold.co/100x100/30D5C8/0B3A7D?text=Cloud",
    hint: "cloud computing servers"
  },
  {
    title: "Mobile App Development",
    description: "Engaging mobile apps for iOS and Android.",
    imageUrl: "https://placehold.co/100x100/30D5C8/0B3A7D?text=Mobile",
    hint: "mobile app interface"
  },
  {
    title: "Technology Consulting",
    description: "Strategic consulting for informed technology decisions.",
    imageUrl: "https://placehold.co/100x100/30D5C8/0B3A7D?text=Consult",
    hint: "business people meeting"
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

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedOnScroll key={service.title} animation="fadeInUp" delay={index * 0.1}>
                 <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="group relative h-full"
                  >
                    <Card className="relative flex flex-col items-center text-center p-6 shadow-lg h-full bg-card funky-shadow">
                      <Image
                          src={service.imageUrl}
                          alt={`${service.title} icon`}
                          width={100}
                          height={100}
                          data-ai-hint={service.hint}
                          className="rounded-lg"
                        />
                      <CardHeader className="p-2">
                        <CardTitle className="mt-4">{service.title}</CardTitle>
                      </CardHeader>
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
