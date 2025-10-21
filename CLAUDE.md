# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**TarekInvest** is a Next.js 14 SaaS application for investment management and opportunity discovery. It provides authenticated users with access to investment opportunities, portfolio management tools (dashboard), and a public marketing site with ROI calculators.

**Key pages:**
- Public: Home page with marketing content (hero, trust indicators, before-after slider, how-it-works, success stories, ROI calculator)
- Auth: Sign-up, sign-in, forgot-password, reset-password flows
- Protected: `/dashboard` (authenticated user dashboard with investment management)
- `/opportunities` (investment opportunity listings)

---

## Quick Commands

### Development
```bash
npm run dev           # Start dev server on port 3000 (Next.js)
npm run build         # Production build
npm run start         # Serve production build
```

### Code Quality
```bash
npm run lint          # Run ESLint (if configured)
npm run format        # Format with Prettier (if configured)
```

### Database (Supabase)
```bash
# Push migrations to local Supabase instance
supabase db push

# Run migrations manually
supabase migration up
```

**Key URLs (development):**
- Home: `http://localhost:3000`
- Dashboard: `http://localhost:3000/dashboard` (requires authentication)
- Sign-up: `http://localhost:3000/sign-up`
- Sign-in: `http://localhost:3000/sign-in`

---

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 14.2.23 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 3 + Radix UI components
- **Backend**: Supabase (PostgreSQL + Auth + Realtime)
- **State**: React hooks (no external state library)
- **Form Handling**: React Hook Form 7.54.2
- **Authentication**: Supabase Auth (email/password)
- **Middleware**: `src/middleware.ts` for session management
- **Instrumentation**: Tempo devtools for analytics/monitoring

### Authentication Flow

```
User visits app
    ↓
middleware.ts calls updateSession()
    ↓
Supabase session validated via cookies
    ↓
If /dashboard + no session → redirect to /sign-in
    ↓
Server/client components access auth via createClient()
```

**Key files:**
- `supabase/server.ts` - Server-side Supabase client (uses cookies from `next/headers`)
- `supabase/client.ts` - Client-side Supabase client (browser-only)
- `supabase/middleware.ts` - Session refresh & route protection logic
- `src/middleware.ts` - Next.js middleware entry point
- `src/app/actions.ts` - Server actions for sign-up, sign-in, sign-out

### Database Schema

**users table:**
```sql
id (UUID primary key, matches auth.users.id)
email (text)
full_name (text)
name (text)
avatar_url (text)
token_identifier (text)
user_id (text, unique)
created_at / updated_at (timestamps)
```

**Auto-triggers:**
- `handle_new_user()` - Creates user record when auth.users row inserted
- `handle_user_update()` - Updates user record when auth.users row updated
- RLS policies enforce users can only view their own data

### Component Organization

```
src/app/                      # Next.js App Router
├── (auth)/                   # Auth group (sign-up, sign-in, etc.)
├── auth/callback/route.ts    # OAuth redirect handler
├── dashboard/                # Protected dashboard page
├── opportunities/            # Investment listings
├── page.tsx                  # Home page
├── layout.tsx                # Root layout
├── actions.ts                # Server actions (signUpAction, etc.)
└── globals.css               # Global Tailwind + CSS vars

src/components/
├── ui/                       # Radix UI primitives (pre-built)
├── navbar.tsx                # Public nav
├── dashboard-navbar.tsx      # Protected nav
├── hero.tsx / investment-hero.tsx
├── roi-calculator.tsx        # Interactive ROI tool
├── before-after-slider.tsx   # Image comparison
├── success-story.tsx / trust-indicators.tsx
├── form-message.tsx          # Error/success display
├── theme-provider.tsx        # Dark mode setup
├── url-provider.tsx          # URL context provider
└── tempo-init.tsx            # Tempo devtools initialization

src/utils/
├── auth.ts                   # Empty (reserved for auth helpers)
├── utils.ts                  # Helpers (encodedRedirect, cn, etc.)

src/types/
└── supabase.ts              # Database types (generated)

src/lib/
└── utils.ts                 # General utilities

supabase/
├── client.ts                # Browser client factory
├── server.ts                # Server client factory
├── middleware.ts            # Session validation logic
├── config.toml              # Supabase project config
└── migrations/
    └── initial-setup.sql    # User table + triggers + RLS
```

