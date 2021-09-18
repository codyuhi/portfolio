<template>
  <div id="navbar-container">
    <!-- Mobile view inspired by the iPortfolio template -->
    <div id="mobile-navbar">
      <div
        id="mobile-nav-button-container"
        v-bind:class="
          activeSection === 'home'
            ? ''
            : activeSection === 'about'
            ? 'about-menu-icon'
            : 'opaque-menu-icon'
        "
      >
        <div
          id="mobile-nav-button"
          v-bind:class="menuExpanded ? 'open' : ''"
          v-on:click="toggleMenuIcon()"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        id="sidebar-container"
        v-bind:class="menuExpanded ? 'open' : closed ? 'closed' : ''"
      >
        <div id="sidebar">
          <div id="sidebar-img-container">
            <img src="../assets/peace-sign.png" id="sidebar-img" />
          </div>
          <div id="name-icons-container">
            <h2>ウヒ・コーディ</h2>
            <span>( Cody Uhi )</span>
            <div id="icons-container">
              <div id="icons">
                <a href="https://twitter.com/CodeUhi"
                  ><i class="fa fa-twitter"></i
                ></a>
                <a href="https://www.facebook.com/cody.uhi"
                  ><i class="fa fa-facebook"></i
                ></a>
                <a href="https://www.linkedin.com/in/codyuhi/"
                  ><i class="fa fa-linkedin"></i
                ></a>
                <a href="https://www.instagram.com/uhicody/"
                  ><i class="fa fa-instagram"></i
                ></a>
                <a href="https://github.com/codyuhi"
                  ><i class="fa fa-github"></i
                ></a>
              </div>
            </div>
          </div>
          <div id="sidebar-links-container">
            <div id="sidebar-links">
              <nav>
                <ul>
                  <li>
                    <a
                      href="#hero-container"
                      v-bind:class="
                        activeSection === 'home'
                          ? 'active nav-item'
                          : 'nav-item'
                      "
                      v-on:click="toggleMenuIcon()"
                      ><i class="fa fa-home"></i> Home</a
                    >
                  </li>
                  <li>
                    <a
                      href="#about-container"
                      v-bind:class="
                        activeSection === 'about'
                          ? 'active nav-item'
                          : 'nav-item'
                      "
                      v-on:click="toggleMenuIcon()"
                      ><i class="fa fa-user-o"></i> About</a
                    >
                  </li>
                  <li>
                    <a
                      href="#services-container"
                      v-bind:class="
                        activeSection === 'services'
                          ? 'active nav-item'
                          : 'nav-item'
                      "
                      v-on:click="toggleMenuIcon()"
                      ><i class="fa fa-terminal"></i> Services</a
                    >
                  </li>
                  <li>
                    <a
                      href="#resume-container"
                      v-bind:class="
                        activeSection === 'resume'
                          ? 'active nav-item'
                          : 'nav-item'
                      "
                      v-on:click="toggleMenuIcon()"
                      ><i class="fa fa-vcard-o"></i> Resume</a
                    >
                  </li>
                  <li>
                    <a
                      href="#portfolio-container"
                      v-bind:class="
                        activeSection === 'portfolio'
                          ? 'active nav-item'
                          : 'nav-item'
                      "
                      v-on:click="toggleMenuIcon()"
                      ><i class="fa fa-file-code-o"></i> Portfolio</a
                    >
                  </li>
                  <li>
                    <a
                      href="#blog-container"
                      v-bind:class="
                        activeSection === 'blog'
                          ? 'active nav-item'
                          : 'nav-item'
                      "
                      v-on:click="toggleMenuIcon()"
                      ><i class="fa fa-pencil-square-o"></i> Blog</a
                    >
                  </li>
                  <li>
                    <a
                      href="#contact-container"
                      v-bind:class="
                        activeSection === 'contact'
                          ? 'active nav-item'
                          : 'nav-item'
                      "
                      v-on:click="toggleMenuIcon()"
                      ><i class="fa fa-paper-plane-o"></i> Contact</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div id="sidebar-copyright-container">
            <div id="sidebar-copyright">
              <p>&copy; Copyright Cody Uhi</p>
              <p>2021年9月</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Desktop view inspired by the DevFolio template -->
    <div
      id="desktop-navbar"
      v-bind:class="activeSection !== 'home' ? 'opaque-background' : ''"
    >
      <h1><a href="#hero-container">CodeUhi</a></h1>
      <nav>
        <ul>
          <li>
            <a
              id="home-link"
              href="#hero-container"
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
      menuExpanded: Boolean,
      closed: Boolean,
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
      if (bottom >= 35) {
        this.activeSection = "home";
        return;
      }
      rect = this.aboutSection.getBoundingClientRect();
      top = rect.top;
      bottom = rect.bottom;
      if (
        (this.activeSection !== "about" && top === 0) ||
        bottom >= window.innerHeight
      ) {
        this.activeSection = "about";
        return;
      }
      rect = this.servicesSection.getBoundingClientRect();
      top = rect.top;
      bottom = rect.bottom;
      if (
        (this.activeSection !== "services" && top === 0) ||
        bottom >= window.innerHeight
      ) {
        this.activeSection = "services";
        return;
      }
      rect = this.resumeSection.getBoundingClientRect();
      top = rect.top;
      bottom = rect.bottom;
      if (
        (this.activeSection !== "resume" && top === 0) ||
        bottom >= window.innerHeight
      ) {
        this.activeSection = "resume";
        return;
      }
      rect = this.portfolioSection.getBoundingClientRect();
      top = rect.top;
      bottom = rect.bottom;
      if (
        (this.activeSection !== "portfolio" && top === 0) ||
        bottom >= window.innerHeight
      ) {
        this.activeSection = "portfolio";
        return;
      }
      rect = this.blogSection.getBoundingClientRect();
      top = rect.top;
      bottom = rect.bottom;
      if (
        (this.activeSection !== "blog" && top === 0) ||
        bottom >= window.innerHeight
      ) {
        this.activeSection = "blog";
        return;
      }
      rect = this.contactSection.getBoundingClientRect();
      top = rect.top;
      bottom = rect.bottom;
      if (
        (this.activeSection !== "contact" && top === 0) ||
        bottom >= window.innerHeight
      ) {
        this.activeSection = "contact";
        return;
      }
      if (this.activeSection === undefined) {
        this.activeSection = "home";
        return;
      }
    },
    toggleMenuIcon: function () {
      this.menuExpanded = this.menuExpanded ? false : true;
      this.closed = true;
    },
  },
  mounted() {
    this.activeSection = undefined;
    this.menuExpanded = false;
    this.closed = false;
    this.homeSection = document.querySelector("#hero-container");
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
  z-index: 3;
}
.opaque-background {
  background-color: var(--darkest);
}
.opaque-menu-icon > div > span {
  background: var(--darkest) !important;
}
.about-menu-icon > div > span {
  background: var(--light) !important;
}
.active,
.active > i {
  color: var(--light);
}
a {
  color: var(--lightest);
  text-decoration: none;
}
#desktop-navbar {
  display: none;
}
#mobile-navbar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}
#mobile-nav-button-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 25px;
  z-index: 4;
}
#mobile-nav-button {
  display: flex;
  flex-direction: column;
  width: 25px;
  height: 25px;
  margin: 25px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
