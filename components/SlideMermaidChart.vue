<template>
  <div class="absolute inset-0 flex flex-col items-center justify-center px-14 py-10"
       style="background: var(--witm-base)">
    <!-- Subtle grid background -->
    <div class="absolute inset-0 pointer-events-none bg-grid-pattern" />

    <!-- Radial accent glow -->
    <div class="absolute inset-0 pointer-events-none"
         style="background: radial-gradient(ellipse at center, rgba(166,227,161,0.05) 0%, transparent 70%)" />

    <!-- Flow chart grid -->
    <div class="flow-grid">
      <!-- Q1 -->
      <div class="quadrant-card hero-fade-in" style="animation-delay: 0.1s">
        <div class="card-top-row">
          <div class="num-circle">1</div>
          <span class="segment-label">{{ quadrants[0].label }}</span>
        </div>
        <div class="q1-content">
          <div class="q1-text">
            <h3 class="q-title">{{ quadrants[0].title }}</h3>
            <p v-if="quadrants[0].description" class="q-desc">{{ quadrants[0].description }}</p>
          </div>
          <div class="q1-qr-wrap">
            <div class="q1-qr">
              <QRCodeVue3
                :key="qrData"
                :value="qrData"
                :width="120"
                :height="120"
                :margin="1"
                :dotsOptions="dotsOptions"
                :backgroundOptions="bgOptions"
                :cornersSquareOptions="cornersOptions"
                :cornersDotOptions="cornersDotOpts"
              />
              <div class="qr-key-overlay">
                <feather-lock />
              </div>
            </div>
            <div class="qr-timestamp">{{ currentTime }}</div>
          </div>
        </div>
      </div>

      <!-- Arrow Q1→Q2 -->
      <div class="arrow-h hero-fade-in" style="animation-delay: 0.2s" />

      <!-- Q2 -->
      <div class="quadrant-card hero-fade-in" style="animation-delay: 0.3s">
        <div class="card-top-row">
          <div class="num-circle">2</div>
          <span class="segment-label">{{ quadrants[1].label }}</span>
        </div>
        <h3 class="q-title">{{ quadrants[1].title }}</h3>
        <p v-if="quadrants[1].description" class="q-desc">{{ quadrants[1].description }}</p>
        <div class="sub-flow">
          <div class="mini-item">
            <div class="mini-icon"><feather-camera /></div>
            <span class="mini-label">CCTV</span>
          </div>
          <div class="mini-arrow-h" />
          <div class="mini-item">
            <div class="mini-icon"><feather-database /></div>
            <span class="mini-label">Database</span>
          </div>
          <div class="mini-arrow-h" />
          <div class="mini-item">
            <div class="mini-icon"><feather-cpu /></div>
            <span class="mini-label">AI</span>
          </div>
          <div class="mini-arrow-h" />
          <div class="mini-item">
            <div class="mini-icon"><feather-globe /></div>
            <span class="mini-label">Website</span>
          </div>
        </div>
      </div>

      <!-- Diagonal connector (spans all columns) -->
      <div class="diagonal-row hero-fade-in" style="animation-delay: 0.4s">
        <svg viewBox="0 0 580 22" class="w-full h-full" fill="none"
             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M 312 2 L 268 20"
                stroke="var(--witm-accent)" stroke-width="2.5" stroke-dasharray="8 5"
                fill="none" opacity="0.5"
                vector-effect="non-scaling-stroke" />
          <polygon points="264,16 274,21 263,22" fill="var(--witm-accent)" opacity="0.7" />
        </svg>
      </div>

      <!-- Q3 -->
      <div class="quadrant-card hero-fade-in" style="animation-delay: 0.5s">
        <div class="card-top-row">
          <div class="num-circle">3</div>
          <span class="segment-label">{{ quadrants[2].label }}</span>
        </div>
        <h3 class="q-title">{{ quadrants[2].title }}</h3>
        <p v-if="quadrants[2].description" class="q-desc">{{ quadrants[2].description }}</p>
        <div class="sub-flow">
          <div class="mini-item">
            <div class="mini-icon"><feather-activity /></div>
            <span class="mini-label">DNS</span>
          </div>
          <span class="mini-operator">+</span>
          <div class="mini-item">
            <div class="mini-icon"><feather-server /></div>
            <span class="mini-label">HTTP</span>
          </div>
          <div class="mini-arrow-h" />
          <div class="mini-item">
            <div class="mini-icon"><feather-database /></div>
            <span class="mini-label">Store</span>
          </div>
          <div class="mini-arrow-h" />
          <div class="mini-item">
            <div class="mini-icon"><feather-user-x /></div>
            <span class="mini-label">Request</span>
          </div>
          <div class="mini-arrow-h" />
          <div class="mini-item">
            <div class="mini-icon"><feather-trash-2 /></div>
            <span class="mini-label">Purge</span>
          </div>
        </div>
      </div>

      <!-- Arrow Q3→Q4 -->
      <div class="arrow-h hero-fade-in" style="animation-delay: 0.6s" />

      <!-- Q4 -->
      <div class="quadrant-card hero-fade-in" style="animation-delay: 0.7s">
        <div class="card-top-row">
          <div class="num-circle">4</div>
          <span class="segment-label">{{ quadrants[3].label }}</span>
        </div>
        <h3 class="q-title">{{ quadrants[3].title }}</h3>
        <p v-if="quadrants[3].description" class="q-desc">{{ quadrants[3].description }}</p>
        <div class="sub-flow">
          <div class="mini-item">
            <div class="mini-icon mini-icon--composite">
              <feather-map-pin class="composite-fg" />
              <feather-map class="composite-bg" />
            </div>
            <span class="mini-label">Location</span>
          </div>
          <span class="mini-operator">+</span>
          <div class="mini-item">
            <div class="mini-icon mini-icon--composite">
              <feather-clock class="composite-fg" />
              <feather-maximize-2 class="composite-bg" />
            </div>
            <span class="mini-label">Timestamp</span>
          </div>
          <span class="mini-operator">=</span>
          <div class="mini-item">
            <div class="mini-icon"><feather-eye /></div>
            <span class="mini-label">Unmasking</span>
          </div>
        </div>
      </div>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
