<template>
  <div class="absolute inset-0 hero-bg">
    <!-- Radial glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full pointer-events-none animate-pulse hero-glow" />
    <!-- Logo watermark -->
    <img :src="logoSrc" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none object-contain hero-watermark" />
    <!-- Grid pattern -->
    <div class="absolute inset-0 pointer-events-none hero-grid" />
    <!-- Content -->
    <div class="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-8">
      <h1 class="text-7xl font-extrabold tracking-wider leading-tight hero-fade-in hero-title text-primary">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="absolute bottom-10 text-xl tracking-wide hero-fade-in hero-subtitle">
        {{ subtitle }}
      </p>
      <div v-if="github" class="absolute bottom-6 right-6 flex gap-2 hero-fade-in hero-links">
        <a :href="github" target="_blank" alt="GitHub"
          class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
          <carbon-logo-github />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const base = import.meta.env.BASE_URL
const logoSrc = `${base}images/logo-witm.svg`

defineProps<{
  title: string
  subtitle?: string
  github?: string
}>()
</script>

<style scoped>
.hero-bg {
  background: linear-gradient(to bottom right, #111113, #161618, #111113);
}
.hero-glow {
  box-shadow: 0 0 500px 300px rgba(166, 227, 161, 0.15);
}
.hero-watermark {
  width: 90%;
  height: 90%;
  opacity: 0.12;
}
.hero-grid {
  background-image: linear-gradient(#cdddd2 1px, transparent 1px), linear-gradient(90deg, #cdddd2 1px, transparent 1px);
  background-size: 4rem 4rem;
  opacity: 0.06;
}
.hero-title {
  font-family: var(--witm-font-display);
}
.hero-subtitle {
  font-family: var(--witm-font-body);
  animation-delay: 0.15s;
}
.hero-links {
  animation-delay: 0.4s;
}
</style>
