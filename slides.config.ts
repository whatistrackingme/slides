import { defineConfig } from '@slidev/cli'

export default defineConfig({
  viteConfig: {
    server: {
      host: '0.0.0.0',
      port: 3030,
      strictPort: true
    }
  }
})
