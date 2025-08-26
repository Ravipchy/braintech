
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import type { Metadata } from 'next';
import { FaqSection } from "@/components/common/faq-section";
import { AchievementsSection } from "@/components/common/achievements-section";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about BrainTech Technology\'s mission, vision, and the innovative team driving our success.',
};

const teamMembers = [
  {
    name: "Ravi P Choudhary",
    role: "Founder & CEO",
    avatar: "https://picsum.photos/seed/male1/100/100",
    hint: "professional headshot male",
  },
  {
    name: "Dr. Evelyn Reed",
    role: "Chief Technology Officer",
    avatar: "https://picsum.photos/seed/female1/100/100",
    hint: "professional headshot female",
  },
  {
    name: "Marcus Thorne",
    role: "Head of AI Research",
    avatar: "https://picsum.photos/seed/male2/100/100",
    hint: "professional headshot male tech",
  },
  {
    name: "Lena Petrova",
    role: "Lead Software Engineer",
    avatar: "https://picsum.photos/seed/female2/100/100",
    hint: "professional headshot female tech",
  },
];

const aboutFaqs = [
  {
    question: "Where is BrainTech Technology’s office located?",
    answer: "Our office is located Near BM College, Rahika, Madhubani, Bihar – 847211."
  },
  {
    question: "Who is the founder of BrainTech Technology?",
    answer: "BrainTech Technology was founded by Ravi P Choudhary, who leads the company as Founder & CEO."
  },
  {
    question: "What is the core mission of BrainTech?",
    answer: "Our core mission is to empower businesses with transformative AI and web technologies, creating intelligent solutions that drive growth, efficiency, and a competitive edge."
  },
  {
    question: "How was BrainTech founded?",
    answer: "BrainTech was founded by Ravi P Choudhary with the vision of making cutting-edge technology accessible and practical for businesses of all sizes, aiming to solve real-world problems through innovation."
  },
  {
    question: "What kind of company culture do you have?",
    answer: "We foster a collaborative and innovative culture where continuous learning is encouraged. Our team is passionate about technology and dedicated to pushing the boundaries of what's possible."
  },
  {
    question: "How can I join the BrainTech team?",
    answer: "We are always looking for talented individuals to join us. You can check our open positions and apply on our Careers page."
  }
];


export default function AboutPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedOnScroll animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">About BrainTech</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We are a team of pioneers, innovators, and problem-solvers dedicated to pushing the boundaries of technology.
            </p>
          </AnimatedOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedOnScroll animation="fadeInLeft">
              <div>
                <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
                <p className="mt-4 text-muted-foreground">
                  To empower businesses with transformative AI and web technologies, creating intelligent solutions that drive growth, efficiency, and a competitive edge. We are committed to turning complex challenges into simple, elegant, and impactful results for our clients worldwide.
                </p>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animation="fadeInRight">
              <div>
                <h2 className="text-3xl font-bold font-headline">Our Vision</h2>
                <p className="mt-4 text-muted-foreground">
                  To be a global leader in technology solutions, pioneering a future where intelligent systems and seamless digital experiences are accessible to all. We envision a world where technology enhances human potential and solves humanity's most pressing problems.
                </p>
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll animation="fadeInUp" className="text-center">
            <h2 className="text-3xl font-bold font-headline">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The brilliant minds behind our innovation.
            </p>
          </AnimatedOnScroll>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <AnimatedOnScroll key={member.name} animation="fadeInUp" delay={i * 0.1}>
                <div className="[perspective:1000px] group">
                   <Card className="text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="h-full w-full [backface-visibility:hidden]">
                      <CardContent className="pt-6">
                        <Avatar className="w-24 h-24 mx-auto">
                          <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                        <p className="text-primary">{member.role}</p>
                      </CardContent>
                    </div>
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                       <Card className="flex flex-col items-center justify-center h-full">
                         <CardContent className="pt-6">
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-primary text-sm">{member.role}</p>
                            <p className="mt-2 text-xs text-muted-foreground px-4">As Founder & CEO, Ravi P Choudhary drives the company's vision, strategy, and growth, ensuring BrainTech remains at the forefront of technological innovation.</p>
                         </CardContent>
                       </Card>
                    </div>
                  </Card>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>
      <AchievementsSection />
      <FaqSection items={aboutFaqs} />
    </>
  );
}
