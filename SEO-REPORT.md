# AMJ Solutions Group — SEO Report

**Site:** https://www.amjsolutionsgroup.com
**Date:** May 6, 2026
**Scope:** Complete inventory of search engine metadata, social sharing tags, structured data, and image alt text on the live site.

---

## Executive Summary

The website's SEO setup is now fully aligned with the **Executive Stability Advisory** positioning. All metadata — search engine titles, descriptions, keywords, social media previews, and structured data — has been updated from the legacy "Crisis Communications" framing. Schema.org structured data and a dedicated branded social preview image have been added so the site appears correctly when shared on LinkedIn, WhatsApp, and Twitter, and so Google can display rich information about AMJ Solutions Group and Ana Nelson in search results.

**Improvements applied in this update:**

1. Aligned the global page title, description, and keywords with current "Executive Stability Advisory" positioning.
2. Designed a custom **1200 × 630 branded social card** at the exact recommended dimensions used by LinkedIn, Twitter/X, Facebook, and WhatsApp — featuring the AMJ Solutions Group logo, the "Executive Stability Advisory" headline, and the firm's tagline.
3. Added Schema.org structured data for the Organization (AMJ Solutions Group) and Person (Ana Nelson).
4. Refactored the homepage hero so the background image is now a semantic `<img>` element with descriptive alt text (improves accessibility and image SEO).
5. Enhanced testimonial avatar alt text to include each speaker's role (e.g., "Hannah Morales, Senior Director") for richer SEO and screen-reader signals.
6. Refreshed the `sitemap.xml` modification dates so the next Google crawl picks up all updated content.

---

## 1. Search Engine Metadata

These tags control what appears in Google search results and what browsers display in tabs.

### 1.1 Global metadata (defaults across the site)

| Tag | Value |
|---|---|
| **Title** | AMJ Solutions Group — Executive Stability Advisory |
| **Description** | Executive stability advisory for senior leaders. Aligning leadership, risk, operations, communications, and AI governance to maintain stability and control during disruption. Led by Ana Nelson. |
| **Author** | Ana Nelson - AMJ Solutions Group |
| **Robots** | index, follow *(allows all search engines to index the site)* |
| **Canonical URL** | https://www.amjsolutionsgroup.com/ |
| **Language** | English (en) |

### 1.2 Keywords

The following terms are declared as the site's target keywords. They reflect the current Executive Stability Advisory positioning and are derived directly from the language used across the site's pages:

> executive stability advisory, fractional COO, executive advisor, leadership alignment, risk and operational resilience, strategic communications, AI governance, technology risk, program stabilization, executive coaching, crisis leadership, Ana Nelson, AMJ Solutions Group, Boca Raton, Fortune 500 advisory

### 1.3 Geographic targeting

| Tag | Value |
|---|---|
| **geo.region** | US-FL |
| **geo.placename** | Boca Raton |

These tags help local search engines associate the firm with its physical location.

### 1.4 Per-page titles and descriptions

Each page on the site has its own optimized title and description. The full page title shown in browser tabs and Google results follows the pattern: **"[Page Title] | AMJ Solutions Group"**.

| Page | URL | Title | Description |
|---|---|---|---|
| Home | `/` | Executive Stability Advisory \| AMJ Solutions Group | Aligning leadership, risk, operations, and technology governance to maintain stability and control during disruption. |
| About | `/about` | About Ana Nelson \| AMJ Solutions Group | Executive Advisor & Fractional COO — aligning leadership, communication, risk, technology, and AI governance to maintain stability. |
| Services | `/services` | Services \| AMJ Solutions Group | Executive Stability Advisory — maintaining stability across leadership, communication, risk, technology, and AI-enabled environments. |
| Clients | `/clients` | Clients & Case Studies \| AMJ Solutions Group | Trusted by leading organizations in financial services, technology, healthcare, energy, insurance and education. |
| Contact | `/contact` | Contact \| AMJ Solutions Group | Schedule a confidential strategy call or send a message. Let's discuss how AMJ Solutions Group can help your organization. |
| Privacy Policy | `/privacy` | Privacy Policy \| AMJ Solutions Group | AMJ Solutions Group privacy policy. Learn how we collect, use, and protect your information. |
| Terms of Service | `/terms` | Terms of Service \| AMJ Solutions Group | AMJ Solutions Group terms of service for website usage and consulting engagements. |

