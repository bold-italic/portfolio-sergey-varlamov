export const seo = {
  title: "Portfolio Sergey Varlamov",
  description: "My portfolio as a full-stack developer, created with Next.js.",
  canonical: "https://sergey-varlamov.vercel.app/",
};

export const about = {
  introduction: "I'm a developer",
  description:
    "Hello! My name is Sergey. I successfully graduated Red River College Polytechnic in Manitoba...",
};

export const projects = [
  {
    title: "VÖLKL Skis catalogue",
    description:
      "The Full Stack Next.js application for the redesigned Völkl skis catalogue seamlessly integrates Next.js for robust frontend development, MongoDB as the database backend, Material UI for a modern and responsive user interface, and leverages Cloudinary for efficient image management and delivery.",
    image: "/project-1.png",
    technologies: [
      {
        title: "Next.js",
        link: "https://img.shields.io/badge/-Next.js-20232A.svg?style=flat&logo=nextdotjs&logoColor=white",
      },
      {
        title: "MongoDB",
        link: "https://img.shields.io/badge/-MongoDB-4EA94B?style=flat&logo=MongoDB&logoColor=white",
      },
      {
        title: "Material UI",
        link: "https://img.shields.io/badge/-Material--UI-0081CB.svg?style=flat&logo=mui&logoColor=white",
      },
    ],
    liveDemoLink: "https://volkl-catalogue.vercel.app/",
    gitHubLink: "https://github.com/bold-italic/volkl-catalogue",
  },
  {
    title: "Progect 2",
    description: "Text 2",
    image: "/project-2.png",
  },
  {
    title: "Progect 3",
    description: "Text 3",
    image: "/project-3.png",
  },
];

export const MAX_WIDTH = "1440px";
