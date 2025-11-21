# Mr. Catalyst Insurance Agency

## Overview

Mr. Catalyst Insurance Agency is a customer-focused insurance agency website serving clients in Kenya. The platform provides information about various insurance products (life, education, health, motor, investment, retirement, and general insurance), enables quote requests, handles contact inquiries, and offers newsletter subscriptions. The application emphasizes trust-building, simplicity, and conversion through a professionally designed interface that combines clarity with warmth.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TailwindCSS for utility-first styling with custom theme variables
- shadcn/ui component library (New York style) built on Radix UI primitives

**Design System:**
- Hybrid professional-trust approach combining Stripe's clarity with Airbnb's warmth
- Typography: Inter for headings/UI, Open Sans for body text
- Consistent spacing using Tailwind's 4-based scale (4, 6, 8, 12, 16, 20, 24)
- Custom color system using HSL CSS variables for theme consistency
- Responsive breakpoints: mobile-first with md (768px) and lg (1024px) breakpoints

**State Management:**
- TanStack Query (React Query) for server state management and data fetching
- React Hook Form with Zod validation for form state
- Local component state via React hooks

**Key Pages:**
- Home: Hero section with services overview and trust indicators
- About: Agency story, mission, values, and team profiles
- Services: Detailed insurance product information with feature lists
- Quote: Multi-field form for requesting personalized quotes
- Contact: Contact form with location and communication details
- Blog: Educational content with newsletter subscription
- Privacy: Privacy policy and data handling information

### Backend Architecture

**Runtime & Framework:**
- Node.js with Express.js for HTTP server
- TypeScript for type safety across the codebase
- Separate dev/prod server configurations for environment-specific behavior

**API Design:**
- RESTful API endpoints under `/api` prefix
- JSON request/response format
- Validation using Zod schemas shared between client and server
- Standardized response format: `{ success: boolean, data?: any, error?: string, message?: string }`

**Core Endpoints:**
- `POST /api/quotes` - Submit quote requests
- `GET /api/quotes` - Retrieve all quote requests (admin)
- `POST /api/contact` - Submit contact form messages
- `GET /api/contact` - Retrieve all contact submissions (admin)
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/newsletter` - Retrieve all newsletter subscriptions (admin)

**Data Storage:**
- In-memory storage implementation (MemStorage) for development
- Storage interface (IStorage) designed for easy database integration
- Drizzle ORM configured for PostgreSQL migration path
- Schema definitions shared via `@shared/schema.ts` for type consistency

**Development Workflow:**
- Hot module replacement (HMR) via Vite in development
- Static file serving from pre-built `dist/public` in production
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- TypeScript compilation checking without emission (build handled by Vite/esbuild)

### Data Schema

**Quote Requests:**
- Customer name, phone, email (required)
- Coverage type selection (required)
- Preferred contact time (optional)
- Additional message (optional)
- Auto-generated UUID and timestamp

**Contact Forms:**
- Customer name, email, subject, message (required)
- Phone number (optional)
- Auto-generated UUID and timestamp

**Newsletter Subscriptions:**
- Email address (required)
- Auto-generated UUID and timestamp
- Duplicate prevention via email lookup

**Validation:**
- Zod schemas for runtime validation
- Drizzle-zod integration for database schema validation
- Shared schema definitions ensure client-server consistency

### Session & Security

**Current Implementation:**
- No authentication/authorization system
- Open endpoints (suitable for public inquiry forms)
- connect-pg-simple package included for future session management

**Future Considerations:**
- Admin authentication for viewing submissions
- Session store configuration for user management
- CSRF protection for form submissions

## External Dependencies

### UI Component Libraries
- **Radix UI** - Headless, accessible UI primitives (accordion, dialog, dropdown, select, toast, etc.)
- **shadcn/ui** - Pre-styled component collection built on Radix UI
- **Lucide React** - Icon library for consistent iconography
- **react-icons** - Additional icons (WhatsApp, social media)
- **embla-carousel-react** - Carousel/slider functionality
- **cmdk** - Command menu component

### Form & Validation
- **React Hook Form** - Performant form state management
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Zod integration with React Hook Form

### Data Fetching
- **TanStack Query** - Async state management, caching, and server synchronization
- **date-fns** - Date formatting and manipulation utilities

### Database & ORM
- **Drizzle ORM** - TypeScript ORM for PostgreSQL
- **@neondatabase/serverless** - Neon serverless PostgreSQL driver
- **drizzle-kit** - Schema migrations and database management
- **drizzle-zod** - Generate Zod schemas from Drizzle tables
- **connect-pg-simple** - PostgreSQL session store for Express

### Styling
- **TailwindCSS** - Utility-first CSS framework
- **class-variance-authority** - Type-safe component variants
- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind classes without conflicts

### Build Tools
- **Vite** - Fast build tool and dev server
- **esbuild** - Fast JavaScript bundler for production server
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing with Autoprefixer

### Development Tools
- **@replit/vite-plugin-runtime-error-modal** - Runtime error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific development features
- **@replit/vite-plugin-dev-banner** - Development environment banner

### Fonts
- **Google Fonts** - Inter (headings/UI) and Open Sans (body text) via CDN link in HTML

### Third-Party Services
**Planned/Referenced (Not Yet Integrated):**
- Insurance provider partnerships: Old Mutual, ICEA Lion, Absa Life
- IRA Kenya licensing verification
- WhatsApp Business integration (link present in footer)
- Social media platforms: Facebook, LinkedIn, Instagram