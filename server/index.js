const http = require('http');
const path = require('path');

const { createApp } = require('./app');

async function main() {
  const port = Number(process.env.PORT || 3000);
  const { app } = await createApp({ dbPath: process.env.DATABASE_PATH || path.join('data', 'twobird.db') });

  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`TwoBird listening on http://localhost:${port}`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
