# DETACH — Product Requirements

**Status:** Original source file was not present in the workspace.

The project root was empty when scaffolding started, so there was no `doc.md` to move. This file is a placeholder that records only the architecture constraints from the scaffolding request. It is **not** an approved product-requirements document and must not be treated as a source of business decisions.

Replace this file with the original requirements before any domain, schema, or business-logic work.

## Scaffolding constraints captured from the setup request

- Three independent applications: customer storefront, admin dashboard, NestJS REST API.
- pnpm workspaces monorepo with TypeScript, Next.js, NestJS, Tailwind CSS, PostgreSQL, and Prisma (dependency only).
- Do not create Prisma models, migrations, or database relationships.
- Do not implement authentication.
- Do not implement payment, inventory, preorder, order, coupon, refund, return, or shipping business logic.
- Do not connect real external services.
- Do not hardcode credentials or secrets.
- Do not change approved business decisions from the original requirements document.
- This phase is project scaffolding and development environment setup only.
