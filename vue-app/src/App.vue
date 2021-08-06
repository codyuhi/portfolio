<template>
  <div id="main-container">
    <Navbar />
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Header,
    Content,
    Footer,
  },
};
</script>

<style>
</style>
