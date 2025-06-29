<template>
  <template v-if="showStatus">
    <SfAccordionItem v-model="open" class="w-full md:max-w-[376px]" v-if="childIds.length">
      <template #summary>
        <NuxtLink
          :to="href"
          class="rounded-md flex justify-between p-2 px-4 mb-2"
          :class="{ 'bg-primary-100': open }"
        >
          <p class="font-semibold" :class="[open ? '' : null, `pl-${level * 2}`]">{{ name }}</p>
          <SfIconChevronLeft :class="['text-neutral-500', open ? 'rotate-90' : '-rotate-90']" />
        </NuxtLink>
      </template>
      <CategoryTreeMenuItem
        v-for="category in children"
        :key="category.id"
        :name="category.name!"
        :href="category.href"
        :id="category.id!"
        :level="level + 1"
        :selected="category.id === ctx?.selected"
        :show-status="category.showStatus"
        :child-ids="category.childIds!"
        :expanded="ctx!.expanded.includes(category.id!)"
        :tree-map="treeMap"
      />
    </SfAccordionItem>
    <SfListItem
      v-else
      size="lg"
      :class="['md:sf-list-item-sm md:py-1.5 sf-list-item  rounded-md', { 'font-medium': selected }]"
      data-testid="category-tree-item"
    >
      <NuxtLink :to="href">
        <span class="flex items-center" :class="{ 'text-primary-600': selected, [`pl-${level * 2}`]: true }">
          <span class="text-base capitalize flex items-center" data-testid="list-item-menu-label">
            <slot />
            {{ name }}
          </span>
          <!-- <SfCounter v-if="Number(count) > -1" class="md:text-sm font-normal">{{ count }}</SfCounter> -->
        </span>
        <!-- <template #suffix>
          <SfIconCheck v-if="selected" size="sm" class="text-primary-700" />
        </template> -->
      </NuxtLink>
    </SfListItem>
  </template>
</template>

<script setup lang="ts">
import { SfListItem, SfAccordionItem, SfIconChevronLeft } from '@storefront-ui/vue';
import { type CategoryTreeMenuItemProps, type CategoryMenuContext } from './types';
import { computed, inject, ref } from 'vue';
import { categoryKey } from '../utils';
import { useStore } from "../../hooks/useStore/useStore";
const ctx = inject<CategoryMenuContext>(categoryKey)
const props = defineProps<CategoryTreeMenuItemProps>();
const children = computed(() => props.childIds.map( v => props.treeMap.get(v)!))
const { link: NuxtLink } = useStore()
const open = ref(props.expanded)
</script>
