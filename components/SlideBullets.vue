<template>
  <div class="slide-bg absolute inset-0 flex items-center justify-center px-16">
    <div class="max-w-4xl w-full">
      <h2 v-if="title" class="slide-heading text-4xl font-bold mb-10">
        {{ title }}
      </h2>
      <ul class="space-y-7">
        <li
          v-for="(item, i) in items"
          :key="i"
          class="flex items-start gap-4"
        >
          <feather-chevron-right class="mt-1.5 w-5 h-5 shrink-0 slide-icon" />
          <span class="slide-text text-2xl leading-relaxed">{{ item }}</span>
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
  items: string[]
}>()
</script>

<style scoped>
.slide-bg {
  background-color: var(--witm-base);
}
.slide-heading {
  font-family: var(--witm-font-display);
  color: var(--witm-accent);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.slide-icon {
  color: var(--witm-accent);
}
.slide-text {
  color: var(--witm-text);
}
</style>
