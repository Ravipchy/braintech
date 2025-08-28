
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Bot, LineChart, Code, Smartphone, Cloud, ShieldCheck, PenTool, Users, Briefcase, Star, ArrowRight, Award, HeartHandshake, Clock, Headset, Rocket, Target, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { Typewriter } from "@/components/typewriter";
import { posts } from "@/lib/blog-data";
import { FaqSection } from "@/components/common/faq-section";
import { Badge } from "@/components/ui/badge";
import { AchievementsSection } from "@/components/achievements-section";

const homeFaqs = [
  {
    question: "What kind of technologies do you specialize in?",
    answer: "We specialize in a wide range of modern technologies, including Next.js and React for web development, Python for AI and machine learning, and major cloud platforms like AWS and Google Cloud for DevOps and scalable infrastructure."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on the scope and complexity. A simple website might take a few weeks, while a complex enterprise application could take several months. We provide a detailed timeline after our initial consultation."
  },
  {
    question: "Do you offer support and maintenance after the project is launched?",
    answer: "Yes, we offer various support and maintenance packages to ensure your application remains up-to-date, secure, and performs optimally. We can tailor a plan to fit your specific needs."
  },
  {
    question: "How do you ensure the quality of your work?",
    answer: "We follow a rigorous development process that includes comprehensive testing, code reviews, and continuous integration. Our goal is to deliver robust, high-quality solutions that are built to last."
  },
  {
    question: "Can you work with existing codebases?",
    answer: "Absolutely. We have extensive experience working with and improving existing applications. We can help you refactor, modernize, and add new features to your current software."
  }
];

const whyChooseUsFeatures = [
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: "Experienced Team",
        description: "Our team consists of seasoned professionals with years of experience in their respective fields.",
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-primary" />,
        title: "Proven Track Record",
        description: "We have a history of delivering successful projects and driving tangible results for our clients.",
    },
    {
        icon: <HeartHandshake className="h-10 w-10 text-primary" />,
        title: "Customer-Centric Approach",
        description: "Your satisfaction is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.",
    },
    {
        icon: <Lightbulb className="h-10 w-10 text-primary" />,
        title: "Innovative Solutions",
        description: "We stay at the forefront of technology to provide you with cutting-edge and future-proof solutions.",
    },
    {
        icon: <Headset className="h-10 w-10 text-primary" />,
        title: "24/7 Support",
        description: "Our dedicated support team is available around the clock to assist you with any issues or questions.",
    },
    {
        icon: <Star className="h-10 w-10 text-primary" />,
        title: "Affordable Pricing",
        description: "We offer competitive pricing without compromising on the quality of our services.",
    },
];

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

  const latestPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card overflow-hidden">
        <Image 
            src="https://picsum.photos/seed/hero-bg/1920/1080"
            alt="Hero Background"
            fill
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
            data-ai-hint="abstract technology"
            priority
        />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <AnimatedOnScroll animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground font-headline">
              Innovating the Future with <Typewriter text="Intelligent Technology 🚀" />
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              We build cutting-edge solutions that empower businesses to thrive in the digital age.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="funky-shadow transition-all hover:scale-105 hover:shadow-lg active:shadow-sm active:translate-y-px">
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
                <Card className="text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:[transform:rotateY(5deg)_rotateX(-5deg)] flex flex-col h-full">
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

      <section id="why-choose-us" className="w-full py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
              <AnimatedOnScroll animation="fadeInUp" className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Why Choose Us</h2>
                  <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                      Trusted by businesses for reliable and innovative solutions.
                  </p>
              </AnimatedOnScroll>
              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {whyChooseUsFeatures.map((feature, index) => (
                      <AnimatedOnScroll key={feature.title} animation="fadeInUp" delay={index * 0.1}>
                          <Card className="text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:[transform:rotateY(-5deg)_rotateX(5deg)] flex flex-col h-full">
                              <CardHeader>
                                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                                      {feature.icon}
                                  </div>
                                  <CardTitle className="mt-6">{feature.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-muted-foreground">{feature.description}</p>
                              </CardContent>
                          </Card>
                      </AnimatedOnScroll>
                  ))}
              </div>
          </div>
      </section>

      <section id="latest-blogs" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll animation="fadeInUp" className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Latest From Our Blog</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, trends, and thoughts from the BrainTech team.
            </p>
          </AnimatedOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <AnimatedOnScroll key={post.slug} animation="fadeInUp" delay={index * 0.1}>
                 <Card className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full rounded-xl">
                    <div className="overflow-hidden">
                      <Link href={`/blog/${post.slug}`}>
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          width={600}
                          height={400}
                          data-ai-hint={post.imageHint}
                          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </Link>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                         <div className="flex items-center">
                            <Clock className="mr-1.5 h-4 w-4" />
                            <span>{post.readingTime}</span>
                         </div>
                      </div>
                      <CardTitle className="text-xl h-14 line-clamp-2 pt-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground line-clamp-3">{post.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0 flex justify-between items-center">
                       <p className="text-sm text-muted-foreground">{post.date}</p>
                       <Button asChild variant="link" className="p-0 h-auto">
                          <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </Card>
              </AnimatedOnScroll>
            ))}
          </div>
          <AnimatedOnScroll animation="fadeInUp" delay={0.4} className="text-center mt-12">
             <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
                <Link href="/blog">View All Blogs</Link>
              </Button>
          </AnimatedOnScroll>
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
                    <Card className="border-0 shadow-none bg-transparent">
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
      <AchievementsSection />
      <FaqSection items={homeFaqs} />
    </div>
  );
}

    
