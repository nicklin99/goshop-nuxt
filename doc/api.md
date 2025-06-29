# Goshop API

根据swagger.json生成

1. api.ts axios版本
2. fetch.ts  fetch版本

## 生成 api client

```bash
npm install -g swagger-typescript-api

# axios
swagger-typescript-api generate --axios --api-class-name="Goshop" --name api.ts --path /Users/nick/Projects/goshop/doc/swagger/goshop.swagger.json

# fetch
swagger-typescript-api generate --api-class-name="Goshop" --name fetch.ts --path /Users/nick/Projects/goshop/doc/swagger/goshop.swagger.json
```