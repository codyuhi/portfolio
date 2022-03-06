<template>
  <div id="resume-container" class="section">
    <!-- Inspired by the Personal template -->
    <div id="resume">
      <div id="resume-header-container">
        <h2>Comprehensive Resume</h2>
        <hr />
        <a
          href="https://github.com/codyuhi/career-development/raw/master/Cody%20Uhi%20Resume%20Spring%202022.pdf"
          >Click Here</a
        >
        to download a concise version of my resume.
      </div>
      <div id="resume-column-container">
        <div class="resume-column">
          <div class="resume-section">
            <h3 class="resume-section-title">{{ summary.title }}</h3>
            <div
              v-for="item in summary.items"
              v-bind:key="item.name"
              id="summary-container"
            >
              <ResumeItem :item="item" />
            </div>
          </div>
          <div class="resume-section">
            <h3 class="resume-section-title">
              {{ currentWorkExperience.title }}
            </h3>
            <div
              v-for="item in currentWorkExperience.items"
              v-bind:key="item.name"
              id="current-work-experience-container"
            >
              <ResumeItem :item="item" />
            </div>
          </div>
          <div class="resume-section">
            <h3 class="resume-section-title">{{ education.title }}</h3>
            <div
              v-for="item in education.items"
              v-bind:key="item.name"
              id="education-container"
            >
              <ResumeItem :item="item" />
            </div>
          </div>
          <div class="resume-section" id="resume-img-container">
            <img src="../assets/activision-blizzard.png" id="resume-img" />
          </div>
        </div>
        <div class="resume-column">
          <div class="resume-section">
            <h3 class="resume-section-title">
              {{ previousWorkExperience.title }}
            </h3>
            <div
              v-for="item in previousWorkExperience.items"
              v-bind:key="item.name"
              id="previous-work-experience-container"
            >
              <ResumeItem :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResumeItem from "./ResumeItem.vue";
