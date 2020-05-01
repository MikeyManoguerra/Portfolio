const portfolioData = (function loadData() {
  return {
    name: "Mikey Manoguerra",
    heading: "This site is built dynamically with vanilla javascript. It's a work in progress!",
    cta:{
      label: 'follow along here!',
      href: 'https://www.github.com/mikeymanoguerra/portfolio'
    },
    bio: "Teaching has taught me how important it is to explain things clearly. I value well organized directory systems.",
    currently: {
      positions: [
        {
          location: "160over90",
          description: "jr web developer"
        },
        {
          location: "Boxplot Analytics",
          description: "application developer"
        }
      ],
      other: [
        {
          location: "Code For Philly",
          description: "unified reporting system for Prevention Point"
        }
      ]
    },
    technologies: {
      frontend: [
        "sass",
        "gsap",
        "react",
        "redux",
        "vue 3",
        "layouts",
        "webpack",
        "web apis",
        "typescript",
        "responsive design",
        "semantic, accessible, html",
        "asyncronous ES6 + javascript"
      ],
      backend: [
        "node",
        "python",
        "express",
        "mongodb",
        "passport",
        "postresQL",
        "django (base)",
        "docker-compose",
        "REST Architecture",
        "django rest framework"
      ],
      developer: [
        "sh",
        "git",
        "heroku",
        "netlify",
        "debugger",
        "cli tools"
      ],
      experienced: [
        "regex",
        "flask",
        "pandas"
      ]
    },
    projects: [
      {
        heading: "Knowledge Maze",
        description: "MERN stack application with Redux. Build a customizable decision based story and share with others. Pointer based system allows for unique configurations.",
        image: {
          src: "https://res.cloudinary.com/dgzjr8afn/image/upload/v1569336781/Screen_Shot_2019-09-24_at_10.51.33.png",
          alt: "screenshot of D3 tool in app"
        },
        links: {
          git: "https:/\/github.com/MikeyManoguerra/decision-trees",
          live: "https:/\/agitated-murdock-a299b6.netlify.com"
        },
        technologies: [
          "React",
          "Redux",
          "Redux Form",
          "React Router",
          "D3 Cytoscape",
          "JWT",
          "Express",
          "NodeJS",
          "MongoDB "
        ]
      },
      {
        heading: "Views-Via-ISS",
        description: "Jquery-webpack application with session state. Uses ISS location data from one API to query image and map assets from two other APIs.",
        image: {
          src: "https://res.cloudinary.com/dgzjr8afn/image/upload/v1555687146/issdark.png",
          alt: "screenshot of ISS app with satelite images"
        },
        links: {
          git: "https:/\/github.com/MikeyManoguerra/Views-via-ISS",
          live: "https:/\/mikeymanoguerra.github.io/Views-via-ISS/"
        },
        technologies: [
          "Webpack",
          "jQuery",
          "Html5",
          "Css3"
        ]
      },
      {
        "title": "P5 Examples",
        "description": "Examples I did for a web development/ programming course I taught to highschool students involved in SMASH Academy",
        "image": {
          "src": "https://res.cloudinary.com/dgzjr8afn/image/upload/v1588342577/treesp5.png",
          "alt": " screenshot of tree animation"
        },
        "links": {
          "git": "https:/\/github.com/MikeyManoguerra/p5-hosted-example",
          "live": "https://mikeymanoguerra.github.io/p5-hosted-example/"
        },
        "technologies": [
          "p5js",
          "Git GUI"
        ]
      },
      {
        heading: "Python CLI Dichotomous Key",
        description: "Command line tool to identify Eastern North American species of the Pinus Genus (pine trees).",
        image: {
          src: "https://res.cloudinary.com/dgzjr8afn/image/upload/v1555216047/CLI.png",
          alt: "screenshot of CLI terminal"
        },
        links: {
          git: "https:/\/github.com/MikeyManoguerra/dichotomous-key",
          live: null
        },
        technologies: [
          "Python3",
          "Wikipedia API"
        ]
      },
      {
        heading: "Friday Night Knowledge",
        description: "MERN stack application using a spaced repetition alogrithm to teach foreign languages. Resuable system makes it relatively easy to add new subjects.",
        image: {
          src: "https://res.cloudinary.com/dgzjr8afn/image/upload/v1555616756/new-friday.png",
          alt: ''
        },
        links: {
          git: "https:/\/github.com/MikeyManoguerra/spaced-repetition-project",
          live: "https:/\/friday-night-knowledge.netlify.com/"
        },
        technologies: [
          "React",
          "Redux",
          "Redux Form",
          "Node",
          "Express",
          "MongoDB",
          "Mongoose",
          "Mocha",
          "Chai"
        ]
      }
    ]
  }
})();
