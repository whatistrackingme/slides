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
