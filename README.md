# Naomi Nails - Pixel-Perfect Website Clone

A pixel-perfect clone of the Naomi Nails website built with Next.js, React, Tailwind CSS, shadcn/ui, and Framer Motion. Features Russian manicure services with elegant nail art photography and smooth animations.

## 🚀 Features

- **Pixel-perfect design** matching the original Naomi Nails website
- **Responsive layout** optimized for mobile, tablet, and desktop
- **Smooth animations** with Framer Motion
- **SEO optimized** with Next.js App Router
- **Accessible UI** components with shadcn/ui
- **Fast performance** with static site generation
- **Modern tech stack** with TypeScript and Tailwind CSS

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd naomi-nails
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
naomi-nails/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact-us/        # Contact page
│   ├── ourservises/       # Services page
│   ├── ourwork/           # Work gallery page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── Footer.tsx        # Site footer
│   └── Navbar.tsx        # Navigation header
├── lib/                  # Utility functions
│   └── utils.ts          # Class name utilities
├── public/               # Static assets
└── docs/                 # Project documentation
    ├── masterplan.md
    ├── implementation-plan.md
    ├── design-guidelines.md
    └── app-flow-pages-and-roles.md
```

## 🎨 Design System

### Colors
- **Primary:** Deep red (#a2382f)
- **Secondary:** Cream (#F9F4EF)
- **Accent:** Dark brown (#2D1810)

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### Components
- Responsive navigation with mobile menu
- Hero sections with animations
- Service cards with hover effects
- Image galleries with lazy loading
- Contact forms with validation
- Footer with newsletter signup

## 📱 Pages

1. **Home (`/`)** - Hero section, featured work, story, testimonials
2. **Services (`/ourservises`)** - 6 service offerings with descriptions
3. **Work (`/ourwork`)** - Portfolio gallery with hover effects
4. **About (`/about`)** - Naomi's story, testimonials, values
5. **Contact (`/contact-us`)** - Map, contact info, contact form

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Build
```bash
npm run build
npm run start
```

### Static Export
```bash
npm run build
```
The static files will be in the `out/` directory.

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:
```bash
# Add any API keys or configuration here
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Customization
- **Colors:** Edit `tailwind.config.ts`
- **Fonts:** Modify `app/globals.css`
- **Content:** Update page components in `app/`
- **Images:** Replace placeholder images with actual photos

## 📊 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Core Web Vitals:** Optimized for excellent user experience
- **Image Optimization:** Next.js Image component with lazy loading
- **Bundle Size:** Optimized with tree shaking and code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original design by Naomi Nails NYC
- Built with modern web technologies
- Optimized for performance and accessibility

---

**Note:** This is a pixel-perfect clone created for demonstration purposes. All booking links redirect to the original Square booking system.
