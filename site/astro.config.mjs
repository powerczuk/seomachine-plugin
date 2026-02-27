import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'SEO Machine',
      description: 'The most comprehensive SEO plugin for Claude-powered tools. Keyword research, content optimization, technical audits, GEO, local SEO, and more.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/powerczuk/seomachine-plugin' },
      ],
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/powerczuk/seomachine-plugin/edit/main/site/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
          ],
        },
        {
          label: 'Commands',
          items: [
            { label: 'Overview', slug: 'commands/overview' },
            { label: 'Content Creation', slug: 'commands/content-creation' },
            { label: 'Site Architecture', slug: 'commands/site-architecture' },
            { label: 'GEO & AI Search', slug: 'commands/geo-ai-search' },
            { label: 'Local SEO', slug: 'commands/local-seo' },
            { label: 'Strategy & Analysis', slug: 'commands/strategy-analysis' },
          ],
        },
        {
          label: 'Skills & Agents',
          items: [
            { label: 'Skills Reference', slug: 'skills/reference' },
            { label: 'Agents Reference', slug: 'skills/agents' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'GEO — AI Search Optimization', slug: 'guides/geo' },
            { label: 'Local SEO', slug: 'guides/local-seo' },
            { label: 'Use Cases & Workflows', slug: 'guides/use-cases' },
          ],
        },
        {
          label: 'Integrations',
          items: [
            { label: 'Connectors Guide', slug: 'integrations/connectors' },
            { label: 'Platform Setup', slug: 'integrations/platforms' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Security', slug: 'reference/security' },
            { label: 'Changelog', slug: 'reference/changelog' },
            { label: 'Contributing', slug: 'reference/contributing' },
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
  ],
});
