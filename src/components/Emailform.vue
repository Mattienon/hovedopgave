<template>
    <div>
<!-- Contact Section -->
<section class="contact-section py-5 bg-white">
  <div class="container">
    <div class="row g-5 align-items-start">
      
      <!-- Left column -->
      <div class="col-12 col-lg-6">
        <h2 class="mb-3">Kontakt os – helt uforpligtende</h2>
        <p>
          Vi dækker hele Sydvestjylland og Sønderjylland – og vi tager ikke ekstra for kørsel.  
          Vi tager gerne en uformel og uforpligtende snak om dine behov og ønsker.
        </p>
        <div class="d-flex gap-3 mt-4">
          <a href="tel:70702110" class="btn-1">70 70 21 10</a>
          <a href="#" class="btn-2">Skriv besked</a>
        </div>
      </div>

      <!-- Right column: Form -->
      <div class="col-12 col-lg-6">
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Navn</label>
            <input type="text" class="form-control" id="name" v-model="form.name" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="email" v-model="form.email" required />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Telefon</label>
            <input type="tel" class="form-control" id="phone" v-model="form.phone" />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Besked til os</label>
            <textarea class="form-control" id="message" rows="4" v-model="form.message" required></textarea>
          </div>
          <button type="submit" class="btn-2">Send besked</button>
        </form>
      </div>

    </div>
  </div>
</section>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

function handleSubmit() {
  // For now, just log the form (replace with actual API logic if needed)
  console.log('Form submitted:', form)

  // Optionally reset form
  form.name = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}
</script>

<style lang="scss" scoped>
.contact-section {
  background-color: #f8f9fa; // Light gray for gentle contrast
  .form-label {
    font-weight: 500;
  }
}
</style>