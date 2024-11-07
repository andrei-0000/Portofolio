import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  aws,
  java,
  socialpoint,
  ocado,
  shopify,
  carrent,
  jobit,
  colorgame,
  videogame,
  gymios,
  portofolio,
  tripguide,
  threejs,
} from "../assets/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UX/UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Engineer Apprentice",
    company_name: "Ocado Technology",
    icon: ocado,
    iconBg: "#383E56",
    date: "October 2022 - February 2023",
    points: [
      "Interned in a team that works with a micro-service based platform.",
      "Given different tasks and tickets, I had to work on a solution, test it, review it, and deploy it.",
      "Worked on both front end (React) and back end (Java, Spring Boot).",
      "Participated in the team using Agile methodology.",
    ],
  },
  {
    title: "Fullstack Developer Internship",
    company_name: "Socialpoint | Take-Two Interactive",
    icon: socialpoint,
    iconBg: "#383E56",
    date: "May 2023 - May 2024",
    points: [
      "Improved different tools that are used for game development & user/game support, as well as adding new functionalities and creating new ones, improving the experience for game developers, QAs and customer supports.",
      "Worked on both frontend and backend, designed & created UIs, improvedexisting endpoints and created new endpoints and functionalities, worked with external APIs. Applied testing on both ends.",
      "Participated in a team that uses sprints & agile methodology.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Color Game",
    description:
      "Simple and easy game created with React in order to first test it and its hooks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: colorgame,
    source_code_link: "https://github.com/andrei-0000/react-colors-game",
  },
  {
    name: "Gym IOS",
    description:
      "Mobile Application made with React Native that aims to provide a swift, clean and cool gym tracking experience.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
    ],
    image: gymios,
    source_code_link: "https://github.com/andrei-0000/GymIOS",
  },
  {
    name: "This Website",
    description:
      "This website was made also as a means of learning React Three, practice Tailwind, and the other technologies involved in it. Made with the inspiration of JSMastery's portofolio",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "three",
        color: "pink-text-gradient",
      },
    ],
    image: portofolio,
    source_code_link: "https://github.com/andrei-0000/Portofolio",
  },
];

const otherProjects = [
  {
    name: "3D Game",
    description:
      "3D Runner style game developed in 1 month as a class project.",
    tags: [
      {
        name: "unity",
        color: "orange-text-gradient",
      },
      {
        name: "c-sharp",
        color: "blue-text-gradient",
      },
    ],
    image: videogame,
    source_code_link: "https://github.com/andrei-0000/3DGame",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  otherProjects,
};