#mobile-nav-button span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: var(--lightest);
  border-radius: 3px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
#mobile-nav-button span:nth-child(1) {
  top: 0px;
}
#mobile-nav-button span:nth-child(2),
#mobile-nav-button span:nth-child(3) {
  top: 10px;
}
#mobile-nav-button span:nth-child(4) {
  top: 20px;
}
#mobile-nav-button.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}
#mobile-nav-button.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
#mobile-nav-button.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
#mobile-nav-button.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
#sidebar-container {
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--darkest);
  width: 35vw;
  min-width: 250px;
  height: 100vh;
  z-index: 3;
}
#sidebar-container.open {
  display: flex;
  position: absolute;
  left: 0px;
  top: 0;
  -webkit-animation: slideIn 0.35s forwards;
  -moz-animation: slideIn 0.35s forwards;
  animation: slideIn 0.35s forwards;
}
@-webkit-keyframes slideIn {
  0% {
    transform: translateX(-900px);
  }
  100% {
    transform: translateX(0);
  }
}
@-moz-keyframes slideIn {
  0% {
    transform: translateX(-900px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideIn {
  0% {
    transform: translateX(-900px);
  }
  100% {
    transform: translateX(0);
  }
}
#sidebar-container.closed {
  display: flex;
  position: absolute;
  left: -900px;
  top: 0;
  -webkit-animation: slideOut 0.5s forwards;
  -moz-animation: slideOut 0.5s forwards;
  animation: slideOut 0.5s forwards;
}
@-webkit-keyframes slideOut {
  0% {
    transform: translateX(900px);
  }
  100% {
    transform: translateX(0);
  }
}
@-moz-keyframes slideOut {
  0% {
    transform: translateX(900px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideOut {
  0% {
    transform: translateX(900px);
  }
  100% {
    transform: translateX(0);
  }
}
#sidebar {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
}
#sidebar-img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px 15px 15px 15px;
}
#sidebar-img {
  width: 75%;
  height: auto;
  border-radius: 50%;
}
#name-icons-container {
  color: var(--lightest);
  text-align: center;
  margin: 15px;
}
#icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px;
}
#icons > a > i {
  font-size: 20px;
  color: var(--light);
  margin: 10px;
}
li > a > i {
  font-size: 20px;
  color: var(--lightest);
  margin: 10px;
}
li {
  margin: 5px 30px 5px 30px;
  text-transform: uppercase;
}
#sidebar-copyright-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  bottom: 15px;
}
#sidebar-copyright {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--lightest);
}

@media only screen and (max-height: 570px) {
  #icons > a > i {
    margin: 5px;
  }
  li > a > i {
    margin: 5px;
  }
  #icons-container {
    display: none;
  }
  #sidebar-copyright-container {
    display: none;
  }
}

@media only screen and (max-height: 665px) {
  #name-icons-container {
    margin: 10px;
  }
  #sidebar-img-container {
    display: none;
  }
}

@media only screen and (max-height: 735px) {
  #sidebar-img {
    height: 100px;
    width: auto;
  }
}

@media only screen and (min-width: 800px) and (max-width: 854px) {
  h1 > a {
    display: none !important;
  }
  #desktop-navbar {
    background-color: var(--darkest) !important;
  }
}

/* Desktop View */
@media only screen and (min-width: 800px) {
  #navbar-container {
    display: flex;
    justify-content: center;
    max-width: 1920px;
  }
  #mobile-navbar {
    display: none;
  }
  #desktop-navbar {
    width: 100%;
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