import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Heart, 
  Users, 
  Lightbulb, 
  Shield, 
  Handshake,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";
import teamPhoto from "@assets/generated_images/business_professionals_office_nairobi.png";
import advisor1 from "@assets/generated_images/male_insurance_advisor_headshot.png";
import advisor2 from "@assets/generated_images/female_insurance_specialist_headshot.png";
import advisor3 from "@assets/generated_images/young_male_financial_advisor.png";
import advisor4 from "@assets/generated_images/female_customer_service_rep.png";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We believe in honesty, transparency, and doing the right thing — even when no one is watching. Trust is the foundation of every relationship we build."
    },
    {
      icon: Heart,
      title: "Service First",
      description: "Our clients are at the heart of everything we do. We listen, educate, and advocate to ensure every decision puts your best interest first."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "As 'Mr. Catalyst,' we embrace change and look for smarter, simpler, and more effective ways to protect our clients in an ever-changing world."
    },
    {
      icon: Users,
      title: "Community",
      description: "We're more than an agency — we're part of the community we serve. Giving back and helping others thrive is part of our DNA."
    },
    {
      icon: Handshake,
      title: "Reliability",
      description: "You can count on us — not just when times are good, but especially when life throws a curveball. We're here for you, every step of the way."
    }
  ];

  const team = [
    {
      name: "James Mwangi",
      role: "Founder & Lead Advisor",
      image: advisor1,
      bio: "With over 15 years in the insurance industry, James founded Mr. Catalyst to make insurance accessible and understandable for everyone."
    },
    {
      name: "Grace Wanjiru",
      role: "Senior Insurance Specialist",
      image: advisor2,
      bio: "Grace specializes in life and health insurance, helping families secure their futures with personalized coverage plans."
    },
    {
      name: "David Ochieng",
      role: "Investment & Retirement Advisor",
      image: advisor3,
      bio: "David guides clients through unit trusts and pension planning, ensuring they build wealth for their golden years."
    },
    {
      name: "Mary Akinyi",
      role: "Client Relations Manager",
      image: advisor4,
      bio: "Mary ensures every client receives exceptional service and support throughout their insurance journey."
    }
  ];

  const credentials = [
    "Licensed by Insurance Regulatory Authority (IRA) Kenya",
    "Certified by Association of Insurance Brokers of Kenya (AIBK)",
    "Member of Association of Kenya Insurers (AKI)",
    "Partnered with Old Mutual Kenya",
    "Partnered with ICEA Lion Group",
    "Partnered with Absa Life Assurance"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden bg-card">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamPhoto} 
            alt="Our team" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 text-center">
          <Badge variant="secondary" className="mb-4">
            <Shield className="h-3 w-3 mr-1.5" />
            About Mr. Catalyst
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Your Partner in Protection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Transforming the insurance experience through clarity, compassion, and customized coverage
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-body">
                <p>
                  Mr. Catalyst Insurance Agency was born from a simple but powerful belief — that insurance should empower people, not overwhelm them. Founded by professionals who saw how confusing and impersonal the insurance world had become, Mr. Catalyst set out to change that.
                </p>
                <p>
                  Our founder started the agency after witnessing too many families and businesses struggle with coverage gaps, unclear policies, and a lack of genuine support when it mattered most. The vision was to become the catalyst that helps individuals, families, and businesses move from uncertainty to confidence — knowing their future is protected.
                </p>
                <p>
                  From our first client to every partnership today, we've remained committed to making insurance straightforward, trustworthy, and truly customer-centered.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="Our team at work" 
                className="rounded-md shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-90 font-body">
            To be the catalyst that transforms the insurance experience — helping our clients protect what matters most through clarity, compassion, and customized coverage. We don't just sell policies; we build protection plans that empower people to move forward with confidence and peace of mind.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Experienced professionals dedicated to your protection and peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed font-body">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Credentials & Partnerships</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Fully licensed and partnered with Kenya's most trusted insurers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-md bg-card">
                <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-20 bg-card border-y">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground font-body">
              We'd love to meet you in person
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground font-body">
                  Bishop Garden Tower<br />
                  Upper Hill, Nairobi
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+254725928653" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  0725 928 653
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:info@mrcatalyst.co.ke" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  info@mrcatalyst.co.ke
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let's Protect Your Future Together</h2>
          <p className="text-lg mb-8 opacity-90 font-body">
            Experience the Mr. Catalyst difference — personalized service, expert guidance, and peace of mind.
          </p>
          <Link href="/quote">
            <Button size="lg" variant="secondary" data-testid="button-get-started">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
