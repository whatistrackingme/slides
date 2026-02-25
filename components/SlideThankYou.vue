<template>
  <div class="absolute inset-0 flex thank-bg">
    <!-- Left side: text + GitHub + arrow -->
    <div class="w-1/2 flex flex-col items-center justify-center px-12 relative">
      <h1 class="thank-title hero-fade-in">Thank you</h1>

      <div class="flex items-center gap-5 mt-12 hero-fade-in" style="animation-delay: 0.2s">
        <carbon-logo-github class="thank-github-icon" />
        <svg class="thank-arrow" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="12" x2="105" y2="12" stroke="var(--witm-subtext0)" stroke-width="2" stroke-dasharray="6 4" />
          <polygon points="105,4 120,12 105,20" fill="var(--witm-subtext0)" />
        </svg>
      </div>

      <p class="thank-caption hero-fade-in" style="animation-delay: 0.35s">
        This one won't track you
      </p>
    </div>

    <!-- Right side: QR code -->
    <div class="w-1/2 flex items-center justify-center hero-fade-in" style="animation-delay: 0.15s">
      <QRCodeVue3
        :value="url"
        :width="380"
        :height="380"
        :margin="2"
        :dotsOptions="dotsOptions"
        :backgroundOptions="bgOptions"
        :cornersSquareOptions="cornersOptions"
        :cornersDotOptions="cornersDotOpts"
        myclass="thank-qr"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import QRCodeVue3 from 'qrcode-vue3'

withDefaults(defineProps<{
  url?: string
}>(), {
  url: 'https://github.com/whatistrackingme'
})

const dotsOptions = {
  type: 'rounded',
  color: '#a6e3a1',
}

const bgOptions = {
  color: 'transparent',
}

const cornersOptions = {
  type: 'extra-rounded',
  color: '#cdddd2',
}

const cornersDotOpts = {
  type: 'dot',
  color: '#cdddd2',
}
</script>

<style scoped>
.thank-bg {
  background: linear-gradient(to bottom right, #111113, #161618, #111113);
}

.thank-title {
  font-family: var(--witm-font-display);
  font-size: 4.5rem;
  font-weight: 800;
  letter-spacing: 0.03em;
}

.thank-github-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.thank-arrow {
  width: 7rem;
  height: 1.5rem;
  flex-shrink: 0;
}

.thank-caption {
  margin-top: 1.25rem;
  font-family: var(--witm-font-body);
  font-size: 1.15rem;
  letter-spacing: 0.02em;
  font-style: italic;
}

:deep(.thank-qr canvas) {
  border-radius: 1rem;
}
</style>
