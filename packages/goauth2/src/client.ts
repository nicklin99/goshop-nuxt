import type { OAuth2Config, RefeshTokenResponse } from "./oauth2";
import type { BrowserSession } from "./store";
import { GoauthStatus, type GoauthStatusType } from "./types";
import { User } from "./user";

export type TokenClaims = {
    exp: number;
    sub: string;
    aud: string;
    email: string;
    client_id: string;
}

export class Oauth2Client {
    private oauth2: OAuth2Config;
    private store: BrowserSession;
    private isBrowserEnvironment: boolean;

    constructor(
        oauth2: OAuth2Config,
        store: BrowserSession
    ) {
        this.oauth2 = oauth2
        this.store = store
        this.isBrowserEnvironment = typeof window !== "undefined";
    }

    claims(token: string): TokenClaims | null {
        try {
            const ret = JSON.parse(this.oauth2.decodeBase64Url(token.split('.')[1]));
            return ret
        } catch (error) {
            console.error('err', error, this.claims)
            return null
        }
    }

    // 获取访问令牌,如果快过期立即刷新
    async getToken() {
        const token = this.store.getToken()
        const { accessToken, refreshToken } = token
        if (!accessToken) {
            throw new Error('require authenticated')
        }
        const cliams = this.claims(accessToken)
        if ((cliams?.exp ?? 0 - 60) * 1000 < Date.now()) {
            const resp = await this.oauth2.refreshToken(refreshToken)
            if ('access_token' in resp) {
                const { access_token, refresh_token, id_token } = resp
                this.store.setToken({
                    accessToken: access_token,
                    refreshToken: refresh_token,
                    idToken: id_token
                })
                return {
                    ...this.store.getToken(),
                    exp: this.claims(access_token)?.exp!,
                }
            } else {
                throw new Error(resp.msg ?? 'refresh token failed')
            }
        } else {
            return token
        }
    }

    saveToken(token: RefeshTokenResponse) {
        this.store.setToken({
            accessToken: token.access_token,
            idToken: token.id_token,
            refreshToken: token.refresh_token
        })
    }

    // 从缓存中读取
    getUser() {
        return this.store.getUser(User.getKey())
    }

    // 发起授权码登录
    async exchangeToken(code: string) {
        const code_verifier = this.store.store.getItem('code_verifier')
        const token = await this.oauth2.exchangeToken(code as string, code_verifier!)
        this.saveToken(token)
        this.store.store.removeItem('code_verifier')
        this.store.store.removeItem('state')
        const user = await this.oauth2.getUserInfo(token.access_token)
        const userEntity = new User(user)
        this.store.setUser(userEntity)
    }

    public async getAuthResult() {
        try {
            const token = await this.getToken()
            const { accessToken, idToken } = token!
            return {
                accessToken: accessToken,
                idToken: idToken,
                user: this.getUser(),
            }
        } catch (error) {
            console.log(error)
            return {
                accessToken: "",
                idToken: "",
                user: null,
            }
        }
    }

    async login() {
        const state = this.oauth2.generateRandomState()
        const code_verifier = this.oauth2.generateCodeVerifier()
        this.store.store.setItem('code_verifier', code_verifier)
        this.store.store.setItem('state', state)
        const code_challenge = await this.oauth2.pkceChallenge(code_verifier)
        const url = this.oauth2.authCodeURL({
            state,
            code_challenge,
            code_challenge_method: 'S256',
        })
        window.location.href = url
    }

    logout() {
        this.store.store.clear()
    }

    // 初始化
    async setup(status: GoauthStatusType) {
        if (status === GoauthStatus.Startup) {
            const { accessToken } = await this.getToken()
            const user = await this.oauth2.getUserInfo(accessToken)
            const userEntity = new User(user)
            this.store.setUser(userEntity)
        }
        return this.getAuthResult()
    }

    // 邀请
    async invite(email: string, userData = {}) {
        const { accessToken } = await this.getToken()
        return this.oauth2.invite(accessToken, email, userData)
    }
}