// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
  ],

  css: [
    '@/assets/css/global.css',
    'animate.css/animate.min.css',
  ],

  plugins: [
    { src: '@/plugins/aos/aos.client.ts', mode: 'client' },
  ],

  googleFonts: {
    families: {
      'Dancing+Script': [700],
      Lato: [400, 500, 600, 700],
    },
  },

  eslint: {
    cache: true,
    failOnError: true,
  },
});