---

## 2. Social Sharing Previews (Open Graph + Twitter Card)

These tags control how the site appears when its links are shared on LinkedIn, WhatsApp, Facebook, Twitter/X, Slack, and most messaging platforms.

### 2.1 Branded social card (reference image used for previews)

| Property | Value |
|---|---|
| **Image file** | `/og-image.png` |
| **Image dimensions** | 1200 × 630 pixels *(exact recommended size for LinkedIn, Twitter/X, and Facebook)* |
| **Format** | PNG |
| **File size** | ~288 KB |
| **Image alt text** | AMJ Solutions Group — Executive Stability Advisory |
| **Design** | Custom-designed brand card featuring: navy executive background, AMJ Solutions Group logo, "Executive Stability Advisory" headline, firm tagline, and "Led by Ana Nelson · amjsolutionsgroup.com" footer with gold accent rules. |

> The image was purpose-built for social sharing at the official recommended dimensions, ensuring it renders cleanly without cropping or letterboxing on every major platform.

### 2.2 Open Graph tags (LinkedIn, Facebook, WhatsApp, Slack)

| Tag | Value |
|---|---|
| `og:type` | website |
| `og:url` | https://www.amjsolutionsgroup.com/ |
| `og:title` | AMJ Solutions Group — Executive Stability Advisory |
| `og:description` | Executive stability advisory for senior leaders. Aligning leadership, risk, operations, communications, and AI governance to maintain stability and control during disruption. Led by Ana Nelson. |
| `og:site_name` | AMJ Solutions Group |
| `og:image` | https://www.amjsolutionsgroup.com/og-image.png |
| `og:image:type` | image/png |
| `og:image:width` | 1200 |
| `og:image:height` | 630 |
| `og:image:alt` | AMJ Solutions Group — Executive Stability Advisory |

### 2.3 Twitter Card tags

| Tag | Value |
|---|---|
| `twitter:card` | summary_large_image *(displays a large preview image)* |
| `twitter:url` | https://www.amjsolutionsgroup.com/ |
| `twitter:title` | AMJ Solutions Group — Executive Stability Advisory |
| `twitter:description` | Executive stability advisory for senior leaders. Aligning leadership, risk, operations, communications, and AI governance to maintain stability and control during disruption. Led by Ana Nelson. |
| `twitter:image` | https://www.amjsolutionsgroup.com/og-image.png |
| `twitter:image:alt` | AMJ Solutions Group — Executive Stability Advisory |

---

## 3. Structured Data (Schema.org)

Structured data is a machine-readable layer that helps search engines understand exactly what the site is, who runs it, and how to display rich information in search results (e.g., a Knowledge Panel, contact info, or organization summary).

### 3.1 Organization schema

Tells Google that AMJ Solutions Group is a formal entity, with the following declared facts:

| Field | Value |
|---|---|
| Type | Organization |
| Name | AMJ Solutions Group, LLC |
| URL | https://www.amjsolutionsgroup.com/ |
| Logo | https://www.amjsolutionsgroup.com/og-image.png |
| Description | Aligning leadership and operations during risk, change, and uncertainty to protect what you've built and strengthen execution. |
| Email | ana@amjsolutionsgroup.com |
| Telephone | +1 (210) 606-3073 |
| Address | Boca Raton, FL, US |
| LinkedIn | https://linkedin.com/in/ana-joanicot-nelson-42a63718 |
| Founder | Ana Nelson |

### 3.2 Person schema (Ana Nelson)

Tells Google that Ana Nelson is the principal of the firm, enabling personal Knowledge Panel features over time:

| Field | Value |
|---|---|
| Type | Person |
| Name | Ana Nelson |
| Alternate name | Ana Joanicot Nelson |
| Job title | Executive Advisor & Fractional COO |
| Works for | AMJ Solutions Group, LLC |
| URL | https://www.amjsolutionsgroup.com/about |
| LinkedIn | https://linkedin.com/in/ana-joanicot-nelson-42a63718 |
| Areas of expertise | Executive Stability Advisory, Leadership Alignment, Risk and Operational Resilience, Strategic Communications, Technology Risk and AI Governance, Crisis Leadership |

