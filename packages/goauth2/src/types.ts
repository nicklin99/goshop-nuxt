
export interface IWindowStorage<T> {
    getItem(key: string): T | null;
    setItem(key: string, value: T): void;
    removeItem(key: string): void;
    clear(): void;
}

export const StaticCacheKeys = {
    ACCOUNT_KEYS: "goauth.account",
    TOKEN_KEYS: "goauth.token",
    VERSION: "goauth.version",
} as const;
export type StaticCacheKeys =
    (typeof StaticCacheKeys)[keyof typeof StaticCacheKeys];

export type TokenKey = {
    accessToken: string;
    refreshToken: string;
    idToken: string;
}

export const GoauthStatus = {
    /**
     * Initial status before interaction occurs
     */
    Startup: "startup",
    /**
     * Status set when all login calls occuring
     */
    Login: "login",
    /**
     * Status set when logout call occuring
     */
    Logout: "logout",
    /**
     * Status set for acquireToken calls
     */
    AcquireToken: "acquireToken",
    /**
     * Status set for ssoSilent calls
     */
    SsoSilent: "ssoSilent",
    /**
     * Status set when handleRedirect in progress
     */
    HandleRedirect: "handleRedirect",
    /**
     * Status set when interaction is complete
     */
    None: "none",
}

export type GoauthStatusType =
    (typeof GoauthStatus)[keyof typeof GoauthStatus];
