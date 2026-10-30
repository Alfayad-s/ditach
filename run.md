# DETACH — Run book

All commands below are meant to be run from the **repository root** unless a `cd` is shown.

## Requirements

- Node.js 20 or later
- pnpm 9 or later (this repo uses `pnpm@11.22.0`)
- PostgreSQL is **not** required to start the API during this scaffolding phase

## URLs

| App | Dev URL |
| --- | --- |
| Storefront | http://localhost:3000 |
| Admin | http://localhost:3001 |
| Backend API | http://localhost:4000/api/v1 |
| Health check | http://localhost:4000/api/v1/health |
| Swagger UI | http://localhost:4000/api/docs |

## 1. Install

```bash
pnpm install
```

## 2. Environment files

Copy once, then edit local values. Do not commit real credentials.

```bash
cp apps/storefront/.env.example apps/storefront/.env.local
cp apps/admin/.env.example apps/admin/.env.local
cp apps/backend/.env.example apps/backend/.env
```

### Storefront — `apps/storefront/.env.local`

```bash
PORT=3000
NEXT_PUBLIC_APP_NAME=DETACH
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
```

### Admin — `apps/admin/.env.local`

```bash
PORT=3001
NEXT_PUBLIC_APP_NAME=DETACH Admin
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
```

### Backend — `apps/backend/.env`

```bash
NODE_ENV=development
PORT=4000
API_PREFIX=api/v1
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/detach
```

`DATABASE_URL` is configuration only. The API does not open a database connection on boot.

## 3. Run in development

### All three apps together

```bash
pnpm dev
```

### Each app independently (from root)

```bash
pnpm dev:storefront
pnpm dev:admin
pnpm dev:backend
```

### Equivalent filter commands

```bash
pnpm --filter @detach/storefront dev
pnpm --filter @detach/admin dev
pnpm --filter @detach/backend start:dev
```

### From inside each app folder

```bash
cd apps/storefront && pnpm dev
cd apps/admin && pnpm dev
cd apps/backend && pnpm start:dev
```

Backend aliases:

```bash
pnpm --filter @detach/backend dev
pnpm --filter @detach/backend start
pnpm --filter @detach/backend start:dev
pnpm --filter @detach/backend start:debug
```

## 4. Production start (after build)

```bash
pnpm --filter @detach/storefront start
pnpm --filter @detach/admin start
pnpm --filter @detach/backend start:prod
```

From inside each app:

```bash
cd apps/storefront && pnpm start
cd apps/admin && pnpm start
cd apps/backend && pnpm start:prod
```

## 5. Build

```bash
pnpm build
pnpm build:storefront
pnpm build:admin
pnpm build:backend
```

Equivalent filter commands:

```bash
pnpm --filter @detach/shared build
pnpm --filter @detach/storefront build
pnpm --filter @detach/admin build
pnpm --filter @detach/backend build
```

## 6. Lint

```bash
pnpm lint
pnpm lint:fix
```

Per package:

```bash
pnpm --filter @detach/storefront lint
pnpm --filter @detach/admin lint
pnpm --filter @detach/backend lint
pnpm --filter @detach/shared lint

pnpm --filter @detach/storefront lint:fix
pnpm --filter @detach/admin lint:fix
pnpm --filter @detach/backend lint:fix
pnpm --filter @detach/shared lint:fix
```

## 7. Type-check

```bash
pnpm typecheck
```

Per package:

```bash
pnpm --filter @detach/storefront typecheck
pnpm --filter @detach/admin typecheck
pnpm --filter @detach/backend typecheck
pnpm --filter @detach/shared typecheck
```

## 8. Format

```bash
pnpm format
pnpm format:check
```

Backend-only format:

```bash
pnpm --filter @detach/backend format
```

## 9. Tests (backend)

```bash
pnpm --filter @detach/backend test
pnpm --filter @detach/backend test:watch
pnpm --filter @detach/backend test:cov
pnpm --filter @detach/backend test:debug
pnpm --filter @detach/backend test:e2e
```

## 10. Root script index

| Command | What it does |
| --- | --- |
| `pnpm install` | Install all workspace dependencies |
| `pnpm dev` | Start storefront, admin, and backend together |
| `pnpm dev:storefront` | Start storefront on port 3000 |
| `pnpm dev:admin` | Start admin on port 3001 |
| `pnpm dev:backend` | Start API in watch mode on port 4000 |
| `pnpm build` | Build shared package, then all apps |
| `pnpm build:storefront` | Production build for storefront |
| `pnpm build:admin` | Production build for admin |
| `pnpm build:backend` | Production build for API |
| `pnpm lint` | Lint every package that has a lint script |
| `pnpm lint:fix` | Auto-fix lint issues where supported |
| `pnpm typecheck` | Type-check every package that has a typecheck script |
| `pnpm format` | Format the repo with Prettier |
| `pnpm format:check` | Check Prettier formatting without writing |

## 11. Quick health checks

```bash
curl http://localhost:4000/api/v1
curl http://localhost:4000/api/v1/health
curl -o /dev/null -w "%{http_code}\n" http://localhost:3000
curl -o /dev/null -w "%{http_code}\n" http://localhost:3001
curl -o /dev/null -w "%{http_code}\n" http://localhost:4000/api/docs
```
