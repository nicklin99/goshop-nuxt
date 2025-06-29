export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','../src/module'],
  routeRules: {
    "/api/vsf/**": { proxy: "http://47.111.176.58:18999/**" }
  },
  VsfGoshop:{
    oauth2:{
      clientId: 'goshop_dev',
      clientSecret: '',
      redirectUri: 'http://localhost:3000/callback',
      scope: 'email',
      endpoint: {
        authURL: 'https://auth.wfell.top/oauth/login',
        tokenURL: 'https://auth.wfell.top/api/v1/oauth/token',
        refreshURL: 'https://auth.wfell.top/api/v1/token',
        userURL: "https://auth.wfell.top/api/v1/user",
        deviceAuthURL: ""
      }
    }
  },
  devtools: { enabled: false },
})
