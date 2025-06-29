<template>
  <details open>
    <summary>
      <ul>
        <li>
          <NuxtLink to="/category/137">/demo/1</NuxtLink>
        </li>
      </ul>
    </summary>
    <ul>
      <li>
        <NuxtLink to="/category/137/138">/demo/1/123</NuxtLink>
      </li>
    </ul>
  </details>
</template>

<script lang="ts" setup>
import { resolveComponent } from "vue"
const NuxtLink = resolveComponent("NuxtLink")
</script>