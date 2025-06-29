<template>
    <VsfConfigProvider v-bind="config" :storefront="storefront">
        <slot />
    </VsfConfigProvider>
</template>

<script lang="ts" setup>
import { VsfConfigProvider, type ConfigProvider } from "goshop-ui"
import { type ApiConfig, Goshop } from "goshop-api-client/api"
import { useAuth, useStoreAuth, watchEffect } from "#imports";

type Props = {
    config: ConfigProvider
}
const props = defineProps<Props>()
const { goauth, pending } = useAuth()
const { state } = useStoreAuth()
const storefront = new Goshop<ApiConfig>({
    baseURL: props.config.apiUrl
})
storefront.instance.interceptors.request.use(async (config) => {
    if (import.meta.client) {
        if (state.value.idToken) {
            const token = await goauth.getToken()
            config.headers['Authorization'] = `Bearer ${token.idToken}`
        }
    }
    return config
})

if (import.meta.client) {
    watchEffect(async () => {
        if (!pending.value) {
            const ret = await goauth.getAuthResult()
            Object.assign(state.value, ret)
        }
    })
}
</script>