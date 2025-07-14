import { StaticCacheKeys } from "./types";

export interface AppMetadata {
    provider: string;
}

export interface UserMetadata {
    locale: string;
    role: string;
}

export class User {
    id: string;
    aud: string;
    role: string;
    email: string;
    confirmed_at: string;
    confirmation_sent_at: string;
    app_metadata: AppMetadata;
    user_metadata: UserMetadata;

    constructor(data: {
        id: string;
        aud: string;
        role: string;
        email: string;
        confirmed_at: string;
        confirmation_sent_at: string;
        recoverySentAt: string;
        app_metadata: AppMetadata;
        createdAt: string;
        updatedAt: string;
        user_metadata: UserMetadata;
    }) {
        this.id = data.id;
        this.aud = data.aud;
        this.role = data.role;
        this.email = data.email;
        this.confirmed_at = data.confirmed_at;
        this.confirmation_sent_at = data.confirmation_sent_at;
        this.user_metadata = data.user_metadata;
        this.app_metadata = data.app_metadata;
    }

    // 暂时只能登录一个
    static getKey() {
        return `${StaticCacheKeys.ACCOUNT_KEYS}.${'user'}`;
    }
}