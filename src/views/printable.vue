<template>
 <section class="hero d-flex align-items-center text-white text-center">
  <div class="container position-relative z-1">
    <h1 class="display-4 fw-bold">Skolearbejde</h1>
    <p class="lead mb-4">
      Her finder du Print Produkter lavet ud fra HB-Begravelses nuværende materiale
    </p>
    <a
      href="https://github.com/Mattienon/hovedopgave"
      target="_blank"
      class="btn btn-outline-light btn-lg mt-3"
    >
      <i class="bi bi-github me-2"></i>Se kode på GitHub
    </a>
  </div>
</section>
  
    <section>
      <div class="container py-5">
        <div class="row g-4">
          <div class="col-12 col-sm-6 col-md-3" v-for="(box, index) in boxes" :key="index">
            <a
              v-if="box.link"
              :href="box.link"
              target="_blank"
              class="text-decoration-none text-dark"
            >
              <div class="p-4 text-center bg-light border rounded shadow-sm h-100">
                <img v-if="box.image" :src="box.image" alt="PDF preview" class="img-fluid mb-3 rounded" />
                <h5>{{ box.title }}</h5>
                <p class="mb-0">
                  <i class="bi bi-download me-2"></i>{{ box.content }}
                </p>
              </div>
            </a>

            <div v-else class="p-4 text-center bg-light border rounded shadow-sm h-100">
              <img :src="box.image" alt="Box image" class="img-fluid mb-3 rounded" />
              <h5>{{ box.title }}</h5>
              <p class="mb-0">{{ box.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>



<script setup>
// print import og thumbnail
import pdf1 from '@/assets/skoleprint/begravelseshjælp.pdf'
import pdfThumbnail1 from '@/assets/skoleprint/pdf1-thumbnail.png' 
import pdf2 from '@/assets/skoleprint/Huskeliste.pdf'
import pdfThumbnail2 from '@/assets/skoleprint/pdf2-thumbnail.png'
import pdf3 from '@/assets/skoleprint/Ved-dødsfald.pdf'
import pdfThumbnail3 from '@/assets/skoleprint/pdf3-thumbnail.png'
import pdf4 from '@/assets/skoleprint/Flyer.pdf'
import pdfThumbnail4 from '@/assets/skoleprint/pdf4-thumbnail.png'
import pdf5 from '@/assets/skoleprint/Visitkort.pdf'
import pdfThumbnail5 from '@/assets/skoleprint/pdf5-thumbnail.png'
import pdf6 from '@/assets/skoleprint/Data dok.pdf'
import pdfThumbnail6 from '@/assets/skoleprint/pdf6-thumbnail.png'

const boxes = [
  {
    title: 'Begravelseshjælp',
    content: 'Se vejledningen',
    link: pdf1,
    image: pdfThumbnail1,
  },
  {
    title: 'Huskeliste',
    content: 'Se huskeliste',
    link: pdf2, 
    image: pdfThumbnail2,
  },
  {
    title: 'Ved Dødsfald',
    content: 'Se "Ved Dødsfald"',
    link: pdf3,
    image: pdfThumbnail3,
  },
  {
    title: 'Flyer',
    content: 'Se Flyer',
    link: pdf4,
    image: pdfThumbnail4,
  },
  {
    title: 'Visitkort',
    content: 'Se Visitkort',
    link: pdf5, 
    image: pdfThumbnail5,
  },
  {
    title: 'Spørgeskema Data',
    content: 'Se Data Oversigt',
    link: pdf6, 
    image: pdfThumbnail6,
  },
];
</script>
  
  
  <style scoped>
.hero {
  position: relative;
background-color: var(--color-gold);
  min-height: 50vh;
  padding: 4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;

  overflow: hidden;
}

.hero .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.367);
  z-index: 1;
}

.hero h1 {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
}

img {
  width: auto;
  margin: 0 auto;
  object-fit: cover;
}

.card-title.text-muted {
  font-size: 1.5rem;
  font-weight: 500;
}

a.text-decoration-none .bg-light {
  transition: 0.3s ease-in-out;
}

a.text-decoration-none:hover .bg-light {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

  </style>