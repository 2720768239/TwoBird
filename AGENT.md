# TwoBird Agent Guide

这份文档给后续接手本项目的 agent 或开发者使用。目标是快速理解项目现状、运行方式、关键文件和优先注意事项。

## 项目定位

TwoBird 是一个面向 Anthropic / Claude 文章系列的英语学习应用。它把课程内容、阅读材料、词汇、长难句、金句、学习任务和个人学习状态整合在一个轻量级 Web 应用里。

当前形态是 Next.js 单体部署：

- 前端：Next.js App Router + React 组件
- 后端：Next.js Route Handlers
- 数据库：SQLite，通过 `better-sqlite3` 访问
- 认证：用户名/密码登录，bcrypt 哈希密码，JWT 存入 httpOnly cookie
- 部署：Node 进程 + Nginx 反向代理

## 目录结构

```text
.
├── index.html                    # Next 迁移后的轻量兜底说明页
├── package.json                  # Node 脚本和依赖
├── package-lock.json             # 锁定依赖版本
├── src/
│   ├── app/                      # Next.js App Router 页面、样式和 API route
│   ├── components/               # React UI 组件
│   ├── data/                     # 课程模块和文章数据
│   └── lib/                      # 数据库、认证和客户端 API helper
├── server/
│   ├── app.js                    # 旧 Express app，迁移期间保留
│   ├── auth.js                   # JWT、cookie、密码哈希和认证中间件
│   ├── db.js                     # SQLite 初始化和建表
│   └── index.js                  # HTTP 服务启动入口
├── tests/
│   ├── auth.test.js              # 注册、登录、当前用户、登出测试
│   └── user-state.test.js        # 进度、笔记、收藏持久化测试
├── nginx/
│   └── twobird.conf              # Nginx 反向代理示例
├── data/                         # SQLite 数据目录，已在 .gitignore 忽略
├── .env.example                  # 生产环境变量模板
└── README.md                     # 面向用户/部署者的基础说明
```

## 核心功能

### 前端

React 页面由 `src/components/learning-app.js` 组合多个组件。文章数据定义在 `src/data/articles.js`，当前包含 13 篇课程文章。主要交互包括：

- 首页课程模块
- 侧边栏文章目录
- 文章阅读与中英切换
- 词汇表和顶部词汇条
- 长难句、概念、金句、任务 tab
- 段落高亮
- 段落笔记
- 笔记导出为 Markdown
- 登录、注册、登出
- 登录后同步进度、笔记和收藏

### 后端

`src/app/api/**/route.js` 提供这些主要 API：

- `GET /healthz`：健康检查
- `GET /`：返回 `index.html`
- `POST /api/auth/register`：注册并登录
- `POST /api/auth/login`：登录
- `POST /api/auth/logout`：登出
- `GET /api/auth/me`：获取当前用户
- `PUT /api/me/progress/:articleId`：保存文章学习进度
- `POST /api/me/notes/:articleId`：保存文章笔记
- `POST /api/me/favorites/:articleId`：设置或取消收藏
- `GET /api/me/dashboard`：一次性读取当前用户的进度、笔记和收藏

### 数据库

`server/db.js` 会自动创建 SQLite 表：

- `users`：用户账号和密码哈希
- `progress`：每个用户每篇文章的翻译显示、高亮、笔记数量
- `notes`：每个用户每篇文章的笔记内容
- `favorites`：每个用户收藏的文章

数据库默认路径是 `data/twobird.db`，可通过 `DATABASE_PATH` 环境变量覆盖。

## 本地运行

推荐使用项目依赖安装时对应的 Node.js 版本，尤其因为 `better-sqlite3` 是原生模块，Node ABI 不匹配会导致测试或启动失败。

```bash
npm install
npm run dev
```

默认访问：

```text
http://localhost:3000
```

生产启动：

```bash
npm start
```

测试：

```bash
npm test
```

语法检查：

```bash
npm run lint
```

## 环境变量

参考 `.env.example`：

```text
PORT=3000
NODE_ENV=production
DATABASE_PATH=data/twobird.db
JWT_SECRET=change-this-to-a-long-random-string
```

生产环境必须设置强随机 `JWT_SECRET`。

## 已知风险和优先修复点

1. 前端切换文章时可能覆盖已保存进度。
   `loadArticle()` 中会先 `updateProgress()` 和 `persistProgress()`，再 `applyDashboardToCurrentArticle()`。登录用户打开文章时，空白页面状态可能先写回服务器，覆盖已有进度。建议改成先渲染文章、应用远端状态，再允许自动保存。

2. 登出后当前 UI 状态清理不完整。
   `logout()` 清空了内存中的 `dashboardState`，但 `applyDashboardToCurrentArticle()` 在没有 progress 时直接返回，页面上已有翻译、高亮、笔记可能仍然可见。建议增加 `resetCurrentArticleState()`。

3. 生产环境 JWT 默认值不够安全。
   `server/auth.js` 在没有 `JWT_SECRET` 时会使用 `twobird-dev-secret`。建议在 `NODE_ENV=production` 且未显式配置 secret 时直接启动失败。

4. API 输入校验偏弱。
   `articleId` 直接 `Number()` 转换，没有校验是否为非负整数或是否落在文章范围内；`noteCount` 也没有限制为非负整数。

5. 测试脚本兼容性需要确认。
   在部分 Node 版本下，`node --test tests` 可能不会按预期发现目录测试文件。若遇到问题，可改为显式匹配测试文件，例如 `node --test tests/*.test.js`。

6. `better-sqlite3` 对 Node 版本敏感。
   如果看到类似 `NODE_MODULE_VERSION` 不匹配的错误，需要使用正确 Node 版本运行，或重新执行 `npm rebuild better-sqlite3` / `npm install`。

## 开发约定

- 优先保持当前单体架构，除非明确要拆分前端构建系统。
- 修改 `index.html` 时注意它既包含 UI，也包含文章内容和业务脚本，改动要尽量小而明确。
- 不要把 `data/`、`.env`、日志文件提交到 Git。
- 新增后端行为时，优先补充 `tests/` 下的 Node test + supertest 测试。
- 涉及认证、cookie、数据库写入的改动，应至少跑：

```bash
npm test
npm run lint
```

## 建议的下一步路线

1. 修复前端进度覆盖问题，并补充一个浏览器或 API 层回归测试。
2. 增强生产环境配置校验，尤其是 `JWT_SECRET`。
3. 为 API 增加输入校验和更明确的错误响应。
4. 将 `index.html` 中的文章数据拆到独立 JSON 或 JS 模块，降低维护成本。
5. 补充 README 的故障排查部分，说明 Node 版本和 `better-sqlite3` ABI 问题。
