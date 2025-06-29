<template>
    <VsfConfigProvider v-bind="config" :storefront="storefront">
        <slot />
    </VsfConfigProvider>
</template>

<script lang="ts" setup>
import { VsfConfigProvider, type ConfigProvider } from "goshop-ui"
import { type ApiConfig, Goshop } from "goshop-api-client/api"
import { useAuth } from "#imports";

type Props = {
    config: ConfigProvider
}
const props = defineProps<Props>()

const storefront = new Goshop<ApiConfig>({
    baseURL: props.config.apiUrl
})
storefront.instance.interceptors.request.use(async (config) => {
    const { goauth } = useAuth()
    const token = await goauth.getToken()
    if (token?.idToken) {
        config.headers['Authorization'] = `Bearer ${token.idToken}`
    }
    return config
})
</script>