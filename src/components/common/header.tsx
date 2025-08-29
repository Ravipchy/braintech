
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/verify-certificate", label: "Verify Certificate" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm transition-colors duration-300"
      )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image src="/logo.png" alt="BrainTech Logo" width={140} height={40} />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
                <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "relative text-sm font-medium transition-colors hover:text-primary",
                    "after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-primary after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                    isActive
                    ? "text-primary after:scale-x-100"
                    : "text-muted-foreground"
                )}
                >
                {link.label}
                </Link>
            )
          })}
           <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg" onClick={closeMobileMenu}>
                  <Image src="/logo.png" alt="BrainTech Logo" width={140} height={40} />
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => {
                     const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                     return (
                        <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            isActive
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                        >
                        {link.label}
                        </Link>
                     )
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
