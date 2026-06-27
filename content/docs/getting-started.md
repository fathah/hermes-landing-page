# Getting started

This guide takes you from nothing to a working Hermes One install with a model
provider configured.

## 1. Install the app

### Option A — download a release

Grab the installer for your OS from [hermesone.org](https://hermesone.org) (or
the [GitHub releases](https://github.com/fathah/hermes-desktop/releases)):

| OS      | Artifact        |
| ------- | --------------- |
| macOS   | `*-mac.zip` (signed) → `/Applications` |
| Windows | `*-setup.exe`   |
| Linux   | `*.AppImage` (or `.rpm`) |

### Option B — install via the `hermesone` CLI

The [`hermesone`](https://www.npmjs.com/package/hermesone) npm package downloads
the matching release, verifies its sha512 checksum, and installs it:

```bash
npm install -g hermesone
hermesone install        # download + verify + launch the installer
hermesone update         # later, to upgrade
```

## 2. First run — local or remote

On first launch the app asks how you want to run the Hermes Agent backend:

1. **Local mode** — the app checks whether Hermes is already installed in
   `~/.hermes`. If not, it runs the **official Hermes installer** with dependency
   resolution (Git, uv, Python 3.11+), tracking progress in the UI. Chat then
   goes through `http://127.0.0.1:8642` (per-profile port).
2. **Remote mode** — you provide a remote Hermes API server URL and API key. The
   app validates the connection and skips the local install. It talks to your
   remote URL with the same streaming protocol.

> The built-in installer runs the official script with `--skip-setup`, then
> finishes provider configuration in the GUI. On a machine that already has
> Hermes, the app detects it and skips straight to provider setup.

## 3. Pick a provider

After the backend is ready, choose an LLM provider. The first-run picker offers:

- **OpenRouter** (recommended — 200+ models via one API)
- **Anthropic** (Claude)
- **OpenAI** (GPT)
- **Local LLM** via any OpenAI-compatible base URL

Local presets are included for **LM Studio, Atomic Chat, Ollama, vLLM, and
llama.cpp** — these need no API key, but the server must already be running. The
full provider list (and messaging/tool integrations) is in
[Providers & integrations](providers-and-integrations.md).

Your provider choice and keys are saved through the Hermes config files (see
[Configuration](configuration.md)). The app then opens the main workspace.

## 4. Chat

The **Chat** screen is a streaming conversation UI with slash commands, tool
progress indicators, markdown rendering, syntax highlighting, and live token /
cost tracking in the footer. Type `/help` to see the available commands, or jump
to the [Features](features.md) guide.

## 5. Add capabilities

- **Skills, MCP servers, agents, workflows** — open the **Discover** tab to
  browse the community registry and install with one click (see
  [Registry & marketplace](registry-and-marketplace.md)).
- **Messaging gateways** — connect Telegram, Discord, Slack, and more from the
  **Gateway** screen.
- **Scheduled tasks** — build cron jobs with delivery targets from **Schedules**.

## Where your data lives

Everything is under `~/.hermes` (or `$HERMES_HOME`):

```
~/.hermes/.env            # API keys (env secrets provider)
~/.hermes/config.yaml     # provider + app config
~/.hermes/hermes-agent    # the agent install
~/.hermes/profiles/       # named profile directories
~/.hermes/state.db        # session history (SQLite)
~/.hermes/cron/jobs.json  # scheduled tasks
```

See [Configuration](configuration.md) for the full breakdown.
