<template>
    <div v-if="pending">
        <t-loading />
    </div>
    <div v-else-if="error">
        {{ error }}
    </div>
    <div v-else>

    </div>
</template>

<script setup lang="ts">
const { goauth, pending } = useAuth()
const error = ref()
try {
    pending.value = true
    await goauth.exchangeToken(useRequestURL().searchParams.get("code"))
    navigateTo('/cart')
} catch (err) {
    error.value = err
} finally {
    pending.value = false
}
</script>