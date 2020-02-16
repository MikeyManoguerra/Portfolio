const portfolioData = (function loadData() {
  return {
    bio: "My career as a developer includes being an educator, a volunteer with civic tech organizations, and an employee in data driven and accessablilty minded fields. As a result, I put heavy emphasis into crafting conceptually clear, segmented, and easily maintainable products.",
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
        "regex",
        "heroku",
        "netlify",
        "debugger",
        "cli tools"
      ],
      experienced: [
        "flask",
        "pandas"
      ]
    },
    projects: [
      {
        heading: "Knowledge Maze",
        description: "Knowledge maze is a group project that I am refactoring and adding functionality to. Click through a choose your own adventure style maze, or create your own!",
        image: {
          src: "https://res.cloudinary.com/dgzjr8afn/image/upload/v1569336781/Screen_Shot_2019-09-24_at_10.51.33.png",
          alt: ''
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
        description: "This app uses coding best practices for front end functionality and session persistence of data. The app uses three different API's, One to get the current location of the International Space Station, A second to get LandSat 8 image data of the location, and a third to get a matching static map. The LandSat 8 API returns 500 errors if no image exists per the request, and since most of the earth is water by surface area, this is a lot of errors. Views via Iss handles errors, stores successful responses, and allows changing the parameters of the location. The next step is to allow to search through your session's successful requests. Another addition would be to find another live-location data source with a circum-polar orbit.",
        image: {
          src: "https://res.cloudinary.com/dgzjr8afn/image/upload/v1555687146/issdark.png",
          alt: ''
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
        heading: "Friday Night Knowledge",
        description: "This project uses a spaced repetition algorithm to serve a list of foreign words in an order based upon how often you get the word correct. More successful answers mean more time before the word appears again. This is version 2.0 of the app, which is refactored from a pair project. The user can now pick from several languages, and the database will hold the history of the user for each. The code base is in a mono repo. ",
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
      },
      {
        heading: "Python CLI Dichotomous Key",
        description: "Command line tool to identify eastern species of the Pinus Genus (pine trees). version 2.0 with a django back end and PostGresQL server in the works",
        image: {
          src: "https://res.cloudinary.com/dgzjr8afn/image/upload/v1555216047/CLI.png",
          alt: ''
        },
        links: {
          git: "https:/\/github.com/MikeyManoguerra/dichotomous-key",
          live: null
        },
        technologies: [
          "Python3",
          "Wikipedia API"
        ]
      }
    ]
  }
})();