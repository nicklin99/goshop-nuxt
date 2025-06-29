import { useNuxtApp } from "#app";
import { toRefs, watchEffect } from "vue";

export const useStoreAuth = () => {
    const { goauth, pending } = useNuxtApp().$goauth
    const state = useState('oauth2', () => {
        return {
            accessToken: "",
            idToken: "",
            user: null,
        }
    })
    watchEffect(async () => {
        if (!pending.value) {
            const ret = await goauth.getAuthResult()
            Object.assign(state.value, ret)
        }
    })
    return {
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