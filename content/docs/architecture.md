# Architecture

Hermes One is an Electron app with the standard three-layer split — **main**,
**preload**, and **renderer** — built and bundled by electron-vite. The renderer
never touches Node or the filesystem directly; it calls a typed bridge that the
preload exposes, and the main process does the privileged work (spawning the
Hermes agent, reading `~/.hermes`, talking to the API, running gateways).

```
┌─────────────────────────────────────────────────────────────┐
│ Renderer (React)            src/renderer/src                  │
│   screens/ · components/ · hooks/      window.hermesAPI ──┐   │
└──────────────────────────────────────────────────────────┼───┘
                          contextBridge (IPC)               │
┌──────────────────────────────────────────────────────────▼───┐
│ Preload   src/preload/index.ts   exposes window.hermesAPI      │
│           (+ window.electron); sandboxed, contextIsolated      │
└──────────────────────────────────────────────────────────┬───┘
                          ipcRenderer ⇄ ipcMain              │
┌──────────────────────────────────────────────────────────▼───┐
│ Main process   src/main/                                       │
│   app lifecycle · IPC registry · installer · hermes API client │
│   · profiles · gateways · wallets · cron · secrets             │
└──────────────────────────────────────────────────────────┬───┘
                          HTTP + SSE                         │
┌──────────────────────────────────────────────────────────▼───┐
│ Hermes Agent   local 127.0.0.1:<port>  or  remote API server   │
└───────────────────────────────────────────────────────────────┘
```

## Processes

### Main process — `src/main/`

The entrypoint stays tiny and delegates startup. `src/main/index.ts` does only
pre-`ready` work — applies GPU crash preferences, optionally enables the CDP
testing port — then calls `startMainProcess()` in `src/main/app/start.ts`.

`startMainProcess()` owns the app lifecycle: crash logging, IPC handler
registration, updater wiring, Electron `ready`/`activate`/`window-all-closed`/
`before-quit` events, CSP headers, security hardening, and the main
`BrowserWindow`.

App chrome lives in focused modules under `src/main/app/`:

- `menu.ts` — the application menu (incl. a Help-menu Developer Tools toggle kept
  as a production diagnostics escape hatch).
- `updater.ts` — update IPC and electron-updater events.
- `context-menu.ts` — the chat right-click menu.

The rest of `src/main/` is domain logic — a flat module per concern, e.g.
`installer.ts`, `hermes.ts` (API client), `config.ts`, `profiles.ts`,
`sessions.ts`, `skills.ts`, `tools.ts`, `memory.ts`, `cronjobs.ts`,
`messaging-platforms.ts`, `registry.ts` (Discover), `wallet-*.ts`,
`run-stream.ts` / `sse-parser.ts` (streaming), and the `secrets/` provider.

### Preload — `src/preload/index.ts`

Runs in an isolated world and exposes two globals via `contextBridge`:
`window.hermesAPI` (the app's typed surface) and `window.electron`. The window is
created with `nodeIntegration: false`, `contextIsolation: true`, and
`sandbox: true` — so the renderer has no ambient Node access and everything goes
through explicit IPC.

### Renderer — `src/renderer/src/`

A React app: `App.tsx` + `main.tsx`, with `screens/`, `components/`, `hooks/`,
`utils/`, and `constants.ts`. Each top-level screen maps to a nav destination —
**Welcome, Setup, Install, Chat, Sessions, Agents, Skills, Models, Memory, Soul,
Tools, Schedules, Gateway, Office, Kanban, Discover, Providers, Settings**, plus
a `Layout` shell and a `SplashScreen`. See [Features](features.md).

## IPC registry

Renderer↔main calls are isolated from bootstrap so the registry can be split by
domain. `registerIpcHandlers()` in `src/main/ipc/register.ts` registers all
handlers behind one function and receives app-level callbacks (the main window,
model-library and connection-config notifications, external-URL opening, active
chat abort handles). Examples: chat streaming, sessions, profiles, the wallet
handlers (`list-wallets`, `create-wallet`, …, `get-token-balances`), and
`transcribe-audio` for speech-to-text.

## Talking to the Hermes agent

`src/main/hermes.ts` is the HTTP/SSE client. In **local** mode it resolves a
per-profile base URL (`http://127.0.0.1:<port>`, default `8642`) and can manage
the local gateway; in **remote** mode it targets your configured URL + key. Chat
responses stream as Server-Sent Events, parsed in real time
(`run-stream.ts` / `sse-parser.ts`) so the UI renders tool progress, markdown,
and token usage as it arrives.

Speech-to-text is deliberately routed through the Hermes API server
(`/api/audio/transcribe`), independent of the selected chat model, falling back
to the Python transcription dispatcher when the desktop route is absent.

## Startup hardening & resilience

- **CSP** — the packaged renderer keeps its meta CSP aligned with the
  production response CSP so `file://` startup assets load consistently.
- **GPU fallback** — `gpu-fallback.ts` disables hardware acceleration (keeping
  SwiftShader WebGL) after a GPU-process crash so VMs / virtual displays don't
  hit an infinite crash→relaunch loop. Persistent fallback is honored on
  Windows/Linux; macOS clears stale flags unless `HERMES_GPU_FALLBACK=1`.
- **Diagnostics** — `HERMES_OPEN_DEVTOOLS=1` opens devtools on launch so a
  packaged build can surface renderer errors even when startup fails before the
  UI paints.

## Build & packaging

electron-vite bundles the main file to `out/main/index.js` and the renderer to
`out/renderer/`; packaged main resolves `../renderer/index.html` from
`__dirname`. electron-builder (`electron-builder.yml`) produces the per-OS
artifacts. See [Development](development.md).

> For code-anchored detail on any of the above, see the matching section in
> [`lat.md/`](https://github.com/fathah/hermes-desktop/tree/main/lat.md) — e.g. `lat.md/main-process.md`.
