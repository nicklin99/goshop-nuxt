<template>
  <NarrowContainer>
    <div class="py-5 md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
      <section class="grid-in-left-top md:h-full xl:max-h-[700px]">
        <ProductGallery :images="galleryImages" />
      </section>
      <section class="mb-10 grid-in-right md:mb-0">
        <PurchaseCard
          :product="product"
          :attrs="product.attributes"
          :attr-values="product.attributeValues"
          :skus="product.skus"
        />
      </section>
      <section class="grid-in-left-bottom md:mt-8">
        <UiDivider class="mt-6 mb-2 md:mt-8" />
        <ProductAccordion
          :product="product"
          :comment-list="commentList"
        />
      </section>
    </div>
  </NarrowContainer>
</template>

<script setup lang="ts">
import PurchaseCard from "../PurchaseCard/PurchaseCard.vue"
import ProductAccordion from "../ProductAccordion/ProductAccordion.vue";
import UiDivider from "../UiDivider/Divider.vue"
import NarrowContainer from "../NarrowContainer/NarrowContainer.vue"
import type { ProductDetailResponse, SfImage } from "../../types";
import { computed } from "vue";
import ProductGallery from "./ProductGallery.vue";

type VsfProductProps = {
  product: ProductDetailResponse
}
const props = defineProps<VsfProductProps>()
const { product } = props

const productInfo = computed(() => {
  return product.product
})
// const brandInfo = shallowRef<BrandInfo>(product.value!.brand);
const commentList = computed(() => {
  return []
})

const pics = computed<string[]>(() => {
  const thumbs = productInfo.value!.albumPics ? productInfo.value!.albumPics.split(",") : [];
  if (productInfo.value?.pic) {
    thumbs.unshift(productInfo.value?.pic)
  }
  return thumbs;
});

const galleryImages = computed<SfImage[]>(() => {
  return pics.value.map((v) => ({ url: v }));
});
</script>
