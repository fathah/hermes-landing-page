# Features

A tour of every screen and what it does. Screens live in
`src/renderer/src/screens/`.

## Chat

A streaming conversation UI: SSE streaming, tool-progress indicators, markdown
rendering, and syntax highlighting. The footer shows **live token usage and
cost** (prompt/completion counts). Long code blocks are collapsible, and a
browser-style title bar holds open-conversation tabs.

### Slash commands

Typed slash commands are routed through the gateway's `slash.exec` /
`command.dispatch` pipeline — they are executed as commands, **not** sent as
prompt text. There are 22+, including:

`/new`, `/clear`, `/fast`, `/web`, `/image`, `/browse`, `/code`, `/shell`,
`/usage`, `/help`, `/tools`, `/skills`, `/model`, `/memory`, `/persona`,
`/version`, `/compact`, `/compress`, `/undo`, `/retry`, `/debug`, `/status`.

### In-chat model override

`/model` (or the model picker) switches the model — and its provider — for the
**current conversation only**, without changing the global default. A per-model
**context-window** override drives the context gauge and the agent's
auto-compaction.

### Context folder

Each session can be linked to a working folder on disk. The link is persisted in
a desktop-owned `state.db` table, so re-opening a conversation restores its
folder.

## Sessions

Browse, search, and resume past conversations. History is stored in SQLite with
**full-text search (FTS5)** and grouped by date. The Chat nav item also shows a
recent-sessions list (capped at five, with "Show more" opening the full list).

## Agents (profiles)

Create, delete, and switch between Hermes **profiles** — separate environments
with isolated config, persona, and history. See
[Configuration → Profiles](configuration.md#profiles).

## Skills

Browse, install, and manage skills — both bundled skills and ones installed from
the registry. Registry skills are downloaded into
`<profile>/skills/<category>/<id>/`. See
[Registry & marketplace](registry-and-marketplace.md).

## Models

CRUD management for **saved model configurations** across providers — keep
multiple model presets and switch between them.

## Memory

View and edit memory entries and the user-profile memory, with capacity
tracking. The app can also configure discoverable **memory providers**: Honcho,
Hindsight, Mem0, RetainDB, Supermemory, and ByteRover.

## Soul (persona)

Edit and reset your agent's personality — the active profile's `SOUL.md`.
Installing a registry agent writes its `AGENT.md` as the new profile's `SOUL.md`.

## Tools

Enable or disable individual **toolsets** (14): web, browser, terminal, file,
code execution, vision, image generation, TTS, skills, memory, session search,
clarify, delegation, MoA (mixture-of-agents), and task planning.

## Schedules

A cron-job builder — minutes, hourly, daily, weekly, or custom cron expressions
— with **15 delivery targets** for where results are sent. Jobs are stored in
`~/.hermes/cron/jobs.json`.

## Gateway (messaging)

Configure and control messaging-platform integrations so you can chat with your
agent from anywhere. **16 gateways**: Telegram, Discord, Slack, WhatsApp,
Signal, Matrix/Element, Mattermost, Email (IMAP/SMTP), SMS (Twilio/Vonage),
iMessage (BlueBubbles), DingTalk, Feishu/Lark, WeCom, WeChat (iLink Bot),
Webhooks, and Home Assistant. See
[Providers & integrations](providers-and-integrations.md).

## Office (Claw3d)

A visual 3D interface ("Hermes Office") with its own dev server and adapter
management.

## Kanban

A JIRA-style multi-agent board — a thin client over the `hermes kanban` CLI with
canonical status columns, an archived toggle, and focus/poll refresh.

## Discover

The in-app marketplace for the community registry — browse and one-click install
skills, MCP servers, agents, and workflows. Covered in detail in
[Registry & marketplace](registry-and-marketplace.md).

## Settings

Provider config, credential pools, **backup / import**, the **log viewer**
(gateway + agent logs), network/remote settings, secrets provider, theme, and the
**auto-updater** (check for and install updates via electron-updater; a startup
upgrade button and an auto-upgrade preference are available).

## Wallets & token balances

Profile-scoped **Base mainnet** wallets with encrypted recovery phrases, and
on-chain ERC-20 token balance reads (via ethers v6). Managed through the wallet
IPC handlers in the main process.

## Analytics

Privacy-first, **opt-out** usage analytics: anonymous events POSTed to the
in-house Hermes analytics service, keyed by a per-install UUID stored in
`localStorage`. No third-party analytics SDK.

## Internationalization

An i18n framework with a complete English locale across all screens, ready for
community translations (`src/shared/i18n/`, `src/renderer/src/components/I18nProvider.tsx`).
