import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  GraduationCap, 
  Activity, 
  Car, 
  TrendingUp, 
  Briefcase,
  Shield,
  Building,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Life Insurance & Unit Trusts",
      slug: "life",
      description: "Comprehensive life coverage to protect your family's financial future and provide peace of mind.",
      features: [
        "Term life insurance",
        "Whole life insurance",
        "Unit trust investments",
        "Family income protection",
        "Critical illness cover",
        "Funeral expense coverage"
      ],
      idealFor: [
        "Families with dependents",
        "Primary breadwinners",
        "Long-term wealth builders",
        "Estate planning"
      ]
    },
    {
      icon: GraduationCap,
      title: "Education Plans",
      slug: "education",
      description: "Secure your child's educational future with tailored savings and insurance plans that cover school fees from primary to university.",
      features: [
        "Primary school coverage",
        "Secondary school fees",
        "University tuition plans",
        "Flexible payment options",
        "Inflation-protected savings",
        "Guaranteed maturity benefits"
      ],
      idealFor: [
        "Parents with young children",
        "Expecting parents",
        "Grandparents planning ahead",
        "Guardian savers"
      ]
    },
    {
      icon: Activity,
      title: "Health/Medical Cover",
      slug: "health",
      description: "Quality medical coverage for you and your family, ensuring access to the best healthcare facilities across Kenya.",
      features: [
        "Inpatient coverage",
        "Outpatient services",
        "Maternity benefits",
        "Dental and optical",
        "Chronic disease management",
        "Emergency medical evacuation"
      ],
      idealFor: [
        "Families of all sizes",
        "Young professionals",
        "Retirees and seniors",
        "Self-employed individuals"
      ]
    },
    {
      icon: Car,
      title: "Motor Insurance",
      slug: "motor",
      description: "Complete vehicle protection with comprehensive and third-party coverage options for personal and commercial vehicles.",
      features: [
        "Comprehensive coverage",
        "Third-party insurance",
        "Windscreen protection",
        "Theft and fire coverage",
        "Passenger liability",
        "Fast claims processing"
      ],
      idealFor: [
        "Private vehicle owners",
        "Commercial fleet operators",
        "Taxi and ride-share drivers",
        "First-time car buyers"
      ]
    },
    {
      icon: TrendingUp,
      title: "Investment & Savings Plans",
      slug: "investment",
      description: "Grow your wealth with unit trusts, money market funds, and structured investment solutions designed for your financial goals.",
      features: [
        "Unit trust portfolios",
        "Money market funds",
        "Fixed deposit alternatives",
        "Regular savings plans",
        "Tax-efficient investments",
        "Flexible withdrawal options"
      ],
      idealFor: [
        "Long-term savers",
        "Retirement planners",
        "Wealth accumulators",
        "Risk-averse investors"
      ]
    },
    {
      icon: Briefcase,
      title: "Pension/Retirement Plans",
      slug: "retirement",
      description: "Build a secure retirement with pension plans designed to ensure financial independence in your golden years.",
      features: [
        "Individual pension plans",
        "Group pension schemes",
        "Tax-deductible contributions",
        "Retirement annuities",
        "Flexible contribution options",
        "Guaranteed income streams"
      ],
      idealFor: [
        "Employed professionals",
        "Self-employed individuals",
        "Business owners",
        "Mid-career planners"
      ]
    },
    {
      icon: Building,
      title: "General Insurance",
      slug: "general",
      description: "Protect your property, business, and assets with comprehensive general insurance solutions tailored to your needs.",
      features: [
        "Home insurance",
        "Property coverage",
        "Business insurance",
        "Professional indemnity",
        "Public liability",
        "Asset protection"
      ],
      idealFor: [
        "Homeowners",
        "Landlords",
        "Business owners",
        "Professional service providers"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <Badge variant="secondary" className="mb-4">
            <Shield className="h-3 w-3 mr-1.5" />
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Comprehensive Insurance Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            From life insurance to investment plans, we offer complete coverage options tailored to protect what matters most to you and your family
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden" id={service.slug}>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Info */}
                    <div className="p-6 md:p-8">
                      <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed font-body">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          What's Covered
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link href="/quote">
                        <Button className="w-full sm:w-auto" data-testid={`button-quote-${service.slug}`}>
                          Get a Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    {/* Right Column - Ideal For */}
                    <div className="bg-card p-6 md:p-8 border-l">
                      <h3 className="font-semibold mb-4">Who It's Best For</h3>
                      <div className="space-y-3 mb-6">
                        {service.idealFor.map((persona, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-md bg-background">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-primary text-xs font-bold">{idx + 1}</span>
                            </div>
                            <span className="text-sm font-medium pt-1">{persona}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-md bg-primary/5 border-l-4 border-primary">
                        <p className="text-sm font-medium mb-2">Real Client Story</p>
                        <p className="text-sm text-muted-foreground italic font-body">
                          {index === 1 && "\"When Jane's son joined high school, her education policy covered all fees with zero stress.\""}
                          {index === 2 && "\"I claimed my medical bill through Mr. Catalyst — they handled everything in 2 days!\""}
                          {index === 0 && "\"The life insurance policy gave me peace of mind knowing my family is protected.\""}
                          {index === 3 && "\"After my car was damaged, the claims process was smooth and fast. Back on the road in a week!\""}
                          {index === 4 && "\"My unit trust investment has grown steadily. Best decision for my future.\""}
                          {index === 5 && "\"Starting my pension plan early was the smartest move. I'm on track for a comfortable retirement.\""}
                          {index === 6 && "\"Our business insurance saved us when we had property damage. Comprehensive and reliable.\""}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Not Sure Which Plan is Right for You?</h2>
          <p className="text-lg mb-8 opacity-90 font-body">
            Our expert advisors are here to help you find the perfect coverage for your unique situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" data-testid="button-contact-advisor">
                Talk to an Advisor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-request-quote">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
