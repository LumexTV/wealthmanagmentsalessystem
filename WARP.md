# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a KYNOVA marketing website built with React, TypeScript, Vite, and shadcn-ui components. The site is a single-page application for an Immobilienmakler (real estate) lead reactivation and qualification service. The project was created using Lovable.dev and follows their development patterns.

## Commands

### Development
```bash
npm run dev
```
Starts the Vite development server on port 8080 (host: "::").

### Build
```bash
npm run build
```
Production build using Vite with Terser minification and code splitting configured for vendor chunks (React, React-DOM), router (react-router-dom), and UI components (Radix UI).

```bash
npm run build:dev
```
Development mode build (includes Lovable component tagger).

### Linting
```bash
npm run lint
```
Runs ESLint with TypeScript support. Note: `@typescript-eslint/no-unused-vars` is disabled in the config.

### Preview
```bash
npm run preview
```
Preview production build locally.

## Architecture

### Tech Stack
- **Build Tool**: Vite 7 with React SWC plugin
- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6 (client-side routing)
- **UI Components**: shadcn-ui (Radix UI primitives + Tailwind CSS)
- **Styling**: Tailwind CSS with custom theme configuration
- **Forms**: React Hook Form + Zod validation
- **State Management**: TanStack Query (React Query) for server state
- **Icons**: Lucide React

### Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn-ui primitives (accordion, button, dialog, etc.)
│   ├── Hero.tsx        # Landing hero section
│   ├── Navbar.tsx      # Navigation with mobile menu
│   ├── ProblemSection.tsx
│   ├── SolutionsSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── pages/              # Route pages
│   ├── Index.tsx       # Main landing page (composes all sections)
│   ├── Impressum.tsx   # Legal imprint (German requirement)
│   ├── Datenschutz.tsx # Privacy policy (GDPR)
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── useScrollAnimation.tsx
├── lib/                # Utilities
│   └── utils.ts        # cn() utility for className merging (clsx + tailwind-merge)
├── App.tsx             # Root app with providers (QueryClient, TooltipProvider, Router)
├── main.tsx            # Entry point
└── index.css           # Global styles and Tailwind directives
```

### Routing Strategy
- All routes defined in `App.tsx` using React Router
- Main pages: `/` (Index), `/impressum`, `/datenschutz`
- Catch-all route (`*`) redirects to NotFound component
- **Important**: Add new custom routes ABOVE the catch-all route in `App.tsx`
- Navigation uses hash anchors for section scrolling (e.g., `/#hero`, `/#contact`)

### Component Architecture
- **Page Components**: Compose sections and handle layout
- **Section Components**: Self-contained page sections (Hero, Problem, Solutions, etc.)
- **UI Components**: Located in `src/components/ui/` - reusable shadcn-ui primitives
- All components use TypeScript and Tailwind CSS for styling
- Components use the `@/` alias for imports (resolves to `src/`)

### Styling System
- **Theme**: Custom Tailwind config with HSL CSS variables for colors
- **Dark Mode**: Supported via `next-themes` with class-based strategy
- **Custom Animations**: fade-in, slide-up, accordion animations defined in tailwind.config.ts
- **Utilities**: Use `cn()` from `lib/utils.ts` for conditional className merging
- **Design Tokens**: Colors use HSL variables (--primary, --secondary, --muted, etc.)

### TypeScript Configuration
- Path alias: `@/*` → `./src/*`
- Strict null checks: **disabled**
- Unused parameters/locals: **not flagged**
- Implicit any: **allowed**
- Note: Project uses relaxed TypeScript settings - maintain this pattern

### Form Handling
- Use React Hook Form with `@hookform/resolvers` for Zod schema validation
- Form components available in `src/components/ui/form.tsx`

### Toast Notifications
- Two toast systems available: `@/components/ui/toaster` and `@/components/ui/sonner`
- Both are mounted in `App.tsx` root

## Development Patterns

### Adding New Routes
1. Create page component in `src/pages/`
2. Add route in `App.tsx` BEFORE the catch-all `*` route
3. Update navigation links in `Navbar.tsx` if needed

### Adding New UI Components
- shadcn-ui components are pre-installed in `src/components/ui/`
- Use the `cn()` utility for className composition
- Follow existing component patterns for consistency

### Section Navigation
- Main page sections use ID-based anchors (`#hero`, `#problem`, `#solutions`, etc.)
- Navbar and buttons use smooth scroll behavior with `scrollIntoView`
- When navigating from other pages, redirect to `/` then scroll to section

### Lovable Integration
- This project is connected to Lovable.dev
- Changes pushed to the repo sync with Lovable
- Component tagger is enabled in development mode via Vite plugin

## Important Notes

- **DSGVO Compliance**: Site emphasizes GDPR compliance (German market)
- **German Content**: Primary language is German (maintain this for new content)
- **Vite Server**: Configured for IPv6 (host: "::") on port 8080
- **Build Output**: Production builds go to `dist/` directory
- **Code Splitting**: Pre-configured chunks for vendor, router, and UI libraries
