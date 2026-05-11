# Digital King Website

Production Next.js site for Digital King, a Tampa Bay DJ and AI-forward entertainment brand.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- Vercel
- GitHub
- n8n booking webhook integration

## Local Development

Install dependencies:

```bash
npm ci
```

Create local env values:

```bash
copy .env.example .env.local
```

Then set `N8N_BOOKING_WEBHOOK_URL` in `.env.local` to the production n8n webhook URL.

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000.

## Production Checks

Run these before pushing or deploying:

```bash
npm run lint
npm run build
npm audit --audit-level=moderate
```

## Vercel Environment Variables

Add this server-only environment variable in Vercel for Production, Preview, and Development:

```text
N8N_BOOKING_WEBHOOK_URL=https://your-n8n-domain.example/webhook/digital-king-booking
```

Do not commit `.env.local`; it is intentionally ignored by Git.

## Vercel Build Settings

The project includes `vercel.json` with:

- Install command: `npm ci`
- Build command: `npm run build`
- Development command: `npm run dev`

Vercel should auto-detect the framework as Next.js.
