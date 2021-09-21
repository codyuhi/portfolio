<template>
  <div id="resume-container" class="section">
    <!-- Inspired by the Personal template -->
    <div id="resume">
      <div id="resume-header-container">
        <h2>Resume</h2>
        <hr />
      </div>
      <div
        v-for="item in resumeItems"
        v-bind:key="item.title"
        class="resume-item-container"
      >
        <h3 class="resume-section-title">{{ item.title }}</h3>
        <div v-for="i in item.items" v-bind:key="i.name" class="resume-item">
          <h4 class="resume-item-title">{{ i.name }}</h4>
          <p v-if="i.startTime" class="resume-years">
            {{ i.startTime }} - {{ i.endTime }}
          </p>
          <p v-if="i.location" class="resume-item-location">
            <em>{{ i.location }}</em>
          </p>
          <p v-if="i.summary" class="resume-item-summary">
            <em>{{ i.summary }}</em>
          </p>
          <ul>
            <li
              v-for="bullet in i.bullets"
              v-bind:key="bullet.id"
              class="resume-item-bullet"
            >
              {{ bullet.value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      resumeItems: [
        {
          title: "Summary",
          items: [
            {
              name: "Test Item",
              startTime: "2013",
              endTime: "Present",
              location: "Experion, New York, NY",
              summary:
                "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
              bullets: [
                { id: "test1", value: "test1" },
                { id: "test2", value: "test2" },
                { id: "test3", value: "test3" },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
#resume {
  color: var(--darkest);
}
</style>