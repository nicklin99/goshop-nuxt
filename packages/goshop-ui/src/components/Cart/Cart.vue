<template>
    <div class="py-3">
        <SfLoaderCircular v-if="pending" class="mx-auto" size="4xl" />
        <div v-else-if="error || !cart">
            {{ error }}
        </div>
        <div v-else-if="cart.items!.length > 0" class="md:grid md:grid-cols-12 md:gap-x-6"
            data-testid="cart-page-content">
            <div class="col-span-7 mb-10 md:mb-0">
                <div v-for="{ id, productAttr, productName, quantity, price, productPic, productSkuId, productId } in cart.items"
                    :key="id">
                    <VsfCartProductCard :productSkuId="productSkuId" :productId="productId!" :attributes="productAttr"
                        :image-url="productPic" :image-alt="productName" :name="productName ?? ''" :price="price"
                        :special-price="0" :min-value="1" :value="quantity" :id="id!" />
                </div>
            </div>
            <OrderSummary :len="cart.items?.length ?? 0" :total="total" class="col-span-5 md:sticky md:top-20 h-fit">
                <SfButton :tag="NuxtLink" :to="checkoutUrl" size="lg" class="w-full mb-4 md:mb-0 hover:bg-primary-600 cursor-pointer">
                    {{ $t('goToCheckout') }}
                </SfButton>
            </OrderSummary>
        </div>
        <div v-else class="flex items-center justify-center flex-col pt-24 pb-32" data-testid="cart-page-content">
            <img src="../images/empty-cart.svg" :alt="$t('emptyCartImgAlt')" width="192" height="192" />
            <h2 class="mt-8">{{ $t('emptyCart') }}</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SfButton, SfLoaderCircular } from '@storefront-ui/vue';
import VsfCartProductCard from '../CartProductCard/CartProductCard.vue'
import { type ConfigProvider } from '../ConfigProvider/types';
import { configKey } from '../utils'
import type { V1Cart } from 'goshop-api-client/api';
import OrderSummary from '../OrderSummary/OrderSummary.vue';
import { inject } from 'vue';

defineProps<{
    pending: boolean,
    error: Error,
    cart: V1Cart
    checkoutUrl: string
    total?: any
}>()

const { link: NuxtLink } = inject<ConfigProvider>(configKey)!
</script>