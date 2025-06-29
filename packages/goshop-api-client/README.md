# goshop-api-client

A library for goshop api

## generate with axios
swagger-typescript-api generate --axios --api-class-name="Goshop" --name api.ts --path goshop.swagger.json

## generate with fetch
```
swagger-typescript-api generate --api-class-name="Goshop" --name fetch.ts --path goshop.swagger.json
```

## Usage with axios

```ts
import Goshop from 'goshop-api-client/api'
const storefront = new Goshop<ApiConfig>({
    baseURL: '/api'
})
```

## Usage with fetch

```ts
import Goshop from 'goshop-api-client/fetch'
const storefront = new Goshop<ApiConfig>({
    baseURL: '/api'
})
```
