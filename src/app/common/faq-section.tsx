
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export function FaqSection({ 
    items, 
    title = "Frequently Asked Questions", 
    subtitle = "Find answers to common questions about our services and processes." 
}: FaqSectionProps) {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedOnScroll animation="fadeInUp" className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </AnimatedOnScroll>
        <div className="mt-12 max-w-4xl mx-auto">
           <Accordion type="single" collapsible className="w-full space-y-4">
              {items.map((item, index) => (
                <AnimatedOnScroll key={index} animation="fadeInUp" delay={index * 0.1}>
                    <AccordionItem value={`item-${index}`} className="border-b-0 rounded-lg shadow-sm bg-background transition-all hover:shadow-md">
                        <AccordionTrigger className="px-6 py-4 text-left font-semibold text-base hover:no-underline">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                </AnimatedOnScroll>
              ))}
            </Accordion>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
