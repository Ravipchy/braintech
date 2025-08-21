import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Bot, LineChart, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { Typewriter } from "@/components/typewriter";

export default function Home() {
  const services = [
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI Solutions",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "We build modern, responsive, and scalable web applications tailored to your business needs.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics and visualization services.",
    },
  ];

  const testimonials = [
    {
      quote: "BrainTech's solutions revolutionized our workflow. Their team is professional, knowledgeable, and dedicated to our success.",
      author: "Jane Doe",
      company: "Innovate Corp",
    },
    {
      quote: "The custom web application they built for us exceeded all expectations. It's fast, intuitive, and has significantly improved our user engagement.",
      author: "John Smith",
      company: "Future Enterprises",
    },
    {
      quote: "Working with BrainTech on our data analytics project was a game-changer. We now make data-driven decisions with confidence.",
      author: "Emily White",
      company: "DataDriven Inc.",
    },
  ];

  const partners = [
    { name: "Innovate Corp", logo: "https://placehold.co/150x50.png", hint: "corporate logo" },
    { name: "Future Enterprises", logo: "https://placehold.co/150x50.png", hint: "corporate logo" },
    { name: "DataDriven Inc.", logo: "https://placehold.co/150x50.png", hint: "corporate logo" },
    { name: "TechGiant", logo: "https://placehold.co/150x50.png", hint: "corporate logo" },
    { name: "StartupX", logo: "https://placehold.co/150x50.png", hint: "corporate logo" },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card overflow-hidden">
        <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
            data-ai-hint="abstract technology"
        />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <AnimatedOnScroll animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground font-headline">
              Innovating the Future with <Typewriter text="Intelligent Technology" />
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              We build cutting-edge solutions that empower businesses to thrive in the digital age.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>

      <section id="services" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll animation="fadeInUp" className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Core Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Delivering excellence and innovation in every project.
            </p>
          </AnimatedOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedOnScroll key={service.title} animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"} delay={index * 0.1}>
                <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      {service.icon}
                    </div>
                    <CardTitle className="mt-6">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
           <AnimatedOnScroll animation="fadeInUp" className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Trusted by leading companies worldwide.
            </p>
          </AnimatedOnScroll>
          <Carousel className="mt-12 w-full max-w-4xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-0 shadow-none">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <blockquote className="text-xl italic text-foreground">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <p className="mt-4 font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      
      <section id="partners" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
           <AnimatedOnScroll animation="fadeInUp" className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Partners</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are proud to collaborate with industry leaders.
            </p>
          </AnimatedOnScroll>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, i) => (
               <AnimatedOnScroll key={partner.name} animation="fadeInUp" delay={i * 0.1}>
                  <Image 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    width={150}
                    height={50}
                    data-ai-hint={partner.hint}
                    className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
               </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
