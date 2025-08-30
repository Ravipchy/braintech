
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About Us",
    dropdown: [
      { href: "/careers", label: "Careers" },
      { href: "/verify-certificate", label: "Verify Certificate" },
    ],
  },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
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
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm transition-colors duration-300"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image src="/logo.png" alt="BrainTech Logo" width={140} height={40} />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            if (link.dropdown) {
              return (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "relative flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none",
                        "after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-primary after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                        isActive
                          ? "text-primary after:scale-x-100"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem asChild>
                       <Link href={link.href}>About Us</Link>
                    </DropdownMenuItem>
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
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
            );
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
            <SheetContent side="right" className="bg-background text-foreground p-0">
               <SheetHeader className="p-6">
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Primary navigation for the BrainTech website.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 px-6 pb-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-lg"
                  onClick={closeMobileMenu}
                >
                  <Image src="/logo.png" alt="BrainTech Logo" width={140} height={40} />
                </Link>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);
                    if (link.dropdown) {
                      return (
                        <Accordion type="single" collapsible className="w-full" key={link.href}>
                           <AccordionItem value="item-1" className="border-b-0">
                                <AccordionTrigger className={cn(
                                    "text-lg font-medium transition-colors hover:text-primary py-2 hover:no-underline",
                                    isActive ? "text-primary" : "text-muted-foreground"
                                )}>
                                    {link.label}
                                </AccordionTrigger>
                                <AccordionContent className="pb-0 pl-4">
                                    <nav className="flex flex-col gap-1">
                                        <Link
                                            href={link.href}
                                            onClick={closeMobileMenu}
                                            className={cn(
                                                "text-lg font-medium transition-colors hover:text-primary py-2",
                                                pathname === link.href ? "text-primary" : "text-muted-foreground"
                                            )}
                                        >
                                            About Us
                                        </Link>
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={closeMobileMenu}
                                                className={cn(
                                                    "text-lg font-medium transition-colors hover:text-primary py-2",
                                                    pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </nav>
                                </AccordionContent>
                           </AccordionItem>
                        </Accordion>
                      );
                    }
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary py-2",
                          isActive
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    );
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

    