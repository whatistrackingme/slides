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

Use the `/slide-builder` skill to interactively create and refine slides. The skill:
- Reviews the presentation structure
- Suggests new slides based on the topic
- Refines existing content
- Generates images with AI when needed
- Maintains consistent flow and pacing

### Image Generation

Generate images using the Nano Banana Pro skill:
```bash
/generate-slide-image "your prompt here"
```

Images are saved to `public/images/` and ready to use in slides.

## Related Project

The presentation is about the [WhatIsTrackingMe POC](https://github.com/whatistrackingme/poc) - a privacy awareness tool where users wear QR codes to track how their real-world presence is captured digitally.

**Key concepts to cover:**
- Real-world to digital boundary crossing
- QR code tracking methodology
- Privacy awareness through self-surveillance
- Technical architecture (client, broadcaster, collector, backend)

## Presentation Guidelines

### Target Audience
Technical audience interested in privacy, security, and digital identity.

### Duration
20 minutes total:
- Introduction: 2-3 minutes
- Problem statement: 3-4 minutes
- Solution overview: 5-6 minutes
- Technical details: 6-7 minutes
- Demo/Examples: 2-3 minutes
- Q&A: 2-3 minutes

### Tone
- Educational and thought-provoking
- Balance between technical detail and accessibility
- Emphasize privacy implications
- Show real-world applications

## Environment Files

- `.env` - Gemini API key for image generation
- `.env.local` - Allowed hosts for Vite (Coder/Codespaces URLs)
- `example.env` & `example.env.local` - Templates for contributors

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
