<template>
      <section 
  class="hero d-flex align-items-center text-white text-center"
  :style="{
    backgroundImage: `url(${omos})`
  }"
>
  <div class="overlay"></div> <!-- add this -->
  <div class="container position-relative z-1"> <!-- make sure text is on top -->
    <h1 class="display-4 fw-bold">Velkommen til HB Begravelse</h1>
    <p class="lead mb-4">Vi hjælper dig trygt igennem hele forløbet med omsorg og respekt.</p>
    <div class="d-flex justify-content-center gap-3">
      <a href="tel:70702110" class="btn-1">70 70 21 10</a>
      <a href="#" class="btn-2-white">Skriv besked</a>
    </div>
  </div>
</section>
      <!-- <Produkter /> -->
       <!-- Vi Tilbyder Section -->
<div class="container py-5 mt-5 text-center">
  <h2 class="mb-4">Vi Tilbyder</h2>
  <div class="row justify-content-center">
    <!-- Kister & Urner -->
    <div class="col-md-3 col-sm-6 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title ">Kister & Urner</h5>
          <p>Hos HB-Begravelse fører vi et stort udvalg af kister og urner i mange forskellige varianter. Du kan se eksempler her på siden.</p>
        </div>
      </div>
    </div>

    <!-- Gravsten -->
    <div class="col-md-3 col-sm-6 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Gravsten</h5>
          <p>Vi har stenudstilling i forretningerne i  Skærbæk, Guldager og Oksbøl. I er velkomne til at kigge forbi og se vores udvalg af gravsten.</p>
        </div>
      </div>
    </div>

    <!-- Blomster -->
    <div class="col-md-3 col-sm-6 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Blomster</h5>
          <p>Vi har mulighed for at levere alle typer bårebuketter og blomsteropsætninger.</p>
        </div>
      </div>
    </div>

    <!-- Urner -->
    <div class="col-md-3 col-sm-6 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Urner</h5>
          <p>HB-Begravelse har et bredt udvalg af urner.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Buttons -->
  <div class="d-flex justify-content-center gap-3 mt-4 flex-wrap">
    <a href="tel:+4512345678" class="btn-1 px-4">Ring: 70 70 21 10</a>
    <a href="#kontakt" class="btn-2 px-4">Skriv besked</a>
  </div>

  <!-- Small Description -->
  <p class="mt-3 text-muted px-3">
    Vi står klar til at hjælpe dig med alt det praktiske. Kontakt os, hvis du har spørgsmål eller har brug for vejledning.
  </p>
</div>
<br><br><br> 
<div class="slanted-edge">
  <h2 class="text-center z-1">Produkter & Priser</h2>
<p class="text-center z-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <!-- Category Filter Buttons -->
      <div class="mb-5 px-5">
        <h5>Filter efter kategori</h5>
        <div class="d-flex flex-wrap gap-2">
            <button
            v-for="cat in categories"
            :key="cat"
            class="btn-1 rounded-pill px-4"
            :class="selectedCategory === cat ? 'btn-1-active' : 'btn-2-active'"
            @click="selectCategory(cat)"
            >
  {{ cat }}
</button>
        </div>
      </div>
  
      <!-- Product Cards -->
      <div class="row px-5 z-10 products">
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
              <p class="fw-bold">{{ product.price.toLocaleString('da-DK') }} kr.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- Øvrige ydelser Card -->
<div class="d-flex justify-content-center mt-5">
  <div class="card text-center shadow-sm" style="max-width: 600px; width: 100%;">
    <div class="card-body">
      <h4 class="card-title text-muted">Øvrige ydelser</h4>
      <ul class="list-unstyled text-start my-4">
  <li class="d-flex justify-content-between">
    <span><strong>Kørsel i Esbjerg-området:</strong></span>
    <span>995 kr.</span>
  </li>
  <li class="d-flex justify-content-between">
    <span><strong>Ilægning og klargøring af afdøde:</strong></span>
    <span>1.295 kr.</span>
  </li>
  <li class="d-flex justify-content-between">
    <span><strong>Håndtering af dokumenter:</strong></span>
    <span>495 kr.</span>
  </li>
  <li class="d-flex justify-content-between">
    <span><strong>Transport til krematorium:</strong></span>
    <span>895 kr.</span>
  </li>
  <li class="d-flex justify-content-between">
    <span><strong>Udfærdigelse af dødsannonce:</strong></span>
    <span>650 kr.</span>
  </li>
</ul>
    </div>
  </div>
</div>
<div class="d-flex justify-content-center gap-3 mt-3 flex-wrap">
        <a href="tel:+4512345678" class="btn-1 px-4">Ring: 70 70 21 10</a>
        <button class="btn-2 px-4">Skriv besked</button>
      </div>
      <br><br>
      <hr>
      <Priseksempler />
  </template>
  
  <script setup>
  import omos from '@/assets/Bannerbilleder/rustvogne.jpg';
  import Priseksempler from '@/components/priseksempler.vue'
