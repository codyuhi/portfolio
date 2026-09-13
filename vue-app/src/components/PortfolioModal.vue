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
              <span v-for="(tag, index) in item.tags" :key="tag"
                >{{ tag
                }}<span v-if="index != Object.keys(item.tags).length - 1"
                  >,
                </span></span
              >
            </p>
            <p v-if="item.client">
              <span class="bold">Client: </span> {{ item.client }}
            </p>
            <p v-if="item.date">
              <span class="bold">Project date: </span> {{ item.date }}
            </p>
            <p v-if="item.link">
              <span class="bold">Project URL: </span>
              <a :href="item.link">{{ item.link }}</a>
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
  name: "portfolio-modal",
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 1.25rem;
  position: relative;
  max-width: 92vw;
  max-height: 88dvh;
  border-radius: 16px;
  gap: 1.5rem;
}

.modal > img,
.modal > div {
  flex: 1;
  min-width: min(100%, 300px);
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
  padding: 1.25rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 1.25rem;
}

.modal-stats > p {
  margin: 10px 0;
  word-break: break-word;
}

.modal-description > h2 {
  margin-bottom: 12px;
  font-size: clamp(1.4rem, 4vw, 24px);
}

a {
  color: var(--dark);
  font-weight: bold;
  word-break: break-all;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  font-size: 20px;
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  color: var(--darkest);
  background: rgba(0, 0, 0, 0.06);
  touch-action: manipulation;
  z-index: 10;
}

.btn-close:active {
  background: rgba(0, 0, 0, 0.15);
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
