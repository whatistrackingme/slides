<template>
  <div class="slide-bg absolute inset-0 flex items-center justify-center px-24 py-16">
    <!-- Big background icon -->
    <feather-message-circle class="bg-icon" />

    <div class="quote-card max-w-3xl w-full relative px-12 py-10">
      <blockquote class="quote-border">
        <p class="slide-quote text-3xl italic leading-relaxed">
          {{ quote }}
        </p>

        <div v-if="author" class="author-row flex items-center gap-4">
          <span class="divider-line" />
          <footer class="slide-author text-lg not-italic whitespace-nowrap">
            {{ author }}
          </footer>
        </div>
      </blockquote>
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
  quote: string
  author?: string
}>()
</script>

<style scoped>
.slide-bg {
  background-color: var(--witm-base);
  overflow: hidden;
}
.bg-icon {
  position: absolute;
  width: 42rem;
  height: 42rem;
  left: -10rem;
  top: -10rem;
  opacity: 0.06;
  z-index: 0;
  pointer-events: none;
}
.quote-card {
  position: relative;
  z-index: 1;
  background: none;
  border: none;
}
.quote-border {
  border-left: 6px solid var(--witm-accent-50);
  background: none;
  padding-left: 3.5rem;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  border-radius: 0;
}
.slide-quote {
}
.author-row {
  margin-top: 3rem;
}
.divider-line {
  display: inline-block;
  width: 3rem;
  height: 2px;
  background: var(--witm-accent-50);
  border-radius: 1px;
}
.slide-author {
  letter-spacing: 0.02em;
}
</style>
