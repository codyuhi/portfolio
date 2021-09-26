<template>
  <div id="portfolio-container" class="section">
    <!-- Inspired by the Personal template -->
    <div id="portfolio">
      <div id="portfolio-header-container">
        <div id="portfolio-header">
          <h2>Portfolio</h2>
          <hr />
        </div>
        <p><em>Click a project for more information</em></p>
      </div>
      <div id="portfolio-tags-container">
        <select class="form-control" @change="filter($event)">
          <option value="" selected disabled>Filter Projects By Type</option>
          <option v-for="tag in tags" :value="tag" :key="tag">{{ tag }}</option>
        </select>
      </div>
      <!-- Will work on transitions later on after MVP is proven -->
      <!-- <transition-group id="portfolio-tiles-container" name="fade" tag="div"> -->
      <div id="portfolio-tiles-container">
        <div
          v-for="item in activeItems"
          v-bind:key="item.id"
          class="portfolio-tile"
          v-on:click="openModal(item)"
          :style="{ backgroundImage: `url(${item.imgUrl})` }"
        >
          <h4 class="portfolio-tile-title">
            {{ item.title }}
          </h4>
        </div>
      </div>
      <!-- </transition-group> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      showModal: false,
      modalItem: null,
      activeTag: null,
      activeItems: [],
      tags: [
        "All",
        "AngularJS",
        "CSS",
        "Docker",
        "Flutter",
        "HTML",
        "Java",
        "JavaScript",
        "Machine Learning",
        "Mobile Frontend",
        "MongoDB",
        "NodeJS",
        "PostgreSQL",
        "Python3",
        "TensorFlow",
        "TypeScript",
        "VueJS",
        "Web Backend",
        "Web Frontend",
      ],
      portfolioItems: [
        {
          id: "1",
          title: "Portfolio Website",
          link: "https://codyuhi.github.io",
          codeLink: "https://github.com/codyuhi/portfolio",
          imgUrl: require("@/assets/portfolio.png"),
          tags: ["Web Frontend", "VueJS", "HTML", "CSS", "JavaScript"],
          date: "September, 2021",
          description:
            "A frontend web application built in VueJS that is used to showcase my personal projects and work experience.  The portfolio features my UI design and photo editing work as well as my frontend word development.",
        },
        {
          id: "2",
          title: "Blog Website",
          link: "https://blog.codyuhi.me",
          codeLink: "https://github.com/codyuhi/blog",
          imgUrl: require("@/assets/blog.png"),
          tags: [
            "Web Frontend",
            "Web Backend",
            "VueJS",
            "NodeJS",
            "MongoDB",
            "HTML",
            "CSS",
            "JavaScript",
          ],
          date: "April, 2021",
          description:
            "A full-stack web application built in VueJS and NodeJS that is used to archive my thoughts and things I've learned in my day-to-day life.  It uses MongoDB to store blog post data and renders those client-side dynamically based on the data taken from the backend.",
        },
        {
          id: "3",
          title: "Online Market",
          link: null,
          codeLink: "https://github.com/codyuhi/online-market",
          imgUrl: null,
          tags: [
            "Mobile Frontend",
            "Web Backend",
            "Java",
            "NodeJS",
            "MongoDB",
            "JavaScript",
          ],
          date: "August, 2020",
          description:
            "A full-stack mobile application built with NodeJS on the backend and Java on the frontend.  This application allows users to create, edit, purchase, and delete items on an online marketplace.",
        },
        {
          id: "4",
          title: "Family Map",
          link: null,
          codeLink: "https://github.com/codyuhi/family-map",
          imgUrl: require("@/assets/family-map.png"),
          tags: ["Mobile Frontend", "Web Backend", "Java", "SQLite"],
          date: "August, 2020",
          description:
            "A full-stack mobile application built with Java on both the frontend and the backend.  This application allows users to track their family history on a map of the world, marking locations of where the users' ancestors had significant life events (such as birth, marriage, and death).",
        },
        {
          id: "5",
          title: "Net-App",
          link: null,
          codeLink: "https://github.com/codyuhi/net-app",
          imgUrl: "",
          tags: [
            "Web Frontend",
            "Web Backend",
            "Docker",
            "VueJS",
            "NodeJS",
            "PostgreSQL",
            "HTML",
            "CSS",
            "JavaScript",
          ],
          date: "April, 2021",
          description:
            "A full-stack web application built with VueJS on the frontend and NodeJS on the backend.  This application allows a user to track professional networking interactions with other people and companies. It can be used to help someone on a job search to fully leverage their networking resources to land a job at a desirable company.",
        },
        {
          id: "6",
          title: "Game Deals",
          link: "https://games.codyuhi.me/",
          codeLink: "https://github.com/codyuhi/game-deals",
          imgUrl: "",
          tags: ["Web Frontend", "VueJS", "HTML", "CSS", "JavaScript"],
          date: "",
          description: "",
        },
        {
          id: "7",
          title: "Quality Of Life",
          link: "https://quality.codyuhi.me",
          codeLink: "https://github.com/codyuhi/quality-of-life",
          imgUrl: "",
          tags: ["Web Frontend", "HTML", "CSS", "JavaScript"],
          date: "",
          description: "",
        },
        {
          id: "8",
          title: "Kashti 2.0",
          link: null,
          codeLink: "https://github.com/codyuhi/kashti-uhi",
          imgUrl: "",
          tags: [
            "Web Frontend",
            "AngularJS",
            "Web Backend",
            "TypeScript",
            "HTML",
            "CSS",
            "JavaScript",
          ],
          date: "",
          description: "",
        },
        {
          id: "9",
          title: "Weather",
          link: "https://weather.codyuhi.me",
          codeLink: "https://github.com/codyuhi/weather",
          imgUrl: "",
          tags: ["Web Frontend", "HTML", "CSS", "JavaScript"],
          date: "",
          description: "",
        },
        {
          id: "10",
          title: "Desk Setup",
          link: "https://desk.codyuhi.me",
          codeLink: "https://github.com/codyuhi/desk-setup",
          imgUrl: "",
          tags: ["Web Frontend", "HTML", "CSS", "JavaScript"],
          date: "",
          description: "",
        },
        {
          id: "11",
          title: "Uhi Photo Spot",
          link: "http://codyuhi.me/",
          codeLink: "https://github.com/codyuhi/uhi-photo-spot",
          imgUrl: "",
          tags: ["Web Frontend", "HTML", "CSS", "JavaScript"],
          date: "",
          description: "",
        },
        {
          id: "12",
          title: "Pokedex",
          link: null,
          codeLink: "https://github.com/codyuhi/pokedex",
          imgUrl: "",
          tags: ["Mobile Frontend", "Java"],
          date: "",
          description: "",
        },
        {
          id: "13",
          title: "Detect Deepfake",
          link: null,
          codeLink: "https://github.com/codyuhi/hackusu",
          imgUrl: "",
          tags: ["Machine Learning", "Python3", "TensorFlow"],
          date: "",
          description: "",
        },
        {
          id: "14",
          title: "Whereabouts",
          link: null,
          codeLink: "https://github.com/codyuhi/whereabouts",
          imgUrl: "",
          tags: ["Mobile Frontend", "Java"],
          date: "",
          description: "",
        },
        {
          id: "15",
          title: "Eureka Trail",
          link: "https://theeurekatrail.com/",
          codeLink: null,
          imgUrl: "",
          tags: ["Mobile Frontend", "Flutter"],
          date: "",
          description: "",
        },
      ],
    };
  },
  methods: {
    filter(event) {
      const tag = event.target.options[event.target.options.selectedIndex].text;
      this.activeTag = tag;
      this.activeItems = [];
      if (tag === "All") {
        this.activeItems = this.portfolioItems;
        return;
      }
      this.portfolioItems.forEach((item) => {
        if (item.tags.includes(tag)) {
          this.activeItems.push(item);
        }
      });
    },
    openModal(item) {
      this.$emit("activePortfolioItem", item);
    },
  },
  mounted() {
    this.activeItems = this.portfolioItems;
  },
};
</script>

