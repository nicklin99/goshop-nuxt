import { LocalStorage } from "./localstorage";
import { MemoryStorage } from "./memorystorage";
import { StaticCacheKeys, type IWindowStorage, type TokenKey } from "./types";
import { User } from "./user";

export const BrowserCacheLocation = {
    LocalStorage: "localStorage",
    SessionStorage: "sessionStorage",
    MemoryStorage: "memoryStorage",
} as const;

export type BrowserCacheLocation =
    (typeof BrowserCacheLocation)[keyof typeof BrowserCacheLocation];

export const getStore = (clientId: string, location: BrowserCacheLocation | string) => {
    switch (location) {
        case BrowserCacheLocation.LocalStorage:
            return new LocalStorage(clientId);
        default:
            return new MemoryStorage<string>();
    }
}

export class BrowserSession {
    clientId: string;
    store: IWindowStorage<string>;
    constructor(clientId: string, location: BrowserCacheLocation | string) {
        this.clientId = clientId;
        this.store = getStore(clientId, location);
    }

    setUser(user: User) {
        this.store.setItem(User.getKey(), JSON.stringify(user));
    }

    getUser(key: string) {
        const data = this.store.getItem(key);
        if (data) {
            return new User(data as any);
        }
        return null
    }

    getToken() {
        const ret = this.store.getItem(`${StaticCacheKeys.TOKEN_KEYS}`);
        if (ret) {
            return JSON.parse(ret) as TokenKey;
        }
        return {
            accessToken: "",
            idToken: "",
            refreshToken: ""
        }
    }

    setToken(token: TokenKey) {
        if (token.accessToken) {
            this.store.setItem(
                `${StaticCacheKeys.TOKEN_KEYS}`,
                JSON.stringify(token),
            );
        } else {
            this.store.removeItem(`${StaticCacheKeys.TOKEN_KEYS}`);
        }
    }
}