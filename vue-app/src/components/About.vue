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
            <img src="../assets/hackathon.png" id="about-img" />
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
                  <strong>Company:</strong> Activision Blizzard
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
                <p id="about-icons">
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
                </p>
              </div>
            </div>
            <p>
              私の名前はコーディ・ウヒです。
              私は米国に住むサイト信頼性エンジニアです。
              私はテクノロジーが大好きで、新しいことを学ぶのが大好きです。
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 50px 50px 50px;
    padding: 75px 0 75px 0;
  }
  #about {
    width: 100vw;
    color: var(--darkest);
  }
  #about-header-container,
  #about-mission-statement-container,
  #about-title,
  #about-description,
  #about-grid-container {
    margin: 0 0 25px 0;
  }
  h2 {
    font-size: 35px;
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
    max-width: 730px;
  }
  
  #about-icons > a > i {
    margin: 10px 20px 0 0;
  }
  
  /* Desktop view */
  @media only screen and (min-width: 800px) {
    #about-container {
      margin: 0 75px 75px 75px;
      padding: 100px 0 70px 0;
    }
    #about {
      max-width: 1370px;
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
      width: 35vw;
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