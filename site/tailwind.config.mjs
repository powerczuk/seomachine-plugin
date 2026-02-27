import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: colors.blue[500],
          50: colors.blue[50],
          100: colors.blue[100],
          200: colors.blue[200],
          300: colors.blue[300],
          400: colors.blue[400],
          500: colors.blue[500],
          600: colors.blue[600],
          700: colors.blue[700],
          800: colors.blue[800],
          900: colors.blue[900],
          950: colors.blue[950],
        },
        gray: {
          100: '#eceef2',
          200: '#c0c2c7',
          300: '#888b96',
          400: '#545861',
          500: '#353841',
          600: '#24272f',
          700: '#1e2028',
          800: '#17181c',
          900: '#111214',
        },
      },
    },
  },
  plugins: [starlightPlugin()],
};
