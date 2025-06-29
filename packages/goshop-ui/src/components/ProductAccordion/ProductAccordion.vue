<template>
  <div data-testid="product-accordion">
    <UiAccordionItem
      summary-class="md:rounded-md w-full hover:bg-neutral-100 py-2 pl-4 pr-3 flex justify-between items-center"
      v-model="open[0]"
    >
      <template #summary>
        <h2 class="font-bold font-headings text-lg leading-6 md:text-2xl">
          {{ $t('productDetails') }}
        </h2>
      </template>
      <div v-html="product.product!.detailHtml || product.product!.detailMobileHtml"></div>
    </UiAccordionItem>
    <UiDivider class="my-4" />
    <UiAccordionItem
      summary-class="md:rounded-md w-full hover:bg-neutral-100 py-2 pl-4 pr-3 flex justify-between items-center"
      v-model="open[1]"
    >
      <template #summary>
        <h2 class="font-bold font-headings text-lg leading-6 md:text-2xl">
          {{ $t('Attributes') }}
        </h2>
      </template>
      <div class="grid grid-cols-2 gap-4">
        <div class="" v-for="attr in attributes">{{ attr.name }}: {{ attributesValues[attr.id!] }}</div>
      </div>
    </UiAccordionItem>
    <!-- <UiDivider class="my-4" />
    <UiAccordionItem
      v-model="open[2]"
      summary-class="md:rounded-md w-full hover:bg-neutral-100 py-2 pl-4 pr-3 flex justify-between items-center"
    >
      <template #summary>
        <h2 class="font-bold font-headings text-lg leading-6 md:text-2xl">
          {{ $t('customerReviews') }}
        </h2>
      </template>
      <UiReview v-for="review in commentList" :key="review.id" :review="review" class="mb-4" />
    </UiAccordionItem> -->
  </div>
</template>

<script setup lang="ts">
import UiDivider from "../UiDivider/Divider.vue"
import UiAccordionItem from "../UiAccordionItem/AccordionItem.vue"
import { computed, ref, toRefs } from 'vue';
import type { ProductAccordionPropsType } from './types';
const props = defineProps<ProductAccordionPropsType>();
const { product } = props
const attributes = computed(() => {
  return product.attributes ?? [];
});
const attributesValues = computed(() => {
  const values = product.attributeValues ?? [];
  const items: Record<string, any> = {};
  values.forEach((v) => {
    items[v.productAttributeId!] = v.value;
  });
  return items;
});
const open = ref<boolean[]>([true, true]);
</script>
