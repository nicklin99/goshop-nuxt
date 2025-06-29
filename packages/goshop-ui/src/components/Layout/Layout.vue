<template>
    <header :class="[
        'flex justify-between items-center h-14 md:h-20 z-50 md:sticky px-10 md:shadow-md',
        { 'bg-slate-700 text-white': true },
    ]">
        <div>
            <slot name="left" />
        </div>
        <nav class="hidden md:flex md:flex-row md:flex-nowrap">
            <slot name="nav" />
        </nav>
        <div class="flex gap-5">
            <slot name="right">
                <SearchIcon size="30px" @click="onSearch" class="cursor-pointer" />
                <CartIcon size="30px" @click="cart" class="cursor-pointer" />
                <t-dropdown v-if="user" @click="handleMenu" :options="[{ content: $t('account.ordersAndReturns.section.myOrders'), value: 1 }, { content: $t('account.logout'), value: 2 }]">
                    <UserIcon size="30px" class="cursor-pointer " />
                </t-dropdown>
                <UserIcon v-else @click="onLogin" size="30px" class="cursor-pointer " />
            </slot>
        </div>
    </header>
    <main>
        <slot />
    </main>
    <!-- footer -->
    <footer class="bg-black p-6 text-white">
        <div class="container mx-auto pt-3">
            <div class="measure-narrow mx-auto mb-6">
                <component :is="logo" />
                <p class="text-center text-xl text-gray-50 font-bold mb-2">{{ appConfig.footerText }}</p>
                <p class="text-center">{{ appConfig.footerLink }}</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import type { TdDropdownProps } from "tdesign-vue-next";
import { useStore } from "../../hooks/useStore/useStore";

const { paths, logo, onNavigateTo, appConfig, user, onLogin, onLogout, onSearch} = useStore()
const cart = () => onNavigateTo(paths.cart)
const handleMenu: TdDropdownProps['onClick'] = ({ value }) => {
    if (value === 1) {
        onNavigateTo("/user/orders")
    } else {
        onLogout()
    }
}
</script>
