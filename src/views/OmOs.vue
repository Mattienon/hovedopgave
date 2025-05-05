<template>
  <div class="about-page">
    <!-- Hero område -->
    <section 
  class="hero d-flex align-items-center text-white text-center"
  :style="{
    backgroundImage: `url(${omos})`
  }"
>
  <div class="overlay"></div> <!-- hero slør -->
  <div class="container position-relative z-1">
    <h1 class="display-4 fw-bold">Velkommen til HB Begravelse</h1>
    <p class="lead mb-4">Vi hjælper dig trygt igennem hele forløbet med omsorg og respekt.</p>
    <div class="d-flex justify-content-center gap-3">
      <a href="tel:70702110" class="btn-1">70 70 21 10</a>
      <a href="#" class="btn-2-white">Skriv besked</a>
    </div>
  </div>
</section>

    <!-- Split Section t-venstre b-højre-->
    <section class="container my-5">
      <div class="row align-items-center">
        <!-- Tekst -->
        <div class="col-lg-6 mb-4 mb-lg-0">
          <h2 class="mb-3">Personlig og nærværende hjælp</h2>
          <p>
            Som professionelle bedemænd hjælper vi dig med alle de praktiske opgaver, der skal tages hånd om, når du mister et familiemedlem eller en person, som står dig nær. Her kan du læse mere om HB-Begravelse.
          </p>
          <p>
          
Vi lægger stor vægt på at tilbyde en professionel, individuel tilpasset hjælp og service til mennesker ramt af et dødsfald, så det bliver den afsked, som de pårørende ønsker at få med deres kære.

          </p>
        </div>

        <!-- Billed-Grid -->
        <div class="col-lg-6">
          <div class="image-grid">
            <div class="row g-2">
              <div class="col-6">
                <img :src="esbjerg" class="img-fluid rounded" alt="Billede 1" />
              </div>
              <div class="col-6">
                <img :src="birds" class="img-fluid rounded" alt="Billede 2" />
              </div>
              <div class="col-12">
                <img :src="kiste" class="img-fluid rounded mt-2" alt="Billede 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Split Section t-venstre b-højre -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="row align-items-center">
          <!-- Billed -->
          <div class="col-lg-6 mb-4 mb-lg-0">
            <img :src="hb" class="img-fluid rounded" alt="Billede 4" />
          </div>
<!-- Import Accordion sektion -->
<Faq /> 
          </div>
        </div>
    </section>
    <!-- Bedemænd -->
<section class="team-section text-white py-5">
  <div class="container text-center">
    <h2 class="mb-3">Mød vores Bedemænd</h2>
    <p class="mb-5">
      Hos os er vi alle uddannede og Eksamineret bedemand - 
  Vi ønsker at give personlig rådgivning og sikre afdøde og pårørende en værdig sidste rejse. 
</p>
    <div class="row g-4">
      <div class="col-12 col-sm-6 col-lg-3" v-for="(person, index) in team" :key="index">
        <div class="team-member">
          <img :src="person.image" alt="team member" class="img-fluid rounded mb-3 shadow-sm" />
          <h5 class="mb-1">{{ person.name }}</h5>
          <p class="text-muted small">{{ person.email }}</p>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <a href="#" class="btn btn-outline-light">Læs Mere</a>
    </div>
  </div>
</section>
<!-- Testimonials -->
<section class="testimonials-section py-5 bg-light text-center">
  <br><br>
  <div class="container">
    <h2 class="mb-3">Hvad siger vores kunder?</h2>
    <p class="mb-5">Læs nogle af de varme ord, vores kunder har delt efter forløbet med os.</p>

    <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: index === 0 }"
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <div class="testimonial mx-auto" style="max-width: 700px;">
            <div class="mb-3">
              <i class="bi bi-star-fill text-warning" v-for="n in 5" :key="n"></i>
            </div>
            <p class="lead fst-italic">“{{ testimonial.text }}”</p>
            <p class="text-muted mt-3">— {{ testimonial.name }}</p>
          </div>
        </div>
  
      </div>  <br><br>

      <!-- + pile til carousel -->
      <button
        class="carousel-control-prev bg-white rounded-circle border shadow-sm"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button
        class="carousel-control-next bg-white rounded-circle border shadow-sm"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

      <!-- test nr. prikker -->
      <div class="carousel-indicators mt-4">
        <button
          type="button"
          v-for="(testimonial, index) in testimonials"
          :key="index"
          data-bs-target="#testimonialCarousel"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          aria-label="Slide"
        ></button>
      </div>
    </div>
  </div>
</section>
<!-- import email sektion -->
<Emailform />
  </div>
</template>

<script setup>
// Kontakt form
import Emailform from '@/components/Emailform.vue';
// Accordion
import Faq from '@/components/Faq.vue'
// billeder
import kiste from '@/assets/Aktionsbilleder/kiste.jpg';
import hb from '@/assets/Aktionsbilleder/hb.jpg';
import esbjerg from '@/assets/Aktionsbilleder/Esbjerg.jpg';
import birds from '@/assets/Aktionsbilleder/Birds.jpg';
// banner billed
import omos from '@/assets/Bannerbilleder/omosban.jpg';
//bedemænd
import bjarne from '@/assets/Bedemænd/Bjarne.jpg';
import henrik from '@/assets/Bedemænd/Henrik.jpg'; 
import majbritt from '@/assets/Bedemænd/Majbritt.jpg'; 
import betty from '@/assets/Bedemænd/Betty.jpg';  

const team = [
  {
    name: 'Bjarne Christensen',
    email: 'bc@hb-begravelse.dk',
    image: bjarne, 
  },
  {
    name: 'Henrik Kristensen',
    email: 'hk@hb-begravelse.dk',
    image: henrik,
  },
  {
    name: 'Majbritt Franzen',
    email: 'mf@hb-begravelse.dk',
    image: majbritt,
  },
  {
    name: 'Betty Jensen',
    email: 'bj@hb-begravelse.dk',
    image: betty,
  },
]
const testimonials = [
  {
    name: "Mette A.",
    text: "HB Begravelse gav os den ro og støtte vi havde brug for. Vi følte os trygge hele vejen igennem.",
  },
  {
    name: "Lars J.",
    text: "Venlige, professionelle og medmenneskelige. En stor hjælp i en svær tid.",
  },
  {
    name: "Katrine B.",
    text: "Alt forløb præcis som det skulle – med værdighed og omsorg. Tak for det hele.",
  },
]
</script>

<style lang="scss" scoped>
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
    background: rgba(0, 0, 0, 0.367); // Hero Slør 
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;

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
}

.image-grid img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.accordion-button {
  font-weight: 500;
}
.team-section {
  background-color: var(--color-gold);
}

.team-member h5 {
  color: #ffffff;
}

.team-member p {
  color: #cccccc;
}

.testimonials-section {
  .carousel-control-prev,
  .carousel-control-next {
    width: 3rem;
    height: 3rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-size: 1.5rem 1.5rem;
  }

  .carousel-indicators [data-bs-target] {
    background-color: #333;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.5;
  }

  .carousel-indicators .active {
    opacity: 1;
  }
}

</style>