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
  name: "portfolio-section",
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
        "ReactJS",
        "MySQL",
      ],
      portfolioItems: [
        {
          id: "1",
          title: "Anime Threes List",
          client: "Personal",
          // link: "https://threes.codyuhi.me",
          codeLink: "https://github.com/codyuhi/threes",
          imgUrl: this.getImageUrl("/src/assets/threes.png"),
          tags: [
            "Web Frontend",
            "Web Backend",
            "ReactJS",
            "Python3",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
          ],
          date: "December, 2021",
          description:
            "A full-stack web application built with ReactJS, Python3/Flask, and MySQL that gives users the ability to showcase their tastes in Anime in an easy-to-digest 3x3 grid.  Users can login, create lists, export those lists, and share lists with friends from their profile.",
        },
        {
          id: "2",
          title: "Portfolio Website",
          client: "Personal",
          link: "https://codyuhi.github.io",
          codeLink: "https://github.com/codyuhi/portfolio",
          imgUrl: this.getImageUrl("/src/assets/portfolio.png"),
          tags: ["Web Frontend", "VueJS", "HTML", "CSS", "JavaScript"],
          date: "September, 2021",
          description:
            "A frontend web application built in VueJS that is used to showcase my personal projects and work experience.  The portfolio features my UI design and photo editing work as well as my frontend word development.",
        },
        {
          id: "3",
          title: "Quality Of Life",
          client: "Brigham Young University - College of Mathematics",
          link: "https://quality.codyuhi.me",
          codeLink: "https://github.com/codyuhi/quality-of-life",
          imgUrl: this.getImageUrl("/src/assets/quality-of-life.png"),
          tags: ["Web Frontend", "HTML", "CSS", "JavaScript", "ReactJS"],
          date: "January, 2021",
          description:
            "A frontend web application built in React that uses the publicly available Teleport RESTful API.  This application allows users to gain information regarding any city's quality of life in order to compare ratings and determine which city they would most like to relocate to.  This application has a React version and a HTML, CSS, and JS version.",
        },
        {
          id: "4",
          title: "Blog Website",
          client: "Personal",
          // link: "https://blog2.codyuhi.me",
          codeLink: "https://github.com/codyuhi/blog",
          imgUrl: this.getImageUrl("/src/assets/blog.png"),
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
          id: "5",
          title: "Online Market",
          client: "Brigham Young University - College of Engineering",
          link: null,
          codeLink: "https://github.com/codyuhi/online-market",
          imgUrl: this.getImageUrl("/src/assets/online-marketplace.png"),
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
          id: "6",
          title: "Family Map",
          client: "Brigham Young University - College of Mathematics",
          link: null,
          codeLink: "https://github.com/codyuhi/family-map",
          imgUrl: this.getImageUrl("/src/assets/family-map.png"),
          tags: ["Mobile Frontend", "Web Backend", "Java", "SQLite"],
          date: "August, 2020",
          description:
            "A full-stack mobile application built with Java on both the frontend and the backend.  This application allows users to track their family history on a map of the world, marking locations of where the users' ancestors had significant life events (such as birth, marriage, and death).",
        },
        {
          id: "7",
          title: "Net-App",
          client: "Brigham Young University - College of Engineering",
          link: null,
          codeLink: "https://github.com/codyuhi/net-app",
          imgUrl: this.getImageUrl("/src/assets/net-app.jpg"),
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
          id: "8",
          title: "Game Deals",
          client: "Brigham Young University - College of Engineering",
          // link: "https://games.codyuhi.me/",
          codeLink: "https://github.com/codyuhi/game-deals",
          imgUrl: this.getImageUrl("/src/assets/game-deals.png"),
          tags: ["Web Frontend", "VueJS", "HTML", "CSS", "JavaScript"],
          date: "April, 2021",
          description:
            "A frontend web application built with VueJS that uses the publicly available CheapShark RESTful API.  This application allows users to search for games to determine what the cheapest price for the game is across many online vendors' websites.",
        },
        {
          id: "9",
          title: "Kashti 2.0",
          client: "Microsoft",
          link: "https://brigade.sh/",
          codeLink: "https://github.com/codyuhi/kashti-uhi",
          imgUrl: this.getImageUrl("/src/assets/kashti.png"),
          tags: [
            "Web Frontend",
            "AngularJS",
            "Web Backend",
            "TypeScript",
            "HTML",
            "CSS",
            "JavaScript",
          ],
          date: "April, 2021",
          description:
            "A frontend web UI built with Angular that uses the Microsoft-sponsored open-source Brigade platform.  Brigade is a event-driven scripting platform for Kubernetes that allows users to tie arbitrary events with desired tasks. This project was sponsored by Microsoft.",
        },
        {
          id: "10",
          title: "Weather",
          client: "Brigham Young University - College of Mathematics",
          // link: "https://weather.codyuhi.me",
          codeLink: "https://github.com/codyuhi/weather",
          imgUrl: this.getImageUrl("/src/assets/weather.png"),
          tags: ["Web Frontend", "HTML", "CSS", "JavaScript"],
          date: "January, 2021",
          description:
            "A frontend web application built with vanilla JS, HTML, and CSS that uses the publicly available OpenWeatherMap API.  This application allows users to search the name of a city and view the current weather/forecast for that city.",
        },
        {
          id: "11",
          title: "Desk Setup",
          client: "Brigham Young University - College of Mathematics",
          // link: "https://desk.codyuhi.me",
          codeLink: "https://github.com/codyuhi/desk-setup",
          imgUrl: this.getImageUrl("/src/assets/desk.png"),
          tags: ["Web Frontend", "HTML", "CSS", "JavaScript"],
          date: "January, 2021",
          description:
            "A frontend web application built with vanilla JS, HTML, and CSS.  This application is an exhibition of my web design and frontend coding capabilities.",
        },
        {
          id: "12",
          title: "Uhi Photo Spot",
          client: "Brigham Young University - College of Mathematics",
          // link: "http://codyuhi.me/",
          codeLink: "https://github.com/codyuhi/uhi-photo-spot",
          imgUrl: this.getImageUrl("/src/assets/photos.png"),
          tags: ["Web Frontend", "HTML", "CSS", "JavaScript"],
          date: "January, 2021",
          description:
            "A frontend web application built with vanilla JS, HTML, and CSS.  This application exhibits some of the best artistic photos that I've taken.",
        },
        {
          id: "13",
          title: "Pokedex",
          client: "Brigham Young University - College of Engineering",
          link: null,
          codeLink: "https://github.com/codyuhi/pokedex",
          imgUrl: this.getImageUrl("/src/assets/pokedex.jpg"),
          tags: ["Mobile Frontend", "Java"],
          date: "August, 2020",
          description:
            "A frontend mobile application built with Java that uses the publicly available PokeAPI RESTful API, Google Cloud Vision, and the Asana RESTful API.  This application allows you to search for any pokemon and get basic stats about the pokemon.  The application also allows users to scan the name of a Pokemon with their phone's camera to pull up its Pokedex entry.",
        },
        {
          id: "14",
          title: "Detect Deepfake",
          client: "Utah State University - Data Science Program",
          link: null,
          codeLink: "https://github.com/codyuhi/hackusu",
          imgUrl: this.getImageUrl("/src/assets/detect-deepfake.png"),
          tags: [
            "Machine Learning",
            "Python3",
            "TensorFlow",
            "HTML",
            "CSS",
            "JavaScript",
          ],
          date: "November, 2020",
          description:
            "A full-stack web application built with vanilla JS, HTML, CSS, Python, and Tensorflow.  This application allows users to upload an image to determine if the image was generated using deep fake AI.  The application won the Data Science category at Utah State University's HackUSU 2020 hackathon.",
        },
        {
          id: "15",
          title: "Whereabouts",
          client: "University of Utah - School of Computing",
          link: null,
          codeLink: "https://github.com/codyuhi/whereabouts",
          imgUrl: this.getImageUrl("/src/assets/whereabouts.jpg"),
          tags: ["Mobile Frontend", "Java"],
          date: "September, 2020",
          description:
            "A frontend mobile application built with Java and Google's Vision API. This application allows users to point their camera at any text and the text will automatically pull up the text in Google maps or in a browser if the text is determined to be a physical or web address.",
        },
        {
          id: "16",
          title: "Eureka Trail",
          client: "Brigham Young University - College of Engineering",
          link: "https://theeurekatrail.com/",
          codeLink: null,
          imgUrl: this.getImageUrl("/src/assets/eureka-trail.png"),
          tags: ["Mobile Frontend", "Flutter", "PostgreSQL"],
          date: "December, 2020",
          description:
            "A full-stack mobile application built with Flutter, Firebase, Python, and PostgreSQL.  This application gamifies fitness by tracking a user's walking activity and providing incentives for users to meet walking milestones.",
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
    getImageUrl(imageName) {
      console.log(imageName);
      return new URL(imageName, import.meta.url).href;
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
  border-radius: 1.5%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
