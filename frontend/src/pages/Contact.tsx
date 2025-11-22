import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactFormSchema, type InsertContactForm } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactForm>({
    resolver: zodResolver(insertContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: InsertContactForm) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Have questions about insurance? Need expert advice? We're here to help you find the perfect coverage.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} data-testid="input-contact-name" />
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
                                <Input type="email" placeholder="john@example.com" {...field} data-testid="input-contact-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="0712 345 678" {...field} data-testid="input-contact-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject *</FormLabel>
                              <FormControl>
                                <Input placeholder="How can we help?" {...field} data-testid="input-contact-subject" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us more about what you're looking for..."
                                className="min-h-32"
                                {...field}
                                data-testid="input-contact-message"
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
                          className="w-full md:w-auto"
                          data-testid="button-submit-contact"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            Your information is secure and never shared.
                          </span>
                        </p>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm font-medium">Bishop Garden Tower</p>
                  <p className="text-sm text-muted-foreground">
                    Upper Hill<br />
                    Nairobi, Kenya
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Bishop+Garden+Tower+Upper+Hill+Nairobi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-block"
                  >
                    Get Directions →
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a 
                    href="tel:+254725928653" 
                    className="text-sm font-medium hover:text-primary transition-colors block"
                  >
                    0725 928 653
                  </a>
                  <a 
                    href="https://wa.me/254725928653" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                    data-testid="link-whatsapp-contact"
                  >
                    <SiWhatsapp className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:info@mrcatalyst.co.ke" 
                    className="text-sm font-medium hover:text-primary transition-colors block"
                  >
                    info@mrcatalyst.co.ke
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Find Us on the Map</h2>
            <p className="text-muted-foreground font-body">
              We're conveniently located in Upper Hill, Nairobi
            </p>
          </div>
          <div className="aspect-video rounded-md overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819476859!2d36.8195!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0OScxMC4yIkU!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
