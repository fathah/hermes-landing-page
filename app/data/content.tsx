import {
  MessageSquare,
  Sparkles,
  Database,
  MessagesSquare,
  Monitor,
  Clock,
  History,
  Users,
  Puzzle,
  Cpu,
  Brain,
  Smile,
  Wrench,
  Radio,
  Building2,
  Settings,
  RefreshCw,
  Server,
  FlaskConical,
  GitFork,
  KanbanSquare,
} from "lucide-react";

export const GITHUB_URL = "https://github.com/fathah/hermes-desktop";
export const RELEASES_URL = "https://github.com/fathah/hermes-desktop/releases/latest";
export const DOCS_URL = "https://hermes-agent.nousresearch.com/docs/";

export const FEATURES = [
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Closed Learning Loop",
    desc: "Agent-curated memory with periodic nudges. Autonomous skill creation after complex tasks. Skills self-improve during use. The only agent with a true built-in learning loop.",
  },
  {
    icon: <MessagesSquare className="w-5 h-5" />,
    title: "Lives Where You Do",
    desc: "Telegram, Discord, Slack, WhatsApp, Signal, and CLI — all from a single gateway. Voice memo transcription and cross-platform conversation continuity.",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Deep Memory",
    desc: "FTS5 session search with LLM summarization for cross-session recall. Honcho dialectic user modeling. Compatible with the agentskills.io open standard.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Scheduled Automations",
    desc: "Built-in cron scheduler with delivery to any platform. Daily reports, nightly backups, weekly audits — all in natural language, running unattended.",
  },
  {
    icon: <GitFork className="w-5 h-5" />,
    title: "Delegates & Parallelizes",
    desc: "Spawn isolated subagents for parallel workstreams. Write Python scripts that call tools via RPC, collapsing multi-step pipelines into zero-context-cost turns.",
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: "Runs Anywhere",
    desc: "Seven terminal backends — local, Docker, SSH, Singularity, Modal, Daytona, and Vercel Sandbox. Run on a $5 VPS or a GPU cluster. Costs nearly nothing when idle.",
  },
  {
    icon: <Monitor className="w-5 h-5" />,
    title: "Any Model, No Lock-in",
    desc: "Nous Portal, OpenRouter (300+ models), OpenAI, Anthropic, Gemini, xAI, NVIDIA NIM, Hugging Face, Ollama, LM Studio, or your own endpoint. Switch with one command.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "14 Toolsets",
    desc: "Web search, browser automation, terminal, file ops, code execution, vision, image gen, TTS, memory, session search, delegation, MoA, and task planning.",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: "Research-Ready",
    desc: "Batch trajectory generation and compression for training the next generation of tool-calling models. Built by Nous Research.",
  },
];

