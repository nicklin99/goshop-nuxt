import { useNuxtApp, useState } from "#app";
import { toRefs } from "vue";

export const useStoreAuth = () => {
    const { goauth, pending } = useNuxtApp().$goauth
    const state = useState('oauth2', () => {
        return {
            accessToken: "",
            idToken: "",
            user: null,
        }
    })
    return {
        state,
        ...toRefs(state.value),
        logout() {
            pending.value = true
            // TODO call logoutRequest
            goauth.logout()
            pending.value = false
        },
        login() {
            goauth.login()
        }
    }
}