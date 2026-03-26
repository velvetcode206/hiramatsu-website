// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: { preset: 'cloudflare-pages' },
  modules: ['@nuxt/eslint', '@nuxt/image'],
  eslint: { config: { standalone: false } },
  image: { dir: 'assets/images', quality: 70 },
})
