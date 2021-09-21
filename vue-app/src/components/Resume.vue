<template>
  <div id="resume-container" class="section">
    <!-- Inspired by the Personal template -->
    <div id="resume">
      <div id="resume-header-container">
        <h2>Comprehensive Resume</h2>
        <hr />
        <a
          href="https://github.com/codyuhi/career-development/raw/master/Cody%20Uhi%20Resume%20Spring%202021.pdf"
          >Click Here</a
        >
        to download a concise version of my resume.
      </div>
      <div id="resume-section-container-holder">
        <div
          v-for="item in resumeItems"
          v-bind:key="item.title"
          class="resume-section-container"
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
            <ul class="resume-item-list">
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
              name: "Cody Uhi",
              startTime: null,
              endTime: null,
              location: "Lehi, UT",
              summary:
                "Innovative and driven Software Engineer with 4+ years of experience developing user-centered technological solutions from initial concept to final, polished deliverable.",
              bullets: [
                {
                  id: "sum1",
                  value:
                    "TypeScript/JavaScript (Vue, Angular, React, NodeJS), Python (LinkedIn Certified), Java, C++ (LinkedIn Certified), Flutter",
                },
                {
                  id: "sum2",
                  value:
                    "AWS (LinkedIn Certified), Azure, GCP, TensorFlow, Windows AD, Linux, VMWare, Git, SalesForce, Jira, Selenium, Mocha & Chai, Salt",
                },
              ],
            },
          ],
        },
        {
          title: "Current Work Experience",
          items: [
            {
              name: "Site Reliability Engineer",
              startTime: "2021",
              endTime: "Present",
              location: "Vivint Smart Home - Lehi, UT",
              summary:
                "Site Reliability Engineering (SRE) combines software and systems engineering to build and run large-scale, massively distributed, fault-tolerant systems. SRE ensures that a company's services have reliability, uptime appropriate to users' needs and a fast rate of improvement. Additionally SRE’s will keep an ever-watchful eye on our systems capacity and performance. Much of an SRE's software development focuses on optimizing existing systems, building infrastructure and eliminating work through automation.",
              bullets: [
                {
                  id: "sre1",
                  value:
                    "Develop tools and automate solutions to support on-premises and cloud services",
                },
                {
                  id: "sre2",
                  value:
                    "Support the Engineering team's efforts via configuration and monitoring of real-time alerting systems",
                },
                {
                  id: "sre3",
                  value:
                    "Guide products to Production Readiness (scalability, observability, operability, resiliency, etc.)",
                },
                {
                  id: "sre4",
                  value:
                    "Utilize system & state management tools such as Salt, Chef, and Puppet to administor over 700 virtual machines",
                },
              ],
            },
            {
              name: "25U - Signal Support System Specialist",
              startTime: "2016",
              endTime: "Present",
              location: "US Army Reserve - Salt Lake City, UT",
              summary:
                "The Army relies on signal support systems and terminal devices to direct the movement of troops during combat. They are on the offensive, detecting enemy signals and jamming enemy radio transmissions. They also work defensively to make sure everyone in the Army is remaining in contact while troops are mobilized.",
              bullets: [
                {
                  id: "25u1",
                  value: "Maintain radio and data distrbution systems",
                },
                {
                  id: "25u2",
                  value:
                    "Perform signal support functions and technical assistance",
                },
                {
                  id: "25u3",
                  value:
                    "Maintain equipment, terminal devices, assigned vehicles, and power generators",
                },
                {
                  id: "25u4",
                  value:
                    "Provide technical assistance and training for local area networks",
                },
              ],
            },
          ],
        },
        {
          title: "Education",
          items: [
            {
              name: "BS Information Technology & Computer Science",
              startTime: "2016",
              endTime: "2021",
              location: "Brigham Young University - Provo, UT",
              summary:
                "The IT program at BYU is among the leading programs in the nation, with faculty who have helped define this exciting and growing field. BYU students take a range of experiential learning courses emphasizing technical excellence, hands-on experience, and problem solving in a rigorous, yet intimate and collegial atmosphere.",
              bullets: [
                {
                  id: "edu1",
                  value: "BYU IT Student Association - Vice President",
                },
                { id: "edu2", value: "BYU Developer Club - Member" },
                {
                  id: "edu2",
                  value: "BYU Cybersecurity Student Association - Member",
                },
                {
                  id: "edu3",
                  value: "University of Utah's HackTheU 2019 - Participant",
                },
                {
                  id: "edu4",
                  value:
                    "Utah State University's HackUSU 2020 - Data Science Award Winner",
                },
                {
                  id: "edu5",
                  value: "Capstone Project Sponsored by Microsoft",
                },
                {
                  id: "edu6",
                  value:
                    "Flutter Developer for the Eureka Trail fitness application",
                },
              ],
            },
          ],
        },

        {
          title: "Previous Work Experience",
          items: [
            {
              name: "Software QA Engineer",
              startTime: "2020",
              endTime: "2021",
              location: "Vivint Smart Home - Lehi, UT",
              summary:
                "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
              bullets: [
                { id: "sqa1", value: "test1" },
                { id: "sqa2", value: "test2" },
                { id: "sqa3", value: "test3" },
              ],
            },
            {
              name: "Sr. Lead, Technology / Web Developer",
              startTime: "2015",
              endTime: "2020",
              location: "Vivint Smart Home - Provo, UT",
              summary:
                "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
              bullets: [
                { id: "tech1", value: "test1" },
                { id: "tech2", value: "test2" },
                { id: "tech3", value: "test3" },
              ],
            },
            {
              name: "Full-Stack Software Engineer - Intern",
              startTime: "2020",
              endTime: "2020",
              location: "Instructure - Salt Lake City, UT",
              summary:
                "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
              bullets: [
                { id: "inst1", value: "test1" },
                { id: "inst2", value: "test2" },
                { id: "inst3", value: "test3" },
              ],
            },
            {
              name: "Cloud Architecture / Data Science Research Assistant",
              startTime: "2019",
              endTime: "2020",
              location: "Brigham Young University - Provo, UT",
              summary:
                "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
              bullets: [
                { id: "cloud1", value: "test1" },
                { id: "cloud2", value: "test2" },
                { id: "cloud3", value: "test3" },
              ],
            },
            {
              name: "Cyber Operations Officer - Intern",
              startTime: "2019",
              endTime: "2019",
              location: "US Government - Washington, D.C.",
              summary:
                "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
              bullets: [
                { id: "cyb1", value: "test1" },
                { id: "cyb2", value: "test2" },
                { id: "cyb3", value: "test3" },
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
#resume-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 50px 50px 50px;
  padding: 75px 0 75px 0;
}
#resume {
  width: 100vw;
  color: var(--darkest);
}
#resume-header-container {
  margin: 0 0 25px 0;
}
#resume-section-container-holder {
  display: flex;
  flex-direction: column;
}
h2 {
  font-size: 35px;
}
h3 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}
h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: var(--dark);
}
hr {
  margin: 15px 0 15px 0;
  color: var(--dark);
  border: 1px solid var(--dark);
  width: 150px;
}
a {
  text-decoration: none;
  color: var(--dark);
}
.resume-section-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.resume-item {
  margin: 0 0 25px 0;
  padding-left: 12px;
  border-left: 1px solid rgb(0, 0, 0, 0.5);
}
.resume-years {
  margin-bottom: 10px;
  background-color: rgb(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 2.5%;
  font-weight: bold;
  color: var(--lightest);
  width: fit-content;
}
.resume-item-location,
.resume-item-summary,
.resume-item-bullet {
  margin-bottom: 10px;
}
.resume-item-list {
  margin-left: 20px;
}

/* Desktop View */
@media only screen and (min-width: 800px) {
  #resume-container {
    margin: 0 75px 75px 75px;
    padding: 100px 0 70px 0;
  }
  #resume {
    max-width: 1370px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  #resume-section-container-holder {
    flex-wrap: wrap;
    height: 1750px;
    width: 100%;
    max-width: 100vw;
  }
  .resume-section-container {
    width: 38vw;
    min-width: 475px;
    max-width: 680px;
  }
}
</style>