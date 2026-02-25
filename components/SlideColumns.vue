<template>
  <div class="slide-bg absolute inset-0 flex flex-col px-16 py-12">
    <h2 v-if="title" class="slide-heading text-4xl font-bold mb-8">
      {{ title }}
    </h2>
    <ul
      class="flex-1 content-center"
      :class="[columnsClass, sizeClass, spacingClass]"
      :style="{ columns: effectiveColumns }"
    >
      <li
        v-for="(item, i) in normalizedItems"
        :key="i"
        class="break-inside-avoid"
        :class="{ 'font-bold text-primary': item.highlight }"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ItemInput = string | { text: string; highlight?: boolean }

const props = withDefaults(defineProps<{
  title?: string
  items: ItemInput[]
  columns?: number
  size?: 'sm' | 'base' | 'lg'
  spacing?: 'tight' | 'normal' | 'loose'
}>(), {
  size: 'base',
  spacing: 'normal',
})

const normalizedItems = computed(() =>
  props.items.map(item =>
    typeof item === 'string' ? { text: item, highlight: false } : item
  )
)

const effectiveColumns = computed(() =>
  props.columns ?? (props.items.length > 4 ? 2 : 1)
)

const sizeClass = computed(() => ({
  sm: 'text-sm leading-relaxed',
  base: 'text-base leading-loose',
  lg: 'text-lg leading-loose',
}[props.size]))

const spacingClass = computed(() => ({
  tight: 'space-y-1',
  normal: 'space-y-3',
  loose: 'space-y-4',
}[props.spacing]))

const columnsClass = computed(() =>
  effectiveColumns.value === 2 ? 'gap-x-16' : ''
)
</script>

<style scoped>
.slide-bg {
  background-color: var(--witm-base);
}
.slide-heading {
  font-family: var(--witm-font-display);
  letter-spacing: 0.04em;
}
</style>
