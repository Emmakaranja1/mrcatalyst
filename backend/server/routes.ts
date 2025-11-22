import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertQuoteRequestSchema,
  insertContactFormSchema,
  insertNewsletterSubscriptionSchema
} from "../shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote Request Endpoint
  app.post("/api/quotes", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);

      res.status(201).json({
        success: true,
        data: quoteRequest,
        message: "Quote request received successfully"
      });
    } catch (error: any) {
      console.error("Quote request error:", error);
      res.status(400).json({
        success: false,
        error: error.message || "Failed to process quote request"
      });
    }
  });

  // Get all quote requests (for admin purposes)
  app.get("/api/quotes", async (req, res) => {
    try {
      const quotes = await storage.getAllQuoteRequests();
      res.json({ success: true, data: quotes });
    } catch (error: any) {
      console.error("Get quotes error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to retrieve quote requests"
      });
    }
  });

  // Contact Form Endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactFormSchema.parse(req.body);
      const contactForm = await storage.createContactForm(validatedData);

      res.status(201).json({
        success: true,
        data: contactForm,
        message: "Contact form submitted successfully"
      });
    } catch (error: any) {
      console.error("Contact form error:", error);
      res.status(400).json({
        success: false,
        error: error.message || "Failed to process contact form"
      });
    }
  });

  // Get all contact forms (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const contacts = await storage.getAllContactForms();
      res.json({ success: true, data: contacts });
    } catch (error: any) {
      console.error("Get contacts error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to retrieve contact forms"
      });
    }
  });

  // Newsletter Subscription Endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);

      // Check if email already subscribed
      const isSubscribed = await storage.isEmailSubscribed(validatedData.email);
      if (isSubscribed) {
        return res.status(409).json({
          success: false,
          error: "This email is already subscribed to our newsletter"
        });
      }

      const subscription = await storage.createNewsletterSubscription(validatedData);

      res.status(201).json({
        success: true,
        data: subscription,
        message: "Successfully subscribed to newsletter"
      });
    } catch (error: any) {
      console.error("Newsletter subscription error:", error);
      res.status(400).json({
        success: false,
        error: error.message || "Failed to subscribe to newsletter"
      });
    }
  });

  // Get all newsletter subscriptions (for admin purposes)
  app.get("/api/newsletter", async (req, res) => {
    try {
      const subscriptions = await storage.getAllNewsletterSubscriptions();
      res.json({ success: true, data: subscriptions });
    } catch (error: any) {
      console.error("Get subscriptions error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to retrieve newsletter subscriptions"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
