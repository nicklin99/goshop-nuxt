import { defineNuxtModule, addPlugin, createResolver, addComponent, installModule, addVitePlugin, addTypeTemplate, addImports, addImportsDir } from '@nuxt/kit'
import svgLoader from 'vite-svg-loader'
import type { BrowserCacheLocation, OauthConfig } from 'goauth2'
import { defu } from 'defu'
import { fileURLToPath } from 'url'

// Module options TypeScript interface definition
export interface ModuleOptions {
  oauth2: OauthConfig
  cache: {
    location: BrowserCacheLocation
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vsfkit-goshop',
    configKey: 'VsfGoshop',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    oauth2: {
      clientId: '',
      clientSecret: '',
      redirectUri: '',
      scope: '',
      endpoint: {
        authURL: '',
        tokenURL: '',
        refreshURL: '',
        userURL: "",
        deviceAuthURL: ""
      }
    },
    cache: {
      location: 'localStorage',
    }
  },
  async setup(_options, _nuxt) {
    // 导出到运行时
    _nuxt.options.runtimeConfig.public.VsfGoshop = defu(
      _nuxt.options.runtimeConfig.public.VsfGoshop || {}, {
      ..._options
    })
    const resolver = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    _nuxt.options.build.transpile.push(resolver.resolve(runtimeDir))
    await installModule('@nuxtjs/i18n', {
      defaultLocale: 'zh',
      bundle: {
        optimizeTranslationDirective: false,
      },
      vueI18n: resolver.resolve('./runtime/i18n.config.ts'),
      locales: [
        {
          code: 'en',
          name: 'en_US',
        },
        {
          code: 'zh',
          name: 'zh_CN',
        },
      ],
    })
    await installModule("@tdesign-vue-next/nuxt", { esm: false, resolveIcons: true })
    addComponent({
      name: 'VsfLayout',
      export: 'VsfLayout',
      filePath: "goshop-ui",
    })
    addComponent({
      name: 'VsfCategory',
      filePath: resolver.resolve('./runtime/components/VsfCategory.vue'),
    })
    addComponent({
      name: 'VsfApp',
      filePath: resolver.resolve('./runtime/components/VsfApp.vue'),
    })
    addComponent({
      name: 'VsfProduct',
      filePath: resolver.resolve('./runtime/components/VsfProduct.vue'),
    })
    addComponent({
      name: 'VsfCart',
      export: 'VsfCart',
      filePath: "goshop-ui",
    })
    addImports([
      { from: "goshop-ui", name: 'useStore'}
    ])
    addImportsDir(resolver.resolve('./runtime/composables'))

    addVitePlugin(svgLoader)
    addTypeTemplate({
      filename: 'types/goshop.d.ts',
      getContents: () => [
        '/// <reference types="vite-svg-loader" />',
        `declare module '#app' {
          interface NuxtApp {
            $goauth: {
              goauth: import("goauth2").Oauth2Client
              pending: Ref<boolean>
            }
          }
        }
        // declare global {
        //  export type { PageInfo } from "tdesign-vue-next"
        // }
        /// <reference types="tdesign-vue-next" />
        export {};`
      ].join('\n'),
    })
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin({
      src: resolver.resolve('./runtime/plugin'),
      // mode: 'client'
    })
  },
})
