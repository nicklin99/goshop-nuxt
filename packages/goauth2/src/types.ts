
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

