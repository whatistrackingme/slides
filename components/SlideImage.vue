<template>
  <div class="absolute inset-0 bg-black">
    <!-- Fullscreen expand mode (grid only) -->
    <Transition name="slide-image-fade">
      <div
        v-if="selected !== null"
        class="absolute inset-0 cursor-pointer z-40"
        @click="selected = null"
      >
        <img
          :src="normalizedImages[selected].src"
          class="w-full h-full object-cover"
          draggable="false"
        />
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white/70 text-xs select-none pointer-events-none">
          Click anywhere to return to grid
        </div>
      </div>
    </Transition>

    <!-- Single image: fullscreen -->
    <div v-if="normalizedImages.length === 1" class="w-full h-full">
      <img
        :src="normalizedImages[0].src"
        class="w-full h-full object-cover"
        draggable="false"
      />
    </div>

    <!-- Multiple images: auto grid with click-to-expand -->
    <div
      v-else
      v-show="selected === null"
      class="grid w-full h-full gap-[2px]"
      :style="gridStyle"
    >
      <div
        v-for="(img, i) in displayImages"
        :key="i"
        class="cursor-pointer relative overflow-hidden group"
        :style="img.gridArea ? { gridArea: img.gridArea } : {}"
        @click="selected = i"
      >
        <img
          :src="img.src"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          draggable="false"
        />
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div
          v-if="img.label"
          class="absolute bottom-0 inset-x-0 label-gradient pt-8 pb-3 px-4"
        >
          <p class="image-label text-sm font-semibold text-center uppercase tracking-wide">
            {{ img.label }}
          </p>
        </div>
      </div>
    </div>

    <!-- Overlay: radial gradient vignette + slide-label pill (only when overlay prop set and no slot) -->
    <div
      v-if="overlay && !hasSlot"
      class="absolute inset-0 z-10 pointer-events-none overlay-vignette"
    />
    <div v-if="overlay && !hasSlot" class="absolute inset-0 z-30 pointer-events-none">
      <p class="overlay-text">{{ overlay }}</p>
    </div>

    <!-- Slot for fully custom overlay content -->
    <div v-if="hasSlot" class="absolute inset-0 z-30 pointer-events-none">
      <div class="pointer-events-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useSlots } from 'vue'

type ImageItem = string | { src: string; label?: string }

interface NormalizedImage {
  src: string
  label?: string
  gridArea?: string
}

const props = defineProps<{
  images: ImageItem[]
  columns?: number
  overlay?: string
}>()

const slots = useSlots()
const hasSlot = computed(() => !!slots.default)

const selected = ref<number | null>(null)

const normalizedImages = computed<NormalizedImage[]>(() =>
  props.images.map(img =>
    typeof img === 'string' ? { src: img } : img
  )
)

const gridStyle = computed(() => {
  if (props.columns) {
    const rows = Math.ceil(normalizedImages.value.length / props.columns)
    return {
      gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
    }
  }

  const count = normalizedImages.value.length
  switch (count) {
    case 1:
      return { gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }
    case 2:
      return { gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: '1fr' }
    case 3:
      return {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: '1fr',
      }
    case 4:
      return {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
      }
    case 5:
      return {
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
      }
    case 6:
      return {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
      }
    default:
      return {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: `repeat(${Math.ceil(count / 3)}, 1fr)`,
      }
  }
})

// For 5 images, assign grid areas so row 1 gets 3 evenly and row 2 gets 2 centered
const displayImages = computed<NormalizedImage[]>(() => {
  const count = normalizedImages.value.length
  if (count === 5 && !props.columns) {
    return normalizedImages.value.map((img, i) => {
      const areas = [
        '1 / 1 / 2 / 3',  // row 1, cols 1-2
        '1 / 3 / 2 / 5',  // row 1, cols 3-4
        '1 / 5 / 2 / 7',  // row 1, cols 5-6
        '2 / 2 / 3 / 4',  // row 2, cols 2-3
        '2 / 4 / 3 / 6',  // row 2, cols 4-5
      ]
      return { ...img, gridArea: areas[i] }
    })
  }
  return normalizedImages.value
})
</script>

<style scoped>
.slide-image-fade-enter-active,
.slide-image-fade-leave-active {
  transition: opacity 0.25s ease;
}

.slide-image-fade-enter-from,
.slide-image-fade-leave-to {
  opacity: 0;
}

.overlay-vignette {
  background: radial-gradient(ellipse at top right, rgba(0, 0, 0, 0.75) 0%, transparent 70%);
}

.overlay-text {
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  max-width: 80%;
  font-family: var(--witm-font-display);
  font-size: 3rem;
  line-height: 1.4;
  font-weight: 700;
  color: white;
  letter-spacing: 0.025em;
  text-align: right;
}

.label-gradient {
  background: linear-gradient(to top, var(--witm-mantle-85), transparent);
}

.image-label {
  font-family: var(--witm-font-display);
  color: var(--witm-accent);
  letter-spacing: 0.04em;
}
</style>
