// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  components: true,
  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://erobotaf.local.softpro.ua",
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
    },
  },
  css: ["~/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
