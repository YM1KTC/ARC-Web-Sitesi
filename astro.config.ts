import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

import sanity from '@sanity/astro';

import { unified } from '@astrojs/markdown-remark';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = true;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'server',

  // Astro 7'de varsayılan 'jsx' oldu (satır içi öğeler arasındaki boşluğu siler);
  // mevcut HTML çıktısını korumak için eski davranış.
  compressHTML: true,

  redirects: {
    // Digi Voice yazısının eski (mükerrer taslak) slug'ı kanonik adrese yönlensin.
    '/digi-voice-nedir-telsizsiz-dmr-baglantisi-icin-android-kurulum-rehberi': {
      status: 301,
      destination: '/digi-voice-app',
    },
    // Kaldırılan demo sayfası (sabit, gerçek olmayan röle verisi gösteriyordu).
    '/repeater-durumu': { status: 301, destination: '/' },
    // Yazım hatalı eski slug'lar düzeltilmiş adreslere yönlensin.
    '/arzimut-haritasi-anten-yonlendirme': { status: 301, destination: '/azimut-haritasi-anten-yonlendirme' },
    '/dmr-dijital-mobisle-radio-nedir': { status: 301, destination: '/dmr-digital-mobile-radio-nedir' },
    '/locater-locater-grid-map': { status: 301, destination: '/qth-locator-maidenhead-grid-square' },
  },

  integrations: [sitemap({
    // noindex etiket sayfaları, boş etkinlik sayfası ve önizleme/API rotaları sitemap'e girmesin.
    filter: (page) => !/\/(etiket|onizleme|api)\/|\/etkinlikler\/?$/.test(page),
  }), icon({
    include: {
      tabler: ['*'],
      'flat-color-icons': [
        'template',
        'gallery',
        'approval',
        'document',
        'advertising',
        'currency-exchange',
        'voice-presentation',
        'business-contact',
        'database',
      ],
    },
  }), ...whenExternalScripts(() =>
    partytown({
      config: { forward: ['dataLayer.push'] },
    })
  ), compress({
    CSS: true,
    HTML: {
      'html-minifier-terser': {
        removeAttributeQuotes: false,
      },
    },
    Image: false,
    JavaScript: true,
    SVG: true,
    Logger: 1,
  }), astrowind({
    config: './src/config.yaml',
  }), sanity({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET ?? 'production',
    useCdn: true,
    studioBasePath: '/admin',
  }), react()],

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  markdown: {
    // Astro 7'nin varsayılan işlemcisi Sätteri; remark/rehype eklentileri için unified'da kal.
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
    }),
  },

  vite: {
    // Tailwind v4: @astrojs/tailwind entegrasyonu yerine resmî Vite eklentisi.
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },

  adapter: netlify(),
});