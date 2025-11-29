# Twin Portfolio — OpenAI AgentKit Portfolio

A visually-rich, content-driven portfolio and demo project built with Next.js, Sanity CMS, OpenAI ChatKit integration and modern frontend tooling. This repository demonstrates a full-stack personal portfolio with a Sanity-powered CMS, an embedded Sanity Studio, a ChatKit-based conversational assistant, authentication via Clerk, 3D/visual components, charts, and a modern UI system using Tailwind and React.

## Highlights

- Next.js 16 + React 19 + TypeScript 5
- Sanity v4 as the CMS (with Studio mounted at `/studio`)
- OpenAI ChatKit integration for a conversational AI assistant
- Clerk for authentication and session management
- Tailwind CSS utilities (container queries + animations), styled-components & Radix UI primitives
- 3D visuals using three.js and interactive animations via Framer Motion
- Recharts for data visualizations and custom UI components
- Biome for formatting & linting

## Project structure (top-level)

- `app/` — Next.js app routes and layouts (portfolio pages, dashboard, embedded Studio)
- `components/` — UI components and sections used across the site
- `ui/` — Design primitives and small UI widgets
- `sanity/` — Sanity studio config, schema types and helper libs
- `lib/` — Shared configuration and utilities (includes ChatKit / env helpers)
- `prompts/` — AI prompt templates and guardrails used by the project's Chat/AI features

## Tech stack & tools (from this repo)

- Next.js 16 (app router)
- React 19, TypeScript 5
- Sanity v4 (Studio, GROQ, typed schemas)
- OpenAI ChatKit (`@openai/chatkit-react`) for chat UI/flows
- Clerk (`@clerk/nextjs`) for authentication
- Tailwind CSS (v4 utilities + container queries) and `tailwind-merge`
- styled-components, Radix UI primitives
- three.js, framer-motion, cobe (for canvas/visual effects)
- Recharts for charts and visualizations
- Biome (`@biomejs/biome`) for linting and formatting

The full dependencies are listed in `package.json`.

## Features

- Fully responsive, animated portfolio with sections for About, Experience, Education, Skills, Projects, Testimonials and Contact.
- Sanity Studio mounted inside the app for authors to edit content (content types under `sanity/schemaTypes`).
- AI/Chat assistant tied to Sanity via a Model Context Protocol (MCP) integration — allows querying documents, retrieving schema/context, and semantic search via Sanity embeddings.
- Chat UI powered by OpenAI ChatKit and integrated theming.
- Authentication flows via Clerk (sign-in/sign-out, session-aware UI components).
- Interactive charts (Recharts), 3D visuals (three.js) and animated UI components for a polished experience.
- Utility patterns for theme toggles, sidebar/dock UI, and content-driven pages.

## Environment variables

Create a `.env.local` in the project root and provide the following (names found in the repo):

- `NEXT_PUBLIC_SANITY_PROJECT_ID` — your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` — dataset (e.g., `develop`)
- `NEXT_PUBLIC_SANITY_API_VERSION` — optional (defaults are present in `sanity/env.ts`)
- `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` — ChatKit workflow ID used by the client (`lib/config.ts` reads this)

Optional / provider-specific variables you may need to configure:

- Clerk keys (from Clerk dashboard) — used by `@clerk/nextjs`
- OpenAI/ChatKit keys if required by the ChatKit setup or the proxy you use

NOTE: The repository includes prompt templates (under `prompts/`) which mention example values (e.g., `SANITY_PROJECT_ID = znmqq7dr` and `SANITY_DATASET = develop`). Replace those with your own credentials.

## Quick start (recommended: pnpm)

This project includes a `pnpm-lock.yaml`, so `pnpm` is recommended. You can use `npm`/`yarn` too, but examples below use `pnpm`.

Run locally:

```bash
# install
pnpm install

# generate Sanity types (if you use Studio) and run dev
pnpm run typegen
pnpm run dev
```

Available scripts (from `package.json`):

- `dev` — run Next.js in development mode
- `build` — build for production
- `start` — run production server
- `lint` — run Biome lint checks (`biome check`)
- `format` — format code with Biome (`biome format --write`)
- `typegen` — extract/generate Sanity type definitions

## Sanity Studio

- The Sanity Studio is configured at `sanity.config.ts` and is mounted at `/studio` in the app (basePath set to `/studio`).
- Edit schema types under `sanity/schemaTypes/`. Run `pnpm run typegen` after changing schemas.

## Chat / AI integration

- The project integrates OpenAI ChatKit via `@openai/chatkit-react` and includes prompt templates under `prompts/`.
- `lib/config.ts` expects `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` and the chat components are located under `components/chat/`.
- The prompts show how the app uses Sanity MCP tools for: querying documents (GROQ), listing schemas, semantic search and retrieving context for the assistant.

## Authentication

- Clerk is used for auth — provider is integrated via `@clerk/nextjs` and you’ll find Clerk UI hooks in components like `profile-image.tsx`, `sidebar-toggle.tsx`, and provider wiring in `app/(portfolio)/layout.tsx`.

## Image optimization

- `next.config.ts` includes remote image patterns for `cdn.sanity.io` and `images.unsplash.com` to allow Next Image to load external images safely.

## Linting & formatting

- This project uses Biome (`@biomejs/biome`) for linting/formatting. Run `pnpm run lint` and `pnpm run format`.

## Deployment suggestions

- The app is compatible with Vercel (Next.js), Netlify or any platform that supports Node. When deploying, provide the environment variables listed above and set the build command to `pnpm build` and start to `pnpm start` (or let the platform handle serverless routes).

## Troubleshooting & tips

- If Studio shows runtime errors, ensure `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set correctly.
- Run `pnpm run typegen` after schema changes to keep TypeScript types in sync.
- If images fail to load, verify remote image domains in `next.config.ts`.

## Credits & acknowledgements

- Built with Next.js, Sanity, OpenAI ChatKit, Clerk, Framer Motion, three.js, Recharts and many excellent OSS packages.
- Prompt templates and MCP-related tooling are included under `prompts/` for reproducible AI behavior.

## Contributing

- Feel free to open issues or PRs. If adding features, keep changes small and add a short README update explaining the new config.

