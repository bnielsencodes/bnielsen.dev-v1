import audiophileImg from "/public/images/projects/audiophile.png";
import securePassImg from "/public/images/projects/securepass.png";
import quizzicalImg from "/public/images/projects/quizzical.png";
import dictionaryImg from "/public/images/projects/dictionary-web-app.png";
import tenziesImg from "/public/images/projects/tenzies.png";
import splitterImg from "/public/images/projects/splitter.png";
import planetFactsImg from "/public/images/projects/planet-facts.png";
import memeGeneratorImg from "/public/images/projects/meme-generator.png";
import notificationsPageImg from "/public/images/projects/notifications-page.png";
import huddleImg from "/public/images/projects/huddle.png";
import fruitOfTheSeaImg from "/public/images/projects/fruit-of-the-sea.png";
import employeeDirectoryImg from "/public/images/projects/employee-directory.png";

// eslint-disable-next-line
const projects = [
  {
    id: 1,
    name: "Audiophile",
    video: "/videos/audiophile.mp4",
    img: audiophileImg,
    description:
      "An e-commerce website for a fictional company named Audiophile that is a one stop shop for all things audio.",
    classes: ["icon--nextjs", "icon--react", "icon--js"],
    skillOne: "Next",
    skillTwo: "React",
    skillThree: "JavaScript",
    liveSite: "https://audiophile-bnielsencodes.vercel.app",
    sourceCode: "https://github.com/bnielsencodes/audiophile",
  },
  {
    id: 2,
    name: "SecurePass",
    video: "/videos/securepass.mp4",
    img: securePassImg,
    description: "A strong random password generator.",
    classes: ["icon--html", "icon--tailwind", "icon--js"],
    skillOne: "HTML",
    skillTwo: "Tailwind",
    skillThree: "JavaScript",
    liveSite: "https://bnielsencodes.github.io/securepass",
    sourceCode: "https://github.com/bnielsencodes/securepass",
  },
  {
    id: 3,
    name: "Quizzical",
    video: "/videos/quizzical.mp4",
    img: quizzicalImg,
    description: "A quiz app that gets data from The Open Trivia Database API.",
    classes: ["icon--react", "icon--js", "icon--css"],
    skillOne: "React",
    skillTwo: "JavaScript",
    skillThree: "CSS",
    liveSite: "https://bnielsencodes.github.io/quizzical",
    sourceCode: "https://github.com/bnielsencodes/quizzical",
  },
  {
    id: 4,
    name: "Dictionary Web App",
    video: "/videos/dictionary-web-app.mp4",
    img: dictionaryImg,
    description:
      "A dictionary web app that pulls data from the Free Dictionary API.",
    classes: ["icon--react", "icon--js", "icon--css"],
    skillOne: "React",
    skillTwo: "JavaScript",
    skillThree: "CSS",
    liveSite: "https://bnielsencodes.github.io/dictionary-web-app",
    sourceCode: "https://github.com/bnielsencodes/dictionary-web-app",
  },
  {
    id: 5,
    name: "Tenzies",
    video: "/videos/tenzies.mp4",
    img: tenziesImg,
    description: "Easy to learn dice game that players of all ages will enjoy.",
    classes: ["icon--react", "icon--js", "icon--css"],
    skillOne: "React",
    skillTwo: "JavaScript",
    skillThree: "CSS",
    liveSite: "https://bnielsencodes.github.io/tenzies",
    sourceCode: "https://github.com/bnielsencodes/tenzies",
  },
  {
    id: 6,
    name: "Splitter",
    video: "/videos/splitter.mp4",
    img: splitterImg,
    description:
      "An app built for the purpose of splitting bills/tips with others.",
    classes: ["icon--html", "icon--tailwind", "icon--js"],
    skillOne: "HTML",
    skillTwo: "Tailwind",
    skillThree: "JavaScript",
    liveSite: "https://bnielsencodes.github.io/splitter",
    sourceCode: "https://github.com/bnielsencodes/splitter",
  },
  {
    id: 7,
    name: "Planet Facts",
    video: "/videos/planet-facts.mp4",
    img: planetFactsImg,
    description:
      "A fully responsive website that allows you to explore facts about all of the planets in our solar system.",
    classes: ["icon--html", "icon--css", "icon--js"],
    skillOne: "HTML",
    skillTwo: "CSS",
    skillThree: "JavaScript",
    liveSite: "https://bnielsencodes.github.io/planet-facts",
    sourceCode: "https://github.com/bnielsencodes/planet-facts",
  },
  {
    id: 8,
    name: "Meme Generator",
    video: "/videos/meme-generator.mp4",
    img: memeGeneratorImg,
    description:
      "Generates random meme images using the Imgflip API. You can add text to the generated image.",
    classes: ["icon--react", "icon--js", "icon--css"],
    skillOne: "React",
    skillTwo: "JavaScript",
    skillThree: "CSS",
    liveSite: "https://bnielsencodes.github.io/meme-generator",
    sourceCode: "https://github.com/bnielsencodes/meme-generator",
  },
  {
    id: 9,
    name: "Notifications Page",
    video: "/videos/notifications-page.mp4",
    img: notificationsPageImg,
    description: "A notifications page challenge from frontendmentor.io.",
    classes: ["icon--react", "icon--js", "icon--css"],
    skillOne: "React",
    skillTwo: "JavaScript",
    skillThree: "CSS",
    liveSite: "https://bnielsencodes.github.io/notifications-page",
    sourceCode: "https://github.com/bnielsencodes/notifications-page",
  },
  {
    id: 10,
    name: "Huddle",
    video: "/videos/huddle.mp4",
    img: huddleImg,
    description:
      "Huddle re-imagines the way we build communities. Create connections with your users as you engage in genuine discussion.",
    classes: ["icon--html", "icon--tailwind", "icon--js"],
    skillOne: "HTML",
    skillTwo: "Tailwind",
    skillThree: "JavaScript",
    liveSite: "https://bnielsencodes.github.io/huddle",
    sourceCode: "https://github.com/bnielsencodes/huddle",
  },
  {
    id: 11,
    name: "Fruit of the Sea",
    video: "/videos/fruit-of-the-sea.mp4",
    img: fruitOfTheSeaImg,
    description:
      "A fully responsive word guessing game set up to mimic the feel of a game show.",
    classes: ["icon--html", "icon--css", "icon--js"],
    skillOne: "HTML",
    skillTwo: "CSS",
    skillThree: "JavaScript",
    liveSite: "https://bnielsencodes.github.io/fruit-of-the-sea",
    sourceCode: "https://github.com/bnielsencodes/fruit-of-the-sea",
  },
  {
    id: 12,
    name: "Employee Directory",
    video: "/videos/employee-directory.mp4",
    img: employeeDirectoryImg,
    description:
      "A fully responsive employee directory that allows you to search for specific employees by name. Utilizes Fetch API to access Random User Generator API.",
    classes: ["icon--html", "icon--css", "icon--js"],
    skillOne: "HTML",
    skillTwo: "CSS",
    skillThree: "JavaScript",
    liveSite: "https://bnielsencodes.github.io/employee-directory",
    sourceCode: "https://github.com/bnielsencodes/employee-directory",
  },
];

const skills = [
  {
    id: 1,
    name: "react",
    tech: "React",
  },
  {
    id: 2,
    name: "next",
    tech: "Next.js",
  },
  {
    id: 3,
    name: "tailwind",
    tech: "Tailwind",
  },
  {
    id: 4,
    name: "js",
    tech: "JavaScript",
  },
  {
    id: 5,
    name: "vite",
    tech: "Vite",
  },
  {
    id: 6,
    name: "sass",
    tech: "Sass",
  },
  {
    id: 7,
    name: "figma",
    tech: "Figma",
  },
  {
    id: 8,
    name: "html",
    tech: "HTML",
  },
  {
    id: 9,
    name: "css",
    tech: "CSS",
  },
  {
    id: 10,
    name: "git",
    tech: "Git",
  },
];

export { projects, skills };
