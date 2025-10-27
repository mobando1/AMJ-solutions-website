# AMJ Solutions Group - Corporate Communications Website

## Overview

AMJ Solutions Group is a corporate communications consultancy website specializing in crisis management, reputation protection, and executive communications training. The application is built as a modern marketing website showcasing services, client credentials, and providing contact mechanisms including Calendly integration for consultation bookings.

The site is designed to project executive-level credibility and professionalism, targeting Fortune 500 companies and senior executives facing high-stakes communications challenges. Content focuses on crisis communications, reputation management, media training, executive coaching, and stakeholder engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool and development server.

**Routing**: Client-side routing implemented via Wouter, a lightweight alternative to React Router. Routes are defined in `client/src/App.tsx` with the following page structure:
- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Clients (`/clients`)
- Contact (`/contact`)
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)

**UI Component System**: Shadcn/ui component library with Radix UI primitives. Components follow a "New York" style variant with custom theming. All UI components are TypeScript-based and located in `client/src/components/ui/`.

**Styling**: Tailwind CSS with extensive customization via `tailwind.config.ts`. Design system follows corporate/consultancy aesthetics with:
- Neutral color palette with executive teal accent (`hsl(200 51% 20%)`)
- Custom spacing and elevation utilities
- Responsive breakpoints following mobile-first approach
- CSS custom properties for dynamic theming

**State Management**: React Query (TanStack Query v5) for server state management and caching. Configuration in `client/src/lib/queryClient.ts` with conservative defaults (no automatic refetching, infinite stale time).

**Form Handling**: React Hook Form with Zod schema validation for type-safe form management, particularly in the contact form component.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js. The server is located in `server/index.ts`.

**API Structure**: RESTful API design pattern expected, though current implementation shows minimal route definitions in `server/routes.ts`. API routes are prefixed with `/api`.

**Development Setup**: Vite development server runs in middleware mode, allowing Express to handle API routes while Vite handles HMR and asset serving during development.

**Production Build**: 
- Frontend: Vite builds static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js` as ESM
- Static file serving handled by Express in production

### Data Storage

**Database**: PostgreSQL via Neon serverless driver (`@neondatabase/serverless`).

**ORM**: Drizzle ORM for type-safe database operations and migrations. Schema defined in `shared/schema.ts`.

**Current Schema**: Minimal user table with username/password fields (likely placeholder for future authentication).

**Session Storage**: `connect-pg-simple` dependency suggests PostgreSQL-backed session storage, though not currently implemented.

**Migration Strategy**: Drizzle Kit for schema migrations with output to `migrations/` directory. Command: `npm run db:push`.

**Storage Abstraction**: In-memory storage implementation (`MemStorage`) in `server/storage.ts` provides interface for CRUD operations. This serves as a development/testing layer before database integration.

### Design System

**Typography**: Google Fonts integration with Poppins as primary typeface (alternatives: Lato, DM Sans). Defined hierarchy from hero (3xl-6xl) down to legal text (sm).

**Component Library**: Custom-built components extending Shadcn/ui:
- `ServiceCard`: Service showcase with icon, description, outcomes, and CTAs
- `LogoWall`: Client logo grid display
- `LogoMarquee`: Animated horizontal logo scroll
- `Testimonial`: Client testimonial cards with avatar support
- `CalendlyButtonModal`: Integration component for scheduling
- `ContactForm`: Full-featured contact form with validation
- `Section`: Layout wrapper with consistent spacing
- `Header`: Sticky navigation with mobile menu
- `Footer`: Site footer with navigation and contact info

**Layout Patterns**:
- Max-width container: 1280px (`max-w-screen-xl`)
- Vertical rhythm: Progressive spacing from 12px (mobile) to 24px (desktop)
- Horizontal padding: Responsive from 16px to 32px
- Card padding: 24px mobile, 32px desktop

**Color Strategy**: Light mode primary with high-contrast text for readability. Minimal accent color usage (executive teal) for CTAs and interactive elements only. Dark mode infrastructure present but not actively used.

### External Dependencies

**Calendly Integration**: Modal-based appointment scheduling via environment variable `VITE_CALENDLY_URL`. Component wraps Calendly embed in a dialog for seamless booking experience.

**Image Assets**: Local image storage in `attached_assets/` directory containing:
- Client logos (Truist, IBM, USAA, Harland Clarke, Texas A&M, UT Health, Argo Group, CPS Energy)
- Brand assets (butterfly logo, headshots)
- AI-generated imagery for testimonials and hero sections

**Google Fonts**: CDN-hosted typefaces loaded via preconnect optimization in `client/index.html`.

**Radix UI**: Comprehensive suite of unstyled, accessible UI primitives:
- Dialog, Dropdown Menu, Popover, Tooltip components
- Form controls: Checkbox, Radio, Select, Switch, Slider
- Navigation: Accordion, Tabs, Navigation Menu
- Feedback: Toast notifications, Alert Dialog
- All primitives provide ARIA-compliant accessibility

**Build Tools**:
- Vite 5.x for frontend bundling and dev server
- esbuild for backend bundling
- PostCSS with Tailwind and Autoprefixer
- TypeScript compiler for type checking (no emit)

**Development Tools** (Replit-specific):
- `@replit/vite-plugin-runtime-error-modal`: Error overlay
- `@replit/vite-plugin-cartographer`: Code navigation
- `@replit/vite-plugin-dev-banner`: Development mode indicator

**SEO Configuration**: 
- Comprehensive meta tags in `client/index.html` for social sharing
- Robots.txt allowing full crawling
- Canonical URLs and structured metadata
- OpenGraph and Twitter Card support