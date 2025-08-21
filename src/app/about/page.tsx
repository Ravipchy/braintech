import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about BrainTech Technology\'s mission, vision, and the innovative team driving our success.',
};

const teamMembers = [
  {
    name: "Dr. Alistair Finch",
    role: "Founder & CEO",
    avatar: "https://placehold.co/100x100.png",
    hint: "professional headshot male",
  },
  {
    name: "Dr. Evelyn Reed",
    role: "Chief Technology Officer",
    avatar: "https://placehold.co/100x100.png",
    hint: "professional headshot female",
  },
  {
    name: "Marcus Thorne",
    role: "Head of AI Research",
    avatar: "https://placehold.co/100x100.png",
    hint: "professional headshot male tech",
  },
  {
    name: "Lena Petrova",
    role: "Lead Software Engineer",
    avatar: "https://placehold.co/100x100.png",
    hint: "professional headshot female tech",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">About BrainTech</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are a team of pioneers, innovators, and problem-solvers dedicated to pushing the boundaries of technology.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                To empower businesses with transformative AI and web technologies, creating intelligent solutions that drive growth, efficiency, and a competitive edge. We are committed to turning complex challenges into simple, elegant, and impactful results for our clients worldwide.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold font-headline">Our Vision</h2>
              <p className="mt-4 text-muted-foreground">
                To be a global leader in technology solutions, pioneering a future where intelligent systems and seamless digital experiences are accessible to all. We envision a world where technology enhances human potential and solves humanity's most pressing problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-headline">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The brilliant minds behind our innovation.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center transition-transform transform hover:-translate-y-2">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
