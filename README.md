# Portfolio Website Starter

Starter codebase for a personal portfolio using:

- React
- TypeScript
- Vite
- pnpm
- Ant Design

## Getting Started

```bash
corepack pnpm install
corepack pnpm dev
```

Open the app at `http://localhost:5173`.

## Available Scripts

- `corepack pnpm dev` - start local development server
- `corepack pnpm build` - type-check and create production build
- `corepack pnpm preview` - preview production build
- `corepack pnpm lint` - run ESLint

## Project Structure

```txt
src/
  components/sections/   # Portfolio sections (Hero, About, Skills, Projects, Contact)
  data/                  # Portfolio content in one place
  layout/                # Shared page layout
  types/                 # TypeScript types
  App.tsx                # App routes and section composition
```

## Customize Your Portfolio

Edit `src/data/portfolio.ts`:

- personal information
- skills
- project cards
- social links

Then adjust styling and theme tokens in:

- `src/App.tsx` (`ConfigProvider` theme config)
- `src/App.css`
