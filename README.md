# DETACH

Monorepo for the DETACH clothing brand e-commerce platform.

This repository currently contains **project scaffolding only**: three independent applications, shared packages, and a local development environment. Business logic, authentication, Prisma schema, and third-party integrations are intentionally not implemented.

## Applications

| App        | Package              | Stack                            | Dev URL                      |
| ---------- | -------------------- | -------------------------------- | ---------------------------- |
| Storefront | `@detach/storefront` | Next.js App Router, Tailwind CSS | http://localhost:3000        |
| Admin      | `@detach/admin`      | Next.js App Router, Tailwind CSS | http://localhost:3001        |
| Backend    | `@detach/backend`    | NestJS REST API                  | http://localhost:4000/api/v1 |

API docs (Swagger UI): http://localhost:4000/api/docs  
Health check: http://localhost:4000/api/v1/health

## Requirements

- Node.js 20 or later
- [pnpm](https://pnpm.io) 9 or later (this repo uses `pnpm@11.22.0`)
- PostgreSQL is **not** required to start the API during this scaffolding phase

## Install

From the repository root:

```bash
pnpm install
```

## Environment files

Copy the examples, then replace placeholders locally. Do not commit real credentials.

```bash
cp apps/storefront/.env.example apps/storefront/.env.local
cp apps/admin/.env.example apps/admin/.env.local
cp apps/backend/.env.example apps/backend/.env
```

### Storefront (`apps/storefront/.env.local`)

```bash
PORT=3000
NEXT_PUBLIC_APP_NAME=DETACH
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
```

### Admin (`apps/admin/.env.local`)

```bash
PORT=3001
NEXT_PUBLIC_APP_NAME=DETACH Admin
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
```

### Backend (`apps/backend/.env`)

```bash
NODE_ENV=development
PORT=4000
API_PREFIX=api/v1
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/detach
```

`DATABASE_URL` is configuration only. The API does not open a database connection on boot.

## Run

All three apps:

```bash
pnpm dev
```

Independently:

```bash
pnpm dev:storefront
pnpm dev:admin
pnpm dev:backend
```

Equivalent package-level commands:

```bash
pnpm --filter @detach/storefront dev
pnpm --filter @detach/admin dev
pnpm --filter @detach/backend start:dev
```

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm format
```

## Workspace layout

```text
detach/
├── apps/
│   ├── storefront/     Customer storefront (Next.js)
│   ├── admin/          Admin dashboard (Next.js)
│   └── backend/        REST API (NestJS)
├── packages/
│   ├── shared/         Frontend-safe types and utilities
│   └── config/         Shared TypeScript and ESLint config
├── docs/
│   ├── doc.md
│   └── decisions-and-open-items.md
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

## Notes

- The original product-requirements `doc.md` was not in the workspace when scaffolding started. See `docs/doc.md` and `docs/decisions-and-open-items.md`.
- Prisma is deferred. Do not add models, migrations, or relationships without explicit approval.
- Authentication, payments, inventory, preorders, orders, coupons, refunds, returns, and shipping are out of scope for this setup.
