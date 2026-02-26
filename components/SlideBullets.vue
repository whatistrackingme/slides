<template>
  <div class="slide-bg absolute inset-0 flex items-center justify-center px-16">
    <!-- Subtle grid background -->
    <div class="absolute inset-0 pointer-events-none bg-grid-pattern" />

    <div class="max-w-4xl w-full relative">
      <h2 v-if="title" class="slide-heading text-4xl font-bold mb-12">
        {{ title }}
      </h2>
      <ul class="space-y-8">
        <li
          v-for="(item, i) in items"
          :key="i"
          class="bullet-item flex items-start gap-5 hero-fade-in"
          :style="{ animationDelay: `${0.2 + i * 0.15}s` }"
        >
          <div class="bullet-marker">
            <span class="bullet-num">{{ i + 1 }}</span>
          </div>
          <span v-if="typeof item === 'string'" class="slide-text text-2xl leading-relaxed">{{ item }}</span>
          <span v-else class="slide-text text-2xl leading-relaxed"><strong class="text-primary">{{ item.bold }}</strong> {{ item.text }}</span>
        </li>
      </ul>
    </div>

    <div class="absolute inset-0 z-30 pointer-events-none">
      <div class="pointer-events-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  items: (string | { bold: string; text: string })[]
}>()
</script>

<style scoped>
.slide-bg {
  background-color: var(--witm-base);
}

.bg-grid-pattern {
  background-image:
    linear-gradient(var(--witm-surface0) 1px, transparent 1px),
    linear-gradient(90deg, var(--witm-surface0) 1px, transparent 1px);
  background-size: 4rem 4rem;
  opacity: 0.1;
}

.slide-heading {
  font-family: var(--witm-font-display);
  letter-spacing: 0.04em;
  color: var(--witm-accent);
}

.bullet-item {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border-left: none;
  transition: border-color 0.2s;
}

.bullet-marker {
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: rgba(166, 227, 161, 0.1);
  border: 1px solid rgba(166, 227, 161, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.bullet-num {
  font-family: var(--witm-font-display);
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--witm-accent);
}

.slide-text {
  color: var(--witm-text);
}
</style>
