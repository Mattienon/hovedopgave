<template>
    <div>
<!-- Pris Eksempler Section -->
<div class="container py-5">
  <h2 class="text-center mb-4">Pris Eksempler</h2>
  <div class="row justify-content-center">
    <!-- Eksempel 1 -->
    <div class="col-md-5 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Bisættelse – Simpel</h5>
          <p class="card-text">
            Inkl. kiste med polstring, afhentning, ilægning, kørsel til krematorium og hjælp til papirarbejde.
          </p>
          <p class="fw-bold">Fra 9.850 kr.</p>
        </div>
      </div>
    </div>

    <!-- Eksempel 2 -->
    <div class="col-md-5 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Begravelse – Traditionel</h5>
          <p class="card-text">
            Inkl. hvid kiste med kors, transport til kirke og kirkegård, ilægning, pynt, papirarbejde og kontakt med præst.
          </p>
          <p class="fw-bold">Fra 13.450 kr.</p>
        </div>
      </div>
    </div>

    <!-- Eksempel 3 -->
    <div class="col-md-5 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Urnenedsættelse – Enkel</h5>
          <p class="card-text">
            Inkl. afhentning, papirarbejde og deltagelse ved urnenedsættelsen. Mulighed for tilkøb af urne og pynt.
          </p>
          <p class="fw-bold">Fra 4.950 kr.</p>
        </div>
      </div>
    </div>
      <!-- Eksempel 4 -->
      <div class="col-md-5 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">Urnenedsættelse – Enkel</h5>
            <ol class="card-text">
              <li>afhentning</li>
              <li>papirarbejde</li>
              <li>urnenedsættelsen</li>
              <li>afhentning</li>
              <li>afhentning</li>
            </ol>
          <p class="fw-bold">Fra 4.950 kr.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
</template>

<script>
 
</script>

<style lang="scss" scoped>
.card {
  background: linear-gradient(to bottom, var(--color-gold), var(--color-light-gold)); // Gradient fra top til bund
  border: none;
  border-radius: 0.5rem;
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