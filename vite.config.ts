import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const allowedHosts = (env.VITE_ALLOWED_HOSTS || '')
    .split(',')
    .map((host: string) => host.trim())
    .filter(Boolean)

  return {
    base: process.env.GITHUB_ACTIONS ? '/slides/' : '/',
    server: {
      host: '0.0.0.0',
      port: 3030,
      strictPort: true,
      allowedHosts
    }
  }
})
