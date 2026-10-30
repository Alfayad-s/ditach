# Decisions and open items

## Decisions made during scaffolding

- Monorepo lives at the workspace root (`detach`), matching the requested `clothing-brand/` layout without nesting an extra folder.
- Package scope is `@detach/*`.
- Storefront runs on port `3000`, admin on `3001`, backend on `4000`.
- Backend is a modular monolith with global prefix `/api/v1`.
- Swagger UI is served at `/api/docs`.
- Prisma is listed as a backend dependency only. No `schema.prisma`, models, or migrations were created.
- Shared package contains frontend-safe types and utilities only. Server-only code stays in `apps/backend`.
- Original `doc.md` was missing; a placeholder was written at `docs/doc.md`.

## Open items (blocked until explicit approval)

- Replace `docs/doc.md` with the original product requirements.
- Authentication and authorization.
- Prisma schema, models, relationships, and migrations.
- Payment, inventory, preorder, order, coupon, refund, return, and shipping logic.
- External service integrations.
- Domain modules beyond health-check and API foundations.
