<template>
  <div
    id="navbar-container"
    v-bind:class="activeSection !== 'home' ? 'opaque-background' : ''"
  >
    <!-- Desktop view inspired by the DevFolio template -->
    <!-- Mobile view inspired by the iPortfolio template -->
    <div id="navbar">
      <h1><a href="#header-container">CodeUhi</a></h1>
      <nav>
        <ul>
          <li>
            <a
              id="home-link"
              href="#header-container"
              v-bind:class="
                activeSection === 'home' ? 'active nav-item' : 'nav-item'
              "
              >Home</a
            >
          </li>
          <li>
            <a
              id="about-link"
              href="#about-container"
              v-bind:class="
                activeSection === 'about' ? 'active nav-item' : 'nav-item'
              "
              >About</a
            >
          </li>
          <li>
            <a
              id="services-link"
              href="#services-container"
              v-bind:class="
                activeSection === 'services' ? 'active nav-item' : 'nav-item'
              "
              >Services</a
            >
          </li>
          <li>
            <a
              id="resume-link"
              href="#resume-container"
              v-bind:class="
                activeSection === 'resume' ? 'active nav-item' : 'nav-item'
              "
              >Resume</a
            >
          </li>
          <li>
            <a
              id="portfolio-link"
              href="#portfolio-container"
              v-bind:class="
                activeSection === 'portfolio' ? 'active nav-item' : 'nav-item'
              "
              >Portfolio</a
            >
          </li>
          <li>
            <a
              id="blog-link"
              href="#blog-container"
              v-bind:class="
                activeSection === 'blog' ? 'active nav-item' : 'nav-item'
              "
              >Blog</a
            >
          </li>
          <li>
            <a
              id="contact-link"
              href="#contact-container"
              v-bind:class="
                activeSection === 'contact' ? 'active nav-item' : 'nav-item'
              "
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      activeSection: String,
      homeSection: Object,
      aboutSection: Object,
      servicesSection: Object,
      resumeSection: Object,
      portfolioSection: Object,
      blogSection: Object,
      contactSection: Object,
    };
  },
  methods: {
    setActiveSection: function () {
      let rect = this.homeSection.getBoundingClientRect();
      let top = rect.top;
      let bottom = rect.bottom;
      if (top >= 0 && bottom <= window.innerHeight) {
        this.activeSection = "home";
        return;
      }
      rect = this.aboutSection.getBoundingClientRect();
      top = rect.top;
      bottom = rect.bottom;
      if (top >= 0 && bottom <= window.innerHeight) {
        this.activeSection = "about";
        return;
      }
      rect = this.servicesSection.getBoundingClientRect();
      top = rect.top;
      bottom = rect.bottom;
      if (top >= 0 && bottom <= window.innerHeight) {
        this.activeSection = "services";
        return;
      }
      rect = this.resumeSection.getBoundingClientRect();
      top = rect.top;
      bottom = rect.bottom;
      if (top >= 0 && bottom <= window.innerHeight) {
        this.activeSection = "resume";
        return;
      }
      rect = this.portfolioSection.getBoundingClientRect();
      top = rect.top;
      bottom = rect.bottom;
      if (top >= 0 && bottom <= window.innerHeight) {
        this.activeSection = "portfolio";
        return;
      }
      rect = this.blogSection.getBoundingClientRect();
      top = rect.top;
      bottom = rect.bottom;
      if (top >= 0 && bottom <= window.innerHeight) {
        this.activeSection = "blog";
        return;
      }
      rect = this.contactSection.getBoundingClientRect();
      top = rect.top;
      bottom = rect.bottom;
      if (top >= 0 && bottom <= window.innerHeight) {
        this.activeSection = "contact";
        return;
      }
    },
  },
  mounted() {
    this.homeSection = document.querySelector("#header-container");
    this.aboutSection = document.querySelector("#about-container");
    this.servicesSection = document.querySelector("#services-container");
    this.resumeSection = document.querySelector("#resume-container");
    this.portfolioSection = document.querySelector("#portfolio-container");
    this.blogSection = document.querySelector("#blog-container");
    this.contactSection = document.querySelector("#contact-container");
    this.setActiveSection();
    window.addEventListener("scroll", this.setActiveSection);
  },
  unmounted() {
    window.removeEventListener("scroll", this.setActiveSection);
  },
};
</script>

<style scoped>
/* Mobile View */
#navbar-container {
  width: 100vw;
  position: fixed;
  -webkit-transition: color 100ms linear;
  -ms-transition: color 100ms linear;
  transition: color 100ms linear;
  -webkit-transition: background-color 500ms ease-in-out;
  -ms-transition: background-color 500ms ease-in-out;
  transition: background-color 500ms ease-in-out;
}
.opaque-background {
  background-color: var(--darkest);
}
.active {
  color: var(--light);
}
a {
  color: var(--lightest);
  text-decoration: none;
}

/* Tablet View */
@media only screen and (min-width: 444px) and (max-width: 1019px) {
}

/* Desktop View */
@media only screen and (min-width: 1020px) {
  #navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px 0 15px;
  }
  h1 {
    margin: 10px 15px 15px 15px;
  }
  h1,
  h1 > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style-type: none;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 9px 15px 7.5px 15px;
    text-transform: uppercase;
  }
  li > a::after {
    content: "";
    display: block;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    height: 2px;
    width: 0px;
    background-color: var(--lightest);
  }
  li > a:hover::after {
    width: 100%;
    transition: all 0.4s;
  }
}
</style>