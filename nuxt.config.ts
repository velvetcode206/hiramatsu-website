import { createResolver } from 'nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: { preset: 'cloudflare-pages' },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
        dir: 'ltr',
      },
      titleTemplate: '%s · Associação Hiramatsu',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content: 'Associação Hiramatsu · Escola Samurai',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png',
        },
      ],
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/font.css',
    '~/assets/css/transition.css',
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  eslint: { config: { standalone: false } },
  image: { dir: 'assets/images', quality: 80 },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: [
      {
        code: 'pt-BR',
        name: 'Português (Brasil)',
        file: 'pt-BR.yml',
      },
      {
        code: 'en-US',
        name: 'English (US)',
        file: 'en-US.yml',
      },
      {
        code: 'ja-JP',
        name: '日本語',
        file: 'ja-JP.yml',
      },
    ],
  },
  tailwindcss: {},
  icon: {
    provider: 'server',
    customCollections: [
      {
        prefix: 'custom',
        dir: resolve('./app/assets/icons'),
        recursive: true,
        normalizeIconName: false,
      },
    ],
  },
  vueuse: {},
  site: {
    url: 'https://hiramatsu-website.pages.dev/',
    name: 'Associação Hiramatsu',
    trailingSlash: true,
  },
  robots: { blockAiBots: true },
})