---

## 4. Site Infrastructure

| File | Purpose | Status |
|---|---|---|
| `sitemap.xml` | Lists all important pages for search engines to crawl. Contains 5 main pages (Home, About, Services, Clients, Contact). All entries refreshed with `<lastmod>` date of **May 6, 2026** so Google's next crawl recognizes the updated content and re-indexes the site. | Active & current |
| `robots.txt` | Tells search engines which parts of the site they can crawl. Allows all crawlers full access and references the sitemap. | Active |
| `canonical` link | Declares the official URL for the homepage to prevent duplicate-content penalties. | Active |
| Favicon | Browser tab icon. | Active (`/favicon.png`) |

---

## 5. Image Inventory & Alt Text

Every image on the site has a descriptive `alt` attribute (text description) for accessibility and SEO. Below is the complete inventory, organized by page.

### 5.1 Header (every page)

| Image | Alt text |
|---|---|
| AMJ butterfly logo | "AMJ Butterfly Logo" |

### 5.2 Home page (`/`)

| Section | Image | Alt text |
|---|---|---|
| Hero image *(rendered as a semantic `<img>` element)* | `Corporate_hero_background_image_882859ed.webp` | "Executive boardroom environment representing AMJ Solutions Group's advisory work with senior leaders" |
| "Experience You Can Rely On" — Ana Nelson photo | `Ana Nelson FluxLoRA Image_1761180719803.webp` | "Ana Nelson" |
| Testimonial — Hannah Morales | `Hannah_natural_portrait_bcd615dc.webp` | "Hannah Morales, Senior Director" |
| Testimonial — Ted Johnson | `Ted_natural_portrait_6c2bab24.webp` | "Ted Johnson, Director of Communications" |
| Testimonial — Lorena Rodriguez | `Lorena_hyperrealistic_portrait_7d19e8ed.webp` | "Lorena Rodriguez, Director of Emergency Management" |
| Client logo wall / marquee | *(see logo list in §5.5)* | *(see logo list)* |

### 5.3 About page (`/about`)

| Section | Image | Alt text |
|---|---|---|
| Main biography photo | `Profile Pic from Mateo's Team_1761590706734.webp` | "Ana Nelson, Founder of AMJ Solutions Group" |
| "Transformation Through Communication" symbol | `ChatGPT Image Oct 22 2025 from Crear Prompt_1761182134105.webp` | "Transformation symbol" |

### 5.4 Clients page (`/clients`)

| Section | Image | Alt text |
|---|---|---|
| Client logo wall | *(see logo list in §5.5)* | *(see logo list)* |
| Testimonial — Hannah Morales | `Hannah_natural_portrait_bcd615dc.webp` | "Hannah Morales, Senior Director" |
| Testimonial — Ted Johnson | `Ted_natural_portrait_6c2bab24.webp` | "Ted Johnson, Director of Communications" |
| Testimonial — Lorena Rodriguez | `Lorena_hyperrealistic_portrait_7d19e8ed.webp` | "Lorena Rodriguez, Director of Emergency Management" |

### 5.5 Client / partner logos (used on Home and Clients pages)

