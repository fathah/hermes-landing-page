# Registry & marketplace

Hermes One can install community **extensions** — skills, MCP servers, agents,
and workflows — from the
[hermes-registry](https://github.com/hermesonehq/hermes-registry) catalog. There
are two front ends to the same install model: the in-app **Discover** tab and the
**`hermesone add`** CLI.

## The catalog

The registry is a **catalog, not a package mirror**. It's a public GitHub repo
whose generated `index.json` lists every entry with its `type`, `id`, `path`,
version, and `compatibility`. Skills/agents/workflows ship their files in the
repo; MCP entries are a thin manifest pointing at a pinned, already-published
server (`npx`/`uvx`/`docker`) plus a `source` link. The app never clones the
repo — it reads `index.json` and pulls just the files an entry needs.

> A registry website (with search and per-entry install counters) also fronts the
> same catalog. The desktop reads entry **files** from raw GitHub; the website's
> API records installs.

## Discover (in-app)

The **Discover** screen renders the catalog as a gallery. For each entry it:

1. **Discovers** entries from `index.json`.
2. **Checks compatibility** — compares the running Hermes / desktop versions
   against the entry's `compatibility` ranges (e.g. `desktop: ">=0.6.0"`); MCPs
   are supported from Hermes One **0.6** onward.
3. **Collects config** — for MCPs, builds a form from the manifest's
   `configSchema` and asks for required secrets (stored via the secrets provider,
   never committed).
4. **Installs** into the active profile.

The install code is `src/main/registry.ts`.

## Install model (per type)

| Type       | What "install" does                                                           |
| ---------- | ---------------------------------------------------------------------------- |
| **skill**    | downloads the entry folder → `<profile>/skills/<category>/<id>/`             |
| **mcp**      | splices a server block under `mcp_servers:` in `<profile>/config.yaml` (remote keyed by `url` + optional `transport: sse`/`headers`; stdio keyed by `command`/`args`/`env`; `enabled: true`) |
| **workflow** | downloads the entry folder → `<profile>/workflows/<id>/`                     |
| **agent**    | creates a new profile cloned from default and writes the agent's `AGENT.md` as its `SOUL.md` |

`<profile>` is `~/.hermes` for the default profile, or
`~/.hermes/profiles/<name>` for a named one. Nothing is "pre-built" — MCP servers
are materialized on first launch from the pinned coordinates in the manifest
(`npx -y …`, `uvx …`, `docker run …`).

## `hermesone add` (CLI)

The [`hermesone`](https://www.npmjs.com/package/hermesone) CLI mirrors the same
install model from the terminal, and additionally pings the registry website so
the entry's public download counter ticks:

```bash
hermesone add mcp/github
hermesone add skill/plan
hermesone add agent/code-reviewer
hermesone add workflow/pr-triage
```

- `<type>` ∈ `skill | mcp | agent | workflow`; `<id>` is the entry id.
- `--profile <name>` targets a specific profile (default: the active one).
- `HERMES_HOME` and `HERMESONE_REGISTRY` override the data dir and registry base.

Because it writes to the same `~/.hermes` locations, entries added via the CLI
show up in the app, and vice-versa.

## Models catalog

The registry also publishes a model catalog (`models.json`) the **Models** /
provider screens can use to offer curated models per provider. See
[Providers & integrations](providers-and-integrations.md).
