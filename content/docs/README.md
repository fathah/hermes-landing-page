# Hermes One — Documentation

**Hermes One** is a community-maintained native desktop app for installing,
configuring, and chatting with the [Hermes Agent](https://github.com/NousResearch/hermes-agent)
— a self-improving AI assistant with tool use, multi-platform messaging, and a
closed learning loop. Instead of managing the Hermes CLI by hand, the app walks
you through install, provider setup, and day-to-day usage in one place. It uses
the official Hermes install script, stores everything in `~/.hermes`, and gives
you a GUI for chat, sessions, profiles, memory, skills, tools, scheduling, and
messaging gateways.

It's built with **Electron + electron-vite + React + TypeScript**.

## Start here

- **[Getting started](getting-started.md)** — install the app, first-run setup
  (local vs. remote), and picking a provider.
- **[Architecture](architecture.md)** — the Electron main / preload / renderer
  split, startup flow, the `window.hermesAPI` bridge, and how the app talks to
  the Hermes agent.
- **[Configuration](configuration.md)** — the `~/.hermes` layout, profiles,
  `config.yaml`, `.env`, and the secrets provider.
- **[Features](features.md)** — every screen: chat & slash commands, sessions,
  agents/profiles, skills, models, memory, soul, tools, schedules, gateways,
  office, and kanban.
- **[Providers & integrations](providers-and-integrations.md)** — supported LLM
  providers, local model presets, messaging platforms, and tool integrations.
- **[Registry & marketplace](registry-and-marketplace.md)** — the in-app
  Discover gallery and the `hermesone add` CLI for installing skills, MCP
  servers, agents, and workflows.
- **[Development](development.md)** — prerequisites, scripts, project layout,
  testing, the `lat.md` knowledge graph, and packaging.

## At a glance

|               |                                                                     |
| ------------- | ------------------------------------------------------------------- |
| **Type**      | Electron desktop app (macOS, Windows, Linux)                        |
| **Stack**     | electron-vite, React, TypeScript, electron-builder                  |
| **Backend**   | Hermes Agent — local (`127.0.0.1:8642`) or a remote API server      |
| **Data dir**  | `~/.hermes` (`%LOCALAPPDATA%\hermes` on Windows, or `$HERMES_HOME`) |
| **Transport** | HTTP + SSE streaming                                                |
| **License**   | MIT                                                                 |

## How it relates to the other repos

- **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** — the Python
  agent that actually runs models, tools, and gateways. Hermes One is a GUI on
  top of it; it depends on the agent for behavior.
- **[hermes-registry](https://github.com/hermesonehq/hermes-registry)** — the
  community catalog of skills, MCP servers, agents, and workflows the app's
  **Discover** tab installs from. See [Registry & marketplace](registry-and-marketplace.md).
- **[hermesone](https://www.npmjs.com/package/hermesone)** — the npm CLI that
  installs/updates this desktop app and can `add` registry entries.
