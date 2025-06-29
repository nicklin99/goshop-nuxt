// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  alias: {
    'goshop-ui': fileURLToPath(new URL('./packages/goshop-ui/src', import.meta.url)),
    'goshop-api-client/*': fileURLToPath(new URL('./packages/goshop-api-client/src/*', import.meta.url)),
    'goauth2': fileURLToPath(new URL('./packages/goauth2/src', import.meta.url)),
  },
});
