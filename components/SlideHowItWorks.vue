<template>
  <div class="absolute inset-0 flex flex-col items-center justify-center px-12 bg-grid">
    <div class="steps-row relative flex items-start justify-between w-full max-w-5xl">
      <!-- Dotted connector line -->
      <div class="connector" />

      <!-- Step 1: Go Outside -->
      <div class="step flex flex-col items-center flex-1 relative z-10">
        <div class="num-circle">1</div>
        <div class="icon-card">
          <feather-log-out class="w-12 h-12" />
        </div>
        <div class="text-lg font-bold mt-3 text-center">Go Outside</div>
      </div>

      <!-- Step 2: Wear a QR Code -->
      <div class="step flex flex-col items-center flex-1 relative z-10">
        <div class="num-circle">2</div>
        <div class="icon-card">
          <carbon-qr-code class="w-12 h-12" />
        </div>
        <div class="text-lg font-bold mt-3 text-center">Wear a QR Code</div>
      </div>

      <!-- Step 3: Get Captured -->
      <div class="step flex flex-col items-center flex-1 relative z-10">
        <div class="num-circle">3</div>
        <div class="icon-card">
          <feather-camera class="w-12 h-12" />
        </div>
        <div class="text-lg font-bold mt-3 text-center">Get Captured</div>
      </div>

      <!-- Step 4: Get Notified -->
      <div class="step flex flex-col items-center flex-1 relative z-10">
        <div class="num-circle">4</div>
        <div class="icon-card">
          <feather-bell class="w-12 h-12" />
        </div>
        <div class="text-lg font-bold mt-3 text-center">Get Notified</div>
      </div>

      <!-- Step 5: See the Map -->
      <div class="step flex flex-col items-center flex-1 relative z-10">
        <div class="num-circle">5</div>
        <div class="icon-card">
          <feather-map-pin class="w-12 h-12" />
        </div>
        <div class="text-lg font-bold mt-3 text-center">See the Map</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.steps-row {
  padding-top: 0;
}

.connector {
  position: absolute;
  top: 1.25rem; /* center of 2.5rem num-circle */
  left: 10%;
  right: 10%;
  height: 0;
  border-top: 3px dashed var(--witm-accent);
  z-index: 0;
}

.num-circle {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: var(--witm-accent);
  color: var(--witm-base);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--witm-font-display);
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.icon-card {
  margin-top: 0.75rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(166, 227, 161, 0.15);
  background: rgba(166, 227, 161, 0.05);
}
</style>