export const SCREENS = [
  {
    icon: <MessageSquare className="w-4 h-4" />,
    label: "Chat",
    preview: "/previews/chat.png",
    desc: "The core of Hermes — a real-time streaming conversation interface with SSE tool-progress indicators, markdown and syntax-highlighted code rendering, slash-command autocomplete, interrupt-and-redirect support, and live token usage tracking. Every tool call shows its progress inline so you always know what the agent is doing.",
  },
  {
    icon: <History className="w-4 h-4" />,
    label: "Sessions",
    preview: "/previews/sessions.png",
    desc: "A full history of every conversation you've had with your agent. Full-text search powered by FTS5 lets you find any past exchange in milliseconds. Click any session to resume exactly where you left off — context, memory, and all. Hermes also uses LLM summarization to compress and recall cross-session context automatically.",
  },
  {
    icon: <Users className="w-4 h-4" />,
    label: "Agents",
    preview: "/previews/profiles.png",
    desc: "Create and manage multiple isolated Hermes profiles — each with its own persona, memory, provider config, and tool settings. Switch between a work agent, a research agent, and a personal assistant without any crossover. Every profile is fully independent, so one agent's memory never leaks into another's.",
  },
  {
    icon: <Puzzle className="w-4 h-4" />,
    label: "Skills",
    preview: "/previews/skills.png",
    desc: "Hermes automatically creates reusable skills after completing complex tasks — and improves them the next time they're used. The Skills screen lets you browse, install, edit, and delete bundled and agent-created skills. Skills are compatible with the agentskills.io open standard, so you can share and import them across agents.",
  },
  {
    icon: <Cpu className="w-4 h-4" />,
    label: "Models",
    preview: "/previews/models.png",
    desc: "Save and manage named model configurations across all your providers. Pick from Nous Portal's 300+ models, OpenRouter, OpenAI, Anthropic, Gemini, xAI, NVIDIA NIM, Hugging Face, Ollama, LM Studio, or any OpenAI-compatible endpoint. Switch your active model at any time with a single click — no restarts, no code changes.",
  },
  {
    icon: <Brain className="w-4 h-4" />,
    label: "Memory",
    preview: "/previews/memory.png",
    desc: "Browse and edit every memory your agent has stored about you and the world. Hermes builds a persistent user profile across sessions using Honcho's dialectic user modeling. You can view raw memory entries, correct inaccuracies, and configure which memory backend to use — Honcho, Mem0, Hindsight, or a custom provider.",
  },
  {
    icon: <KanbanSquare className="w-4 h-4" />,
    label: "Kanban",
    preview: "/previews/kanban.png",
    desc: "A visual task board for tracking the agent's active workstreams, queued jobs, and completed tasks. When Hermes delegates to subagents or runs parallel workstreams, the Kanban board gives you a clear view of what's in progress, what's waiting, and what's done — all without interrupting the agent's flow.",
  },
  {
    icon: <Smile className="w-4 h-4" />,
    label: "Soul",
    preview: "/previews/persona.png",
    desc: "Every Hermes profile has a SOUL.md — a plain-text persona file that defines the agent's name, personality, tone, and behavioral guidelines. The Soul screen gives you a rich editor to craft exactly who your agent is. Changes take effect immediately in the next conversation, no restarts required.",
  },
  {
    icon: <Wrench className="w-4 h-4" />,
    label: "Tools",
    preview: "/previews/tools.png",
    desc: "Hermes ships with 14 toolsets — web search, browser automation, terminal execution, file operations, code runner, vision, image generation, text-to-speech, memory, session search, task delegation, MoA, planning, and more. The Tools screen lets you enable or disable individual toolsets per profile, so you can keep your agent focused.",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    label: "Schedules",
    preview: "/previews/schedules.png",
    desc: "Build cron jobs in natural language and deliver results to any of 15 targets — Telegram, Discord, Slack, WhatsApp, Signal, Email, SMS, and more. Set up daily summaries, nightly backups, weekly audits, or any recurring task. The scheduler runs fully unattended, even when the desktop app is closed.",
  },
  {
    icon: <Radio className="w-4 h-4" />,
    label: "Gateway",
    preview: "/previews/gateway.png",
    desc: "Connect Hermes to Telegram, Discord, Slack, WhatsApp, Signal, Matrix, Email, SMS, iMessage, and more — all from a single gateway process. Voice memos are transcribed automatically. Conversations are continuous across platforms, so you can start a task on Telegram and check results in Slack.",
  },
  {
    icon: <Building2 className="w-4 h-4" />,
    label: "Office",
    preview: "/previews/office.png",
    desc: "The Office screen provides a visual workspace powered by Claw3d — a structured environment where Hermes can manage long-running projects, organize context, and coordinate multi-step workflows visually. Ideal for complex research tasks, coding projects, or any work that spans multiple sessions and tools.",
  },
  {
    icon: <Settings className="w-4 h-4" />,
    label: "Settings",
    preview: "/previews/settings.png",
    desc: "Full control over every aspect of Hermes Desktop. Configure API providers and credential pools, set up network proxies, manage backup and import of your agent data, view real-time logs for debugging, and tune advanced agent parameters. Everything is in one place so you never need to touch a config file.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Download & open",
    desc: "Install for your OS. Choose local mode (installs Hermes Agent to ~/.hermes) or connect to a remote Hermes API server.",
  },
  {
    step: "2",
    title: "Pick a provider",
    desc: "One-click setup for Nous Portal (300+ models, no extra keys), OpenRouter, OpenAI, Anthropic, or any local endpoint like Ollama or LM Studio.",
  },
  {
    step: "3",
    title: "Your agent is live",
    desc: "Chat with slash commands, schedule automations, connect Telegram or Discord, and watch your agent create and improve its own skills over time.",
  },
];
