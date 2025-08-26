
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Bot, LineChart, Code, Smartphone, Cloud, ShieldCheck, PenTool, Users, Briefcase, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { Typewriter } from "@/components/typewriter";
import { AchievementStat } from "@/components/achievement-stat";

export default function Home() {
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

  const achievements = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      label: "Clients Served",
      value: 120,
      unit: "+",
      progress: 80,
      progressColor: "bg-blue-500",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      label: "Projects Completed",
      value: 250,
      unit: "+",
      progress: 95,
      progressColor: "bg-green-500",
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      label: "Client Satisfaction",
      value: 95,
      unit: "%",
      progress: 95,
      progressColor: "bg-yellow-500",
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
            fill
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
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedOnScroll key={service.title} animation="fadeInUp" delay={index * 0.1}>
                <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                  <CardHeader>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      {service.icon}
                    </div>
                    <CardTitle className="mt-6">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground flex-grow">{service.description}</p>
                    <Button asChild variant="link" className="mt-4">
                        <Link href={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll animation="fadeInUp" className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Our Achievements</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering value and building trust with every project.
            </p>
          </AnimatedOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <AnimatedOnScroll key={achievement.label} animation="fadeInUp" delay={index * 0.2}>
                <AchievementStat {...achievement} />
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
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
      
      <section id="partners" className="w-full py-16 md:py-24 bg-card">
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
