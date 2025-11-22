# Backend (Express API) for Render

## Deployment
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **PORT:** Uses `process.env.PORT` (required by Render)
- **CORS:** Enabled for all origins by default. Set `ALLOWED_ORIGIN` env var to restrict.
- **Root route:** `GET /` returns `API running` for health checks.
- **API routes:** `/api/*`
- **Database:** If using Drizzle ORM, set `DATABASE_URL` and run `npm run db:push` to apply schema.

## Local Development
- `npm run dev` (requires tsx)
- `npm run build` (bundles server)
- `npm start` (runs production bundle)

## Notes
- Do not hardcode port numbers. Always use `process.env.PORT`.
- Add any secrets (DB, session, etc.) in Render's environment settings.
