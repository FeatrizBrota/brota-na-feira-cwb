<template>
  <div class="menu-principal" v-if="isMobileOrTablet">
    <div class="logo-container">
      <!-- <img src="images/logo.png" alt="Logo Brota na Feira" class="logo-img"> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPrincipal",
  data() {
    return {
      isMobileOrTablet: false
    };
  },
  mounted() {
    this.isMobileOrTablet = this.checkIfMobileOrTablet();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    checkIfMobileOrTablet() {
      const mq = window.matchMedia("(max-width: 768px)");
      return mq.matches;
    },
    handleResize() {
      this.isMobileOrTablet = this.checkIfMobileOrTablet();
    }
  }
};
</script>

<style scoped>
.menu-principal {
  display: flex;
  align-items: center;
  padding: 50px;
  background-color: #B7D739;
  border-radius:  0 0 30px 30px ;
}

.logo-container {
  flex: 1;
  text-align: center;
}

.logo-img {
  width: 100%;
}

@media (min-width: 900px) {
  .menu-principal {
    display: none;
  }
}
</style>
