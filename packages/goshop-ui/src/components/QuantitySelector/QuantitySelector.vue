<template>
  <div class="flex items-center justify-between mt-4 sm:mt-0" data-testid="quantity-selector">
    <div class="flex border border-neutral-300 rounded-md">
      <SfButton variant="tertiary" :disabled="count <= minValue" square class="rounded-r-none" :aria-controls="inputId"
        :aria-label="$t('quantitySelectorDecrease')" data-testid="quantity-selector-decrease-button" @click="dec()">
        <SfIconRemove />
      </SfButton>
      <input :id="inputId" v-model="count" type="number" role="spinbutton" :class="inputClasses" :min="minValue"
        :max="maxValue" data-testid="quantity-selector-input" :aria-label="$t('quantitySelector')"
        @input="handleOnChange" />
      <SfButton variant="tertiary" :disabled="count >= maxValue" square class="rounded-l-none" :aria-controls="inputId"
        :aria-label="$t('quantitySelectorIncrease')" data-testid="quantity-selector-increase-button" @click="inc()">
        <SfIconAdd />
      </SfButton>
    </div>
    <button v-if="id" aria-label="Remove" type="button"
      class="text-neutral-500 text-xs font-light ml-auto flex items-center px-3 py-2" @click.prevent="handleRemoveCart">
      <SfIconDelete />
      <span class="hidden ml-1.5 sm:block"> {{ $t('remove') }} </span>
    </button>
  </div>
</template>

<script setup lang="ts">
// [bug] 注意通过 props.id 判断在购物车，id为购物车记录id
import { clamp } from '@storefront-ui/shared';
import { SfButton, SfIconAdd, SfIconRemove, SfIconDelete, useId } from '@storefront-ui/vue';
import { useCounter } from '@vueuse/core';
import type { QuantitySelectorProps } from './types';
import { computed, watch } from 'vue';

const emit = defineEmits(['update:modelValue', 'removeCartItem']);

const { value = 1, minValue = 1, maxValue = 999, id } = defineProps<QuantitySelectorProps>();

const inputId = useId();
const { count, inc, dec, set } = useCounter(value);

const inputClasses = computed(
  () =>
    'appearance-none flex-1 mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm',
);

const handleOnChange = (event: Event) => {
  const currentValue = (event.target as HTMLInputElement)?.value;
  const nextValue = Number.parseFloat(currentValue);
  set(clamp(nextValue, minValue, maxValue));
};

watch(count, (quantity) => {
  emit('update:modelValue', quantity);
});

const handleRemoveCart = async () => {
  emit('removeCartItem', id)
};
</script>
