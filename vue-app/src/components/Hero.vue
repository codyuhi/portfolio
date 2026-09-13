<template>
  <div id="hero-container" class="section">
    <!-- Inspired by the Personal template -->
    <div id="hero">
      <div id="hero-img-container">
        <img src="../assets/suit.png" id="hero-img" />
      </div>
      <div id="hero-text-container">
        <div id="hero-text">
          <h1>Cody Uhi</h1>
          <p>(ウヒ・コーディ)</p>
          <p>Site Reliability Engineer</p>
          <p>Full-Stack Software Engineer</p>
          <div id="hero-icons-container">
            <!-- <a href="https://www.facebook.com/cody.uhi"
                ><i class="fa fa-facebook"></i
              ></a> -->
            <a href="https://www.linkedin.com/in/codyuhi/"
              ><i class="fa fa-linkedin"></i
            ></a>
            <!-- <a href="https://www.instagram.com/uhicody/"
                ><i class="fa fa-instagram"></i
              ></a> -->
            <a href="https://github.com/codyuhi"
              ><i class="fa fa-github"></i
            ></a>
          </div>
        </div>
      </div>
      <div id="hero-filler"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero-section",
};
</script>

<style scoped>
#hero-container {
  background-color: var(--darkest);
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: max(2rem, var(--sat)) 1.25rem 2rem 1.25rem;
  overflow: hidden;
}
#hero {
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
#hero-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
#hero-img {
  border-radius: 50%;
  max-height: 260px;
  max-width: 80vw;
  width: auto;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
}
#hero-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
#hero-text {
  z-index: 2;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}
#hero-text > h1,
#hero-text > p {
  text-align: center;
  margin-bottom: 8px;
}
h1 {
  font-size: clamp(2rem, 6vw, 45px);
}
#hero-icons-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  gap: 0.5rem;
}
#hero-icons-container > a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  touch-action: manipulation;
}
#hero-icons-container > a > i {
  font-size: 22px;
  color: var(--light);
}
#hero-filler {
  display: none;
}

@media only screen and (max-height: 620px) {
  #hero-img-container {
    display: none;
  }
  #hero-container {
    background-image: url("../assets/suit.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: 100%;
    background-position-y: 100%;
  }
  #hero {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #hero-text > h1,
  #hero-text > p {
    text-align: left;
  }
  #hero-text-container {
    flex: 2;
  }
  #hero-icons-container {
    justify-content: flex-start;
    align-items: flex-start;
  }
  #hero-icons-container > a > i {
    margin: 0 20px 0 0;
  }
  #hero-filler {
    display: flex;
    flex: 1;
  }
}

@media only screen and (min-width: 800px) and (max-width: 854px) {
  #hero-container {
    background-image: url("../assets/suit.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: 100%;
    background-position-y: 100%;
  }
  #hero {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #hero-img-container {
    display: none;
  }
  #hero-text > h1,
  #hero-text > p {
    text-align: left;
  }
  #hero-text-container {
    flex: 2;
  }
  #hero-icons-container {
    justify-content: flex-start;
    align-items: flex-start;
  }
  #hero-icons-container > a > i {
    margin: 0 20px 0 0;
  }
  #hero-filler {
    display: flex;
    flex: 1;
  }
}

/* Tablet View */
@media only screen and (min-width: 855px) and (max-width: 1011px) {
  #hero-container {
    background-image: url("../assets/suit.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: 100%;
    background-position-y: 100%;
  }
  #hero {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #hero-img-container {
    display: none;
  }
  #hero-text > h1,
  #hero-text > p {
    text-align: left;
  }
  #hero-text-container {
    flex: 2;
  }
  #hero-icons-container {
    justify-content: flex-start;
    align-items: flex-start;
  }
  #hero-icons-container > a > i {
    margin: 0 20px 0 0;
  }
  #hero-filler {
    display: flex;
    flex: 1;
  }
}

/* Desktop View */
@media only screen and (min-width: 1012px) {
  #hero-container {
    background-image: none;
  }
  #hero {
    background-image: url("../assets/suit.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: 80%;
    background-position-y: 100%;
    max-width: 1500px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #hero-img-container {
    display: none;
  }
  #hero-text > h1,
  #hero-text > p {
    text-align: left;
  }
  #hero-text-container {
    flex: 2;
  }
  #hero-icons-container {
    justify-content: flex-start;
    align-items: flex-start;
  }
  #hero-icons-container > a > i {
    margin: 0 20px 0 0;
  }
  #hero-filler {
    display: flex;
    flex: 2;
  }
}
</style>
