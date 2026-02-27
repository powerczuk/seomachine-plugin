import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [
    starlight({
      title: 'SEO Machine',
      description: 'Najlepszy plugin SEO do narzędzi opartych na Claude. Badanie słów kluczowych, optymalizacja treści, audyty techniczne, GEO, lokalne SEO i więcej.',
      defaultLocale: 'pl',
      social: {
        github: 'https://github.com/powerczuk/seomachine-plugin',
      },
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/powerczuk/seomachine-plugin/edit/main/site/',
      },
      expressiveCode: {
        themes: ['github-light', 'github-dark'],
        styleOverrides: {
          borderRadius: '1rem',
          codePaddingBlock: '0.875rem',
          codePaddingInline: '1rem',
          codeFontSize: '0.84rem',
          codeLineHeight: '1.6',
          uiFontSize: '0.7rem',
          frames: {
            shadowColor: 'transparent',
          },
        },
      },
      sidebar: [
        {
          label: 'Pierwsze kroki',
          items: [
            { label: 'Wprowadzenie', slug: 'getting-started/introduction' },
            { label: 'Instalacja', slug: 'getting-started/installation' },
            { label: 'Szybki start', slug: 'getting-started/quick-start' },
          ],
        },
        {
          label: 'Komendy',
          items: [
            { label: 'Przegląd', slug: 'commands/overview' },
            { label: 'Tworzenie treści', slug: 'commands/content-creation' },
            { label: 'Architektura strony', slug: 'commands/site-architecture' },
            { label: 'GEO i wyszukiwanie AI', slug: 'commands/geo-ai-search' },
            { label: 'Lokalne SEO', slug: 'commands/local-seo' },
            { label: 'Strategia i analiza', slug: 'commands/strategy-analysis' },
          ],
        },
        {
          label: 'Umiejętności i agenci',
          items: [
            { label: 'Skills', slug: 'skills/reference' },
            { label: 'Agenci', slug: 'skills/agents' },
          ],
        },
        {
          label: 'Przewodniki',
          items: [
            { label: 'GEO — optymalizacja pod AI', slug: 'guides/geo' },
            { label: 'Lokalne SEO', slug: 'guides/local-seo' },
            { label: 'Przypadki użycia', slug: 'guides/use-cases' },
          ],
        },
        {
          label: 'Integracje',
          items: [
            { label: 'Konektory', slug: 'integrations/connectors' },
            { label: 'Konfiguracja platform', slug: 'integrations/platforms' },
          ],
        },
        {
          label: 'Referencje',
          items: [
            { label: 'Słownik pojęć', slug: 'reference/glossary' },
            { label: 'Bezpieczeństwo', slug: 'reference/security' },
            { label: 'Changelog', slug: 'reference/changelog' },
            { label: 'Współtworzenie', slug: 'reference/contributing' },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'og:image',
            content: '/og-image.png',
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
    preact(),
  ],
});
