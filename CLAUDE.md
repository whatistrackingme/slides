# Claude Code Notes - Slidev/Vite Devcontainer Setup

## Lessons Learned: Running Vite Dev Server in Docker

### The Challenge

Vite dev servers (including Slidev) bind to `127.0.0.1` by default for security, which causes issues when accessed through:
- Docker port forwarding
- Remote development environments (Coder, Codespaces, etc.)
- Proxy services with custom hostnames

### The Solution

#### 1. Use the `--remote` Flag (Slidev-specific)

For Slidev, the `--remote` flag enables public host listening:

```json
{
  "scripts": {
    "dev": "slidev --remote"
  }
}
```

This is cleaner than `--host 0.0.0.0` and enables remote control features.

#### 2. Configure Allowed Hosts

Vite blocks requests from unknown hosts by default. Configure via `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'

const allowedHost = process.env.VITE_ALLOWED_HOST

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3030,
    strictPort: true,
    allowedHosts: allowedHost ? [allowedHost] : []
  }
})
```

#### 3. Environment Variable Setup

**Structure:**
- `.env` - API keys, shared secrets (gitignored)
- `.env.local` - Environment-specific config like hostnames (gitignored)
- `example.env` & `example.env.local` - Templates for setup

**Example `.env.local`:**
```bash
VITE_ALLOWED_HOST=your-proxy-hostname-here
```

Vite automatically loads `.env.local` files - no additional configuration needed.

#### 4. Process Management with PM2

Dev servers exit when backgrounded in containers. Use PM2:

```json
{
  "scripts": {
    "dev": "slidev --remote",
    "dev:pm2": "pm2 start npm --name slidev -- run dev",
    "dev:stop": "pm2 stop slidev",
    "dev:logs": "pm2 logs slidev"
  }
}
```

**Devcontainer auto-start:**
```json
{
  "postStartCommand": "npm run dev:pm2"
}
```

#### 5. Docker Configuration

**Disable IPv6** to force IPv4 binding:
```json
{
  "runArgs": [
    "-p", "3030:3030",
    "--sysctl", "net.ipv6.conf.all.disable_ipv6=1"
  ]
}
```

**Port mapping:**
```json
{
  "forwardPorts": [3030],
  "portsAttributes": {
    "3030": {
      "label": "Slidev",
      "onAutoForward": "notify"
    }
  }
}
```

### Common Errors and Solutions

#### Error: "Connection reset by peer"
**Cause:** Vite binding to 127.0.0.1, Docker port forwarding not working
**Solution:** Use `--remote` flag or `--host 0.0.0.0`

#### Error: "This host is not allowed"
**Cause:** Vite's allowedHosts security check
**Solution:** Add hostname to `server.allowedHosts` in vite.config.ts via environment variable

#### Error: Dev server exits immediately
**Cause:** Background processes in containers without proper daemonization
**Solution:** Use PM2 to manage the process

### File Structure

```
project/
├── .devcontainer/
│   └── devcontainer.json          # PM2 auto-start, port mapping, IPv6 disabled
├── .env                           # API keys (gitignored)
├── .env.local                     # Allowed hosts (gitignored)
├── example.env                    # Template for .env
├── example.env.local              # Template for .env.local
├── vite.config.ts                 # Server config with allowed hosts
├── package.json                   # PM2 scripts
└── CLAUDE.md                      # This file
```

### Quick Start for New Environments

1. Copy `example.env.local` to `.env.local`
2. Add your proxy hostname to `VITE_ALLOWED_HOST`
3. Start devcontainer - PM2 auto-starts the server
4. Access via your proxy URL

### Testing

```bash
# Inside container
curl http://localhost:3030

# From host
curl http://localhost:3030

# Via proxy (replace with your hostname)
curl http://your-proxy-hostname:3030
```

### Key Takeaways

1. **Always use `--remote` or `--host 0.0.0.0`** for containerized Vite servers
2. **Use PM2** for persistent background processes in containers
3. **Configure `allowedHosts`** for proxy/remote access
4. **Disable IPv6** in containers to avoid binding confusion
5. **Use `.env.local`** for environment-specific configuration
6. **Provide example files** so others can set up easily

### Related Issues

- Vite security features can block legitimate proxy access
- Docker port forwarding doesn't work when services bind to 127.0.0.1 only
- Background Node processes exit in containers without proper daemonization
- IPv6 binding can cause connectivity issues in mixed environments
