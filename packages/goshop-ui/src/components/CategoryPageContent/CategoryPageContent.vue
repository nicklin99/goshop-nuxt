<template>
  <NarrowContainer>
    <div class="mb-20 px-4 md:px-0">
      <div class="flex justify-between">
        <h1
          class="my-10 font-bold typography-headline-3 md:typography-headline-2"
        >
          {{ title }}
        </h1>
      </div>
      <div class="md:flex gap-6">
        <CategorySidebar :is-open="isOpen" @close="close">
          <slot name="sidebar" />
        </CategorySidebar>
        <div class="flex-1 relative">
          <div class="flex justify-between items-center mb-6">
            <span class="font-bold font-headings md:text-lg">
              {{ $t("numberOfProducts", { count: total }) }}
            </span>
            <SfButton
              @click="open"
              variant="tertiary"
              class="md:hidden whitespace-nowrap"
            >
              <template #prefix>
                <SfIconTune />
              </template>
              {{ $t("listSettings") }}
            </SfButton>
          </div>
          <section v-if="pending" class="grid grid-cols-1 mb-10 md:mb-5">
            {{ $t('loading') }}
          </section>
          <CategoryEmptyState v-else-if="list.length === 0" />
          <section
            v-else
            class="grid grid-cols-1 2xs:grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mb-10 md:mb-5"
            data-testid="category-grid"
          >
            <ProductCard
              v-for="({ id, name, price, pic, href }, index) in list"
              :key="id"
              :name="name ?? ''"
              :price="price"
              :pic="pic ?? ''"
              :href="href"
              :priority="index === 0"
            />
          </section>
          <slot name="pagination" />
        </div>
      </div>
    </div>
  </NarrowContainer>
</template>

<script setup lang="ts">
import NarrowContainer from "../NarrowContainer/NarrowContainer.vue";
import CategoryEmptyState from "../CategoryEmptyState/CategoryEmptyState.vue";
import CategorySidebar from "../CategorySidebar/CategorySidebar.vue";
import { SfButton, SfIconTune, useDisclosure } from "@storefront-ui/vue";
import { whenever } from "@vueuse/core";
import type { CategoryPageContentProps } from "./types";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import ProductCard from "../ProductCard/ProductCard.vue";

defineProps<CategoryPageContentProps>();

const { isOpen, open, close } = useDisclosure();
const { isTablet, isDesktop } = useBreakpoints();

const emit = defineEmits(["update:selectedTags"]);

whenever(isTablet, close);
</script>
