import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" data-testid="link-logo">
            <span className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2 cursor-pointer">
              <Shield className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Mr. Catalyst</span>
                <span className="text-xs text-muted-foreground leading-tight">Insurance Agency</span>
              </div>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Trust Badge & CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2">
              <Badge variant="secondary" className="gap-1.5">
                <Shield className="h-3 w-3" />
                <span className="text-xs">IRA Licensed</span>
              </Badge>
              <a href="tel:+254725928653" className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" data-testid="link-phone-header">
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">0725 928 653</span>
              </a>
            </div>

            <Link href="/quote">
              <Button size="sm" data-testid="button-get-quote">
                Get a Quote
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <span
                        onClick={() => setIsOpen(false)}
                        data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`text-base font-medium transition-colors hover:text-primary cursor-pointer block ${
                          isActive(link.href) ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}
                  <div className="flex flex-col gap-3 pt-4 border-t">
                    <Badge variant="secondary" className="gap-1.5 w-fit">
                      <Shield className="h-3 w-3" />
                      <span className="text-xs">IRA Licensed</span>
                    </Badge>
                    <a href="tel:+254725928653" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors" data-testid="link-phone-mobile">
                      <Phone className="h-4 w-4" />
                      <span>0725 928 653</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
