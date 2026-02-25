<template>
  <div class="absolute inset-0 flex items-center justify-center section-bg">
    <div class="absolute inset-0 pointer-events-none section-grid" />
    <h1 class="relative z-10 section-title hero-fade-in">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.section-bg {
  background-color: var(--witm-accent);
}
.section-grid {
  background-image: linear-gradient(var(--witm-accent-content) 1px, transparent 1px), linear-gradient(90deg, var(--witm-accent-content) 1px, transparent 1px);
  background-size: 4rem 4rem;
  opacity: 0.06;
}
.section-title {
  font-family: var(--witm-font-display);
  color: var(--witm-accent-content);
  font-size: 6rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}
</style>
