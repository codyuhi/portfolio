<template>
  <div id="content-container">
    <div id="content">
      <Navbar />
      <PortfolioModal
        v-if="activeItem"
        :item="activeItem"
        @destroyModal="activeItem = $event"
      />
      <Hero />
      <About />
      <Services />
      <Resume />
      <Portfolio @activePortfolioItem="activeItem = $event" />
      <!-- The blog and contact sections will be populated once the blog backend is built in my next project -->
      <!-- <Blog />
      <Contact /> -->
      <Footer />
    </div>
  </div>
</template>

<script>
import About from "./components/About.vue";
// import Blog from "./components/Blog.vue";
// import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Portfolio from "./components/Portfolio.vue";
import PortfolioModal from "./components/PortfolioModal.vue";
import Resume from "./components/Resume.vue";
import Services from "./components/Services.vue";

export default {
  name: "cody-uhis-portfolio",
  components: {
    About,
    // Blog,
    // Contact,
    Footer,
    Hero,
    Navbar,
    Portfolio,
    PortfolioModal,
    Resume,
    Services,
  },
  data() {
    return {
      activeItem: null,
    };
  },
  methods: {
    setActiveItem() {
      console.log("this.activeItem is", this.activeItem);
    },
  },
};
</script>

<style>
:root {
  --lightest: white;
  --light: lightgreen;
  --neutral: lightslategray;
  --dark: lightcoral;
  --darkest: black;

  --sat: env(safe-area-inset-top, 0px);
  --sar: env(safe-area-inset-right, 0px);
  --sab: env(safe-area-inset-bottom, 0px);
  --sal: env(safe-area-inset-left, 0px);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  scroll-behavior: smooth;
}

html, body {
  max-width: 100%;
  overflow-x: hidden;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  background-color: var(--darkest);
}

#content-container,
#content {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

.section {
  max-width: 100%;
  width: 100%;
  padding: 70px 0;
  color: var(--lightest);
}

@media only screen and (min-width: 768px) {
  .section {
    padding: 120px 0;
  }
}
</style>
