<template>
  <section class="p-4 xl:p-6 md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky"
    data-testid="purchase-card">
    <!-- <UiTag variant="secondary" strong class="mb-4">
      <SfIconSell size="sm" class="mr-1" />
      <span class="mr-1">{{ $t(`sale`) }}</span>
    </UiTag> -->
    <h1 class="mb-1 font-bold typography-headline-4" data-testid="product-name">{{ product.product?.name }}</h1>
    <div class="my-1">
      <span v-if="priceValue" class="mr-2 text-primary font-bold font-headings text-2xl" data-testid="price">
        {{ currency }} {{ priceValue }}
      </span>
      <!-- <span class="text-base font-normal text-neutral-500 line-through">
        ${{ product.price?.regularPrice.amount }}
      </span> -->
    </div>
    <!-- <div class="inline-flex items-center mt-4 mb-2">
      <SfRating size="xs" :value="product.rating?.average" :max="5" />
      <SfCounter class="ml-1" size="xs">{{ product.rating?.count }}</SfCounter>
      <SfLink href="#" variant="secondary" class="ml-2 text-xs text-neutral-500">
        {{ $t('reviewsCount', { count: product.rating?.count }) }}
      </SfLink>
    </div> -->
    <p class="mb-4 font-normal typography-text-sm" data-testid="product-description">
      {{ product.product?.subTitle }}
    </p>
    <ProductProperties v-if="skus && skus.length > 0" :product="product" ref="skuRef" />
    <div class="py-4 mb-4 border-gray-200">
      <!-- <UiTag class="w-full mb-4">
        <SfIconShoppingCartCheckout />
        {{ $t('numberInCart', { count: 1 }) }}
      </UiTag> -->
      <div class="flex">
        <!-- <UiQuantitySelector v-model="quantitySelectorValue" class="min-w-[145px] flex-grow flex-shrink-0 basis-0" /> -->
        <SfButton size="lg" variant="secondary" class="flex-grow-[2] flex-shrink basis-auto whitespace-nowrap"
          @click="handleAddCartOrBuy('cart')">
          <template #prefix>
            <SfIconShoppingCart size="sm" />
          </template>
          {{ $t('addToCart') }}
        </SfButton>
      </div>
      <div class="flex flex-col mt-4">
        <SfButton size="lg" class="flex-grow-[2] flex-shrink basis-auto whitespace-nowrap"
          @click="handleAddCartOrBuy('buy')">
          <template #prefix>
            <SfIconShoppingCart size="sm" />
          </template>
          {{ $t('buyNow') }}
        </SfButton>
      </div>
      <!-- <div class="flex justify-center mt-4 gap-x-4">
        <SfButton size="sm" variant="tertiary">
          <template #prefix>
            <SfIconCompareArrows size="sm" />
          </template>
          {{ $t('compare') }}
        </SfButton>
        <SfButton size="sm" variant="tertiary">
          <SfIconFavorite size="sm" />
          {{ $t('addToList') }}
        </SfButton>
      </div> -->
    </div>
    <!-- <div class="flex first:mt-4">
      <SfIconPackage size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      {{ $t('saleCount') }}:
      <p class="text-sm">
        {{ product.sale }}
      </p>
    </div> -->
    <!-- <div class="flex mt-4">
      <SfIconWarehouse size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      {{ $t('stockCount') }}:
      <p class="text-sm">
        {{ product.stock }}
      </p>
    </div> -->
    <!-- <UiAlert v-if="alertCartUpdate" class="fixed top-24 right-4">
      <SfIconCheckCircle class="my-2 mr-2 text-positive-700 shrink-0" />
      <p class="py-2 mr-2">{{ $t('cartUpdateMessage') }}.</p>
      <button type="button"
        class="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900 focus-visible:outline focus-visible:outline-offset"
        aria-label="Close positive alert" @click="alertCartUpdate = false">
        <SfIconClose class="hidden md:block" />
        <SfIconClose size="sm" class="block md:hidden" />
      </button>
    </UiAlert> -->
  </section>
</template>

<script setup lang="ts">
import UiAlert from "../UiAlert/Alert.vue"
import ProductProperties from "../ProductProperties/ProductProperties.vue"
import {
  SfButton,
  SfIconCheckCircle,
  SfIconClose,
  // SfCounter,
  // SfLink,
  // SfRating,
  // SfIconSafetyCheck,
  // SfIconCompareArrows,
  SfIconWarehouse,
  // SfIconPackage,
  // SfIconFavorite,
  // SfIconSell,
  // SfIconShoppingCartCheckout,
  SfIconShoppingCart,
} from '@storefront-ui/vue';
import type { PurchaseCardProps } from './types';
import { computed, ref } from 'vue';
import type { UserAction } from "../ConfigProvider/types";
import { useStore } from "../../hooks/useStore/useStore";

const { product } = defineProps<PurchaseCardProps>();

// const quantitySelectorValue = ref(1);
// const alertCartUpdate = ref(false);
const skuRef = ref();

const emit = defineEmits<{
  addCartOrBuy: [action: UserAction, productID: string, skuID: string | null, err?: Error]
}>()
const ctx = useStore()
const handleAddCartOrBuy = async (action: UserAction) => {
  const productId = product.product?.id!;
  if (skuRef.value) {
    const skuId = skuRef.value?.selectedSku?.id;
    if (productId && skuId) {
      emit('addCartOrBuy', action, productId, skuId);
      ctx.onAddCartOrBuy(action, productId, skuId)
    } else {
      const err = new Error("select sku")
      emit('addCartOrBuy', action, productId, skuId, err);
      ctx.onAddCartOrBuy(action, productId, skuId, err)
    }
  } else {
    emit('addCartOrBuy', action, productId, null);
    ctx.onAddCartOrBuy(action, productId, null)
  }
}

const currency = ctx.currency
const priceValue = computed(() => {
  return product.product?.promotionPrice || product.product?.price || product.product?.originalPrice
})
</script>
