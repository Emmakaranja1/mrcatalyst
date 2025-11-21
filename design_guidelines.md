# Mr. Catalyst Insurance Agency - Design Guidelines

## Design Approach
**Hybrid Professional-Trust System**: Combining Stripe's clarity and restraint with Airbnb's warmth and approachability. Insurance requires both professional credibility and emotional connection—this approach balances institutional trust with human-centered design.

**Core Principle**: Every element should either build trust, simplify complexity, or drive conversion.

---

## Typography System

**Font Families** (Google Fonts):
- Primary: **Inter** - Headings and UI elements (weights: 400, 500, 600, 700)
- Secondary: **Open Sans** - Body text and long-form content (weights: 400, 600)

**Hierarchy**:
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- Section Headers: text-3xl md:text-4xl, font-semibold
- Subsection Titles: text-xl md:text-2xl, font-semibold
- Card Titles: text-lg font-semibold
- Body Text: text-base leading-relaxed
- Small Print/Legal: text-sm text-gray-600

---

## Layout & Spacing System

**Tailwind Spacing Primitives**: Use units of **4, 6, 8, 12, 16, 20, 24** for consistency
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-20 lg:py-24
- Card gaps: gap-6 md:gap-8
- Container max-width: max-w-7xl mx-auto px-4 md:px-6

**Grid System**:
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Feature highlights: grid-cols-1 lg:grid-cols-2 gap-12

---

## Component Library

### Navigation
- Sticky header with logo left, main nav center, "Get a Quote" CTA button right
- Mobile: Hamburger menu with slide-in overlay
- Include trust indicator in nav: "IRA Licensed" badge with phone number

### Hero Section (Home)
- **Large background image**: Happy Kenyan family or professional business setting, warm and authentic
- Full viewport height (min-h-screen) with gradient overlay for text readability
- Centered content: Headline + subheadline + dual CTAs ("Get a Quote" primary, "Learn More" secondary)
- Floating trust badges below CTAs: "IRA Licensed | 10+ Years | 5000+ Clients Protected"
- **Button treatment**: Blurred background (backdrop-blur-sm bg-white/20) for buttons over hero image

### Service Cards
- White cards with subtle shadow (shadow-md hover:shadow-xl transition)
- Icon at top (use Heroicons), service title, 2-3 sentence description, "Learn More" link
- Rounded corners (rounded-xl)
- Hover lift effect (transform hover:-translate-y-1)

### Testimonial Cards
- Bordered cards (border-2) with quote icon
- Star rating (5 stars, use Font Awesome stars)
- Client quote in larger text (text-lg italic)
- Client name and context below (text-sm font-semibold)
- Include small client initial avatar (circular, 48px)

### Forms (Quote Request/Contact)
- Clean, spacious layout with labels above inputs
- Input styling: border-2 rounded-lg p-3 focus:ring-2 focus:ring-offset-2
- Full-width submit button at bottom
- Include privacy note: "Your information is secure and never shared"

### Trust Elements
- Partner logo grid (grayscale, hover to full color)
- Credentials badges (IRA license, AIIK membership) in footer
- Security seal icons near forms

### Statistics Section
- 4-column grid on desktop, stacked on mobile
- Large numbers (text-4xl font-bold) with label below
- Examples: "10+ Years", "5000+ Clients", "98% Satisfaction", "24/7 Support"

---

## Page-Specific Layouts

### Home Page (7-8 sections)
1. Hero with background image and blurred CTA buttons
2. Services overview (3-column grid)
3. Why Choose Us (2-column: image + benefits list)
4. Statistics bar
5. Featured testimonials (3-column)
6. Partner logos
7. CTA section (centered, with WhatsApp integration)

### About Us
- Hero section with team photo
- Story section (2-column: text + values cards)
- Team grid (4 members, photos + bios)
- Mission/Values cards (icon + text)
- Office location with embedded map

### Services Pages
- Individual page per service category
- Hero with service-specific image
- "What's Covered" section (icon checklist)
- "Who It's For" (2-3 personas with descriptions)
- Benefits cards (3-column)
- Real client story callout box (bg-blue-50 border-l-4)
- Quote request form sidebar

### Contact Page
- 2-column: Contact form left, contact details + map right
- Prominent WhatsApp button (floating or integrated)
- Office hours clearly displayed
- Social media icon row

---

## Images Strategy

**Required Images**:
1. **Home Hero**: Large, high-quality image of Kenyan family or professionals, warm lighting, authentic setting (upper middle-class home or modern office)
2. **About Us Hero**: Team photo or founder in office setting
3. **Team Photos**: Professional headshots for 4 team members, consistent background
4. **Service Page Heroes**: Context-specific (family for life insurance, car for motor, graduate for education)
5. **Why Choose Us**: Photo of client consultation or handshake moment

**Image Treatment**: All hero images should have subtle gradient overlay (gradient from transparent to semi-opaque) to ensure text readability

---

## Accessibility & UX

- Minimum touch target: 44x44px for all interactive elements
- Form inputs: Clear labels, placeholder text, validation messages in red-600
- Focus states: Prominent ring-2 ring-offset-2 on all focusable elements
- Skip navigation link for screen readers
- Alt text required for all images

---

## Animation (Minimal)

- Subtle fade-in on scroll for sections (opacity + translateY)
- Hover transitions on cards (shadow, transform)
- Button hover states (subtle scale: hover:scale-105)
- No complex animations—maintain professional trust

---

## Mobile-First Responsive

- Stack all multi-column layouts to single column on mobile
- Hero text sizes scale down appropriately (text-4xl → text-3xl)
- Navigation collapses to hamburger below md: breakpoint
- Forms remain full-width on mobile with generous padding
- Maintain 4-6 spacing on mobile for comfortable touch targets

This design creates a trustworthy, professional insurance agency website that balances credibility with approachability, optimized for lead generation and client education.