# goauth2

A library for oauth2

## Usage

```ts
const config = {
    oauth2: {
      clientId: '',
      clientSecret: '',
      redirectUri: '',
      scope: 'email',
      endpoint: {
        authURL: '',
        tokenURL: '',
        refreshURL: '',
        userURL: "",
        deviceAuthURL: ""
      }
    },
    cache: {
      location: 'localStorage',
    }
}
const oauth2Config = new OAuth2Config(oauth2)
const store = new BrowserSession(oauth2.clientId, cache.location)
const client = new Oauth2Client(oauth2Config, store)
```
