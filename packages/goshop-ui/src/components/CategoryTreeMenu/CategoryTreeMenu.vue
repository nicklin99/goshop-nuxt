<template>
  <div
    class="py-2 px-4 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md"
  >
    <div>{{ $t('category') }}</div>
  </div>
  <ul class="mt-4 mb-6 md:mt-2">
    <CategoryTreeMenuItem
      v-for="category in categories"
      :expanded="ctx.expanded.includes(category.id!)"
      :key="category.id"
      :name="category.name!"
      :href="category.href"
      :id="category.id!"
      :level="0"
      :child-ids="category.childIds!"
      :treeMap="treeMap"
      :selected="value === category.id!"
      :show-status="category.showStatus"
    />
  </ul>
</template>

<script setup lang="ts">
import { type CategoryMenuContext, type CategoryTreeMenuProps } from './types';
import CategoryTreeMenuItem from './CategoryTreeMenuItem.vue';
import { computed, provide} from 'vue';
import { categoryKey } from '../utils';

const props = defineProps<CategoryTreeMenuProps>();
const categories = computed(() => props.childIds.map( v => props.treeMap.get(v)!))

const ctx = computed<CategoryMenuContext>(() => {
  return {
    selected: props.value,
    expanded: props.expanded ?? []
  }
})
provide(categoryKey, ctx)
</script>
