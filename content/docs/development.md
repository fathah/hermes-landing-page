# Development

How to build, run, test, and navigate the codebase.

## Prerequisites

- **Node.js and npm**
- A Unix-like shell environment for the Hermes installer (first-run local install)
- Network access for downloading Hermes during first-run install

## Setup

```bash
npm install              # also runs electron-builder install-app-deps (postinstall)
```

## Run

```bash
npm run dev              # electron-vite dev (hot reload)
npm run dev:fresh        # dev against a throwaway HERMES_HOME (mktemp) — clean state
npm run start            # electron-vite preview (run a built app)
```

`dev:fresh` is handy for exercising the first-run install/setup flow without
touching your real `~/.hermes`.

## Checks & tests

```bash
npm run lint             # eslint (cached)
npm run typecheck        # node + web tsconfigs
npm run test             # vitest run
npm run test:watch       # vitest watch
npm run test:coverage    # coverage
```

The test suite (Vitest) covers the SSE parser, IPC handlers, the preload API
surface, installer utilities, config-health, SSH remote, wallet store/balances,
and constants validation.

## Build & package

```bash
npm run build            # typecheck + electron-vite build → out/
npm run build:unpack     # unpacked dir build
npm run build:mac        # electron-builder --mac
npm run build:win        # electron-builder --win
npm run build:linux      # electron-builder --linux
npm run build:rpm        # Fedora/RHEL .rpm
```

Packaging config is in `electron-builder.yml`. electron-vite emits the bundled
main to `out/main/index.js` and the renderer to `out/renderer/`.

## Project layout

```
src/
├── main/            # Electron main process (privileged)
│   ├── index.ts     #   pre-ready setup → app/start.ts
│   ├── app/         #   start.ts, menu.ts, updater.ts, context-menu.ts
│   ├── ipc/         #   register.ts — the IPC handler registry
│   ├── secrets/     #   env / command secrets providers
│   └── *.ts         #   one module per concern (installer, hermes, config,
│                    #   profiles, sessions, skills, tools, memory, cronjobs,
│                    #   messaging-platforms, registry, wallet-*, run-stream…)
├── preload/         # contextBridge → window.hermesAPI + window.electron
├── renderer/src/    # React UI: screens/, components/, hooks/, utils/
└── shared/          # code shared across processes (i18n, chat-stream,
                     # attachments, tokens, wallets, registry types…)
```

See [Architecture](architecture.md) for how these layers interact.

## The `lat.md` knowledge graph

This repo uses [lat.md](https://www.npmjs.com/package/lat.md) to maintain a
cross-linked knowledge graph of architecture, design decisions, and test specs in
[`lat.md/`](https://github.com/fathah/hermes-desktop/tree/main/lat.md). It anchors source code to concepts via `[[wiki links]]`
and `// @lat:` comments.

```bash
npm i -g lat.md
lat locate "Section Name"      # find a section
lat search "natural language"  # semantic search (needs an LLM key)
lat check                      # validate all links and code refs
```

**Post-task checklist** (per `CLAUDE.md`): when you add or change functionality,
architecture, tests, or behavior, update `lat.md/` and run `lat check` — all wiki
links and code refs must pass.

## Conventions

- TypeScript throughout; `npm run typecheck` must pass for both the node and web
  tsconfigs.
- Keep the main entrypoint thin — boot concerns in `index.ts`, lifecycle in
  `app/start.ts`, IPC behind `ipc/register.ts`, domain logic in its own module.
- The renderer never imports Node or hits the filesystem directly — add a typed
  method to the preload bridge and an IPC handler instead.

## Contributing

See [`CONTRIBUTING.md`](https://github.com/fathah/hermes-desktop/blob/main/CONTRIBUTING.md) and the
[open issues](https://github.com/fathah/hermes-desktop/issues). The project is in
active development — features may change.
