
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock } from "lucide-react";
import type { Metadata } from 'next';
import { AchievementsSection } from "@/components/achievements-section";

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the BrainTech Technology team and help us build the future. Explore our open positions.',
};


const jobOpenings = [
  {
    id: "swe-01",
    title: "Senior AI Engineer",
    location: "Remote",
    type: "Full-time",
    description: "We are seeking an experienced AI Engineer to lead the design and development of our next-generation machine learning models. You will work on challenging problems in NLP and computer vision, and mentor junior engineers.",
    responsibilities: [
      "Design, build, and deploy machine learning models.",
      "Research and implement appropriate AI algorithms and tools.",
      "Collaborate with product and engineering teams.",
      "Mentor and guide junior team members.",
    ],
    qualifications: [
      "5+ years of experience in AI/ML.",
      "Proficiency in Python, TensorFlow, or PyTorch.",
      "Experience with cloud platforms (AWS, GCP, Azure).",
      "Strong problem-solving skills.",
    ],
  },
  {
    id: "fe-dev-01",
    title: "Frontend Developer (React)",
    location: "New York, NY",
    type: "Full-time",
    description: "We are looking for a skilled Frontend Developer to build intuitive and high-performance user interfaces for our web applications. You should have a passion for creating seamless user experiences.",
    responsibilities: [
        "Develop new user-facing features using React.js.",
        "Build reusable components and front-end libraries for future use.",
        "Translate designs and wireframes into high-quality code.",
        "Optimize components for maximum performance across a vast array of web-capable devices and browsers.",
    ],
    qualifications: [
        "3+ years of experience with React.js and its core principles.",
        "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.",
        "Experience with popular React.js workflows (such as Flux or Redux).",
        "Familiarity with RESTful APIs.",
    ],
  },
  {
    id: "pm-01",
    title: "Product Manager, Data Platforms",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "As a Product Manager for our Data Platforms team, you will define the strategy and roadmap for our data analytics products. You will work closely with customers, engineers, and designers to deliver value.",
    responsibilities: [
        "Define product strategy and roadmap.",
        "Gather and prioritize product and customer requirements.",
        "Work with engineering to deliver winning products.",
        "Drive product launches and go-to-market strategies.",
    ],
    qualifications: [
        "4+ years of product management experience, preferably in a data-related field.",
        "Technical background with experience in data science or analytics.",
        "Excellent written and verbal communication skills.",
        "Proven ability to influence cross-functional teams without formal authority.",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Join Our Team</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Be a part of a company that's shaping the future of technology. We're looking for passionate individuals to join us on our mission.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold font-headline text-center mb-12">Open Positions</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {jobOpenings.map((job) => (
                <AccordionItem value={job.id} key={job.id} className="bg-background">
                  <AccordionTrigger className="hover:bg-accent/50 px-4 rounded-md">
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-primary">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</div>
                        <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-card rounded-b-md border-t">
                    <p className="mb-6">{job.description}</p>
                    
                    <h4 className="font-semibold mb-2">Responsibilities:</h4>
                    <ul className="list-disc list-inside mb-6 space-y-1 text-muted-foreground">
                        {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>

                    <h4 className="font-semibold mb-2">Qualifications:</h4>
                    <ul className="list-disc list-inside mb-6 space-y-1 text-muted-foreground">
                        {job.qualifications.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>

                    <Button asChild>
                      <a href={`mailto:careers@braintechtechnology.com?subject=Application for ${job.title}`}>Apply Now</a>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <AchievementsSection />
    </>
  );
}
