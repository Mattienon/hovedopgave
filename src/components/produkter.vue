<template>
    <div class="container py-5">
      <!-- Category Filter Buttons -->
      <div class="mb-4">
        <h5>Filter efter kategori</h5>
        <div class="d-flex flex-wrap gap-2">
            <button
            v-for="cat in categories"
            :key="cat"
            class="btn rounded-pill px-4"
            :class="selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary'"
            @click="selectCategory(cat)"
            >
  {{ cat }}
</button>
        </div>
      </div>
  
      <!-- Product Cards -->
      <div class="row">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="col-md-4 mb-4"
        >
          <div class="card h-100">
            <img
              :src="product.image"
              :alt="product.name"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description || 'Beskrivelse mangler.' }}</p>
              <p class="fw-bold">{{ product.price.toLocaleString('da-DK') }} kr.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // Default category on load
  const selectedCategory = ref('bisættelseskister')
  
  // All products
  const products = ref([
    { id: 1, name: 'Bisættelseskiste inkl. polstring Nr. 09', category: 'bisættelseskister', price: 7350, image: 'https://via.placeholder.com/300x200?text=Bisættelseskiste' },
    { id: 2, name: 'Bisættelseskiste med kors på låg inkl. polstring Nr. 09', category: 'bisættelseskister', price: 7350, image: 'https://via.placeholder.com/300x200?text=Begravelseskiste' },
    { id: 3, name: 'Bisættelseskiste med kors inkl. polstring Nr. 09', category: 'bisættelseskister', price: 7850, image: 'https://via.placeholder.com/300x200?text=Naturkiste' },
    { id: 4, name: 'Bisættelseskiste med polstring Nr. 15', category: 'bisættelseskister', price: 7750, image: 'https://via.placeholder.com/300x200?text=Diamant+Urne' },
    { id: 5, name: 'Bisættelseskiste med kors og polstring Nr. 15', category: 'bisættelseskister', price: 8050, image: 'https://via.placeholder.com/300x200?text=Memory+Foam' },
    { id: 6, name: 'Bisættelseskiste med postring – ubehandlet Nr. 05', category: 'bisættelseskister', price: 5965, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    //begravelseskister
    { id: 7, name: 'Begravelseskiste Nr. 16', category: 'begravelseskister', price: 8500, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 8, name: 'Begravelseskiste med kors Nr. 16', category: 'begravelseskister', price: 9000, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    //begravelse & bisættelseskister
    { id: 9, name: 'Begravelses- og brændingskiste papirfoliebelagt/lud', category: 'begravelses & bisættelse kister', price: 8500, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 10, name: 'Begravelses- og brændingskiste papirfoliebelagt/egetræslook', category: 'begravelses & bisættelse kister', price: 8895, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 11, name: 'Begravelses- og brændingskiste i fyrretræ', category: 'begravelses & bisættelse kister', price: 10340, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 12, name: 'Begravelses- og brændingskiste i fyrretræ – Hvidpigmenteret', category: 'begravelses & bisættelse kister', price: 10595, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 13, name: 'Begravelses- og brændingskiste i birketræ', category: 'begravelses & bisættelse kister', price: 19345, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 14, name: 'Begravelses- og brændingskiste i egetræ med bærestænger', category: 'begravelses & bisættelse kister', price: 21885, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 15, name: 'Begravelses- og brændingskiste – Mosgrøn', category: 'begravelses & bisættelse kister', price: 9600, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    //diamanten
    { id: 16, name: 'Begravelses- og brændingskiste – Diamanten 32 rød højglans', category: 'diamanten', price: 31800, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 17, name: 'Begravelses- og brændingskiste – Diamanten 32 sort højglans', category: 'diamanten', price: 31800, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 18, name: 'Begravelses- og brændingskiste – Diamanten 32 hvid højglans', category: 'diamanten', price: 31800, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    //Soft urner
    { id: 19, name: 'Soft urne – Hvid', category: 'Soft urner', price: 1160, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 20, name: 'Soft urne – Creme', category: 'Soft urner', price: 1160, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 21, name: 'Soft urne – Grøn', category: 'Soft urner', price: 1160, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 22, name: 'Soft urne – Brun', category: 'Soft urner', price: 1160, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 23, name: 'Soft urne – Bordeaux', category: 'Soft urner', price: 1160, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 24, name: 'Soft urne – Rød', category: 'Soft urner', price: 1160, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    //Memory Bio Urner
    { id: 25, name: 'Bio urne – Sort', category: 'Memory Bio Urner', price: 995, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 26, name: 'Bio urne – Hvid', category: 'Memory Bio Urner', price: 995, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 27, name: 'Bio urne – Grøn', category: 'Memory Bio Urner', price: 995, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 28, name: 'Bio urne – Rød', category: 'Memory Bio Urner', price: 995, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 29, name: 'Bio urne – Blå', category: 'Memory Bio Urner', price: 995, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 30, name: 'Bio urne – Grå', category: 'Memory Bio Urner', price: 995, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    //Søholm Lerurner
    { id: 31, name: 'Lerurne terracotta', category: 'Memory Bio Urner', price: 1110, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 32, name: 'Lerurne hvid', category: 'Memory Bio Urner', price: 1110, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    { id: 33, name: 'Lerurne brun', category: 'Memory Bio Urner', price: 1110, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    //askespredning
    { id: 34, name: 'Urne med motiv', category: 'Askespredning', price: 885, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    //Bambus
    { id: 35, name: 'Bambusurne med hjerte', category: 'Bambus Urne', price: 1150, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
     //Bambus
     { id: 36, name: 'BeyondLife urne – Rosa', category: 'BeyondLife Urner', price: 1525, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
     { id: 37, name: 'BeyondLife urne – Hvid', category: 'BeyondLife Urner', price: 1525, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
     { id: 38, name: 'BeyondLife urne – Himmelblå', category: 'BeyondLife Urner', price: 1525, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
     { id: 39, name: 'BeyondLife urne – Mos grøn', category: 'BeyondLife Urner', price: 1525, image: 'https://via.placeholder.com/300x200?text=BeyondLife' },
    ])
  // Auto-generate categories
  const categories = computed(() => {
    return [...new Set(products.value.map(p => p.category))]
  })
  
  // Filtered products by selected category
  const filteredProducts = computed(() => {
    return products.value.filter(p => p.category === selectedCategory.value)
  })
  
  // Just select a category (no toggle logic)
  function selectCategory(cat) {
    selectedCategory.value = cat
  }
  </script>
  
  <style scoped>
  .container{
    margin-top: 10%;
  }
  .card-img-top {
    object-fit: cover;
    height: 200px;
  }
  </style>