<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Foots from './components/Foots.vue';
</script>

<template>
  <header>
    <main>
      <nav>
        <Navbar />
      </nav>
    </main>
  </header>

  <!-- Transition wrapper with basic fade-in -->
  <transition name="fade">
    <RouterView />
  </transition>

  <Foots />
</template>

<style scoped>
/* Basic fade-in only */
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from {
  opacity: 0.2;
}
</style>