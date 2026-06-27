# Providers & integrations

Hermes One sits in front of the Hermes Agent, so it supports the providers and
integrations the agent does, with GUI setup for each.

## LLM providers

The first-run picker mirrors the agent's native canonical providers; any
OpenAI-compatible endpoint routes through the **Local** presets.

| Provider            | Notes                                    |
| ------------------- | ---------------------------------------- |
| **OpenRouter**      | 200+ models via a single API (recommended) |
| **Anthropic**       | Direct Claude access                     |
| **OpenAI**          | Direct GPT access                        |
| **Google (Gemini)** | Google AI Studio                         |
| **xAI (Grok)**      | Grok models                              |
| **Nous Portal**     | Free tier available                      |
| **Qwen**            | QwenAI models                            |
| **MiniMax**         | Global and China endpoints               |
| **Hugging Face**    | 20+ open models via HF Inference         |
| **Groq**            | Fast inference (also used for voice/STT) |
| **Atlas Cloud**     | OpenAI-compatible gateway (sponsor) — DeepSeek, Qwen, GLM, Kimi, MiniMax… base URL pre-configured |
| **Local / Custom**  | Any OpenAI-compatible endpoint           |

### Local model presets

Bundled presets that need no API key — but the server must already be running:

- **LM Studio**
- **Atomic Chat**
- **Ollama**
- **vLLM**
- **llama.cpp**

Select **Local LLM** and either pick a preset or supply a custom OpenAI-compatible
base URL.

## Messaging platforms (gateways)

Connect from the **Gateway** screen so you can talk to your agent from your
existing chat apps. 16 supported:

Telegram · Discord · Slack · WhatsApp · Signal · Matrix/Element · Mattermost ·
Email (IMAP/SMTP) · SMS (Twilio & Vonage) · iMessage (BlueBubbles) · DingTalk ·
Feishu/Lark · WeCom · WeChat (iLink Bot) · Webhooks · Home Assistant.

See [Features → Gateway](features.md#gateway-messaging).

## Tool integrations

External services the agent's toolsets can use:

Exa Search · Parallel API · Tavily · Firecrawl · FAL.ai (image generation) ·
Honcho · Browserbase · Weights & Biases · Tinker.

## Memory providers

Discoverable memory backends configurable from the **Memory** screen:

Honcho · Hindsight · Mem0 · RetainDB · Supermemory · ByteRover.

## Speech-to-text

Voice transcription is routed through the Hermes API server
(`/api/audio/transcribe`), independent of the selected chat model — so local
Whisper, Groq, OpenAI, ElevenLabs, and command/plugin STT providers all work
regardless of which model you're chatting with.

## Where credentials go

Provider API keys are stored via the Hermes secrets provider — by default
`~/.hermes/.env`, or an opt-in command/vault helper. Local providers need no key.
See [Configuration → Secrets](configuration.md#secrets).
