<template>
    <VsfCart :pending="pending" :error="error" :cart="cart" :checkoutUrl="ctx.paths.checkout" />
</template>

<script setup lang="ts">
import { useLazyAsyncData } from '#app';

const ctx = useStore()
const { data: cart, pending, error } = useLazyAsyncData(async () => {
    const ret = await ctx.storefront.v1.cartServiceGetCart({
        userId: "15"
    })
    return ret.data
}, {
    server: false
})
</script>