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
            <a href="https://twitter.com/CodeUhi"
              ><i class="fa fa-twitter"></i
            ></a>
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
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  border: 1px solid var(--darkest);
}
#hero {
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}
#hero-img-container {
  display: flex;
  flex: 1;
}
#hero-img {
  border-radius: 50%;
  height: 40vh;
  width: auto;
}
#hero-text-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
#hero-text {
  z-index: 2;
  padding: 25px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5%;
}
#hero-text > h1,
#hero-text > p {
  text-align: center;
  margin-bottom: 10px;
}
h1 {
  font-size: 45px;
}
#hero-icons-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
#hero-icons-container > a > i {
  font-size: 20px;
  color: var(--light);
  margin: 0 10px 0 10px;
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