### Client vs Server Components

This repo uses Next.js App Router **client/server component pattern**:
- **Server components** (default): Database queries, secrets, server-only logic
  - Root `layout.tsx` is a server component
  - Auth pages: `sign-up/page.tsx`, etc. can be server components
- **Client components** (`'use client'`): Interactive features, state, hooks
  - `theme-provider.tsx` - Theme switching
  - `roi-calculator.tsx` - Interactive input
  - Dashboard components that need useState/useEffect

**Pattern:** If a component reads from database or uses secrets → server component. If it needs interactivity → client component marked with `'use client'`.

### Form Handling

Forms use **server actions** + **React Hook Form**:

1. Form component (client): `<form action={signUpAction}>`
2. Server action (server): `'use server'` function receives `FormData`
3. Supabase call happens server-side (secrets safe)
4. Response redirects or returns error message (via `encodedRedirect`)

**Example:** `src/app/(auth)/sign-up/page.tsx` + `src/app/actions.ts:signUpAction`

---

## Project Structure Details

### Key Patterns to Know

#### Pattern 1: Protected Routes via Middleware
Middleware in `supabase/middleware.ts` checks authentication status:
- If accessing `/dashboard` without auth → redirect to `/sign-in`
- Session automatically refreshed on every request
- Cookies managed transparently

#### Pattern 2: Server Actions for Mutations
All write operations (sign-up, sign-in, password reset) use server actions:
- Marked with `'use server'` directive
- Receive `FormData` from HTML forms
- Return redirect or error message
- Never expose API keys or secrets

#### Pattern 3: Supabase Clients (Server vs Client)
- **Server client** (`supabase/server.ts`): Used in server components/actions, manages cookies
- **Client client** (`supabase/client.ts`): Used in client components, browser-only
- Both read from same environment variables (`NEXT_PUBLIC_*`)

#### Pattern 4: Theme Management
- Uses `next-themes` for dark mode
- CSS variables defined in `src/app/globals.css`
- All Radix UI components respect theme automatically

---

## Development Workflows

### Adding a New Protected Page

1. Create file: `src/app/dashboard/new-feature/page.tsx`
2. Import server client: `import { createClient } from '@/supabase/server'`
3. Fetch data server-side (no `'use client'` needed if read-only)
4. Middleware automatically protects `/dashboard/*` routes
5. Test: Navigate to `/dashboard/new-feature` (should redirect to `/sign-in` if not authenticated)

### Adding a New Form (Sign-up Pattern)

1. Create server action in `src/app/actions.ts`:
   ```typescript
   'use server'
   export const myFormAction = async (formData: FormData) => {
     // ... process form
     return encodedRedirect('success', '/dashboard', 'Success!');
   }
   ```
2. Create form component in `src/app/(auth)/my-form/page.tsx`:
   ```tsx
   <form action={myFormAction}>
     <input name="email" required />
     <SubmitButton />
   </form>
   ```
3. Supabase calls happen server-side (secrets never leak to browser)

### Modifying Database Schema

1. Edit `supabase/migrations/initial-setup.sql` (or create new migration)
2. Run locally: `supabase db push`
3. Test schema: Verify queries work in `supabase/` query editor
4. Push to production: `supabase db push --linked` (if linked to production project)

### Styling New Components

- Use **Tailwind CSS** utility classes (no CSS files needed for most components)
- Use **Radix UI** components from `src/components/ui/` for complex widgets (buttons, dialogs, dropdowns)
- Use **CSS variables** from `globals.css` for theme colors (`var(--primary)`, etc.)
- For custom styling: Plain CSS files in `src/` (PostCSS processed)

---

## Important Implementation Details

### Environment Variables

