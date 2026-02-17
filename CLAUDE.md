# Claude Code Notes - WhatIsTrackingMe Slides

## Project Overview

This is a Slidev presentation about the WhatIsTrackingMe privacy awareness project. The presentation is designed to be given in 20 minutes and explains how the project helps people understand digital tracking of their real-world presence.

## Repository Structure

```
slides/
├── slides.md                      # Main presentation content
├── .devcontainer/                 # Auto-starts PM2 dev server
├── .claude/skills/
│   └── generate-slide-image/      # AI image generation (Nano Banana Pro)
├── public/images/                 # Generated and static images
├── docs/                          # Technical documentation
└── README.md                      # Contributor guide
```

## Working with Slides

### Development Server

The dev server runs automatically via PM2 in the devcontainer:
- **URL:** http://localhost:3030
- **HMR:** Changes to `slides.md` appear instantly
- **Commands:** `npm run dev:logs`, `npm run dev:stop`, `npm run dev:pm2`

### Creating Content

Use the `/slide-builder` skill to interactively create and refine slides. The skill implements research-backed principles:

**Research-Based Design:**
- One meaningful image per slide (full-screen, high-resolution)
- Maximum 6 words text per slide (TED standard)
- Assertion-evidence format (one claim + one visual)
- 10-12 slides total for 20-minute delivery
- Story arc: Problem → Struggle → Solution

**What the skill does:**
- Reviews current structure and identifies gaps
- Creates slides following cognitive science principles
- Generates images that directly support learning
- Ensures every slide has a meaningful visual
- Maintains story flow and optimal pacing
- Applies findings from TED talks and technical presentation research

**Key stats:**
- Well-designed visuals reduce learning time by 40%
- Stories are 22x more memorable than facts alone
- Pictures increase understanding in 98% of experiments

### Image Generation

Generate images using the Nano Banana Pro skill:
```bash
/generate-slide-image "your prompt here"
```

Images are saved to `public/images/` and ready to use in slides.

## Related Project

The presentation is about the [WhatIsTrackingMe POC](https://github.com/whatistrackingme/poc) - a privacy awareness tool where users wear QR codes to track how their real-world presence is captured digitally.

**Key concepts to cover:**
- Current state: AI-powered tracking, surveillance capitalism
- Real-world to digital boundary crossing
- QR code tracking methodology
- Hardware: 3D-printed wearables, e-ink displays (Inkplate)
- Software: Tauri frontend, Rust backend (Axum + PostgreSQL)
- Privacy-preserving architecture (Ed25519, client-side decryption)
- Use cases: business ranking, virality tracking, auditing, research, personal dashboards
- Privacy awareness through self-surveillance

## Presentation Guidelines

### Target Audience
Technical audience interested in privacy, security, and digital identity.

### Duration
20 minutes total (14-16 slides) with 2-3 minutes Q&A buffer. The slide order and structure are defined in `slides.md` — refer to that file for the current presentation flow.

### Tone
- Educational and thought-provoking
- Balance between technical detail and accessibility
- Emphasize privacy implications
- Show real-world applications

## Environment Files

- `.env` - Gemini API key for image generation
- `.env.local` - Allowed hosts for Vite (Coder/Codespaces URLs)
- `example.env` & `example.env.local` - Templates for contributors

**IMPORTANT:** Never commit actual hostnames or secrets into `.env.local` or `.env`. These files are gitignored. Only commit the `example.env` and `example.env.local` templates with placeholder values.

**Known issue — "Blocked request" / allowedHosts:**
Vite loads `.env.local` *after* `vite.config.ts` is evaluated, so `VITE_ALLOWED_HOST` is undefined when the config runs. The fix is to export the env var into the shell *before* starting the dev server:
```bash
VITE_ALLOWED_HOST="your-host-here" npx pm2 start "npx slidev --remote" --name slidev
```
The devcontainer usually handles this automatically, but if starting PM2 manually, the var must be passed explicitly.

See `docs/devcontainer-setup.md` for technical setup details.

## Skills Available

- **generate-slide-image** - Generate images using Gemini Imagen (Nano Banana Pro)
- **slide-builder** - Interactive slide creation and refinement workflow

## Git Workflow

Standard workflow with gh CLI authentication:
```bash
git add .
git commit -m "Your message"
git push
```

PAT is already configured - no additional auth needed.
