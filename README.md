# Cody Uhi's Professional Portfolio

## Summary

This repository holds the VueJS code that creates my professional portfolio website. As a software engineer in the tech industry, having a professional portfolio website is an important part of defining who I am as a professional and technologist.

_See [https://codyuhi.github.io](https://codyuhi.github.io)_

## Porfolio Content

### About

My mission is to use technology to bring humanity into the future. I learn something new every day. I innovate to find new ways to solve old problems. I build technology solutions that make the world a better place. I believe that techie people have a responsibility to use their skills to lift the lives of others, and I stand by that code.

### Experience

- Site Reliability Engineer @ Activision Blizzard - Irvine, CA (2022 - Present)
  - Be an integral part of the team modernizing the Battle.net Online Platform
  - Participate in on-call rotation with other members of the Site Reliability Engineering team
  - Provide guidance as well as hands-on support for designing, building, and supporting the development pipeline
  - Automate infrastructure and operations
  - Create telemetry for monitoring
  - Engineer for high reliability
  - Evangelize engineering best practices
- Site Reliability Engineer @ Vivint Smart Home - Lehi, UT (2021 - 2022)
  - Develop tools and automate solutions to support on-premises and cloud services
  - Support the Engineering team's efforts via configuration and monitoring of real-time alerting systems
  - Guide products to Production Readiness (scalability, observability, operability, resiliency, etc.)
  - Utilize system & state management tools such as Salt, Chef, and Puppet to administer over 700 virtual machines
- Software QA Engineer @ Vivint Smart Home - Lehi, UT (2020 - 2021)
  - Create detailed, comprehensive, and well-structured test plans and test cases (both manual and automated)
  - Estimate, prioritize, plan, and coordinate testing activities
  - Execute regression test runs
  - Play an integral role in the Agile software development life cycle
- Full-Stack Software Engineer Intern @ Instructure - Salt Lake City, UT (2020 - 2020)
  - Construct production-ready, full-stack code using a Ruby/Rails backend and React frontend
  - Work jointly with an R&D team using Shape Up software development methodologies
  - Contribute to the development cycle from the design phase to QA/testing and deployment
- Sr. Lead, Technology / Web Developer @ Vivint Smart Home - Provo, UT (2015 - 2020)
  - Collaborate across development teams to streamline ticket management
  - Analyze data produced by in-house technicians to drive efficiency and inform best practice
  - Design web scraping/survey tools using Python, JavaScript, jQuery, HTML, and CSS
  - Develop Python and Bash scripts to perform data analysis
- Crisis Informatics Research Assistant @ Brigham Young University - Provo, UT (2019 - 2020)
  - Build cloud infrastructure with AWS to support BYU's Crisis Informatics research platform
  - Scrape and analyze large social media datasets using Network Analysis, Topic Modeling, Sentiment Analysis, Geocoding, Time and Keywords, etc.
  - Implement Machine Learning models to deploy research API at scale (Python, Jupyter, Tensorflow)
- Cyber Operations Officer Intern @ US Government - Washington DC (2019 - 2019)
  - Support the design and testing of office internet networks. Create documentation related to project implementations. Coordinate and engage with inter-office components
  - Perform cyber analysis, technical research, and investigations for digital signatures, web technologies, and social media

## Repository Contents

This repo holds a few different versions of my professional portfolio. I created a HTML/CSS/JavaScript-only web page a few years ago for my portfolio, which is included here only for archival purposes. More recently, I created a VueJS version of the web page which is used to build the live site at https://codyuhi.github.io.

- `favicon_io`: This directory holds image assets that support my personal branding that I edited for my professional portfolio. These image assets can be imported into other projects to keeep branding consistency.
- `html-app`: This directory holds the HTML/CSS/JS-only web page that I created years ago (outdated). It is included here only for archival purposes.
- `vue-app`: This directory holds the VueJS app that currently appears at the live portfolio site. Any updates to the portfolio will require changes to this directory.

### How to run the app (HTML/CSS/JS-ONLY)

Prerequisites:

- A running web server (alternatively you can use the http-server npm package, as shown in the instructions below)

1. Put the `html-app` in a location where your web server can host its content (i.e. - `/var/www/`). If you have the `http-server` npm package installed globally, this means you can just leave the clone where it is
2. Start up your web server. With `http-server`, this means navigate to the `html-app` directory and run `http-server`
3. Verify the web server is hosting the application properly in your browser

### How to run the app (VueJS Local Dev)

Prerequisites:

- Node.js and VueJS installed
- Yarn installed

1. Navigate to the root directory of the vue-app

```
cd vue-app
```

2. Install yarn dependencies

```
yarn install
```

3. Run the Vue app using yarn

```
yarn serve
```

4. Verify in-browser that the VueJS app is available. See the terminal output to know which HTTP port to use

### How to deploy the app (VueJS live site)

Prerequisites:

- A running web server
- Node.js and VueJS installed
- Yarn installed

1. Navigate to the root directory of the vue-app

```
cd vue-app
```

2. Install yarn dependencies

```
yarn install
```

3. Build the VueJS app into a deploy-ready build

```
yarn build
```

4. Copy the contents of the `dist` directory that is generated by the previous step into the location where it can be used by your web server to be hosted for users

### Site Inspirations

_The following links are for portolfio pages with designs that I was inspired by_

- [Albino Tonnina](http://www.albinotonnina.com/)
- [Joshua McCartney](https://www.joshuamccartney.com/)
- [Jim Ramsden](https://jimramsden.com/#)
- [Sarah Chang](http://www.sarahlichang.com/work)
- [Kristi Hines](https://kristihines.com/)
- [Brandon Johnson](http://brandoncjohnson.com/)
- [Pascal Vangemert](http://www.pascalvangemert.nl/)
- [Gary Sheng](http://www.garysheng.com/)