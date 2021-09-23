<template>
  <div id="portfolio-modal-container-background" v-on:click="destroyModal()">
    <div id="portfolio-modal-container">
      <div id="portfolio-modal"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioModal",
  data() {
    return {};
  },
  methods: {
    destroyModal() {
      console.log("got here");
    },
  },
  mounted() {
    console.log("initialized modal");
  },
};
</script>

<style scoped>
#portfolio-modal-container-background {
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: red;
}
#portfolio-modal-container {
}
#portfolio-modal {
}
</style>