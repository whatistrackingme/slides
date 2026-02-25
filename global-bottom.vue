<template>
  <img
    v-if="$slidev.nav.currentPage > 1"
    src="/images/logo-witm.svg"
    class="slide-logo"
  />
</template>

<style>
.slide-logo {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  width: 2rem;
  height: 2rem;
  opacity: 0.5;
  pointer-events: none;
  z-index: 100;
}
</style>
