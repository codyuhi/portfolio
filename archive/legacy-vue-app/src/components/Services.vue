<template>
  <div id="services-container" class="section">
    <!-- Inspired by the MyResume template -->
    <div id="services">
      <div id="services-header-container">
        <h2>Services</h2>
        <hr />
        <p>
          Technology is my passion. I have practiced my skills in many areas of
          technology and have found the areas that I enjoy the most. I love to
          collaborate with others on projects and have listed my favorite things
          to contribute below.
        </p>
      </div>
      <div id="services-cells-container">
        <div
          v-for="service in servicesArray"
          v-bind:key="service.name"
          class="cell"
        >
          <div class="cell-top">
            <i
              v-bind:class="'fa fa-' + service.icon"
              v-bind:id="service.icon + '-icon'"
            ></i>
            <h3>{{ service.name }}</h3>
          </div>
          <div class="cell-bottom">
            <ul>
              <li
                v-for="bullet in service.bullets"
                v-bind:key="bullet.id"
                class="service-bullet"
              >
                {{ bullet.value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      servicesArray: [
        {
          name: "Front-end Development",
          description: "",
          bullets: [
            {
              id: "fe1",
              value: "Front-end Web Development (Vue, React, Angular)",
            },
            {
              id: "fe2",
              value: "Mobile Application Development (Android, Flutter)",
            },
            {
              id: "fe3",
              value: "Desktop Application Development (Java, C#)",
            },
          ],
          icon: "object-group",
        },
        {
          name: "Back-end Development",
          description: "",
          bullets: [
            {
              id: "be1",
              value: "Back-end Development (Node, Python, Java, Ruby, C++)",
            },
            {
              id: "be2",
              value: "Database Development (MySQL, Mongo, PostgreSQL)",
            },
            {
              id: "be3",
              value: "API Development (RESTful APIs)",
            },
          ],
          icon: "code",
        },
        {
          name: "Quality Assurance",
          description: "",
          bullets: [
            {
              id: "qa1",
              value: "Manual Testing Processes (UI Level)",
            },
            {
              id: "qa2",
              value: "Adherance to QA Process (Feature, Integration, Smoke)",
            },
            {
              id: "qa3",
              value: "Unit Testing (Selenium, Jest, Mocha & Chai)",
            },
          ],
          icon: "chain-broken",
        },
        {
          name: "CI/CD & Automation",
          description: "",
          bullets: [
            {
              id: "ci1",
              value: "Containerization (Docker, Kubernetes)",
            },
            {
              id: "ci2",
              value: "Source Control & Code Flow (Git, Jenkins)",
            },
            {
              id: "ci3",
              value: "Automating via Scripting (Salt, Python, Bash)",
            },
          ],
          icon: "code-fork",
        },
        {
          name: "Cloud Infrastructure",
          description: "",
          bullets: [
            {
              id: "cl1",
              value: "Cloud Administration (AWS, Azure, GCP)",
            },
            {
              id: "cl2",
              value: "Serverless Computing (AWS Lambda, GCP Functions)",
            },
            {
              id: "cl3",
              value: "Cloud Database Management (AWS & Azure DynamoDB)",
            },
          ],
          icon: "cloud",
        },
        {
          name: "AI/ML & Data Science",
          description: "",
          bullets: [
            {
              id: "ai1",
              value: "Data Visualization & Modeling (Jupyter, Pandas)",
            },
            {
              id: "ai2",
              value: "Image Recognition (Tensorflow, Google Vision API)",
            },
            {
              id: "ai3",
              value: "Data Gathering & Processing (Leveraging Data Streams)",
            },
          ],
          icon: "lightbulb-o",
        },
      ],
    };
  },
};
</script>

<style scoped>
#services-container {
  background-color: var(--darkest);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
#services,
i {
  color: var(--lightest);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#services-header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90vw;
  margin: 25px;
}
h2 {
  font-size: 35px;
}
h3 {
  color: var(--darkest);
}
hr {
  margin: 15px 0 15px 0;
  color: var(--light);
  border: 1px solid var(--light);
  width: 150px;
}
#services-cells-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1300px;
}
.cell {
  display: flex;
  flex-direction: column;
  margin: 20px;
  /* border: 1px solid var(--light); */
  width: 300px;
  max-width: 90vw;
  border-radius: 1.5%;
}
.cell-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--lightest);
  padding: 25px;
  border-radius: 1.5% 1.5% 0 0;
}
.cell-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  border: 1px solid var(--light);
  border-radius: 0 0 1.5% 1.5%;
}
i {
  font-size: 35px;
  margin: 15px;
  color: var(--neutral);
  padding: 15px;
  border-radius: 50%;
  width: 65px;
  transition: all 0.3s ease-in-out;
}
.cell:hover > div > i {
  background-color: var(--neutral);
  color: var(--lightest);
}
#object-group-icon,
#chain-broken-icon,
#cloud-icon {
  color: var(--neutral);
}
.cell:hover > div > #object-group-icon,
.cell:hover > div > #chain-broken-icon,
.cell:hover > div > #cloud-icon {
  color: var(--lightest);
  background-color: var(--neutral);
}
ul {
  list-style-type: none;
}
.service-bullet {
  margin: 20px 10px 20px 10px;
}

/* Tablet View */
@media only screen and (min-width: 800px) and (max-width: 1022px) {
  #services-header-container {
    max-width: 85vw;
  }
}

/* Desktop View */
@media only screen and (min-width: 1023px) {
  #services {
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #services-header-container {
    max-width: 1100px;
  }
}
</style>