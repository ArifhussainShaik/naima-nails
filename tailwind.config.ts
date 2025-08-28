import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a2382f',
          50: '#fef2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f38888',
          500: '#ea5a5a',
          600: '#d73527',
          700: '#a2382f',
          800: '#92312a',
          900: '#7c2d2a',
        },
        cream: {
          DEFAULT: '#F9F4EF',
          50: '#FEFCFA',
          100: '#F9F4EF',
          200: '#F3EAE0',
          300: '#EDE0D1',
          400: '#E1CDB8',
          500: '#D5BA9F',
        },
        accent: {
          DEFAULT: '#2D1810',
          50: '#F5F3F1',
          100: '#E8E2DD',
          200: '#D1C5BB',
          300: '#BAA899',
          400: '#A38B77',
          500: '#8C6E55',
          600: '#705844',
          700: '#544233',
          800: '#382C22',
          900: '#2D1810',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'hover-lift': 'hoverLift 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
