import { inject } from "vue"
import type { ConfigProvider } from "../../components/ConfigProvider/types"
import { configKey } from "../../components"

export const useStore = () => {
    return inject<ConfigProvider>(configKey)!
}