<template>
  <div id="about-container" class="section">
    <!-- Inspired by the iPortfolio template -->
    <div id="about">
      <div id="about-header-container">
        <h2>About</h2>
        <hr />
      </div>
      <div id="about-mission-statement-container">
        <p>
          My mission is to use technology to bring humanity into the future. I
          learn something new every day. I innovate to find new ways to solve
          old problems. I build technology solutions that make the world a
          better place. I believe that techie people have a responsibility to
          use their skills to lift the lives of others, and I stand by that
          code.
        </p>
      </div>
      <div id="about-stats-container">
        <div id="about-img-container">
          <img src="../assets/suit.png" id="about-img" />
        </div>
        <div id="about-stats">
          <h2 id="about-title">
            Site Reliability Engineer & Full-Stack Software Engineer
          </h2>
          <p id="about-description">
            <em
              >With years of experience writing code, installing/maintaining
              computer systems, and creating technological solutions to
              problems, I take pride in my craft.
            </em>
          </p>
          <div id="about-grid-container">
            <div class="about-grid-column">
              <p>
                <i class="fa fa-angle-right"></i>
                <strong>Alma Mater:</strong> BYU (Provo, UT)
              </p>
              <p>
                <i class="fa fa-angle-right"></i>
                <strong>Company:</strong>Vivint (Lehi, UT)
              </p>
              <p>
                <i class="fa fa-angle-right"></i>
                <strong>Location:</strong> Lehi, UT - USA
              </p>
            </div>
            <div class="about-grid-column">
              <p>
                <i class="fa fa-angle-right"></i> <strong>Degree:</strong> BS IT
                & Computer Science
              </p>
              <p>
                <i class="fa fa-angle-right"></i>
                <strong>Position:</strong> Site Reliability Engineer
              </p>
            </div>
          </div>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
#about-container {
  margin: 0 50px 50px 50px;
  padding: 75px 0 75px 0;
}
#about {
  color: var(--darkest);
}
#about-header-container,
#about-mission-statement-container,
#about-title,
#about-description,
#about-grid-container {
  margin: 0 0 25px 0;
}
i {
  font-size: 22px;
  font-weight: bold;
  margin: 5px;
  color: var(--dark);
}
hr {
  margin: 15px 0 15px 0;
  color: var(--dark);
  border: 1px solid var(--dark);
  width: 150px;
}
#about-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#about-img {
  width: 60vw;
  height: auto;
  margin-bottom: 25px;
}

/* Desktop view */
@media only screen and (min-width: 800px) {
  #about-container {
    margin: 0 75px 75px 75px;
    padding: 150px 0 150px 0;
  }
  #about-stats-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 25px 0 0 0;
  }
  #about-img-container {
    display: flex;
    margin: 0 25px 0 0;
  }
  #about-img {
    width: 30vw;
  }
  #about-stats {
    margin: 0 0 0 25px;
  }
  #about-grid-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  .about-grid-column {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 0 25px 0;
  }
  .about-grid-column > p {
    margin: 10px;
  }
}
</style>