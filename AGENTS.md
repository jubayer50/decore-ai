# AGENTS.md

## Project overview

Next.js 16 **frontend client** for DecoraAI — an AI-powered interior design platform. This repo is frontend-only; all business logic, AI, and data live on a separate Express backend (`NEXT_PUBLIC_SERVER_URL`, default `localhost:5000`).

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` (port 3000) |
| Build | `npm run build` |
| Lint | `npm run lint` (ESLint 9, next/core-web-vitals) |

No test suite, formatter, or typecheck configured. This is a plain JavaScript project (no TypeScript).

## Tech stack facts that matter

- **React 19 + React Compiler** (`babel-plugin-react-compiler` in devDeps, `reactCompiler: true` in `next.config.mjs`). Do not add `"use memo"` or manual memoization — the compiler handles it.
- **Tailwind CSS v4** — configured via `@tailwindcss/postcss` in `postcss.config.mjs`. There is no `tailwind.config.*` file; Tailwind v4 uses CSS-first config.
- **HeroUI** (`@heroui/react`, `@heroui/styles`) — the primary component library. Import patterns: `import { Component } from "@heroui/react"`.
- **Path alias**: `@/*` → `src/*` (defined in `jsconfig.json`).
- **Fonts**: Lato + Playfair loaded via `next/font/google`, exposed as CSS variables `--lato` / `--playfair`. Utility classes `.lato` and `.playfair` are in `globals.css`.

## Architecture

```
src/
├── app/
│   ├── (Auth)/          # Auth routes — signin, signup
│   ├── (Main)/          # Main app routes — home, interior-designs, ai-chat, add/manage-designs
│   └── api/auth/[...all]/  # Better Auth catch-all API route
├── Components/          # Feature-based UI components
├── lib/
│   ├── Action/          # Server Actions ("use server") — call backend with JWT token
│   ├── api/             # Client-side fetch helpers — call backend (no auth)
│   ├── auth.js          # Server-side Better Auth instance (MongoDB)
│   ├── auth-client.js   # Client-side Better Auth helpers
│   └── uploadImage.js   # imgbb image upload
└── proxy.js             # Route guard middleware (redirects unauthenticated users)
```

## Auth & backend communication

- **Better Auth** with email/password + Google OAuth. Server instance in `src/lib/auth.js`, client in `src/lib/auth-client.js`.
- **Server Actions** (`src/lib/Action/`) add JWT token via `auth.api.getToken()` and forward to backend endpoints.
- **Client fetch helpers** (`src/lib/api/`) hit backend without auth — used for public reads (interior designs, AI history).
- All backend calls use `process.env.NEXT_PUBLIC_SERVER_URL`.

## Environment variables

Required (in `.env`):
- `NEXT_PUBLIC_SERVER_URL` — backend API base URL
- `NEXT_PUBLIC_IMAGEBB_API` — imgbb key for image uploads
- `BETTER_AUTH_SECRET` — auth session secret
- `MONGO_DB_URI` — MongoDB connection string
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — Google OAuth

## Conventions

- No TypeScript; use `.js` and `.jsx` extensions.
- Server Actions go in `src/lib/Action/` with `"use server"` directive.
- Client-side fetch helpers go in `src/lib/api/`.
- Components are feature-grouped under `src/Components/<Feature>/`.
- Route groups `(Auth)` and `(Main)` control layout nesting.
