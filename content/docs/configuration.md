# Configuration

All Hermes state lives under a single **Hermes home** directory. The desktop app
reads and writes it; the Hermes agent runs from it. You rarely need to edit these
files by hand — the GUI manages them — but knowing the layout helps with backups,
debugging, and advanced setups.

## Hermes home

Resolution order:

1. `HERMES_HOME` environment variable, if set.
2. On Windows, `%LOCALAPPDATA%\hermes` (the installer's default) — the app probes
   for existing data and prefers whichever location already has it.
3. Otherwise `~/.hermes`.

Layout:

```
~/.hermes/
├── .env                 # API keys (default "env" secrets provider)
├── config.yaml          # provider + app configuration
├── hermes-agent/        # the Hermes Agent install (Python)
├── profiles/            # named profile directories
│   └── <name>/          #   each with its own config.yaml, SOUL.md, state.db…
├── active_profile       # name of the active profile ("default" if absent)
├── state.db             # default profile's session history (SQLite, FTS5)
└── cron/jobs.json       # scheduled tasks
```

## Profiles

A profile is an isolated Hermes environment — its own config, persona, sessions,
and (optionally) gateways. The **default** profile is `~/.hermes` itself; named
profiles live under `~/.hermes/profiles/<name>`. The active profile is recorded
in `~/.hermes/active_profile`.

Create, delete, and switch profiles from the **Agents** screen. Each profile gets
its own local gateway port, so multiple profiles can run side by side. Installing
a registry **agent** creates a new profile cloned from default with the agent's
persona as its `SOUL.md` (see [Registry & marketplace](registry-and-marketplace.md)).

## `config.yaml`

The agent's configuration: the selected provider and model, MCP servers
(`mcp_servers:`), the secrets provider, network settings, and more. The desktop
app edits this for you (provider setup, `Discover` installs, Settings). MCP
entries installed from the registry are spliced under `mcp_servers:`.

## Secrets

By default API keys live in `~/.hermes/.env` (the **env** provider) — no setup
needed. Resolution order everywhere is: `process.env` → `.env` → provider →
unset.

If you'd rather not keep keys in a plaintext `.env`, the opt-in **command**
provider resolves them by running a helper you configure (POSIX-only;
Linux/macOS — Windows stays on `env`):

```yaml
# ~/.hermes/config.yaml
secrets:
  provider: command
  command: secret-tool lookup hermes "$HERMES_SECRET_KEY"
```

The helper's stdout may be a single bare value (per-key) or `KEY=VALUE` dotenv
lines (a dump) — both are auto-detected. The requested key name arrives as the
`HERMES_SECRET_KEY` environment variable (passed as data, never interpolated into
the shell string).

### Vault integrations

The `command` provider is vault-agnostic — anything that prints a value (per-key)
or a dotenv blob (list mode) on stdout works, with no code changes:

- **`pass`**: `command: "pass show hermes/$HERMES_SECRET_KEY"`
- **`secret-tool`** (libsecret/GNOME Keyring): as shown above
- **GnuPG**: `gpg --batch --passphrase-fd 0 --decrypt ~/.keys/api-keys.gpg`
- **KeePassXC** (password-only DB): a small `keepassxc-cli` export script
- **Bitwarden CLI**: `bw get item "$HERMES_SECRET_KEY" | jq -r .notes`
- **1Password CLI**: `op read "op://vault/$HERMES_SECRET_KEY/credential"`

Safeguards: a hard **3-second timeout** and **1 MiB output cap** on the helper,
stderr discarded, resolved values never logged or written to disk, and failures
degrade to "key unset". Source of truth: [`src/main/secrets/`](https://github.com/fathah/hermes-desktop/tree/main/src/main/secrets).

## Network: local vs. remote

- **Local** — the app manages the Hermes gateway on `127.0.0.1:<port>` (default
  `8642`, per-profile).
- **Remote** — point the app at a remote Hermes API server (URL + API key) from
  Settings; SSH tunneling options are also supported (see the SSH notes in
  [the hermes-desktop repo](https://github.com/fathah/hermes-desktop/tree/main/docs) and `src/main/ssh-*.ts`).

## Backup, import & debug

From **Settings** you can take a full data backup, restore/import it, view
gateway and agent logs, and produce a debug dump for diagnostics. Re-running is
safe; backups capture your profiles, config, and session history.
