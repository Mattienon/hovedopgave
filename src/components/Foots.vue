<template>
    <div>
<!-- Footer Section -->
<footer class="main-footer text-white pt-5 pb-3" style="background-color: #3b3a36;">
  <div class="container">
    <div class="row g-5">
      <!-- Left Column -->
      <div class="col-lg-4 position-relative">
        <!-- Background Logo -->
        <img src="@/assets/LogoLys.png" alt="HB Begravelse logo" class="footer-logo-bg position-absolute top-0 start-0" />

        <p class="position-relative" style="z-index: 1;">
          <strong>HB-Begravelse</strong> tilbyder en nærværende og omsorgsfuld begravelseshjælp. Vi har stor erfaring i at støtte og tale med mennesker i sorg.
          <br /><br />
          HB-Begravelse dækker hele Sydvestjylland, Sønderjylland og Esbjerg.
        </p>

        <div class="mt-4 position-relative" style="z-index: 1;">
          <p class="mb-1">
            <i class="bi bi-telephone-fill me-2"></i>70 70 21 10
          </p>
          <p>
            <i class="bi bi-envelope-fill me-2"></i>kontakt@hb-begravelse.dk
          </p>
        </div>
      </div>

      <!-- Middle Column -->
      <div class="col-lg-4">
        <h5 class="mb-3">Information</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="footer-link">Min sidste vilje</a></li>
          <li><a href="#" class="footer-link">Huskeliste ved dødsfald</a></li>
          <li><a href="#" class="footer-link">Begravelseshjælp</a></li>
          <li><a href="#" class="footer-link">Formaliteter</a></li>
          <li><a href="#" class="footer-link">Valg af gravsted</a></li>
          <li><a href="#" class="footer-link">Om sorg</a></li>
          <li><a href="#" class="footer-link">Bedemandens opgaver</a></li>
        </ul>
      </div>

      <!-- Right Column -->
      <div class="col-lg-4">
        <h5 class="mb-3">Afdelinger</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="footer-link">Esbjerg</a></li>
          <li><a href="#" class="footer-link">Guldager</a></li>
          <li><a href="#" class="footer-link">Oksbøl</a></li>
          <li><a href="#" class="footer-link">Varde</a></li>
          <li><a href="#" class="footer-link">Ribe</a></li>
          <li><a href="#" class="footer-link">Arnum</a></li>
          <li><a href="#" class="footer-link">Skærbæk</a></li>
          <li><a href="#" class="footer-link">Løgumkloster</a></li>
          <li><a href="#" class="footer-link">Haderslev</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

<!-- Mini Footer -->
<div class="sub-footer py-3 text-white" style="background-color: #2f2e2c;">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
    <a href="#" class="text-white text-decoration-none mb-2 mb-md-0">
      <i class="bi bi-facebook me-2"></i>
    </a>
    <div>
      <a href="#" class="text-white text-decoration-none me-3">Persondatapolitik</a>
      <span>CVR: 12345678</span>
    </div>
  </div>
</div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.footer-link {
  color: #e0e0e0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.footer-logo-bg {
  opacity: 0.05;
  width: 100%;
  max-width: 270px;
  margin-left: 8%;
  z-index: 0;
  pointer-events: none;
}
</style>