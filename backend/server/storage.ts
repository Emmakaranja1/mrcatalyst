import {
  type QuoteRequest,
  type InsertQuoteRequest,
  type ContactForm,
  type InsertContactForm,
  type NewsletterSubscription,
  type InsertNewsletterSubscription
} from "../shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Quote Requests
  createQuoteRequest(quoteRequest: InsertQuoteRequest): Promise<QuoteRequest>;
  getAllQuoteRequests(): Promise<QuoteRequest[]>;
  getQuoteRequest(id: string): Promise<QuoteRequest | undefined>;

  // Contact Forms
  createContactForm(contactForm: InsertContactForm): Promise<ContactForm>;
  getAllContactForms(): Promise<ContactForm[]>;
  getContactForm(id: string): Promise<ContactForm | undefined>;

  // Newsletter Subscriptions
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  isEmailSubscribed(email: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private quoteRequests: Map<string, QuoteRequest>;
  private contactForms: Map<string, ContactForm>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;

  constructor() {
    this.quoteRequests = new Map();
    this.contactForms = new Map();
    this.newsletterSubscriptions = new Map();
  }

  // Quote Requests
  async createQuoteRequest(insertQuoteRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const quoteRequest: QuoteRequest = {
      ...insertQuoteRequest,
      id,
      createdAt: new Date()
    };
    this.quoteRequests.set(id, quoteRequest);
    return quoteRequest;
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getQuoteRequest(id: string): Promise<QuoteRequest | undefined> {
    return this.quoteRequests.get(id);
  }

  // Contact Forms
  async createContactForm(insertContactForm: InsertContactForm): Promise<ContactForm> {
    const id = randomUUID();
    const contactForm: ContactForm = {
      ...insertContactForm,
      id,
      createdAt: new Date()
    };
    this.contactForms.set(id, contactForm);
    return contactForm;
  }

  async getAllContactForms(): Promise<ContactForm[]> {
    return Array.from(this.contactForms.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getContactForm(id: string): Promise<ContactForm | undefined> {
    return this.contactForms.get(id);
  }

  // Newsletter Subscriptions
  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = randomUUID();
    const subscription: NewsletterSubscription = {
      ...insertSubscription,
      id,
      subscribedAt: new Date()
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values())
      .sort((a, b) => b.subscribedAt.getTime() - a.subscribedAt.getTime());
  }

  async isEmailSubscribed(email: string): Promise<boolean> {
    return Array.from(this.newsletterSubscriptions.values())
      .some(sub => sub.email.toLowerCase() === email.toLowerCase());
  }
}

export const storage = new MemStorage();
