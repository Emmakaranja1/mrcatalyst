import { Link } from "wouter";
import { Shield, Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-base leading-tight">Mr. Catalyst</span>
                <span className="text-xs text-muted-foreground leading-tight">Insurance Agency</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Protecting your tomorrow, today. Licensed by IRA Kenya and partnered with leading insurers.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://wa.me/254725928653"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 rounded-md p-2"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-services">
                    Our Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-blog">
                    Blog & Resources
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/quote">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-quote">
                    Get a Quote
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-contact">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Our Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/life">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-life">
                    Life Insurance
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/education">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-education">
                    Education Plans
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/health">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-health">
                    Health Insurance
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/motor">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-motor">
                    Motor Insurance
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services/investment">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-investment">
                    Investment Plans
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Bishop Garden Tower, Upper Hill<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a href="tel:+254725928653" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-phone">
                  0725 928 653
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a href="mailto:info@mrcatalyst.co.ke" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-email">
                  info@mrcatalyst.co.ke
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground">Business Hours:</p>
              <p className="text-sm text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-sm text-muted-foreground">Sat: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Mr. Catalyst Insurance Agency. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link href="/privacy">
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-privacy">
                  Privacy Policy
                </span>
              </Link>
              <span className="text-sm text-muted-foreground">|</span>
              <p className="text-sm text-muted-foreground">Licensed by IRA Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
