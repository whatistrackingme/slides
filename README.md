# What is Tracking ME? - Presentation

A 20-minute presentation about the WhatIsTrackingMe privacy awareness project, built with [Slidev](https://sli.dev/).

## Quick Start for Contributors

### Prerequisites

- [VS Code](https://code.visualstudio.com/) with [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Docker
- Gemini API key (for generating images)

### Setup

1. **Clone the repository:**
   ```bash
   gh repo clone whatistrackingme/slides
   cd slides
   ```

2. **Create environment files:**
   ```bash
   cp example.env .env
   cp example.env.local .env.local
   ```

3. **Add your API key to `.env`:**
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Add your Coder hostname to `.env.local`** (if using remote environment):
   ```bash
   VITE_ALLOWED_HOST=your-hostname-here
   ```

5. **Open in VS Code Dev Container:**
   - Open the folder in VS Code
   - Click "Reopen in Container" when prompted
   - Wait for the container to build and start

The dev server will automatically start via PM2 when the container launches.

## Editing Slides

### Accessing the Presentation

- **Local:** http://localhost:3030
- **Remote:** Your Coder/Codespaces URL (if configured)
- **Presenter Mode:** Add `/presenter` to the URL
- **Overview:** Add `/overview` to the URL

### Hot Module Replacement (HMR)

Changes to `slides.md` are reflected **instantly** in your browser - no refresh needed! Just save the file and watch it update.

### Slide Format

Slides are written in Markdown in `slides.md`. Each slide is separated by `---`:

```markdown
---
# Slide Title

Content goes here

- Bullet points
- **Bold text**
- *Italic text*

---
```

### Adding Images

1. **Using the AI Image Generator:**

   Generate images with the Nano Banana Pro skill:
   ```bash
   npx tsx .claude/skills/generate-slide-image/scripts/generate.ts "your image prompt here"
   ```

   Images are saved to `public/images/` and can be referenced in slides:
   ```markdown
   ![Alt text](/images/your-image-name.png)
   ```

2. **Manual Images:**

   Place images in `public/images/` and reference them:
   ```markdown
   ![Description](/images/your-image.png)
   ```

### Slidev Features

- **Layouts:** Use different layouts with frontmatter
- **Components:** Use Vue components inline
- **Code Blocks:** Syntax highlighting with line numbers
- **Animations:** Built-in transitions and animations
- **Icons:** Use [Iconify](https://iconify.design/) icons like `<carbon-logo-github />`

See the [Slidev documentation](https://sli.dev/guide/) for more features.

## Development Commands

```bash
# View dev server status
npm run dev:status

# View dev server logs
npm run dev:logs

# Restart dev server
npm run dev:stop && npm run dev:pm2

# Build for production
npm run build

# Export to PDF
npm run export
```

## Project Structure

```
slides/
├── .devcontainer/          # Dev container configuration
├── .claude/                # Claude Code skills
│   └── skills/
│       └── generate-slide-image/  # AI image generation
├── public/
│   └── images/             # Static images
├── slides.md               # Main presentation file
├── vite.config.ts          # Vite configuration
├── .env                    # API keys (gitignored)
├── .env.local              # Environment-specific config (gitignored)
└── CLAUDE.md               # Development notes
```

## Tips for Contributors

1. **Keep slides concise** - Each slide should communicate one key idea
2. **Use visuals** - Generate images to illustrate concepts
3. **Test presenter mode** - Preview how slides look in presentation
4. **Review in overview mode** - Check overall flow at `/overview`
5. **Commit frequently** - Push changes so others can see progress

## Troubleshooting

### Dev server not starting
```bash
npm run dev:stop
npm run dev:pm2
```

### Changes not reflecting
Check PM2 logs:
```bash
npm run dev:logs
```

### Port already in use
Stop all PM2 processes:
```bash
npx pm2 delete all
npm run dev:pm2
```

### Host blocked error
Add your hostname to `.env.local`:
```bash
VITE_ALLOWED_HOST=your-hostname-here
```

Then restart:
```bash
npm run dev:stop && npm run dev:pm2
```

## Resources

- [Slidev Documentation](https://sli.dev/)
- [Slidev Theme Gallery](https://sli.dev/themes/gallery.html)
- [Markdown Guide](https://www.markdownguide.org/)
- [WhatIsTrackingMe Project](https://github.com/whatistrackingme)

## License

[Add license information]
