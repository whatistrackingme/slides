<template>
  <div class="absolute inset-0 bg-black">
    <!-- Full screen mode -->
    <Transition name="quadrant-fade">
      <div
        v-if="selected !== null"
        class="absolute inset-0 cursor-pointer z-20"
        @click="selected = null"
      >
        <img
          :src="images[selected]"
          class="w-full h-full object-cover"
          draggable="false"
        />
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white/70 text-xs select-none pointer-events-none">
          Click anywhere to return to grid
        </div>
      </div>
    </Transition>

    <!-- Quadrant grid mode -->
    <div v-show="selected === null" class="grid grid-cols-2 grid-rows-2 w-full h-full gap-[2px]">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="cursor-pointer relative overflow-hidden group"
        @click="selected = i"
      >
        <img
          :src="img"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          draggable="false"
        />
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm w-7 h-7 rounded-full flex items-center justify-center text-white/80 text-xs font-bold select-none">
          {{ i + 1 }}
        </div>
      </div>
    </div>

    <!-- Slot for slide labels and other overlay content -->
    <div class="absolute inset-0 z-30 pointer-events-none">
      <div class="pointer-events-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  images: string[]
}>()

const selected = ref<number | null>(null)
</script>

<style scoped>
.quadrant-fade-enter-active,
.quadrant-fade-leave-active {
  transition: opacity 0.25s ease;
}

.quadrant-fade-enter-from,
.quadrant-fade-leave-to {
  opacity: 0;
}
</style>
