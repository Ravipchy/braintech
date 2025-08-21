import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the innovative services offered by BrainTech Technology, from AI Solutions to Web Development and Data Analytics.',
};

const services = [
  {
    title: "Custom AI & Machine Learning",
    description: "Develop bespoke AI models and machine learning algorithms to solve your unique business challenges. From natural language processing to computer vision, we deliver intelligent systems that learn and adapt.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "artificial intelligence"
  },
  {
    title: "Enterprise Web Applications",
    description: "We architect and build robust, secure, and scalable web applications for enterprises. Our solutions are designed for high performance and seamless integration with your existing systems.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "web development code"
  },
  {
    title: "Advanced Data Analytics & BI",
    description: "Unlock the potential of your data. We provide end-to-end data analytics and business intelligence services, including data warehousing, ETL pipelines, and interactive dashboards.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "data analytics chart"
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Optimize your development and deployment lifecycle with our cloud and DevOps expertise. We help you build resilient, automated, and cost-effective infrastructure on AWS, Azure, and Google Cloud.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "cloud computing servers"
  },
  {
    title: "Mobile App Development",
    description: "Create engaging and high-performance mobile applications for iOS and Android. Our team delivers a smooth user experience with a focus on quality, speed, and business goals.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "mobile app interface"
  },
  {
    title: "Technology Consulting",
    description: "Navigate the complexities of the digital landscape with our expert guidance. We provide strategic consulting to help you make informed technology decisions and create a roadmap for success.",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "business people meeting"
  },
];

export default function ServicesPage() {
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedOnScroll key={service.title} animation="fadeInUp" delay={index * 0.1}>
                <Card className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
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
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
