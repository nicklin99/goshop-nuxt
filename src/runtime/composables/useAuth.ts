import { useNuxtApp } from "#app"

export const useAuth = () => {
    return useNuxtApp().$goauth
}