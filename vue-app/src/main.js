import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faObjectGroup,
  faCode,
  faChainBroken,
  faCodeFork,
  faCloud,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faObjectGroup);
library.add(faCode);
library.add(faChainBroken);
library.add(faCodeFork);
library.add(faCloud);
library.add(faLightbulb)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
