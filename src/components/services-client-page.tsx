
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { FaqSection } from "@/components/common/faq-section";
import { AchievementsSection } from "@/components/achievements-section";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom AI & Machine Learning",
    description: "Develop bespoke AI models and machine learning algorithms to solve your unique business challenges. From natural language processing to computer vision, we deliver intelligent systems that learn and adapt.",
    imageUrl: "https://picsum.photos/seed/ai-service/600/400",
    hint: "artificial intelligence"
  },
  {
    title: "Enterprise Web Applications",
    description: "We architect and build robust, secure, and scalable web applications for enterprises. Our solutions are designed for high performance and seamless integration with your existing systems.",
    imageUrl: "https://picsum.photos/seed/web-service/600/400",
    hint: "web development code"
  },
  {
    title: "Advanced Data Analytics & BI",
    description: "Unlock the potential of your data. We provide end-to-end data analytics and business intelligence services, including data warehousing, ETL pipelines, and interactive dashboards.",
    imageUrl: "https://picsum.photos/seed/data-service/600/400",
    hint: "data analytics chart"
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Optimize your development and deployment lifecycle with our cloud and DevOps expertise. We help you build resilient, automated, and cost-effective infrastructure on AWS, Azure, and Google Cloud.",
    imageUrl: "https://picsum.photos/seed/cloud-service/600/400",
    hint: "cloud computing servers"
  },
  {
    title: "Mobile App Development",
    description: "Create engaging and high-performance mobile applications for iOS and Android. Our team delivers a smooth user experience with a focus on quality, speed, and business goals.",
    imageUrl: "https://picsum.photos/seed/mobile-service/600/400",
    hint: "mobile app interface"
  },
  {
    title: "Technology Consulting",
    description: "Navigate the complexities of the digital landscape with our expert guidance. We provide strategic consulting to help you make informed technology decisions and create a roadmap for success.",
    imageUrl: "https://picsum.photos/seed/consult-service/600/400",
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
      <section className="w-full py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedOnScroll animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Our Services</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Comprehensive technology solutions designed for impact and scale.
            </p>
          </AnimatedOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedOnScroll key={service.title} animation="fadeInUp" delay={index * 0.1}>
                 <motion.div
                    whileHover={{ scale: 1.05, rotateY: 2, rotateX: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="group relative h-full"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <Card className="relative flex flex-col overflow-hidden shadow-lg h-full bg-card">
                      <div className="overflow-hidden">
                        <Image
                          src={service.imageUrl}
                          alt={service.title}
                          width={600}
                          height={400}
                          data-ai-hint={service.hint}
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription>{service.description}</CardDescription>
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