Required in `.env.local` (see `.env.example`):
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
```

These are public (prefixed with `NEXT_PUBLIC_`). Never commit `.env.local`.

### Supabase Row-Level Security (RLS)

Database access controlled via RLS policies in `supabase/migrations/initial-setup.sql`:
- Users can only view their own records
- Enforce server-side (no client-side bypass)
- Test RLS by querying from client component (should return empty for other users' data)

### Email Configuration (SMTP)

Sign-up sends confirmation emails via Supabase Auth:
- Must configure SMTP in Supabase dashboard (Settings → Email)
- Or use Supabase's default email provider
- Test: Sign up → check spam folder for confirmation link
- Component `src/app/(auth)/smtp-message.tsx` displays SMTP status

### Cookie Handling

Supabase session stored in HTTP-only cookies:
- Managed automatically by `@supabase/ssr`
- Middleware refreshes session on every request
- Browser never sees token (security benefit)
- If users can't stay logged in → check cookie settings / HTTPS (required in production)

### TypeScript Strict Mode

- `tsconfig.json` has `"strict": true`
- No `any` types without explicit justification
- All database rows typed from `supabase/types/supabase.ts` (auto-generated)
- Run `npx supabase gen types typescript` to regenerate types after schema changes

### Next.js Middleware

`src/middleware.ts` is lightweight:
- Only calls `updateSession()` from Supabase
- Runs on every request (including static files)
- Matcher excludes static assets (`_next/static`, images, etc.)
- If adding logic here: Keep it fast (no database calls in middleware)

---

## Performance Considerations

### Bundle Size
- Tailwind CSS purges unused classes automatically
- Radix UI components tree-shaken (only used ones bundled)
- Supabase client is modular (only `auth` methods imported)
- Use dynamic imports for heavy components: `dynamic(() => import('...'))`

### Image Optimization
- `next.config.js` allows `images.unsplash.com` domain
- Use `<Image>` component from `next/image` (not `<img>`)
- Images automatically optimized to WebP

### Database Queries
- Server components can query directly (no extra API call)
- Client components use server actions for mutations
- No N+1 queries (fetch related data in single query when possible)

---

## Common Gotchas

1. **Supabase session not persisting** - Check HTTPS requirement in production; cookies need secure flag
2. **'use server' in client component** - Server actions must be in separate files or top-level
3. **Environment variables not loading** - Must restart dev server after `.env.local` changes
4. **RLS blocking queries** - Check RLS policies; test with different user IDs
5. **TypeScript errors after schema changes** - Regenerate types: `npx supabase gen types typescript`
6. **Middleware infinite redirects** - Check redirect conditions in `supabase/middleware.ts`
7. **Form not submitting** - Ensure `<form action={serverAction}>` uses server action, not callback
8. **Dark mode flicker** - `ThemeProvider` must wrap all children in `layout.tsx`

---

## Testing Strategy

Currently, **no automated tests are configured**. Before adding tests:

1. Choose testing framework (Vitest for unit tests, Playwright for E2E)
2. Place unit tests beside code under `__tests__` directories
3. Place E2E tests in `tests/` directory
4. Add npm script: `npm run test` (must run headless)
5. Ensure CI/CD runs tests before merge

**Manual testing checklist:**
- [ ] Sign-up creates user record in database
- [ ] Sign-in sets session cookie
- [ ] Unauthenticated users redirected from `/dashboard`
- [ ] Dark mode toggle works and persists
- [ ] ROI calculator computes correctly
- [ ] Forms show validation errors
- [ ] Password reset email sends
- [ ] App works on mobile/tablet (responsive)

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variables in Vercel dashboard
4. Auto-deploys on push to main branch

### Custom Server
1. Run `npm run build`
2. Run `npm run start` (production server)
3. Ensure environment variables set
4. Use process manager (PM2, systemd) to keep running

### Database (Supabase)
- Always test migrations locally first: `supabase db push`
- Then push to production: `supabase db push --linked`
- Verify backup exists before production migrations

---

## References

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Supabase Authentication Docs](https://supabase.com/docs/guides/auth)
- [Supabase Database Docs](https://supabase.com/docs/guides/database)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Radix UI Component Library](https://www.radix-ui.com)
- [React Hook Form Documentation](https://react-hook-form.com)

---

**Last Updated**: October 2024
**Status**: Active Development
