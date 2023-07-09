# `nestjs-types`

An attempt to improve Developer Experience on NestJS apps by hijacking built-in types to `@nestjs/*` packages.

### Install

```bash
npm install nestjs-types
```

### Usage

Somewhere in your app, like at `src/main.ts`

```ts
import 'nestjs-types'

// ...
```

then you can use the recommended set of types, like so:

- `@nestjs/platform-express`/`@nestjs/platform-fastify`

```ts
import { RequestExpress, ResponseExpress } from '@nestjs/platform-express'
//       ^ an alias to Express.Request
// instead of importing `Request` from 'express'

import { RequestFastify, ResponseFastify } from '@nestjs/platform-fastify'
```
> motivation: https://github.com/nestjs/nest/pull/11956