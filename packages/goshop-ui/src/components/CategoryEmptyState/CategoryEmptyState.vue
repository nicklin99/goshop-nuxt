<template>
  <section class="flex flex-col items-center md:mt-16">
    <EmptyStateIcon width="192" height="192" />
    <p class="mt-8 font-medium">{{ $t("emptyStateText") }}</p>
    <p class="mt-4">{{ $t("emptyStateText2") }}</p>
    <SfButton :tag="NuxtLink" :href="paths.category" variant="secondary" class="mt-4">
      {{ $t("allProductsLinkText") }}
    </SfButton>
  </section>
</template>

<script setup lang="ts">
import EmptyStateIcon from "../images/something-went-wrong.svg?component";
import { SfButton } from "@storefront-ui/vue";
import { useStore } from "../../hooks/useStore/useStore";
const { paths, link: NuxtLink } = useStore();
</script>
