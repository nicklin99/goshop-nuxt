<template>
    <div v-if="pending">
      {{ $t('loading') }}
    </div>
    <div v-else-if="error || !product">
      {{ error }}
    </div>
    <div v-else>
      <VsfProductPage :product="product" />
    </div>
</template>

<script setup lang="ts">
import { useStore, VsfProductPage } from "goshop-ui";
import type { V1GetProductResponse } from "goshop-api-client/api";
import { useLazyAsyncData } from "#app";
const props = defineProps<{
    productId: string
}>()
const ctx = useStore()
const { data: product, pending, error } = await useLazyAsyncData<V1GetProductResponse>("product", async () => {
  return (await ctx.storefront.v1.productServiceGetProduct(props.productId)).data;
})
</script>