import Produkter from '@/components/produkter.vue'
import { ref, computed } from 'vue'
// kister BILLEDER
import img1 from '@/assets/Kister/beg-1.jpg'
import img2 from '@/assets/Kister/beg-2.jpg'
import img3 from '@/assets/Kister/beg-3.jpg'
import img4 from '@/assets/Kister/beg-4.jpg'
import img5 from '@/assets/Kister/beg-5.jpg'
import img6 from '@/assets/Kister/beg-6.jpg'
// Akske og urne
import aske from '@/assets/Kister/aske.jpg'
import bambus from '@/assets/Kister/bambus.jpg'
import Durne from '@/assets/Kister/d-urne.jpg'
import Burne from '@/assets/Kister/b-urne.jpg'
  
  // Default category on load
  const selectedCategory = ref('bisættelseskister')
  
  // All products
  const products = ref([
    { id: 1, name: 'Bisættelseskiste inkl. polstring Nr. 09', category: 'bisættelseskister', price: 7350, image: img1 },
    { id: 2, name: 'Bisættelseskiste med kors på låg inkl. polstring Nr. 09', category: 'bisættelseskister', price: 7350, image: img2 },
    { id: 3, name: 'Bisættelseskiste med kors inkl. polstring Nr. 09', category: 'bisættelseskister', price: 7850, image: img3 },
    { id: 4, name: 'Bisættelseskiste med polstring Nr. 15', category: 'bisættelseskister', price: 7750, image: img4 },
    { id: 5, name: 'Bisættelseskiste med kors og polstring Nr. 15', category: 'bisættelseskister', price: 8050, image: img5 },
    { id: 6, name: 'Bisættelseskiste med postring – ubehandlet Nr. 05', category: 'bisættelseskister', price: 5965, image: img6 },
    //begravelseskister
    { id: 7, name: 'Begravelseskiste Nr. 16', category: 'begravelseskister', price: 8500, image: img1 },
    { id: 8, name: 'Begravelseskiste med kors Nr. 16', category: 'begravelseskister', price: 9000, image: img2 },
    //begravelse & bisættelseskister
    { id: 9, name: 'Begravelses- og brændingskiste papirfoliebelagt/lud', category: 'begravelses & bisættelse kister', price: 8500, image: 'https://placehold.co/600x400' },
    { id: 10, name: 'Begravelses- og brændingskiste papirfoliebelagt/egetræslook', category: 'begravelses & bisættelse kister', price: 8895, image: 'https://placehold.co/600x400' },
    { id: 11, name: 'Begravelses- og brændingskiste i fyrretræ', category: 'begravelses & bisættelse kister', price: 10340, image: 'https://placehold.co/600x400'},
    { id: 12, name: 'Begravelses- og brændingskiste i fyrretræ – Hvidpigmenteret', category: 'begravelses & bisættelse kister', price: 10595, image: 'https://placehold.co/600x400'},
    { id: 13, name: 'Begravelses- og brændingskiste i birketræ', category: 'begravelses & bisættelse kister', price: 19345, image: 'https://placehold.co/600x400' },
    { id: 14, name: 'Begravelses- og brændingskiste i egetræ med bærestænger', category: 'begravelses & bisættelse kister', price: 21885, image: 'https://placehold.co/600x400' },
    { id: 15, name: 'Begravelses- og brændingskiste – Mosgrøn', category: 'begravelses & bisættelse kister', price: 9600, image: 'https://placehold.co/600x400'},
    //diamanten
    { id: 16, name: 'Begravelses- og brændingskiste – Diamanten 32 rød højglans', category: 'diamanten', price: 31800, image: 'https://placehold.co/600x400'},
    { id: 17, name: 'Begravelses- og brændingskiste – Diamanten 32 sort højglans', category: 'diamanten', price: 31800, image: 'https://placehold.co/600x400' },
    { id: 18, name: 'Begravelses- og brændingskiste – Diamanten 32 hvid højglans', category: 'diamanten', price: 31800, image: 'https://placehold.co/600x400' },
    //Soft urner
    { id: 19, name: 'Soft urne – Hvid', category: 'Soft urner', price: 1160, image: 'https://placehold.co/600x400' },
    { id: 20, name: 'Soft urne – Creme', category: 'Soft urner', price: 1160, image: 'https://placehold.co/600x400' },
    { id: 21, name: 'Soft urne – Grøn', category: 'Soft urner', price: 1160, image: 'https://placehold.co/600x400' },
    { id: 22, name: 'Soft urne – Brun', category: 'Soft urner', price: 1160, image: 'https://placehold.co/600x400' },
    { id: 23, name: 'Soft urne – Bordeaux', category: 'Soft urner', price: 1160, image: 'https://placehold.co/600x400' },
    { id: 24, name: 'Soft urne – Rød', category: 'Soft urner', price: 1160, image: 'https://placehold.co/600x400' },
    //Memory Bio Urner
    { id: 25, name: 'Bio urne – Sort', category: 'Memory Bio Urner', price: 995, image: 'https://placehold.co/600x400'},
    { id: 26, name: 'Bio urne – Hvid', category: 'Memory Bio Urner', price: 995, image: 'https://placehold.co/600x400' },
    { id: 27, name: 'Bio urne – Grøn', category: 'Memory Bio Urner', price: 995, image: 'https://placehold.co/600x400' },
    { id: 28, name: 'Bio urne – Rød', category: 'Memory Bio Urner', price: 995, image: 'https://placehold.co/600x400' },
    { id: 29, name: 'Bio urne – Blå', category: 'Memory Bio Urner', price: 995, image: 'https://placehold.co/600x400'},
    { id: 30, name: 'Bio urne – Grå', category: 'Memory Bio Urner', price: 995, image: 'https://placehold.co/600x400' },
    //Søholm Lerurner
    { id: 31, name: 'Lerurne terracotta', category: 'Memory Bio Urner', price: 1110, image: 'https://placehold.co/600x400' },
    { id: 32, name: 'Lerurne hvid', category: 'Memory Bio Urner', price: 1110, image: 'https://placehold.co/600x400' },
    { id: 33, name: 'Lerurne brun', category: 'Memory Bio Urner', price: 1110, image: 'https://placehold.co/600x400' },
    //askespredning
    { id: 34, name: 'Urne med motiv', category: 'Askespredning', price: 885, image: aske },
    //Bambus
    { id: 35, name: 'Bambusurne med hjerte', category: 'Bambus Urne', price: 1150, image: bambus },

    // Diamant Urne
    { id: 36, name: 'Diamant urne – Højglans hvid', category: 'Diamant Urner', price: 2800, image: Durne },
    { id: 37, name: 'Diamant urne – Højglans sort', category: 'Diamant Urner', price: 2800, image: Durne },
    { id: 38, name: 'Diamant urne – Højglans rød', category: 'Diamant Urner', price: 2800, image: Durne },

     //Beyond life urner
     { id: 39, name: 'BeyondLife urne – Rosa', category: 'BeyondLife Urner', price: 1525, image: Burne},
     { id: 40, name: 'BeyondLife urne – Hvid', category: 'BeyondLife Urner', price: 1525, image: Burne },
     { id: 41, name: 'BeyondLife urne – Himmelblå', category: 'BeyondLife Urner', price: 1525, image: Burne},
     { id: 42, name: 'BeyondLife urne – Mos grøn', category: 'BeyondLife Urner', price: 1525, image: Burne},
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
  
  <style lang="scss"  scoped>
  .hero {
  position: relative;
  min-height: 75vh;
  padding: 4rem 1rem;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  overflow: hidden;

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.367);
    z-index: 1;
  }

    h1 {
      font-size: 3rem;
      font-weight: bold;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
    }
  }

  .card-img-top {
    object-fit: cover;
    height: 200px;
  }

  .card-title.text-muted {
  font-size: 1.5rem;
  font-weight: 500;
}

