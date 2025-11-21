import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertQuoteRequestSchema, type InsertQuoteRequest } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Shield, FileText, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Quote() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertQuoteRequest>({
    resolver: zodResolver(insertQuoteRequestSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      coverType: "",
      preferredContactTime: "",
      message: ""
    }
  });

  const quoteMutation = useMutation({
    mutationFn: async (data: InsertQuoteRequest) => {
      return await apiRequest("POST", "/api/quotes", data);
    },
    onSuccess: () => {
      toast({
        title: "Quote request received!",
        description: "Our team will contact you within 24 hours with a personalized quote.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: InsertQuoteRequest) => {
    setIsSubmitting(true);
    quoteMutation.mutate(data);
  };

  const coverageTypes = [
    "Life Insurance",
    "Education Plans",
    "Health/Medical Insurance",
    "Motor Insurance",
    "Investment & Savings",
    "Pension/Retirement",
    "General Insurance",
    "Not Sure - Need Advice"
  ];

  const timePreferences = [
    "Morning (8AM - 12PM)",
    "Afternoon (12PM - 4PM)",
    "Evening (4PM - 6PM)",
    "Anytime"
  ];

  const benefits = [
    "Expert guidance from licensed advisors",
    "Multiple insurer comparisons",
    "Customized coverage recommendations",
    "Fast quote turnaround (24 hours)",
    "No obligation consultation",
    "Transparent pricing"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <Badge variant="secondary" className="mb-4">
            <FileText className="h-3 w-3 mr-1.5" />
            Free Quote Request
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Get Your Free Insurance Quote
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Let's help you find the best coverage within your budget — no obligation, just expert advice tailored to your needs.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Request Your Personalized Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and our expert advisors will contact you with a tailored insurance quote
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} data-testid="input-quote-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="0712 345 678" {...field} data-testid="input-quote-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} data-testid="input-quote-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="coverType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type of Coverage *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-cover-type">
                                  <SelectValue placeholder="Select coverage type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {coverageTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredContactTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Contact Time</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-contact-time">
                                  <SelectValue placeholder="When should we call?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timePreferences.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Details</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us more about your coverage needs, budget, or any specific requirements..."
                                className="min-h-28"
                                {...field}
                                data-testid="input-quote-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex flex-col gap-3">
                        <Button 
                          type="submit" 
                          size="lg" 
                          disabled={isSubmitting}
                          className="w-full"
                          data-testid="button-submit-quote"
                        >
                          {isSubmitting ? "Submitting..." : "Request Free Quote"}
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          <Shield className="inline h-3 w-3 mr-1" />
                          Your information is secure and never shared
                        </p>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Why Get a Quote?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm opacity-90">
                    Our advisors are available to answer your questions right now.
                  </p>
                  <a 
                    href="tel:+254725928653"
                    className="block"
                  >
                    <Button variant="secondary" className="w-full" data-testid="button-call-now">
                      Call 0725 928 653
                    </Button>
                  </a>
                  <a 
                    href="https://wa.me/254725928653"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10" data-testid="button-whatsapp-quote">
                      Chat on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs font-bold">1</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Submit Your Request</p>
                        <p className="text-xs text-muted-foreground">Fill out the form with your details</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs font-bold">2</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">We Review Your Needs</p>
                        <p className="text-xs text-muted-foreground">Our experts analyze the best options</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs font-bold">3</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Get Your Quote</p>
                        <p className="text-xs text-muted-foreground">Personalized quote within 24 hours</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
