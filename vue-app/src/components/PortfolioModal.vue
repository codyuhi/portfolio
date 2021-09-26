<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-on:click="destroyModal()">
      <div class="modal" v-on:click.stop>
        <img v-if="item.imgUrl" :src="item.imgUrl" class="modal-img" />
        <div class="modal-text">
          <div class="modal-stats">
            <h3>Project Information</h3>
            <hr />
            <p v-if="item.title">
              <span class="bold">Project Title: </span> {{ item.title }}
            </p>
            <p v-if="item.tags.length > 0">
              <span class="bold">Categories: </span>
              <span v-for="tag in item.tags" :key="tag">{{ tag }}, </span>
            </p>
            <p v-if="item.client">
              <span class="bold">Client: </span> {{ item.client }}
            </p>
            <p v-if="item.date">
              <span class="bold">Project date: </span> {{ item.date }}
            </p>
            <p v-if="item.link">
              <span class="bold">Project URL: </span> {{ item.link }}
            </p>
            <p v-if="item.codeLink">
              <span class="bold">Code URL: </span>
              <a :href="item.codeLink">{{ item.codeLink }}</a>
            </p>
          </div>
          <div class="modal-description">
            <h2>{{ item.title }}</h2>
            <p v-if="item.description">
              <em>{{ item.description }}</em>
            </p>
            <p v-else>
              <em>(No Description Available)</em>
            </p>
          </div>
        </div>
        <button type="button" class="btn-close" @click="destroyModal()">
          X
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PortfolioModal",
  props: {
    item: Object,
  },
  methods: {
    destroyModal() {
      this.$emit("destroyModal", null);
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
  color: var(--darkest);
}

.modal {
  background: var(--lightest);
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 50px;
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
}

.modal > img,
.modal > div {
  flex: 1;
}

.bold {
  font-weight: bold;
}

hr {
  margin: 15px 0 15px 0;
  color: var(--dark);
  border: 1px solid var(--dark);
  width: 150px;
}

.modal-stats {
  padding: 30px;
  box-shadow: 0 0 30px rgb(69 80 91 / 8%);
  margin-bottom: 30px;
}

.modal-stats > p {
  margin: 15px 0 15px 0;
}

.modal-description > h2 {
  margin-bottom: 15px;
}

a {
  color: var(--dark);
  font-weight: bold;
}

.btn-close {
  position: absolute;
  top: 5px;
  right: 15px;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: var(--dark);
  background: transparent;
}

.modal-img {
  display: flex;
  flex: 1;
  max-width: 80vw;
  height: auto;
}

@media only screen and (min-width: 1020px) {
  .modal {
    max-width: 70vw;
  }
  .modal-text {
    max-width: 40vw;
  }
  .modal-img {
    max-width: 40vw;
    max-height: 80vh;
    margin-right: 50px;
  }
}

@media only screen and (min-width: 1800px) {
  .modal {
    max-width: 1800px;
  }
}
</style>