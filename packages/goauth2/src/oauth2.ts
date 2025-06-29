// oauth2
export type OauthConfig = {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    scope: string;
    endpoint: Endpoint;
}
export type Endpoint = {
    authURL: string;
    tokenURL: string;
    refreshURL: string;
    userURL: string;
    deviceAuthURL: string;
}

type SetAuthURLParam = {
    code_challenge_method: 'S256';
    code_challenge: string;
    state: string;
}
export type RefeshTokenResponse = {
    access_token: string;
    refresh_token: string;
    id_token: string;
}

type ResponseError = {
    msg: string;
}

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export class OAuth2Config {
    private clientId: string;
    private clientSecret: string;
    private redirectUri: string;
    private scope: string;
    private endpoint: Endpoint

    constructor(opts: OauthConfig) {
        this.clientId = opts.clientId;
        this.clientSecret = opts.clientSecret;
        this.redirectUri = opts.redirectUri;
        this.scope = opts.scope;
        this.endpoint = opts.endpoint;
    }

    authCodeURL(params: SetAuthURLParam): string {
        const uri = new URL(`${this.endpoint.authURL}?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&response_type=code&scope=${this.scope}`)
        Object.keys(params).forEach(k => {
            const v = params[k as keyof SetAuthURLParam]
            if (v) {
                uri.searchParams.set(k, v);
            }
        })
        return uri.toString()
    }

    async exchangeToken(code: string, code_verifier?: string) {
        const uri = new URL(`${this.endpoint.tokenURL}?client_id=${this.clientId}&code=${code}&grant_type=authorization_code`)
        if (code_verifier) {
            uri.searchParams.set("code_verifier", code_verifier)
        }
        const data = await fetch(this.endpoint.tokenURL, {
            method: 'POST',
            body: uri.searchParams,
        }).then(res => res.json());
        // const { access_token, refresh_token} = data
        return data
    }

    async refreshToken(refresh_token: string): Promise<RefeshTokenResponse | ResponseError> {
        const uri = new URL(`${this.endpoint.refreshURL}?client_id=${this.clientId}&refresh_token=${refresh_token}&grant_type=refresh_token`)
        const data = await fetch(this.endpoint.refreshURL, {
            method: 'POST',
            body: uri.searchParams,
        }).then(res => res.json());
        return data
    }

    async getUserInfo(accessToken: string) {
        const uri = new URL(`${this.endpoint.userURL}`)
        const data = await fetch(uri, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(res => res.json());
        return data
    }

    generateRandomState() {
        return this.randomBytes();
    }

    generateCodeVerifier() {
        return this.randomBytes();
    }

    async pkceChallenge(codeVerifier: string) {
        const digest = await window.crypto.subtle.digest('SHA-256', this.buf(codeVerifier) as Uint8Array)
        return this.b64u(digest);
    }

    private randomBytes() {
        return this.b64u(crypto.getRandomValues(new Uint8Array(32)));
    }

    private b64u(input: string | ArrayBuffer | Uint8Array<ArrayBuffer>) {
        if (typeof input === 'string') {
            return this.decodeBase64Url(input);
        }
        return this.encodeBase64Url(input);
    }

    get decodeBase64Url() {
        // @ts-ignore
        if (Uint8Array.fromBase64) {
            return (input: string) => {
                try {
                    // @ts-ignore
                    return Uint8Array.fromBase64(input, { alphabet: 'base64url' });
                }
                catch (cause) {
                    throw new Error('The input to be decoded is not correctly encoded.');
                }
            };
        }
        else {
            return (input: string) => {
                try {
                    // 替换URL安全字符
                    let base64 = input.replace(/-/g, '+').replace(/_/g, '/');
                    // 补足长度到4的倍数
                    while (base64.length % 4) {
                        base64 += '=';
                    }
                    // 解码
                    return atob(base64);
                }
                catch (cause) {
                    throw new Error('The input to be decoded is not correctly encoded.');
                }
            };
        }
    }

    get encodeBase64Url() {
        // @ts-ignore
        if (Uint8Array.prototype.toBase64) {
            return (input: ArrayBuffer | Uint8Array) => {
                if (input instanceof ArrayBuffer) {
                    input = new Uint8Array(input);
                }
                // @ts-ignore
                return input.toBase64({ alphabet: 'base64url', omitPadding: true });
            };
        }
        else {
            return (input: ArrayBuffer | Uint8Array) => {
                if (input instanceof ArrayBuffer) {
                    input = new Uint8Array(input);
                }
                return btoa(String.fromCharCode(...new Uint8Array(input)))
                    .replace(/\+/g, '-')
                    .replace(/\//g, '_')
                    .replace(/=+$/, '');
            };
        }
    }

    buf(input: string | ArrayBuffer | Uint8Array) {
        if (typeof input === 'string') {
            return encoder.encode(input);
        }
        return decoder.decode(input);
    }
}

interface Storage {
    getItem(key: string): string | null
    setItem(key: string, val: string): void;
    removeItem(key: string): void;
    clear(): void;
}
