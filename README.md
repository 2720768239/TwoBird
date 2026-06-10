# TwoBird

TwoBird is a learning app for the Anthropic article series. It now runs as a small production-ready Next.js app with:

- account/password login
- SQLite persistence through Next.js route handlers
- reading progress tracking
- per-article notes
- article favorites

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the Next.js app:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Tests

```bash
npm test
```

## Production deployment

1. Copy `.env.example` to `.env` and set a strong `JWT_SECRET`.
2. Make sure the server can create `data/twobird.db`.
3. Build and start the app:

```bash
npm run build
npm start
```

4. Put Nginx in front of it with [`nginx/twobird.conf`](./nginx/twobird.conf).

## Notes

- The app stores the login token in an httpOnly cookie.
- SQLite is used by default for simplicity on a single Alibaba Cloud server.
- The database file is created automatically if the `data/` directory does not exist.
- The old Express server files are kept during the migration, but the main app now lives under `src/app`.