import QRCodeVue3 from 'qrcode-vue3'
import { ref, onMounted, onUnmounted } from 'vue'

interface Quadrant {
  title: string
  label: string
  description?: string
}

defineProps<{
  quadrants: [Quadrant, Quadrant, Quadrant, Quadrant]
}>()

function formatTime() {
  const now = new Date()
  return now.toLocaleTimeString('en-GB', { hour12: false })
}

const qrData = ref(crypto.randomUUID())
const currentTime = ref(formatTime())
let timer: ReturnType<typeof setInterval>

onMounted(() => {
  timer = setInterval(() => {
    qrData.value = crypto.randomUUID()
    currentTime.value = formatTime()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const dotsOptions = { type: 'rounded', color: '#a6e3a1' }
const bgOptions = { color: 'transparent' }
const cornersOptions = { type: 'extra-rounded', color: '#cdddd2' }
const cornersDotOpts = { type: 'dot', color: '#cdddd2' }
</script>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(var(--witm-surface0) 1px, transparent 1px),
    linear-gradient(90deg, var(--witm-surface0) 1px, transparent 1px);
  background-size: 4rem 4rem;
  opacity: 0.12;
}

/* ── Flow grid: 3 cols × 3 rows ── */
.flow-grid {
  display: grid;
  grid-template-columns: 1fr 4.5rem 1fr;
  grid-template-rows: 1fr 2rem 1fr;
  width: 100%;
  max-width: 58rem;
  flex: 1;
  max-height: 26rem;
}

/* ── Diagonal arrow row (spans all columns) ── */
.diagonal-row {
  grid-column: 1 / -1;
  grid-row: 2;
  display: flex;
  align-items: center;
}

/* ── Quadrant cards ── */
.quadrant-card {
  position: relative;
  padding: 1.5rem 1.5rem 1.25rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(166, 227, 161, 0.15);
  background: rgba(166, 227, 161, 0.03);
  display: flex;
  flex-direction: column;
}

.card-top-row {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  pointer-events: none;
}

.num-circle {
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: var(--witm-accent);
  color: var(--witm-base);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--witm-font-display);
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1;
  flex-shrink: 0;
  transform: translate(-0.5rem, -50%);
}

.segment-label {
  font-family: var(--witm-font-display);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--witm-subtext0);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: var(--witm-surface0);
  border: 1px solid rgba(166, 227, 161, 0.15);
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(0, -50%);
  margin-top: -0.4rem;
}

.q1-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.q1-text {
  flex: 1;
  min-width: 0;
}

.q1-qr {
  flex-shrink: 0;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
}

.q1-qr-wrap {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.qr-timestamp {
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  color: var(--witm-accent);
  opacity: 0.6;
  letter-spacing: 0.1em;
}

.qr-key-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: rgba(22, 22, 24, 0.85);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--witm-accent);
  font-size: 1.25rem;
  box-shadow: 0 0 12px rgba(166, 227, 161, 0.3);
}

/* ── Shared sub-flow (used in Q2, Q3, Q4) ── */
.sub-flow {
  display: flex;
  align-items: center;
  gap: 0;
  margin-top: 0.75rem;
}

.mini-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.mini-label {
  font-family: var(--witm-font-body);
  font-size: 0.55rem;
  color: var(--witm-subtext0);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.mini-icon {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(166, 227, 161, 0.2);
  background: rgba(166, 227, 161, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--witm-accent);
  font-size: 1.1rem;
  flex-shrink: 0;
  position: relative;
}

.mini-icon--composite .composite-bg {
  position: absolute;
  font-size: 1.8rem;
  opacity: 0.2;
}

.mini-icon--composite .composite-fg {
  position: relative;
  font-size: 0.9rem;
  z-index: 1;
}

.mini-arrow-h {
  display: flex;
  align-items: center;
  width: 1.25rem;
  flex-shrink: 0;
}

.mini-arrow-h::before {
  content: '';
  flex: 1;
  border-top: 1.5px dashed var(--witm-accent);
  opacity: 0.4;
}

.mini-arrow-h::after {
  content: '';
  width: 0;
  height: 0;
  border-left: 4px solid rgba(166, 227, 161, 0.5);
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
}

.mini-operator {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: var(--witm-accent);
  opacity: 0.4;
  padding: 0 0.25rem;
}

.q-title {
  font-family: var(--witm-font-display);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--witm-text);
  letter-spacing: 0.02em;
  margin: 0 0 0.25rem;
}

.q-desc {
  font-family: var(--witm-font-body);
  font-size: 1rem;
  color: var(--witm-subtext0);
  line-height: 1.5;
  margin: 0 0 0.25rem;
}

/* ── Horizontal arrows (CSS-only) ── */
.arrow-h {
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
}

.arrow-h::before {
  content: '';
  flex: 1;
  border-top: 2.5px dashed var(--witm-accent);
  opacity: 0.5;
}

.arrow-h::after {
  content: '';
  width: 0;
  height: 0;
  border-left: 8px solid rgba(166, 227, 161, 0.7);
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
</style>
