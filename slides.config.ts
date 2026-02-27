import { defineConfig } from '@slidev/cli'
import { loadEnv } from 'vite'

const env = loadEnv('development', process.cwd(), '')

const allowedHosts = (env.VITE_ALLOWED_HOSTS || '')
  .split(',')
  .map((host: string) => host.trim())
  .filter(Boolean)

export default defineConfig({
  viteConfig: {
    server: {
      host: '0.0.0.0',
      port: 3030,
      strictPort: true,
      allowedHosts
    }
  }
})
