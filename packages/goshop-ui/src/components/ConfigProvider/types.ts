import { type ApiConfig, type Goshop } from "goshop-api-client/api"
import type { ConcreteComponent } from "vue"
import type { RouteLocationRaw } from "vue-router"

export type onAddCart = (action: UserAction, productID: string, skuID: string | null, err?: Error ) => boolean
export type UserAction = 'cart' | 'buy'
export type ConfigProvider = {
  locale: string // 国际化code
  paths: typeof import("../utils.ts").paths
  apiUrl: string,
  timeout: number
  productRepositoryId: number // 产品仓库id
  currency: string
  storefront: Goshop<ApiConfig>
  logo: string | ConcreteComponent;
  onAddCartOrBuy: onAddCart,
  productHref:  (id: string) => string
  onChangeCartQuantity: (productID: string, skuID: string | null, quantity: number) => void
  onRemoveCartItem: (cartId: string) => void
  onNavigateTo: (to: RouteLocationRaw | undefined | null, options?: any) => Promise<boolean>
  onLogin: () =>  void
  onLogout: () =>  void
  onSearch: () =>  void
  link: string | ConcreteComponent;
  user: AuthUserClaims | null,
  appConfig: {
    footerText: string
    footerLink: string
  }
}

export type AuthUserClaims = {
    exp: number;
    sub: string;
    email: string;
    role: string;
    user_metadata?: {
        isAdmin?: boolean;
        role?: string;
    }
}