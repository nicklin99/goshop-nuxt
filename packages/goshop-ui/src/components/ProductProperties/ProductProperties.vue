<template>
  <div class="px-0">
    <fieldset class="pb-4" v-for="(spec, i) in specs" :key="i">
      <legend
        class="block mb-2 text-base font-medium leading-6 text-neutral-900"
      >
        {{ spec }}
      </legend>
      <span
        v-for="{ value } in getAttributeList(spec)"
        class="mr-2 mb-2 inline-block uppercase"
        :key="value"
      >
        <SfChip
          class="min-w-[48px]"
          size="sm"
          :input-props="{
            onClick: (e) => value == getAttribute(spec) && e.preventDefault(),
          }"
          :model-value="value === getAttribute(spec)"
          @update:model-value="
            value !== getAttribute(spec) && changeAttr(spec, value)
          "
        >
          {{ value }}
        </SfChip>
      </span>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { SfChip } from "@storefront-ui/vue";
import type { ProductPropertiesProps } from "./types";
import { computed, toRefs } from "vue";
import { useProductAttribute } from "../../hooks/useProductAttribute";

const props = defineProps<ProductPropertiesProps>();
const { product } = props
const attrs = computed(() => {
  return product.attributes?.filter((v) => v.type === 0) ?? [];
});

const {
  getAttributeList,
  getAttribute,
  setAttribute,
  specs,
  getSku,
  selectedSku,
} = useProductAttribute(product.skus ?? [], attrs.value);
const changeAttr = (attributeName: string, attributeValue: string) => {
  setAttribute(attributeName, attributeValue);
  const sku = getSku();
  // 修改价格、库存、主图
  if (sku) {
    // 单品优惠使用促销价
    if (product.product!.promotionType === 1) {
      product.product!.price = sku.promotionPrice;
    } else {
      product.product!.price = sku.price;
    }
    product.product!.stock = sku.stock;
    // [bug] 可能无图片不做处理
    if (sku.pic) {
      product.product!.pic = sku.pic;
    }
  } else {
    product.product!.price = product.product!.price;
    product.product!.stock = product.product!.stock;
    product.product!.pic = product.product!.pic;
  }
};

defineExpose({
  selectedSku,
});
</script>
