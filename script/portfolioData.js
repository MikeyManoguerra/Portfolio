const portfolioData = (function loadData() {
  return {
    name: "Michael Manoguerra",
    heading: "This site is built dynamically with vanilla javascript. It's a work in progress!",
    cta: {
      label: 'follow along',
      href: 'https://www.github.com/mikeymanoguerra/portfolio'
    },
    vote: {
      label: 'Register To Vote!',
      href: 'https://vote.gov/'
    },
    bio: "Teaching has taught me how important it is to explain things clearly. I value well organized directory systems. I enjoy working hard and putting my all into things I believe in. I am an easy going guy overall.",
    currently: {
      positions: [
        {
          location: "Looking for a Full Time Role",
          description: "Lets talk about how I can help you!"
        },
        {
          location: "Freelance Developer",
          description: "Contracting jobs with Pandas and Vue"
        },
        {
          location: "Boxplot Analytics",
          description: "application developer"
        }
      ],
      other: [
        {
          location: "Code For Philly",
          description: "Developer Mentor for Code for Philly Fellowship"
        },
        {
          location: "Code For Philly",
          description: "Tech lead for Prevention Point Project"
        },
      ]
    },
    technologies: {
      frontend: [
        "sass",
        "gsap",
        "react",
        "redux",
        "vue.js",
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
        "flask",
        "django",
        "express",
        "mongodb",
        "passport",
        "postresQL",
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
        "cli tools",
        "regex",
        "pandas"
      ],
      experienced: [

      ]
    },
    projects: [
      {
        heading: "Stitch By Michelle",
        description: "Near MVP Headless Content Management System Site for a local seamstress. A Jamstack site with custom designed reusable components built with vue, Gridsome, and Netlify CMS",
        image: {
          src: "https://res.cloudinary.com/dgzjr8afn/image/upload/v1595708651/stitch.png",
          alt: 'site screenshot'
        },
        links: {
          git: null,
          live: "https:/\/stitch-by-michelle.netlify.app/"
        },
        technologies: [
          "vue composition api",
          "graphQl",
          "jamstack",
          "gridsome",
          "netlify CMS",
          "SCSS"
        ]
      },
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
        heading: "Dustballs dot App",
        description: "Application combining React Typescript SPA with a Flask Server and a Mongo Database. Netlify Frontend communicates with REST backend on a DigitalOcean Droplet",
        image: {
          src: "https://res.cloudinary.com/dgzjr8afn/image/upload/v1592671486/dustballs-screen.png",
          alt: "screenshot of dustballs"
        },
        links: {
          git: "https:/\/github.com/MikeyManoguerra/dustballs",
          live: "https:/\/dustballs.app"
        },
        technologies: [
          "Typescript",
          "React",
          "SCSS",
          "Flask",
          "Nginx",
          "MongoDB Atlas",
          "Digital Ocean"
        ]
      },

      {
        heading: "Prevention Point Reporting System",
        description: "Full Stack Open Source Project, a partnership between Code for Philly and Prevention Point Philadelphia. I am a long time contributor, and now one of the project leads for this application. It combines a Django REST Framework backend with a React/Mobx frontend. It is dockerized, and data is persisted in a PosgresQL database.",
        image: {
          src: "https://res.cloudinary.com/dgzjr8afn/image/upload/v1592673102/ppp-screen.png",
          alt: "screenshot of CLI terminal"
        },
        links: {
          git: "https:/\/github.com/CodeforPhilly/prevention-point",
          live: null
        },
        technologies: [
          "Django REST Framework",
          "React",
          "Mobx",
          "Docker"
        ]
      },
      {
        "heading": "P5 Examples",
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
      }
    ]
  }
})();
