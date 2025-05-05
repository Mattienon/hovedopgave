<template>
  <nav
    ref="navbar"
    
    class="navbar navbar-expand-lg w-100 fixed-top transition-navbar" 
  >
    <div class="container">
      <a class="navbar-brand" href="/">
  <img src="@/assets/LogoLys.png" alt="Logo" height="55" />
</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">


        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Afdelinger</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Info</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/kister">Kister & Urner</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">Om Os</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/print">Printable</a>
          </li>
          <!-- "Kontakt Os" knap-->
          <li class="nav-item">
            <a class="nav-link btn btn-primary" href="/kontakt">Kontakt Os</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const navbar = ref(null)
let lastScrollTop = 0

const handleScroll = () => {
  const currentScroll = window.scrollY

  if (!navbar.value) return

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Scrolling down
    navbar.value.classList.add('navbar-shrink')
  } else {
    // Scrolling up
    navbar.value.classList.remove('navbar-shrink')
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  padding: 0.6rem 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &.navbar-shrink {
    padding: 0.1rem 1rem;
    background-color: #ffffff !important;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    
    
  }

  .navbar-brand {
    font-weight: bold;
    font-size: 1.75rem;
    color: #ffffff;

    &:hover {
      color: #f8f9fa;
    }
  }

  .nav-link {
    color: #323232 !important;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #ffffff;
    }

    &.active {
      color: #ffffff;
      font-weight: 500;
    }
  }
}
.navbar .btn {
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  background-color: #e0bc5f;
  color: #ffffff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0e1b8;
    color: #323232;
  }
}
</style>