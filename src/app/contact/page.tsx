
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from 'next';
import { FaqSection } from "@/components/common/faq-section";
import { AchievementsSection } from "@/components/achievements-section";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with BrainTech Technology. We\'re here to answer your questions and explore how we can help your business.',
};

const contactFaqs = [
    {
        question: "What is the best way to contact you?",
        answer: "The best way to reach us is by filling out the contact form on this page. For urgent inquiries, you can also reach us via phone during business hours."
    },
    {
        question: "What are your business hours?",
        answer: "Our team is available from 9:00 AM to 6:00 PM (PST), Monday through Friday. We strive to respond to all inquiries within 24 hours."
    },
    {
        question: "Do you offer free consultations?",
        answer: "Yes, we offer a free, no-obligation initial consultation to discuss your project ideas and how we can help you achieve your goals."
    },
    {
        question: "How long does it typically take to receive a response?",
        answer: "We pride ourselves on our responsiveness. You can typically expect to hear back from us within one business day after submitting the contact form."
    },
    {
        question: "Can I visit your office in person?",
        answer: "We'd love to meet you! Please contact us in advance to schedule an appointment to ensure the right team members are available to speak with you."
    }
];

export default function ContactPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedOnScroll animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Get in Touch</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
            </p>
          </AnimatedOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
             <AnimatedOnScroll animation="fadeInLeft" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
                <p className="text-muted-foreground mt-2">Find us at our office or reach out via email or phone.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contact@braintechtechnology.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+919431607346" className="text-muted-foreground hover:text-primary transition-colors">+91 9431607346</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-muted-foreground">Near BM College, Rahika, Madhubani, Bihar – 847211</p>
                  </div>
                </div>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInRight">
              <ContactForm />
            </AnimatedOnScroll>
          </div>
        </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll animation="fadeInUp" className="text-center">
            <h2 className="text-3xl font-bold font-headline">📍 Visit Us</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Near BM College, Rahika, Madhubani, Bihar, 847211
            </p>
          </AnimatedOnScroll>
          <AnimatedOnScroll animation="fadeInUp" delay={0.2} className="mt-8">
            <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
                <iframe 
                    src="https://www.google.com/maps?q=BM+College+Rahika+Madhubani+Bihar+847211&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border:0 }}
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>
      <AchievementsSection />
      <FaqSection items={contactFaqs} />
    </>
  );
}
