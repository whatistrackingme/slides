<template>
  <div class="slide-bg absolute inset-0 flex items-center justify-center px-20">
    <div class="max-w-3xl w-full">
      <h2 v-if="title" class="slide-heading text-4xl font-bold mb-10">
        {{ title }}
      </h2>
      <p class="slide-body text-2xl leading-loose">
        {{ text }}
      </p>
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
  text: string
}>()
</script>

<style scoped>
.slide-bg {
  background-color: var(--witm-base);
}
.slide-heading {
  font-family: var(--witm-font-display);
  letter-spacing: 0.04em;
}
.slide-body {
}
</style>
