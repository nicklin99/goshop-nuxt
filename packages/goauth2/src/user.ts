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
    confirmedAt: string;
    confirmationSentAt: string;
    appMetadata: AppMetadata;
    userMetadata: UserMetadata;

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
        this.confirmedAt = data.confirmed_at;
        this.confirmationSentAt = data.confirmation_sent_at;
        this.userMetadata = data.user_metadata;
        this.appMetadata = data.app_metadata;
    }

    // 暂时只能登录一个
    static getKey() {
        return `${StaticCacheKeys.ACCOUNT_KEYS}.${'user'}`;
    }
}