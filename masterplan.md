# Masterplan

## 30-second elevator pitch
Pixel-perfect clone of Naomi Nails website. Built with Next.js + React + Tailwind + shadcn/ui + Framer Motion. Static, fast, SEO-ready. "Book Now" links out to Square.online.

## Problem & mission
**Problem:** Client needs a sleek, conversion-driven site quickly.
**Mission:** Replicate existing design 1:1, responsive and accessible.

## Target audience
- NYC nail salon clients
- Mobile-first bookers
- Visitors who rely on photos/testimonials to decide

## Core features
- Home hero with CTA
- Services grid (6 cards)
- Work gallery grid
- About page with story + testimonials
- Contact page with form + map
- Footer with newsletter + payment icons

## Tech stack
- **Next.js (React)** — static + SEO
- **TailwindCSS** — fast, responsive design
- **shadcn/ui** — accessible UI kit
- **Framer Motion** — smooth animations
- **Vercel** — deploy & CDN

## Conceptual data model
- **Service:** id, title, image, description
- **WorkItem:** id, image(s), tags
- **Page:** slug, title, sections[]
- **Testimonial:** id, name, quote

## UI design principles
- "Don't make me think": CTA always visible
- Big-Bang rule: hero explains purpose instantly
- Mobile-first, AA contrast
- 3 clicks max for booking

## Security & compliance
- HTTPS everywhere
- Static build reduces risks
- Contact form optional serverless (Netlify/Vercel)
- No sensitive data stored

## Roadmap
- **MVP:** Static pages, responsive, booking links
- **V1:** Lazy-loading images, SEO metadata, accessibility polish
- **V2:** Optional form integration, content config JSON, multilingual

## Risks
- Font mismatch → use closest Google Fonts
- Image layout quirks → test on all breakpoints
- Booking expectations → clear "Book via Square" link

## Future expansion
- Add CMS later
- Google Reviews API for live testimonials
- Multilingual support
