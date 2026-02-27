import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: '#c96442',
          50: '#fef3ee',
          100: '#fde4d7',
          200: '#fac5ad',
          300: '#f5a079',
          400: '#d97757',
          500: '#c96442',
          600: '#b45530',
          700: '#8f4226',
          800: '#6d3320',
          900: '#4a221a',
          950: '#2a1210',
        },
        gray: {
          100: '#f5f4ee',
          200: '#dad9d4',
          300: '#b7b5a9',
          400: '#83827d',
          500: '#52514a',
          600: '#3e3e38',
          700: '#30302e',
          800: '#262624',
          900: '#1b1b19',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
    },
  },
  plugins: [starlightPlugin()],
};
