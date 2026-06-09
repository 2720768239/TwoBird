# TwoBird Production Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the current single-file learning demo into a deployable full-stack app with account/password auth, persistent user data, and a production-ready deployment path for an Alibaba Cloud server.

**Architecture:** Keep the app as a single Node.js/Express deployment unit that serves the existing `index.html` and all API routes from the same process. Use SQLite for persistence so the project is easy to run on one Alibaba Cloud server without a separate database service. Persist user identity, reading progress, notes, and favorites while leaving the article content fixed for now.

**Tech Stack:** Node.js, Express, SQLite, better-sqlite3, bcryptjs, jsonwebtoken, vanilla HTML/CSS/JS, Nginx for reverse proxy.

---

### Task 1: Create project skeleton and move the demo into source files

**Files:**
- Create: `package.json`
- Modify: `index.html`
- Create: `server/app.js`
- Create: `server/db.js`
- Create: `server/auth.js`
- Create: `server/index.js`
- Create: `tests/auth.test.js`
- Create: `tests/user-state.test.js`

- [ ] **Step 1: Add a minimal frontend and backend entrypoint**

```js
// src/main.js
import './styles.css';
console.log('TwoBird app loaded');

// server/app.js
const express = require('express');
const app = express();
app.get('/healthz', (_req, res) => res.json({ ok: true }));
module.exports = app;
```

- [ ] **Step 2: Verify the skeleton runs**

Run: `npm.cmd install`
Expected: dependencies install successfully.

Run: `node -e "require('./server/app')"`
Expected: no syntax errors.

- [ ] **Step 3: Commit**

```bash
git add package.json vite.config.js index.html src server public
git commit -m "feat: scaffold production app"
```

### Task 2: Implement authentication and persistence

**Files:**
- Modify: `server/app.js`
- Modify: `server/db.js`

- [ ] **Step 1: Add failing tests for register/login/me**

```js
// tests/auth.test.js
test('registers a user and logs in with the same password', async () => {
  // create user -> login -> fetch me
});
```

- [ ] **Step 2: Run the tests and confirm they fail before implementation**

Run: `npm.cmd test`
Expected: auth tests fail because the endpoints do not exist yet.

- [ ] **Step 3: Implement bcrypt password hashing, JWT session cookies, and user persistence**

```js
// server/routes/auth.js
router.post('/register', async (req, res) => { /* hash password and insert user */ });
router.post('/login', async (req, res) => { /* verify password and issue token */ });
router.post('/logout', authRequired, async (_req, res) => { /* clear cookie */ });
```

- [ ] **Step 4: Verify auth tests pass**

Run: `npm.cmd test`
Expected: auth tests pass.

- [ ] **Step 5: Commit**

```bash
git add server tests
git commit -m "feat: add authentication"
```

### Task 3: Persist learning state

**Files:**
- Modify: `index.html`
- Modify: `server/app.js`

- [ ] **Step 1: Add failing tests for progress, notes, and favorites endpoints**

```js
// tests/user-state.test.js
test('saves and loads reading progress, notes, and favorites', async () => {
  // authenticated CRUD flow
});
```

- [ ] **Step 2: Run tests and verify red**

Run: `npm.cmd test`
Expected: user-state tests fail before endpoints exist.

- [ ] **Step 3: Implement CRUD endpoints and frontend calls**

```js
// server/routes/progress.js
router.put('/:articleId', authRequired, async (req, res) => { /* upsert progress */ });
router.get('/', authRequired, async (req, res) => { /* return all progress */ });
```

- [ ] **Step 4: Verify tests pass**

Run: `npm.cmd test`
Expected: auth and user-state tests pass.

- [ ] **Step 5: Commit**

```bash
git add server src tests
git commit -m "feat: persist learning state"
```

### Task 4: Production hardening and deployment

**Files:**
- Create: `.env.example`
- Create: `nginx/twobird.conf`
- Create: `.gitignore`
- Modify: `README.md`
- Modify: `package.json`

- [ ] **Step 1: Add config, startup, and deployment docs**

- [ ] **Step 2: Verify production build/start**

Run: `npm.cmd start`
Expected: server starts and serves the app.

- [ ] **Step 3: Commit**

```bash
git add .env.example nginx scripts README.md package.json
git commit -m "chore: productionize deployment"
```
