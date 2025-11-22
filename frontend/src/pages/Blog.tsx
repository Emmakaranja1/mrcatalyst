import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, GraduationCap, Heart, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Blog() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Subscribed successfully!",
        description: "You'll receive our monthly insurance & money tips.",
      });
      setEmail("");
      setIsSubscribing(false);
    },
    onError: () => {
      toast({
        title: "Subscription failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
      setIsSubscribing(false);
    }
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubscribing(true);
      newsletterMutation.mutate(email);
    }
  };

  const articles = [
    {
      category: "Education Planning",
      icon: GraduationCap,
      title: "Why Every Parent Needs an Education Plan",
      excerpt: "Discover how starting an education savings plan early can secure your child's academic future and reduce financial stress when school fees are due.",
      readTime: "5 min read",
      date: "March 2024"
    },
    {
      category: "Investment",
      icon: TrendingUp,
      title: "How to Start a Money Market Investment in Kenya",
      excerpt: "A beginner's guide to money market funds and unit trusts. Learn how to grow your savings with low-risk investment options available in Kenya.",
      readTime: "7 min read",
      date: "March 2024"
    },
    {
      category: "Motor Insurance",
      icon: TrendingUp,
      title: "5 Tips to Lower Your Car Insurance Costs",
      excerpt: "Practical strategies to reduce your motor insurance premiums without compromising on coverage. Save money while staying protected.",
      readTime: "4 min read",
      date: "February 2024"
    },
    {
      category: "Life Insurance",
      icon: Heart,
      title: "Understanding Term Life vs Whole Life Insurance",
      excerpt: "Not sure which type of life insurance is right for you? Learn the key differences and find out which option best fits your family's needs.",
      readTime: "6 min read",
      date: "February 2024"
    },
    {
      category: "Retirement",
      icon: TrendingUp,
      title: "Planning for Retirement: Start Now or Regret Later",
      excerpt: "Why starting your pension plan in your 30s can make a massive difference. Learn how compound interest works in your favor over time.",
      readTime: "8 min read",
      date: "January 2024"
    },
    {
      category: "Health Insurance",
      icon: Heart,
      title: "What to Look for in a Health Insurance Policy",
      excerpt: "Key features every health insurance policy should have. Don't get caught with inadequate coverage when you need it most.",
      readTime: "5 min read",
      date: "January 2024"
    }
  ];

  const categories = [
    "All Articles",
    "Life Insurance",
    "Education Planning",
    "Investment",
    "Health Insurance",
    "Motor Insurance",
    "Retirement"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="h-3 w-3 mr-1.5" />
            Financial Education
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Insurance & Money Tips
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Expert insights to help you make informed decisions about insurance, investments, and financial planning
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <Mail className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Get Monthly Money & Insurance Tips
            </h2>
            <p className="text-base opacity-90 font-body">
              Join our newsletter and receive expert advice straight to your inbox
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
              required
              data-testid="input-newsletter-email"
            />
            <Button 
              type="submit" 
              variant="secondary" 
              disabled={isSubscribing}
              data-testid="button-subscribe-newsletter"
            >
              {isSubscribing ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="text-xs text-center mt-4 opacity-75">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b bg-background sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="secondary" 
                className="cursor-pointer hover-elevate whitespace-nowrap"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <article.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription className="font-body">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span>{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full justify-between group" data-testid={`button-read-article-${index}`}>
                    Read Article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4 font-body">
              More articles coming soon. Subscribe to our newsletter to stay updated.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-card border-y">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Take Action?</h2>
          <p className="text-lg text-muted-foreground mb-8 font-body">
            Turn knowledge into protection. Get a personalized insurance quote today.
          </p>
          <Link href="/quote">
            <Button size="lg" data-testid="button-cta-quote-blog">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
