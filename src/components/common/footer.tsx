
"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter, Phone, ChevronDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const footerSections = [
    {
        title: "Quick Links",
        links: [
            { href: "/about", label: "About Us" },
            { href: "/blog", label: "Blog" },
            { href: "/careers", label: "Careers" },
            { href: "/contact", label: "Contact" },
            { href: "/verify-certificate", label: "Verify Certificate" },
        ]
    },
    {
        title: "Our Services",
        links: [
            { href: "/services", label: "Web Development" },
            { href: "/services", label: "Mobile App Development" },
            { href: "/services", label: "UI/UX Design" },
            { href: "/services", label: "AI & Machine Learning" },
            { href: "/services", label: "Cloud Solutions" },
            { href: "/services", label: "IT Consulting" },
        ]
    }
];

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={cn(
        "fixed bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      onClick={scrollToTop}
      aria-label="Go to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}


function FooterAccordionItem({ title, links }: { title: string, links: { href: string, label: string }[] }) {
    const isMobile = useIsMobile();
    const [isOpen, setIsOpen] = useState(!isMobile);

    useEffect(() => {
        setIsOpen(!isMobile);
    }, [isMobile]);

    return (
        <div className="py-4 md:py-0 border-b md:border-none border-border">
            <button
                className="flex justify-between items-center w-full md:pointer-events-none"
                onClick={() => isMobile && setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h3 className="font-semibold text-foreground text-lg">{title}</h3>
                <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform duration-300 md:hidden", isOpen && "rotate-180")} />
            </button>
            <div className={cn(
                "grid transition-all duration-300 ease-in-out overflow-hidden md:grid-rows-[1fr]",
                isOpen ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'
            )}>
                 <ul className="space-y-3 min-h-0">
                    {links.map(link => (
                        <li key={`${link.href}-${link.label}`}>
                            <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-base">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export function Footer() {
  return (
    <>
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* About Section */}
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                  <Image src="/logo.png" alt="BrainTech Logo" width={140} height={40} />
              </Link>
              <p className="text-muted-foreground text-base">
                Innovating the Future with Intelligent Technology.
              </p>
            </div>
            
            {/* Link Sections (Accordion on Mobile) */}
            {footerSections.map(section => (
                 <FooterAccordionItem key={section.title} {...section} />
            ))}

            {/* Contact Section */}
            <div className="py-4 md:py-0">
              <h3 className="font-semibold text-foreground text-lg mb-4">Connect With Us</h3>
              <div className="space-y-3">
                  <p>
                      <a href="mailto:contact@braintechtechnology.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-base">
                          contact@braintechtechnology.com
                      </a>
                  </p>
                  <p>
                      <a href="tel:+919431607346" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3 text-base">
                          <Phone className="w-5 h-5" />+91 9431607346
                      </a>
                  </p>
              </div>
              <div className="mt-6 flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-transform hover:scale-125">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-transform hover:scale-125">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-transform hover:scale-125">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} BrainTech Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <BackToTopButton />
    </>
  );
}