<style scoped>
#portfolio-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0 75px 0;
  background-color: var(--darkest);
}
#portfolio {
  color: var(--lightest);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 75px;
  width: 100vw;
}
#portfolio-header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#portfolio-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 0 15px;
}
hr {
  margin: 15px 10px 15px 10px;
  color: var(--light);
  border: 1px solid var(--light);
  width: 150px;
}
h2 {
  font-size: 35px;
  margin: 0 0 15px 0;
}
#portfolio-header-container > p {
  font-size: 20px;
  margin-bottom: 10px;
}
select {
  color: var(--light);
  background-color: var(--darkest);
  border: none;
  border-bottom: 1px solid var(--light);
  margin: 0 0 15px 15px;
}
option {
  color: var(--darkest);
  background-color: var(--light);
}
option:hover {
  color: var(--light);
  background-color: var(--darkest);
}
#portfolio-tiles-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
.portfolio-tile {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 15px;
  width: 400px;
  height: 250px;
  max-width: 85vw;
  border: 1px solid var(--light);
  border-radius: 1.5%;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.portfolio-tile:hover {
  cursor: pointer;
  backdrop-filter: blur(4px);
}
.portfolio-tile:hover > h4.portfolio-tile-title {
  font-size: 20px;
}
.portfolio-tile-title {
  padding: 10px;
  background-color: rgb(0, 0, 0, 0.75);
  border-radius: 1.5%;
  transition: all 0.25s ease-in-out;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  transition: all 0.5s;
  opacity: 0;
}
.fade-enter-active {
  transition-delay: 0.5s;
}

#portfolio-header {
  flex-direction: column;
}

@media only screen and (min-width: 900px) {
  .portfolio-tile {
    max-width: 300px;
  }
}

/* Desktop View */
@media only screen and (min-width: 1030px) {
  #portfolio {
    max-width: 1370px;
  }
}
</style>