ul li {
  margin-bottom: 0.5rem;
}

.products{
  padding: 0px;
  width: 95%;
  display: flex;
  margin: auto;
}
.btn {
  border-radius: 2px;
  padding: 10px 20px;
  z-index: 1;
}

.btn-1-active {
  transform: scale(0.97);
  color: var(--color-white);
  box-shadow: 0 1px 3px rgb(255, 255, 255);
  background-color: var(--color-dark);
}
.btn-2-active {
  transform: scale(0.94);
  color: var(--color-dark);
  box-shadow: 0 1px 3px rgba(80, 80, 80, 0.5);
  background-color: var(--color-white);
}

.slanted-edge {
  --p: 100px;
  height: 100%;
  justify-content: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - var(--p)));
  background: linear-gradient(to bottom, var(--color-gold), white);
  z-index: 0;
  padding: 8%;
}


.card {
  background: var(--color-light-gold);
  border: none;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  .card-body {
    padding: 2rem;

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #2c2c2c;
    }

    .card-text {
      font-size: 1rem;
      color: #555;
      margin-bottom: 1rem;
    }

    .fw-bold {
      font-weight: 700;
      font-size: 1.1rem;
      color: #333;
    }
  }
}

// Responsivt spacing mellem cards
@media (min-width: 768px) {
  .row > div {
    margin-bottom: 2rem;
  }
}
  </style>