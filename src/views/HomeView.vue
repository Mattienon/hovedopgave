<template>
  <main>
    <!-- Hero Section -->
    <section 
      class="hero d-flex align-items-center text-white text-center"
      :style="{ backgroundImage: `url(${banner})` }"
    >
      <div class="overlay"></div>
      <div class="container position-relative z-1">
        <h1 class="display-4 fw-bold">Velkommen til HB Begravelse</h1>
        <p class="lead mb-4">Vi hjælper dig trygt igennem hele forløbet med omsorg og respekt.</p>
        <div class="d-flex justify-content-center gap-3">
          <a href="tel:70702110" class="btn-1">70 70 21 10</a>
          <a href="#kontakt" class="btn-2-white">Skriv besked</a>
        </div>
      </div>
    </section>


    <!-- CTA Section -->
    <section class="cta-section text-white text-center py-5">
      <div class="container">
        <h2 class="mb-3">Begravelseshjælp, der gør en forskel</h2>
        <p class="mb-4">KHB-Begravelse er en lokal bedemandsforretning bestående af Bjarne Christensen, Henrik Kristensen, Majbritt Franzen og Betty Jensen.</p>
<p>Vi tilbyder omsorgsfuld hjælp og personlig rådgivning til både kirkelig og borgerlig begravelse i Esbjerg,  Oksbøl, Varde, Guldager, Ribe, Arnum, Toftlund, Skærbæk, Løgumkloster og Haderslev. Vi kan hjælpe med alt det praktiske i forbindelse med begravelser og bisættelser i hele Sydvestjylland og Sønderjylland.
Vi vil gøre alt for at sikre, at den sidste afsked bliver så god og mindeværdig som mulig. En afsked helt efter dine og afdødes ønsker.</p>
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <a href="tel:70702110" class="btn-2-white">Læs Mere</a>
        </div>
      </div>
    </section>

    <!-- Start her område -->
    <div class="container py-5">
      <h2 class="text-center mb-4">Start Her</h2>
      <div class="row justify-content-center">
        <div class="col-md-4 mb-4" v-for="example in examples" :key="example.title">
          <div class="card h-100 shadow-sm d-flex flex-column">
            <img :src="example.image" alt="billede" class="card-img-top" style="object-fit: cover; height: 200px;">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ example.title }}</h5>
              <p class="card-text">{{ example.description }}</p>
              <p class="fw-bold">{{ example.price }}</p>
              <a :href="example.link" class="btn-1 box-btn mt-auto">Læs mere</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Karousel/slider -->
    <section class="slider-section">
      <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="carousel-item"
            :class="{ active: index === 0 }"
          >
            <div
              class="slider-image"
              :style="{ backgroundImage: `url(${slide.image})` }"
            >
              <div class="slider-overlay text-white d-flex align-items-center justify-content-center text-center">
                <div>
                  <h3 class="mb-2">{{ slide.title }}</h3>
                  <p class="mb-3">{{ slide.text }}</p>
                  <a :href="slide.link" class="btn-2-white">{{ slide.buttonText }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>

    <!-- Zigzag opsæt -->
    <section class="zigzag-section py-5 mt-5">
      <div class="container">
        <!-- Zig -->
        <div class="row align-items-center mb-5">
          <div class="col-md-6">
            <img :src="pl" class="img-fluid rounded shadow pl-image" alt="Tryghed i processen" />
          </div>
          <div class="col-md-6">
            <h3 class="mb-3">Medfølelse, indlevelse og overblik i en svær tid</h3>
            <h5 class="text-muted mb-3">Vi er her for dig – fra start til slut</h5>
            <p class="mb-4">
              Vi ved, hvad det betyder at miste dem, man har kær, uanset om det er et familiemedlem eller en nær ven.
Vores opgave består i, sammen med de efterladte, at skabe et overblik over alt det praktiske i forbindelse med et dødsfald og planlægge, hvordan højtideligheden skal foregå. Det gør vi i tæt og respektfuld dialog med de nærmeste, så det bliver en afsked, der er i overensstemmelse med afdødes og familiens ønsker.
            </p>
            <h3 class="mb-3">Omsorg og nærvær for de pårørende</h3>
            <p class="mb-4">
              Vi har lang erfaring med dialog og omsorg for mennesker i sorg. Med stor indlevelse og situationsfornemmelse støtter vi de efterladte og hjælper med at skabe et overblik og samle de løse ender, når familien og de efterladte står over for et dødsfald.
Vi har stort fokus på den gode og nærværende samtale, så de efterladte føler tryghed under hele forløbet. Vi tager os tid og ro til samtale og planlægning af det sidste farvel.
            </p>
            <a href="#" class="btn-1">Læs mere</a>
          </div>
        </div>
<hr class="mb-5">
        <!-- Zag -->
        <div class="row align-items-center flex-md-row-reverse">
          <div class="col-md-6">
            <img :src="kiste" class="img-fluid rounded shadow mb-5" alt="Personlig afsked" />
            <img :src="fælles" class="img-fluid rounded shadow mb-5" alt="Personlig afsked" />
          </div>
          <div class="col-md-6">
            <h3 class="mb-3">Kirkelig og borgerlig begravelse
              i Esbjerg og omegn</h3>
            <h5 class="text-muted mb-3">– og i byerne Guldager, Oksbøl, Varde, Ribe, Haderslev, Arnum, Toftlund og Løgumkloster.</h5>
            <p class="mb-4">
              Vi har et stort ønske om, igennem hele forløbet, at yde høj kvalitet, proffesionel hjælp og rådgivning, som gør en forskel for de efterladte. Vi står altid klar til at hjælpe dig igennem den svære tid, når du har mistet et kært menneske, du holder af. Vi tilbyder vores hjælp og støtte døgnet rundt i Esbjerg, Sydvestjylland og Sønderjylland.
            </p>
            <h3 class="text-muted mb-3">Kontakt os i dag</h3>
            <p class="mb-4"> 
              Du er altid velkommen til en personlig samtale i en af vores begravelsesforretninger. Hvis du ønsker en snak i trygge og velkendte rammer, kan vi også tilbyde at holde samtalen hos dig.
Vi kan træffes alle ugens dage og træder til, når du har behov for det.
Kontakt HB-Begravelse for en uforpligtende samtale på telefon <strong>70 70 21 10.</strong>  Du er også velkommen til at sende en mail til os på <strong>info@hb-begravelse.dk</strong> eller benytte vores kontaktformular.
            </p>
              
            <a href="#" class="btn-1">Se muligheder</a>
          </div>
        </div>
      </div>
    </section>
    <hr class="mt-5">
    <Emailform />
  </main>
</template>

<script setup>
// billeder
import pl from '@/assets/Aktionsbilleder/bedemandpl.png'
import omos from '@/assets/Aktionsbilleder/Fælles.jpg';
import esbjerg from '@/assets/Aktionsbilleder/Esbjerg.jpg'
import hb from '@/assets/Aktionsbilleder/hb.jpg'
import fælles from '@/assets/Aktionsbilleder/Fælles.jpg'
import bird from '@/assets/Aktionsbilleder/Birds.jpg'
import kiste from '@/assets/Aktionsbilleder/Kiste.jpg'
// banner
import banner from '@/assets/Bannerbilleder/omosban.jpg';
import Emailform from '@/components/Emailform.vue';

const examples = [
  {
    title: 'Om Os',
    description: 'Professionel og omsorgsfuld hjælp til en smuk og mindeværdig afsked',
    image: esbjerg,
    link: '/about'
  },
  {
    title: 'Sorg og tab',
    description: 'Reaktioner på sorgen når vi mister en vi holder af',
    image: hb,
    link: '#'
  },
  {
    title: 'Kontakt os',
    description: 'Få en uformel og helt uforpligtende samtale om dine ønsker',
    image: fælles,
    link: '#'
  }
];

const slides = [
  {
    title: 'Tryghed i en svær tid',
    text: 'Vi sørger for, at du aldrig står alene med beslutningerne.',
    image: omos,
    buttonText: 'Læs mere',
    link: '#'
  },
  {
    title: 'Personlig afsked',
    text: 'Vi hjælper dig med at skabe en smuk og mindeværdig afsked.',
    image: esbjerg,
    buttonText: 'Se muligheder',
    link: '#'
  },
  {
    title: 'Altid nærværende',
    text: 'Vi er lokale og tilgængelige hele døgnet.',
    image: bird,
    buttonText: 'Kontakt os',
    link: '#kontakt'
  }
];
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
    background: rgba(0, 0, 0, 0.367);
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

.cta-section {
  background-color: var(--color-dark);
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
  }
}

.card-body {
  display: flex;
  flex-direction: column;
}

.slider-section {
  margin-top: 3rem;

  .slider-image {
    height: 450px;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .slider-overlay {
    background-color: rgba(0, 0, 0, 0.45);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 2rem;

    h3 {
      font-size: 2rem;
      font-weight: 600;
    }

    p {
      font-size: 1.1rem;
    }
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: 50%;
  }
}

.zigzag-section {
  h3 {
    font-size: 2rem;
    font-weight: 600;
  }

  h5 {
    font-weight: 400;
    color: #666;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.7;
  }

    }

    .box-btn{
      // knap længde
      width: 50%; 
    }

</style>