export default {
  name: "Resume",
  components: {
    ResumeItem,
  },
  data() {
    return {
      summary: {
        title: "Summary",
        items: [
          {
            name: "Cody Uhi",
            startTime: null,
            endTime: null,
            location: "Lehi, UT",
            summary:
              "Innovative and driven Software Engineer with 5+ years of experience developing user-centered technological solutions from initial concept to a final, polished deliverable.",
            bullets: [
              {
                id: "sum1",
                value:
                  "TypeScript/JavaScript (Vue, Angular, React, NodeJS), Python (LinkedIn Certified), Java, C++ (LinkedIn Certified), Flutter",
              },
              {
                id: "sum2",
                value:
                  "Docker, Kubernetes, Jenkins, ArgoCD, AWS (LinkedIn Certified), Azure, GCP, TensorFlow, Windows AD, Linux, VMWare, Git, SalesForce, Jira, Selenium, Mocha & Chai, Salt",
              },
            ],
          },
        ],
      },
      currentWorkExperience: {
        title: "Current Work Experience",
        items: [
          {
            name: "Site Reliability Engineer",
            startTime: "2022",
            endTime: "Present",
            location: "Activision Blizzard - Irvine, CA",
            summary:
              "Site Reliability Engineering (SRE) combines software and systems engineering to build and run large-scale, massively distributed, fault-tolerant systems. SRE ensures that a company's services have reliability, uptime appropriate to users' needs, and a fast rate of improvement. Additionally SRE’s will keep an ever-watchful eye on the capacity and performance of our system. Much of an SRE's software development focuses on optimizing existing systems, building infrastructure, and eliminating work through automation.",
            bullets: [
              {
                id: "bsre1",
                value:
                  "Be an integral part of the team modernizing the Battle.net Online Platform",
              },
              {
                id: "bsre2",
                value:
                  "Participate in on-call rotation with other members of the Site Reliability Engineering team",
              },
              {
                id: "bsre3",
                value:
                  "Provide guidance as well as hands-on support for designing, building, and supporting the development pipeline",
              },
              {
                id: "bsre4",
                value: "Automate infrastructure and operations",
              },
              {
                id: "bsre5",
                value: "Create telemetry for monitoring",
              },
              {
                id: "bsre6",
                value: "Engineer for high reliability",
              },
              {
                id: "bsre7",
                value: "Evangelize engineering best practices",
              },
            ],
          },
        ],
      },
      education: {
        title: "Education",
        items: [
          {
            name: "BS Information Technology & Computer Science",
            startTime: "2016",
            endTime: "2021",
            location: "Brigham Young University - Provo, UT",
            summary:
              "The IT program at BYU is among the leading programs in the nation, with faculty who have helped define this exciting and growing field. BYU students take a range of experiential learning courses emphasizing technical excellence, hands-on experience, and problem-solving in a rigorous, yet intimate and collegial atmosphere.",
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
      previousWorkExperience: {
        title: "Previous Work Experience",
        items: [
          {
            name: "Site Reliability Engineer",
            startTime: "2021",
            endTime: "2022",
            location: "Vivint Smart Home - Lehi, UT",
            summary: "",
            bullets: [
              {
                id: "vsre1",
                value:
                  "Develop tools and automate solutions to support on-premises and cloud services",
              },
              {
                id: "vsre2",
                value:
                  "Support the Engineering team's efforts via configuration and monitoring of real-time alerting systems",
              },
              {
                id: "vsre3",
                value:
                  "Guide products to Production Readiness (scalability, observability, operability, resiliency, etc.)",
              },
              {
                id: "vsre4",
                value:
                  "Utilize system & state management tools such as Salt, Chef, and Puppet to administer over 700 virtual machines",
              },
            ],
          },
          {
            name: "Software QA Engineer",
            startTime: "2020",
            endTime: "2021",
            location: "Vivint Smart Home - Lehi, UT",
            summary:
              "QA Engineers on full-stack mobile application teams provide value to their Agile teams by ensuring that the application and platform's functionality is not compromised by any problems in a release. The tested mobile application allowed in-house field technicians to perform and document their work using iOS devices.",
            bullets: [
              {
                id: "sqa1",
                value:
                  "Create detailed, comprehensive, and well-structured test plans and test cases (both manual and automated)",
              },
              {
                id: "sqa2",
                value:
                  "Estimate, prioritize, plan, and coordinate testing activities",
              },
              { id: "sqa3", value: "Execute regression test runs" },
              {
                id: "sqa4",
                value:
                  "Play an integral role in the Agile software development life cycle",
              },
            ],
          },
          {
            name: "Full-Stack Software Engineer - Intern",
            startTime: "2020",
            endTime: "2020",
            location: "Instructure - Salt Lake City, UT",
            summary:
              "Instructure's Full-Stack developers support Canvas and Bridge - Learning Management Systems that are used widely throughout the world in educational and professional environments.",
            bullets: [
              {
                id: "inst1",
                value:
                  "Construct production-ready, full-stack code using a Ruby/Rails backend and React frontend",
              },
              {
                id: "inst2",
                value:
                  "Work jointly with an R&D team using Shape Up software development methodologies",
              },
              {
                id: "inst3",
                value:
                  "Contribute to the development cycle from the design phase to QA/testing and deployment",
              },
            ],
          },
          {
            name: "Sr. Lead, Technology / Web Developer",
            startTime: "2015",
            endTime: "2020",
            location: "Vivint Smart Home - Provo, UT",
            summary:
              "Technology Sr. Leads assist Field Pros in troubleshooting technology solutions, tracking technology issues, and responding to technology feedback and improvement ideas. The website that the technology team supported was used by thousands of Vivint employees across the country to support their work.",
            bullets: [
              {
                id: "tech1",
                value:
                  "Collaborate across development teams to streamline ticket management",
              },
              {
                id: "tech2",
                value:
                  "Analyze data produced by in-house technicians to drive efficiency and inform best practice",
              },
              {
                id: "tech3",
                value:
                  "Design web scraping/survey tools using Python, JavaScript, jQuery, HTML, and CSS",
              },
              {
                id: "tech4",
                value:
                  "Develop Python and Bash scripts to perform data analysis",
              },
            ],
          },
          {
            name: "Cloud Architecture / Data Science Research Assistant",
            startTime: "2019",
            endTime: "2020",
            location: "Brigham Young University - Provo, UT",
            summary:
              "BYU's Crisis Informatics Lab uses the latest developments in Crisis Informatics to process data for the purpose of helping society in times of crisis. BYU's team developed a data pipeline in the cloud to stream data from social media to fund machine learning analysis.",
            bullets: [
              {
                id: "cloud1",
                value:
                  "Build cloud infrastructure with AWS to support BYU's Crisis Informatics research platform",
              },
              {
                id: "cloud2",
                value:
                  "Scrape and analyze large social media datasets using Network Analysis, Topic Modeling, Sentiment Analysis, Geocoding, Time and Keywords, etc.",
              },
              {
                id: "cloud3",
                value:
                  "Implement Machine Learning models to deploy research API at scale (Python, Jupyter, Tensorflow)",
              },
            ],
          },
          {
            name: "Cyber Operations Officer - Intern",
            startTime: "2019",
            endTime: "2019",
            location: "US Government - Washington, D.C.",
            summary: "",
            bullets: [
              {
                id: "cyb1",
                value:
                  "Support the design and testing of office internet networks. Create documentation related to project implementations. Coordinate and engage with inter-office components",
              },
              {
                id: "cyb2",
                value:
                  "Perform cyber analysis, technical research, and investigations for digital signatures, web technologies, and social media",
              },
            ],
          },
        ],
      },
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
#resume-column-container {
  display: flex;
  flex-direction: column;
}
.resume-column {
  display: flex;
  flex-direction: column;
  flex: 1;
}
h2 {
  font-size: 35px;
}
h3 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
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
.resume-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
#resume-img-container {
  display: none;
  justify-content: center;
  align-items: flex-start;
  margin: 15px;
}
#resume-img {
  width: 90%;
  max-width: 800px;
  height: auto;
}
@media only screen and (min-width: 1030px) {
  #resume-column-container {
    flex-direction: row;
  }
  #resume-img-container {
    display: flex;
  }
}
</style>
