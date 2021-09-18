<template>
  <div id="content-container">
    <div id="content">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import About from "./components/About.vue";
import Blog from "./components/Blog.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Portfolio from "./components/Portfolio.vue";
import Resume from "./components/Resume.vue";
import Services from "./components/Services.vue";

export default {
  name: "Cody Uhi's Portfolio",
  components: {
    About,
    Blog,
    Contact,
    Footer,
    Hero,
    Navbar,
    Portfolio,
    Resume,
    Services,
  },
};
</script>

<style>
* {
  --lightest: white;
  --light: lightgreen;
  --dark: lightcoral;
  --darkest: black;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  scroll-behavior: smooth;
}

.section {
  padding: 150px 0 150px 0;
  color: var(--lightest);
}
</style>
