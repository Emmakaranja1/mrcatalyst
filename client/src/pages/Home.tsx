import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  GraduationCap, 
  Activity, 
  Car, 
  TrendingUp, 
  Briefcase,
  Shield,
  Users,
  Award,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight
} from "lucide-react";
import heroImage from "@assets/generated_images/happy_kenyan_family_home.png";

export default function Home() {
  const services = [
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Comprehensive life coverage to protect your family's financial future and provide peace of mind.",
      link: "/services/life"
    },
    {
      icon: GraduationCap,
      title: "Education Plans",
      description: "Secure your child's educational future with tailored savings and insurance plans.",
      link: "/services/education"
    },
    {
      icon: Activity,
      title: "Health Insurance",
      description: "Quality medical coverage for you and your family, ensuring access to the best healthcare.",
      link: "/services/health"
    },
    {
      icon: Car,
      title: "Motor Insurance",
      description: "Complete vehicle protection with comprehensive and third-party coverage options.",
      link: "/services/motor"
    },
    {
      icon: TrendingUp,
      title: "Investment Plans",
      description: "Grow your wealth with unit trusts and structured investment solutions.",
      link: "/services/investment"
    },
    {
      icon: Briefcase,
      title: "Retirement Plans",
      description: "Build a secure retirement with pension plans designed for your golden years.",
      link: "/services/retirement"
    }
  ];

  const stats = [
    { icon: Clock, value: "10+", label: "Years Experience" },
    { icon: Users, value: "5,000+", label: "Clients Protected" },
    { icon: Award, value: "98%", label: "Satisfaction Rate" },
    { icon: Shield, value: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Jane M.",
      initials: "JM",
      rating: 5,
      quote: "When my son joined high school, my education policy covered all fees with zero stress. Mr. Catalyst made it so easy!",
      context: "Education Plan Client"
    },
    {
      name: "David O.",
      initials: "DO",
      rating: 5,
      quote: "I claimed my medical bill through Mr. Catalyst — they handled everything in 2 days! Exceptional service.",
      context: "Health Insurance Client"
    },
    {
      name: "Sarah K.",
      initials: "SK",
      rating: 5,
      quote: "The team explained every detail of my life insurance policy. I finally feel secure about my family's future.",
      context: "Life Insurance Client"
    }
  ];

  const partners = [
    { name: "Old Mutual", logo: "Old Mutual" },
    { name: "ICEA Lion", logo: "ICEA Lion" },
    { name: "Absa Life", logo: "Absa Life" }
  ];

  const benefits = [
    "Licensed by IRA Kenya",
    "Expert financial guidance",
    "Multiple insurer partnerships",
    "Fast claims processing",
    "Personalized coverage plans",
    "Transparent pricing"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Wash Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Happy family at home" 
            className="w-full h-full object-cover"
            data-testid="img-hero"
          />
          {/* Dark wash gradient for text readability as per design guidelines */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <Shield className="h-3 w-3 mr-1.5" />
              Licensed by IRA Kenya
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Protecting Your Tomorrow, Today
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-body">
              Affordable, reliable insurance solutions for families and businesses in Kenya. 
              Expert guidance, trusted partnerships, and coverage you can count on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/quote">
                <Button size="lg" className="w-full sm:w-auto backdrop-blur-md bg-white/90 text-primary hover:bg-white border border-white/40 shadow-lg" data-testid="button-hero-quote">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto backdrop-blur-md bg-white/15 text-white border-white/40 hover:bg-white/25 shadow-lg" data-testid="button-hero-contact">
                  Talk to an Agent
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                Old Mutual Partner
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                ICEA Lion Partner
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                Absa Life Partner
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-90" />
                <div className="text-3xl md:text-4xl font-bold mb-1" data-testid={`stat-value-${index}`}>{stat.value}</div>
                <div className="text-sm opacity-90" data-testid={`stat-label-${index}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Insurance Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Comprehensive coverage options tailored to protect what matters most to you and your family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 group" data-testid={`card-service-${index}`}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" data-testid={`text-service-title-${index}`}>{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body" data-testid={`text-service-desc-${index}`}>
                      {service.description}
                    </p>
                  </div>
                  <Link href={service.link}>
                    <span className="text-sm font-medium text-primary hover:underline cursor-pointer inline-flex items-center gap-1" data-testid={`link-service-learn-${index}`}>
                      Learn More
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Why Choose Mr. Catalyst?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed font-body">
                We're more than an insurance agency — we're your partner in building a secure future. 
                Our mission is to transform the insurance experience through clarity, compassion, and customized coverage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="outline" data-testid="button-learn-more">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Why choose us" 
                className="rounded-md shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Real stories from families and businesses we've helped protect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4" data-testid={`rating-testimonial-${index}`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base italic mb-4 leading-relaxed font-body" data-testid={`text-testimonial-quote-${index}`}>
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary" data-testid={`text-testimonial-initials-${index}`}>{testimonial.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground" data-testid={`text-testimonial-context-${index}`}>{testimonial.context}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-16 bg-card border-y">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-2">Trusted Insurance Partners</h3>
            <p className="text-sm text-muted-foreground">Working with Kenya's leading insurers</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Protect Your Future?</h2>
          <p className="text-lg mb-8 opacity-90 font-body">
            Let's help you find the best coverage within your budget — no obligation, just expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto" data-testid="button-cta-quote">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://wa.me/254725928653" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10" data-testid="button-whatsapp">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
