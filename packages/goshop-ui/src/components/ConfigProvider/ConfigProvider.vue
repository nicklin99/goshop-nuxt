<template>
    <slot />
</template>

<script setup lang="ts">
import { provide, reactive } from 'vue';
import { type ConfigProvider } from './types';
import { configKey, paths } from '../utils';

const props = withDefaults(defineProps<Partial<ConfigProvider>>(), {
    locale: 'zh',
    currency: '¥',
    paths: () => paths,
    apiUrl: "https://www.kt-parts.com/api/mall",
    timeout: 10 * 1000, // 10S超时
    productRepositoryId: 2,
    logo: ""
})

const ctx = reactive(props) as ConfigProvider
provide(configKey, ctx)
</script>