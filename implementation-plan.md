# Implementation Plan

## Step-by-step build

### Setup project
```bash
npx create-next-app@latest naomi-nails --typescript --tailwind --eslint --app
cd naomi-nails
npm install @radix-ui/react-icons framer-motion
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input textarea
```

### Layout & theme
- Create `app/globals.css` with Tailwind globals
- Add color palette (deep red #a2382f, cream #F9F4EF, dark brown)
- Configure Tailwind config for custom colors

### Shared components
- **Navbar** with logo + links
- **Footer** with newsletter + payment icons
- **Section wrapper** with consistent padding
- **Hero section** component
- **Service card** component
- **Gallery grid** component

### Pages
- **`/`** → Hero, featured work, story, testimonials, CTA
- **`/ourservises`** → Grid of 6 services (image, title, desc)
- **`/ourwork`** → Image gallery (responsive grid)
- **`/about`** → Story section, portrait, testimonials
- **`/contact-us`** → Map embed, contact form, hours

### Animations (Framer Motion)
- Fade-in for hero
- Hover effects on gallery cards
- Smooth transitions between sections
- Stagger animations for service cards

### Responsive testing
- Test mobile → tablet → desktop breakpoints
- Ensure touch-friendly buttons on mobile
- Optimize images for different screen sizes

### Deploy
- Push to GitHub
- Deploy on Vercel
- Configure custom domain if needed

## Timeline
- **Week 1:** Setup, layout, global styles
- **Week 2:** Build all pages
- **Week 3:** Animations, QA, deploy

## Team roles
- 1 dev for build
- 1 designer QA for visuals
- **Rituals:** daily stand-up, end-week QA review

## Optional integrations
- Vercel Analytics
- Google Maps API for dynamic maps
- Netlify Forms/Vercel for email form
- Image optimization with Next.js Image component
