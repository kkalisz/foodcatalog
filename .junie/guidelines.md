### Project Stack & Production Guidelines

This document provides guidelines for Junie agent to maintain, improve, and debug the **LokalGastro** application.

### 🛠 Tech Stack Overview

- **Framework:** Next.js 16 (App Router)
- **Runtime:** Node.js (Latest LTS)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0+, Radix UI Themes (`@radix-ui/themes`)
- **UI Components:** Radix UI primitives, Lucide React icons
- **Form Management:** React Hook Form + Zod (validation)
- **Auth:** Firebase Auth (Client-side implementation)
- **Internationalization (i18n):** `next-intl` (server-side) & `react-i18next` (client-side)
- **Data Fetching:** Standard `fetch` API, Firebase SDK
- **Charts:** Recharts
- **Package Manager:** pnpm

---

### 📏 Coding Standards & Best Practices

#### 1. Component Structure

- **Server Components by Default:** Always prefer Server Components. See `🌐 Next.js SSR & Rendering Model` for detailed selection criteria.
- **Organization:**
  - `components/ui/` for low-level Radix/Shadcn primitives.
  - `components/[feature]/` for domain-specific components.
  - `app/` for pages, layouts, and route handlers.
- **Typing:** Always define props interfaces. Avoid `any`. Use `React.FC` or just destructured props with types.

#### 2. Styling (Tailwind 4 & Radix)

- **Tailwind 4:** Use modern CSS-first approach. Variables and theme extensions should be handled in CSS if needed.
- **Radix Themes:** Prefer `@radix-ui/themes` components for consistent spacing, colors, and accessibility.
- **Consistency:** Use `clsx` and `tailwind-merge` for conditional class names.

#### 3. State & Forms

- **Validation:** Always use Zod schemas for form validation and API response validation.
- **Forms:** Prefer `react-hook-form` with the `@hookform/resolvers/zod` resolver.
- **State:** Use React `useState`/`useReducer` for local state; React Context for global state (e.g., `AuthContext`).

#### 4. Internationalization (i18n)

- **Locales:** Supported locales are `en` (English) and `pl` (Polish).
- **Consolidation:** Aim to move more translations to server-side using `next-intl` to avoid hydration mismatches.
- **Current Issue:** Avoid `I18nProvider` returning `null` on server-side as it hurts SEO and performance.

#### 5. Naming Consistency

- **File Names:** Use `kebab-case` for components (e.g., `restaurant-card.tsx`) or `PascalCase` if the project uses it consistently (most current components seem to be `kebab-case`, but some directories are `PascalCase`).
- **Data Folders:** Ensure correct spelling in folder names (e.g., use `constants` instead of `constans`).
- **Package Management:** Use `pnpm` exclusively as specified in `package.json`. Avoid using `npm` or `yarn` to prevent lockfile conflicts.

---

### 🌐 Next.js SSR & Rendering Model (Server vs Client Components)

#### 1. Core Rule

- **Server Components by Default:** Always prefer Server Components.
- **Client Components:** Use only for `useState`, `useEffect`, event handlers (`onClick`, etc.), browser-only APIs, client-side SDKs, or highly interactive UI behavior.

#### 2. Rendering Hierarchy

- ✅ `Server -> Client`
- ✅ `Server -> Client` with server-rendered children passed into the client component
- ❌ `Client -> Server` by direct import (A Client Component must never import a Server Component directly).

#### 3. Component Selection

- **Use Server Components for:** Route pages, layouts, SEO-critical content, database / Firestore Admin SDK reads, secure data access, orchestration of page sections.
- **Typical examples:** restaurant details page, menu section, pricing section, static info blocks, metadata preparation, structured data generation.
- **Use Client Components for:** Interactive buttons, forms with state, tabs, modals, accordions, filters and sorting UI, favorites / likes, live updates, browser SDKs, map interactions, sliders.
- **Smallest Possible Scope:** A Client Component should be as small as possible. Do not convert an entire page to a Client Component just because one button is interactive.

#### 4. Data Access Rules

- **Server-Side Data Access:**
  - Use for SEO, sensitive reads, privileged logic, Admin SDK usage, hidden business rules, initial page content.
  - Keep access in dedicated server-only files (e.g., `lib/server/...` or `lib/firebase/admin.ts`).
- **Client-Side Data Access:**
  - Use for real-time data, interactive UI, or when Security Rules safely protect access.
  - Keep client Firestore usage inside focused hooks or small client components.
- **SEO Criticality:** For SEO pages, never load primary page content only in a client `useEffect`.
  - ❌ Avoid: `useEffect(() => { loadRestaurant() }, [])` for critical content.

---

### 🚀 Production Readiness (Production Grade Approach)

#### 1. Error Handling & Loading

- **Error Boundaries:** Use `error.tsx` in route segments to handle runtime errors gracefully.
- **Loading States:** Use `loading.tsx` for skeleton screens or loading indicators.
- **API Errors:** Implement proper try-catch blocks in route handlers and client-side fetches, providing user-friendly error messages via `sonner` or `radix-ui/toast`.

#### 2. Performance & SEO

- **Images:** Use `next/image` for automatic optimization. Currently, `unoptimized: true` is set in `next.config.mjs` – this should be re-evaluated for production.
- **Metadata:** Use the `Metadata` API in layouts and pages for SEO.
- **Server-Side Auth:** Consider moving auth session to cookies (via Middleware) to enable SSR for protected routes, replacing the current `localStorage` approach.

#### 3. Build Configuration

- **Strict Mode:** Disable `ignoreBuildErrors` and `ignoreDuringBuilds` in `next.config.mjs` before production releases to ensure type safety.

---

### 🛠 Debugging Strategies for Junie

- **Logs:** Use `console.log` for development, but remove or replace with a proper logger for production.
- **Network:** Inspect browser Network tab for API calls.
- **Firebase:** Check Firebase Console for Auth and Database state.
- **Environment:** Ensure `.env.local` contains all required `NEXT_PUBLIC_` variables.

---

### 📝 Instructions for Junie (Adding Improvements)

1. **Analysis:** Before making changes, always check the existing component pattern and reuse Radix UI primitives.
2. **Type Safety:** Run `tsc --noEmit` or rely on ESLint to ensure new code doesn't break types.
3. **Consistency:** Match the existing import order (handled by ESLint `import/order`).
4. **Refactoring:** When touching a file, look for opportunities to simplify logic (e.g., removing redundant `useTranslation` calls if `next-intl` can be used).
5. **Testing:** If adding a complex feature, suggest or implement Vitest unit tests in a `__tests__` folder next to the component/logic.

---

_Created by Junie - Production Grade FE Guidelines_
