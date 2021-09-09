<template>
  <div id="app-container">
    <div id="app">
      <Navbar />
      <Header />
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
import Header from "./components/Header.vue";
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
    Header,
    Navbar,
    Portfolio,
    Resume,
    Services,
  },
};
</script>

<style>
</style>
