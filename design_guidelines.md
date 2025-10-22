# Design Guidelines for AMJ Solutions Group Website

## Design Approach
**Reference-Based System**: Professional corporate consultancy sites (McKinsey, Deloitte Digital, corporate advisory firms) with executive-level elegance and credibility.

## Core Design Elements

### A. Color Palette
**Light Mode (Primary):**
- Background: `0 0% 100%` (pure white)
- Text Primary: `220 26% 14%` (#1F2937 - deep charcoal)
- Text Muted: `220 9% 46%` (#6B7280 - professional gray)
- Accent Primary: `200 51% 20%` (#1C3D4F - executive teal) OR `164 68% 19%` (#0F4C3A - sophisticated green) - **choose ONE**
- Border: `220 13% 91%` (#E5E7EB - subtle dividers)

**Usage:**
- Accent color for CTAs, links, and subtle highlights only
- Maintain high contrast for executive readability
- Minimal color use - let content and typography lead

### B. Typography
**Font Stack:** Poppins (primary) or Lato (alternative) via Google Fonts

**Hierarchy:**
- H1 (Hero): 3xl/4xl mobile, 5xl/6xl desktop, font-semibold, tight leading
- H2 (Section): 2xl/3xl mobile, 4xl desktop, font-semibold
- H3 (Cards): xl/2xl, font-semibold
- Body: base/lg, font-normal, leading-relaxed (1.6-1.8)
- Small/Legal: sm, text-muted

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32

**Containers:**
- Page max-width: `max-w-screen-xl` (1280px)
- Content sections: `px-4 sm:px-6 lg:px-8`
- Vertical rhythm: `py-12 sm:py-16 lg:py-20 xl:py-24`
- Card padding: `p-6` mobile, `p-8` desktop

### D. Component Library

**Hero Section:**
- Full-width container with centered content
- Headline + subheadline + primary CTA (Calendly)
- Minimal, clean background (solid color or subtle gradient)
- Height: natural content, not forced 100vh

**Service Cards:**
- Grid: 1 column mobile, 2 columns tablet, 3 columns desktop
- Rounded corners: `rounded-lg`
- Border: subtle `border border-gray-200`
- Hover: slight shadow lift (`hover:shadow-lg` transition)
- Icon/title/description/bullets/CTA structure

**Logo Wall (Clients):**
- Responsive grid: 2-3-4-6 columns across breakpoints
- Logos in grayscale: `filter grayscale` at rest
- Hover: full color with `hover:grayscale-0` transition
- Equal height containers with `object-contain` logos
- Padding: `p-8` for breathing room

**Contact Form:**
- Clean, professional inputs with labels
- Focus states: accent color ring
- Validation states (error red, success green)
- Submit button: primary accent color, loading states

**Calendly Integration:**
- Modal dialog with backdrop blur
- Inline embed on contact page
- Primary CTA buttons throughout site

### E. Imagery Strategy

**Required Images:**
- Hero: Professional corporate background (office/cityscape/abstract) or solid accent color background
- About: Ana Nelson headshot (professional, corporate quality)
- Client Logos: SVG/PNG transparent files from /public/clients/
- Optional: Butterfly SVG icon (minimalist) for transformation metaphor

**Image Treatment:**
- Slightly desaturated for corporate feel
- Clean, professional photography
- No stock photos with forced diversity poses
- next/image optimization throughout

### F. Navigation
- Sticky header: white background, subtle shadow on scroll
- Logo left, nav links center/right
- Mobile: hamburger menu, full-screen overlay
- Footer: multi-column grid (logo, quick links, contact, legal)

### G. Interactions & Animations
**Minimal and Professional:**
- Transitions: 150-200ms duration
- Hover effects: subtle scale (1.02), shadow elevation, color shifts
- NO: Heavy parallax, complex scroll animations, distracting movements
- YES: Smooth page transitions, fade-ins on scroll (very subtle)

## Page-Specific Guidelines

### Home
- Hero with headline/subheadline/CTA
- 4-6 service highlight cards grid
- Client logo wall (8+ logos)
- "Why AMJ" 3-4 column benefits
- Testimonial (if available)
- Secondary CTA to contact

### About
- Two-column layout (desktop): headshot left, bio right
- Methodology timeline/steps (3-5 steps)
- Optional butterfly element (small, tasteful)

### Services
- Anchor navigation to service sections
- Each service: full-width section with description, bullets, CTA
- Alternating layouts for visual interest

### Clients/Case Studies
- Large logo wall grid
- Case snippets: Challenge → Approach → Result (3-column cards)

### Contact
- Two-column: form left, info/Calendly right (desktop)
- Stacked mobile
- Professional form validation

## Accessibility
- WCAG AA contrast ratios (4.5:1 text, 3:1 UI)
- Keyboard navigation with visible focus states
- Alt text on all images (descriptive for logos)
- Aria labels on interactive elements
- Form labels and error announcements

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px
- Max container: 1280px

## Key Principles
1. **Executive Minimalism**: Less is more, white space is premium
2. **Credibility First**: Professional, polished, authoritative
3. **Content Hierarchy**: Clear visual flow, scannable sections
4. **Subtle Sophistication**: Refined interactions, no flashiness
5. **Mobile Excellence**: Touch-friendly, readable on small screens