# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js 14 app. Core routes and server components live in `src/app`, shared UI sits in `src/components`, and reusable logic belongs in `src/lib` or `src/utils`. Type definitions reside in `src/types`. Supabase SQL migrations are in `supabase/migrations`, and Tempo instrumentation config is stored at `tempo.config.json`. Tailwind and Radix UI tokens are configured through `tailwind.config.ts` and `components.json`; keep new assets in `public/` if you add static files.

## Build, Test, and Development Commands
Install dependencies with `npm install` (or `npm ci` in CI). Run `npm run dev` for the local Next.js server, `npm run build` to produce an optimized production bundle, and `npm run start` to serve the compiled app. Supabase edge features rely on the environment variables referenced in `supabase/`; load them before running any development server.

## Coding Style & Naming Conventions
Write TypeScript and JSX with Prettier defaults (2-space indent, semicolons, single quotes in TSX). Follow Tailwind utility ordering enforced by `tailwind-merge`. Name files in kebab-case for routes (e.g., `src/app/(marketing)/landing/page.tsx`) and PascalCase for shared components. Keep server actions inside `src/app` segments or `src/lib/server` modules to preserve bundling boundaries.

## Testing Guidelines
Automated tests are not yet set up. When adding them, use Next.js-compatible tooling (e.g., `@testing-library/react` or Playwright) and place unit tests beside the code they cover or integration specs under `tests/`. Ensure every new test can be run headless via an npm script before enabling CI checks.

## Commit & Pull Request Guidelines
The history currently contains a single `Initial commit`; continue with concise, imperative messages such as `feat: add investor onboarding flow`. For PRs, summarize the change, list environment or schema updates, attach relevant screenshots, and include a test plan command list. Highlight any config edits (Next.js, Tailwind, Supabase) so reviewers can focus on rollout risk.

## Security & Configuration Tips
Never commit secrets or Supabase service keys. Use environment variables loaded through `.env.local` for local work and document any required keys in team docs. Keep middleware logic in `middleware.ts` lightweight to avoid leaking sensitive headers, and validate user inputs server-side before calling Supabase.
