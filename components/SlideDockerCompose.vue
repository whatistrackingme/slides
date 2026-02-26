<template>
  <div class="absolute inset-0 flex flex-col items-center p-10" style="background: var(--witm-base)">
    <h3 class="text-primary mb-4 font-mono text-lg">docker-compose.yaml</h3>
    <div class="grid grid-cols-2 gap-6 flex-1 items-center w-full">
      <div class="code-col" v-html="leftHtml" />
      <div class="code-col" v-html="rightHtml" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const left = `services:
  # Out-of-band interaction capture
  interactsh-server:
    build: ./interactsh-services/interactsh-server
    ports: ["80:80", "443:443", "53:53/udp"]
    networks: [main]

  # Fetches & forwards interactions
  interactsh-client:
    build: ./interactsh-services/interactsh-client
    volumes: [interaction_data:/data]
    depends_on: [interactsh-server]

  # Encrypted payload storage
  postgres:
    image: postgres:16-alpine
    volumes: [postgres_data:/var/lib/postgresql/data]`

const right = `  # Rust + Axum API server
  backend:
    build: ./backend
    environment:
      DATABASE_URL: postgres://...@db/backend
      RUST_LOG: "info,backend=debug"
      CORS_PERMISSIVE: false
    ports: ["8080:8080"]
    depends_on: [postgres, interactsh-client]

  # React SPA + TanStack Router
  frontend:
    build: ./frontend
    environment:
      PUBLIC_BACKEND_BASE_URL: https://api.example.com
      PUBLIC_COLLECTOR_PATTERN: https://*.example.com/*
    ports: ["443:443"]
    depends_on: [interactsh-server]`

const leftHtml = ref('')
const rightHtml = ref('')

onMounted(async () => {
  const { codeToHtml } = await import('shiki')
  const opts = { lang: 'yaml' as const, theme: 'catppuccin-mocha' as const }
  leftHtml.value = await codeToHtml(left, opts)
  rightHtml.value = await codeToHtml(right, opts)
})
</script>

<style scoped>
.code-col {
  display: flex;
  align-items: center;
  height: 100%;
}

.code-col :deep(pre) {
  background: transparent !important;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  line-height: 1.6;
  margin: 0;
  width: 100%;
}

.code-col :deep(code) {
  background: transparent !important;
}
</style>
