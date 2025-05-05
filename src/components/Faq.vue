<template>
        <!-- Text + Accordion -->
        <div class="col-lg-6">
            <h2 class="mb-3">Vores Værdier</h2>
            <div class="accordion" id="faqAccordion">
              <div
                v-for="(item, index) in faqs"
                :key="index"
                class="accordion-item"
              >
                <h2 class="accordion-header" :id="'heading' + index">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#collapse' + index"
                    aria-expanded="false"
                    :aria-controls="'collapse' + index"
                  >
                    {{ item.question }}
                  </button>
                </h2>
                <div
                  :id="'collapse' + index"
                  class="accordion-collapse collapse"
                  :aria-labelledby="'heading' + index"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body">
                    {{ item.answer }}
                  </div>
                </div>
              </div>
            </div>
              <!-- Buttons -->
              <div class="mt-4 d-flex gap-3">
              <a href="tel:70702110" class=" btn-1">70 70 21 10</a>
              <a href="#" class="btn-2">Skriv besked</a>
            </div>
    </div>
    
</template>

<script setup>
const faqs = [
  { question: 'Hvordan foregår en bisættelse?', answer: 'Vi hjælper dig gennem hele processen, trin for trin.' },
  { question: 'Hvordan vælger jeg en kiste eller urne?', answer: 'Vi har et bredt udvalg og rådgiver gerne.' },
  { question: 'Hvad koster en begravelse?', answer: 'Priserne varierer – kontakt os for et uforpligtende tilbud.' },
  { question: 'Kan I hjælpe med dødsannonce?', answer: 'Ja, vi hjælper med både udformning og indrykning.' },
  { question: 'Hvad er en mindeside?', answer: 'En mindeside er et sted online, hvor man kan dele minder og billeder.' },
  { question: 'Hvordan kontakter jeg jer uden for åbningstid?', answer: 'Du kan altid ringe – vi har døgnåbent.' }
]
</script>

<style lang="scss" scoped>
.accordion-button {
  font-weight: 500;
}
.accordion-item:nth-child(odd) .accordion-button {
  background-color: var(--color-gold);
  color: var(--color-white);
}

.accordion-item:nth-child(even) .accordion-button {
  background-color: var(--color-light-gold);
  color: var(--color-dark);
}

.accordion-button {
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-shadow: none;
}

.accordion-button:not(.collapsed) {
  /* You can keep this if you want open state styling different */
  filter: brightness(1.05);
}

.accordion-item {
  border: none;
  margin-bottom: 0.1rem;
  overflow: hidden;
}

.accordion-body {
  background-color: #fff;
  color: var(--color-dark);
}
</style>