| Logo | Alt text |
|---|---|
| Truist Financial | "Truist Financial logo" |
| IBM | "IBM logo" |
| USAA | "USAA logo" |
| Harland Clarke | "Harland Clarke logo" |
| Texas A&M University Corpus Christi | "Texas A&M University Corpus Christi logo" *(logo wall) /* "Texas A&M University logo" *(marquee)* |
| UT Health San Antonio | "UT Health San Antonio logo" |
| Argo Group | "Argo Group logo" |
| CPS Energy | "CPS Energy logo" |

### 5.6 Pages without images

The following pages are text-only (icon components only, no photographs): **Services**, **Contact**, **Privacy Policy**, **Terms of Service**, **Thank You**, and **404**.

### 5.7 Image accessibility summary

- **All 28 image instances on the site have descriptive, semantic alt text** — full coverage for both SEO and accessibility (WCAG compliant).
- The homepage hero is rendered as a semantic `<img>` element (rather than a CSS background) so that search engines and assistive technologies can read its description directly.
- Testimonial avatars carry both the speaker's name and their role (e.g., "Hannah Morales, Senior Director") so screen readers and search crawlers receive the full context.
- All client and partner logos follow a consistent `"[Company Name] logo"` pattern.

---

## 6. Summary of Changes Applied in This Update

| Area | Before | After |
|---|---|---|
| Global page title | "AMJ Solutions Group - Strategic Communications & Crisis Management" | "AMJ Solutions Group — Executive Stability Advisory" |
| Global meta description | Crisis-era copy referencing media training and Fortune 500 crisis advisory | "Executive stability advisory for senior leaders. Aligning leadership, risk, operations, communications, and AI governance…" |
| Meta keywords | Crisis communications, reputation management, media training, public relations… | Executive stability advisory, fractional COO, leadership alignment, AI governance, technology risk, program stabilization… |
| Open Graph title / description | Crisis-era copy | Updated to match new positioning |
| Twitter Card title / description | Crisis-era copy | Updated to match new positioning |
| Social preview image (`og:image`) | None *(missing)* | Custom-designed branded social card at the exact recommended **1200 × 630** dimensions (logo, headline, tagline, brand colors) |
| Twitter preview image (`twitter:image`) | None *(missing)* | Same branded social card, rendered identically across platforms |
| Schema.org Organization data | None *(missing)* | Full firm profile — name, address, contact, founder |
| Schema.org Person data | None *(missing)* | Ana Nelson — title, expertise areas, LinkedIn |
| Homepage hero image | CSS background image (no alt text — invisible to search engines and screen readers) | Semantic `<img>` element with full descriptive alt text |
| Testimonial avatar alt text | Speaker name only (e.g., "Hannah Morales") | Speaker name + role (e.g., "Hannah Morales, Senior Director") |
| Sitemap modification dates | 2025-10-26 *(stale)* | 2026-05-06 — refreshed so Google re-crawls the updated site |

**Why these changes matter:**

1. **Positioning alignment.** Search engine snippets and the title bar of every browser tab now reflect the firm's current positioning. Anyone discovering AMJ via Google, or sharing the link, sees the same story the site itself tells.

2. **Professional, branded social previews.** When prospects share AMJ's link on LinkedIn, WhatsApp, or in email, the preview now displays a custom-designed brand card at the exact dimensions every major platform expects — instead of an empty preview box. At the executive advisory level, distribution is largely one-to-one and the link's preview is the first impression.

3. **Search engine trust signals.** Schema.org structured data tells Google that AMJ is a formal organization with verifiable contact details, a founder with credentials, and specific areas of expertise. Over time this increases the chance that Google displays a Knowledge Panel for AMJ Solutions Group and / or for Ana Nelson directly when their names are searched.

4. **Full image accessibility.** Every photograph and graphic on the site now has descriptive alt text — improving the experience for screen-reader users and giving search engines additional content signals (image SEO contributes to overall ranking).

5. **Re-indexing trigger.** The refreshed sitemap with a current modification date prompts Google to re-crawl the site on its next pass, which means the new positioning, social card, and structured data all reach search results faster.

---

## 7. Verification

After deployment, the following can be used to verify everything is rendering correctly:

| Tool | Purpose |
|---|---|
| https://www.linkedin.com/post-inspector/ | Preview how the site appears when shared on LinkedIn |
| https://cards-dev.twitter.com/validator | Preview how the site appears when shared on Twitter/X |
| https://developers.facebook.com/tools/debug/ | Preview how the site appears on Facebook / WhatsApp / Messenger |
| https://search.google.com/test/rich-results | Validate the Schema.org Organization and Person structured data |
| https://validator.schema.org/ | Cross-check structured data against the official Schema.org specification |
| Google Search Console | (If connected to the site) — monitor indexing, search appearance, and any technical issues. The refreshed sitemap can also be submitted here for immediate re-indexing. |

---

*End of report.*
