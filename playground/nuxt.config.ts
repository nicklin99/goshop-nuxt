export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','../src/module'],
  routeRules: {
    "/api/vsf/**": { proxy: "http://47.111.176.58:18999/**" }
  },
  devtools: { enabled: true },
})
