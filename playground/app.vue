<template>
  <VsfApp :config="{
    apiUrl: `${useRequestURL().protocol}//${useRequestURL().host}/api/vsf`,
    paths: {
      category: '/',
      product: '/item',
      cart: '/cart'
    },
    productHref: (id) => `/item/${id}`,
    logo: AppLogo,
    appConfig: {
      footerText: 'copyright 2025'
    }
  }">
    <VsfLayout>
      <template #left>
        <div @click="expanded = !expanded" class="md:hidden mt-1 fill-white"
          :class="{ 'menu-open': expanded }">
          <svg viewBox="0 0 100 80" width="40" height="25">
            <rect class="menu-icon-top mobile-menu-inner" width="100" height="8"></rect>
            <rect class="menu-icon-middle mobile-menu-inner" y="30" width="100" height="8"></rect>
            <rect class="menu-icon-bottom mobile-menu-inner" y="60" width="100" height="8"></rect>
          </svg>
        </div>
        <div class="items-center gap-5 hidden md:flex flex-col md:flex-row" :class="{ 'menus-open': expanded }">
          <NuxtLink class="text-white block hover:bg-primary-800 p-2 rounded" to="/">Home</NuxtLink>
          <NuxtLink class="text-white block hover:bg-primary-800 p-2 rounded" to="/">Catalog</NuxtLink>
          <NuxtLink class="text-white block hover:bg-primary-800 p-2 rounded" to="/contact">Contact</NuxtLink>
        </div>
      </template>
      <template #nav>
        <AppLogo />
      </template>
      <NuxtPage />
    </VsfLayout>
  </VsfApp>
</template>

<script setup lang="ts">
import 'goshop-ui/style.css';
const AppLogo = resolveComponent('app-logo')
const expanded = ref(false)
useHead({
  htmlAttrs: {
    class: 'vsf'
  }
})
</script>

<style>
.mobile-menu-inner {
  transition: all 0.3s ease-in-out;
}
.menu-open {
  height: auto;
}
.menus-open {
  position: absolute;
  top: 50px;
  color: #fff;
  left: 0;
  right: 0;
  background-color: #000;
  display: flex !important;
  z-index: 999;
  padding: 20px;
}
.menu-open .menu-icon-top {
  transform: rotate(45deg);
}
.menu-open .menu-icon-middle {
  opacity: 0;
}
.menu-open .menu-icon-bottom {
  transform: translatex(-48px) translatey(28px) rotate(-45deg);
}
</style>