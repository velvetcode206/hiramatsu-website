// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: { preset: 'cloudflare-pages' },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/i18n'],
  eslint: { config: { standalone: false } },
  image: { dir: 'assets/images', quality: 70 },
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
    ],
  },
})
