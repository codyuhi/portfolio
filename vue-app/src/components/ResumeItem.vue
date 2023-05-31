<template>
    <div class="resume-item">
      <h4 class="resume-item-title">{{ item.name }}</h4>
      <p v-if="item.startTime" class="resume-years">
        {{ item.startTime }} - {{ item.endTime }}
      </p>
      <p v-if="item.location" class="resume-location">
        <em>{{ item.location }}</em>
      </p>
      <p v-if="item.summary" class="resume-summary">
        <em>{{ item.summary }}</em>
      </p>
      <ul class="resume-bullet-list">
        <li
          v-for="bullet in item.bullets"
          v-bind:key="bullet.id"
          class="resume-bullet"
        >
          {{ bullet.value }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ResumeItem",
    props: {
      item: Object,
    },
  };
  </script>
  
  <style scoped>
  h4 {
    line-height: 18px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: var(--dark);
  }
  .resume-item {
    margin: 0 0 25px 0;
    padding: 0 0 0 12px;
    border-left: 1px solid rgb(0, 0, 0, 0.5);
  }
  .resume-location,
  .resume-summary,
  .resume-bullet {
      margin: 0 15px 10px 0;
  }
  .resume-bullet-list {
      margin-left: 20px;
  }
  </style>
  