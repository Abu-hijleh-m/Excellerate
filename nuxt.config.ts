export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  // Static generation output path
  buildDir: '../nuxt-build', 

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/ui'],
  compatibilityDate: "2025-01-21",
});
