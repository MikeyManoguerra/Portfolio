const portfolioData = (function loadData() {
  return {
    name: "Michael Manoguerra",
    heading: "Here's where you can find me across the web:",
    ctas: [{
        label: 'github',
        href: 'https://www.github.com/mikeymanoguerra/'
      },
      {
        label: 'codepen',
        href: 'https://codepen.io/mikeymanoguerra/'
      },
      {
        label: 'linkedin',
        href: 'https://www.linkedin.com/in/mlcwlomtamlzujmczryr/'
      },
      {
        label: 'instagram',
        href: 'https://www.instagram.com/entropyparty/'
      }
    ],
    bio: "Teaching has taught me how important it is to explain things clearly. I value well organized directory systems. I enjoy working hard and putting my all into things I believe in. I am an easy going guy overall.",
    currently: {
      positions: [{
        location: "Houwzer",
        description: "Full Stack Software Engineer"
      }, ],
      other: [{
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
        "scss",
        "gsap",
        "react",
        "redux",
        "rxjs",
        "angular 7-15",
        "karma test framework",
        "browser apis",
        "typescript",
        "responsive design",
        "semantic, accessible, html",
        "asyncronous ES6 + javascript"
      ],
      "backend": [
        "node",
        "python",
        "express",
        "mongodb",
        "postresQL",
        "ActiveRecord",
        "Ruby on Rails",
        "django (base)",
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
    projects: [{
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
        heading: "Random String Generator",
        description: "Create a randomized string for passwords, or other uses of randomized characters. Uses the browser's Crypto Api for true randomness. Think about Wilco's song Random Name Generator as you are using it.",
        image: {
          src: "assets/rsg.png",
          alt: "screenshot of random generated result"
        },
        links: {
          git: "https://github.com/MikeyManoguerra/random-string-generator",
          live: "https:/\/mikeymanoguerra.github.io/random-string-generator/"
        },
        technologies: [
          "crypto API"
        ]
      },
      {
        heading: "CSS Art",
        description: "Pure CSS art, each done in a single session of 1-4 hours. Learned many details and eccentricities of CSS, and I would credit this series in solidifying my general knowledge of available CSS properties.",
        image: {
          src: "assets/fan.png",
          alt: "screenshot of css box fan"
        },
        links: {
          git: "https://github.com/MikeyManoguerra/css-art",
          live: "https:/\/mikeymanoguerra.github.io/css-art/"
        },
        technologies: [
          "crypto API"
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
    ],
    // extras: {
    //   heading: 'Extras',
    //   description: 'Projects that don\'t deserve to be featured, but do deserve to be somewhere.',
    //   collection: [
    //     {
    //       href: 'example.com',
    //       text: 'test',
    //       description: 'yep'
    //     }

    //   ]
    // }
  }
})();
