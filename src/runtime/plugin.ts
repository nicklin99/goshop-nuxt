import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { OAuth2Config, Oauth2Client, BrowserSession} from 'goauth2'
import { reactive, toRefs } from 'vue'

export default defineNuxtPlugin((_nuxtApp) => {
  console.log('goauth injected')
  const { oauth2, cache } = useRuntimeConfig().public.VsfGoshop
  const oauth2Config = new OAuth2Config(oauth2)
  const store = new BrowserSession(oauth2.clientId, cache.location)
  const client = new Oauth2Client(oauth2Config, store)
  const state = reactive({
    pending: false,
  })
  _nuxtApp.provide("goauth", {
    goauth: client,
    ...toRefs(state),
  })
})
