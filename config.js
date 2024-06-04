import { TbBrandNextjs } from "react-icons/tb";
import { SiMui, SiMongodb } from "react-icons/si";

export const seo = {
  title: "Portfolio Sergey Varlamov",
  description: "My portfolio as a full-stack developer, created with Next.js.",
  canonical: "https://sergey-varlamov.vercel.app",
};

export const about = {
  introduction:
    "I'm a dedicated Full Stack Web Developer, always learning and evolving.",
  description:
    "Hello! My name is Sergey. I have recently graduated with Honours from the Full Stack Web Development program at Red River College Polytechnic. With over 10 years of experience in the Telecom and IT sectors, I have specialized in Software QA and Computer Systems.",
};

export const projects = [
  {
    title: "VÖLKL Ski Catalogue",
    description:
      "The Full Stack Next.js application for the redesigned Völkl ski catalogue seamlessly integrates Next.js for robust frontend development, MongoDB as the database backend, Material UI for a modern and responsive user interface, and leverages Cloudinary for efficient image management and delivery.",
    image: "/project-1.png",
    technologies: [
      {
        title: "Next.js",
        icon: TbBrandNextjs,
      },
      {
        title: "MongoDB",
        icon: SiMongodb,
      },
      {
        title: "Material UI",
        icon: SiMui,
      },
    ],
    liveDemoLink: "https://volkl-catalogue.vercel.app",
    gitHubLink: "https://github.com/bold-italic/volkl-catalogue",
  },
  {
    title: "World of Mirrors CMS",
    description:
      "A CRUD-based Content Management System (CMS) for the World of Mirrors website enables users to create, read, update, and delete content from a central source, facilitating seamless management and accessibility of website content.",
    image: "/project-3.png",
    technologies: [
      {
        title: "PHP",
        link: "https://img.shields.io/badge/-PHP-777BB4.svg?style=flat&logo=php&logoColor=white",
      },
      {
        title: "JavaScript",
        link: "https://img.shields.io/badge/-JavaScript-323330.svg?style=flat&logo=javascript&logoColor=F7DF1E",
      },
      {
        title: "MySQL",
        link: "https://img.shields.io/badge/-MySQL-00000F?style=flat&logo=mysql&logoColor=white",
      },
      {
        title: "Bootstrap",
        link: "https://img.shields.io/badge/-Bootstrap-563D7C.svg?style=flat&logo=bootstrap&logoColor=white",
      },
    ],
    liveDemoLink: "https://world-of-mirrors.epizy.com",
    gitHubLink: "https://github.com/bold-italic/world-of-mirrors-CMS",
  },
  {
    title: "React Public API",
    description:
      "This application, written in React, creates a search form for a dataset that requests public data from the Balldontlie API and displays the search results below the form. Balldontlie provides access to NBA statistical data and uses it to search for NBA players.",
    image: "/project-4.png",
    technologies: [
      {
        title: "React",
        link: "https://img.shields.io/badge/-React-20232A.svg?style=flat&logo=react&logoColor=61DAFB",
      },
      {
        title: "JavaScript",
        link: "https://img.shields.io/badge/-JavaScript-323330.svg?style=flat&logo=javascript&logoColor=F7DF1E",
      },
      {
        title: "HTML5",
        link: "https://img.shields.io/badge/-HTML5-E34F26.svg?style=flat&logo=html5&logoColor=white",
      },
      {
        title: "CSS3",
        link: "https://img.shields.io/badge/-CSS3-1572B6.svg?style=flat&logo=css3&logoColor=white",
      },
    ],
    liveDemoLink: "https://react-public-api-new.vercel.app",
    gitHubLink: "https://github.com/bold-italic/react-public-API",
  },
  {
    title: "Simple Blog",
    description:
      "This simple blogging application includes username and password authentication and the full suite of CRUD tasks for blog posts. The project works on HTML, CSS, PHP, and MySQL on Apache server using XAMPP.",
    image: "/project-5.png",
    technologies: [
      {
        title: "PHP",
        link: "https://img.shields.io/badge/-PHP-777BB4.svg?style=flat&logo=php&logoColor=white",
      },
      {
        title: "MySQL",
        link: "https://img.shields.io/badge/-MySQL-00000F?style=flat&logo=mysql&logoColor=white",
      },
      {
        title: "HTML5",
        link: "https://img.shields.io/badge/-HTML5-E34F26.svg?style=flat&logo=html5&logoColor=white",
      },
      {
        title: "CSS3",
        link: "https://img.shields.io/badge/-CSS3-1572B6.svg?style=flat&logo=css3&logoColor=white",
      },
    ],
    liveDemoLink: "https://simple-blog.epizy.com/index.php",
    gitHubLink: "https://github.com/bold-italic/simple-blog-PHP-MySQL-CRUD",
  },
  {
    title: "Open Data API",
    description:
      "This application builds an AJAX search form for a dataset that queries the City of Winnipeg Open Data API and displays search results below the form. The project uses the city’s residential garbage, recycling and yard waste tonnage reports JSON dataset.",
    image: "/project-6.png",
    technologies: [
      {
        title: "JavaScript",
        link: "https://img.shields.io/badge/-JavaScript-323330.svg?style=flat&logo=javascript&logoColor=F7DF1E",
      },
      {
        title: "HTML5",
        link: "https://img.shields.io/badge/-HTML5-E34F26.svg?style=flat&logo=html5&logoColor=white",
      },
      {
        title: "CSS3",
        link: "https://img.shields.io/badge/-CSS3-1572B6.svg?style=flat&logo=css3&logoColor=white",
      },
    ],
    liveDemoLink: "https://open-data-api.vercel.app",
    gitHubLink: "https://github.com/bold-italic/open-data-API",
  },
  {
    title: "Communication Strategies Project Website",
    description:
      "A simple static website that contains 11 communication strategies with examples.",
    image: "/project-7.png",
    technologies: [
      {
        title: "HTML5",
        link: "https://img.shields.io/badge/-HTML5-E34F26.svg?style=flat&logo=html5&logoColor=white",
      },
      {
        title: "CSS3",
        link: "https://img.shields.io/badge/-CSS3-1572B6.svg?style=flat&logo=css3&logoColor=white",
      },
    ],
    liveDemoLink: "https://static-website-new.vercel.app",
    gitHubLink: "https://github.com/bold-italic/static-website",
  },
];

export const skills = [
  {
    title: "HTML5",
    link: "https://img.shields.io/badge/-HTML5-E34F26.svg?style=flat&logo=html5&logoColor=white",
  },
  {
    title: "CSS3",
    link: "https://img.shields.io/badge/-CSS3-1572B6.svg?style=flat&logo=css3&logoColor=white",
  },
  {
    title: "PHP",
    link: "https://img.shields.io/badge/-PHP-777BB4.svg?style=flat&logo=php&logoColor=white",
  },
  {
    title: "JavaScript",
    link: "https://img.shields.io/badge/-JavaScript-323330.svg?style=flat&logo=javascript&logoColor=F7DF1E",
  },
  {
    title: "React",
    link: "https://img.shields.io/badge/-React-20232A.svg?style=flat&logo=react&logoColor=61DAFB",
  },
  {
    title: "Next.js",
    link: "https://img.shields.io/badge/-Next.js-20232A.svg?style=flat&logo=nextdotjs&logoColor=white",
  },
  {
    title: "Material UI",
    link: "https://img.shields.io/badge/-Material--UI-0081CB.svg?style=flat&logo=mui&logoColor=white",
  },
  {
    title: "Chakra UI",
    link: "https://img.shields.io/badge/-Chakra--UI-4ED1C5.svg?style=flat&logo=chakraui&logoColor=white",
  },
  {
    title: "Bootstrap",
    link: "https://img.shields.io/badge/-Bootstrap-563D7C.svg?style=flat&logo=bootstrap&logoColor=white",
  },
  {
    title: "MySQL",
    link: "https://img.shields.io/badge/-MySQL-00000F?style=flat&logo=mysql&logoColor=white",
  },
  {
    title: "MongoDB",
    link: "https://img.shields.io/badge/-MongoDB-4EA94B?style=flat&logo=MongoDB&logoColor=white",
  },
  {
    title: "Java",
    link: "https://img.shields.io/badge/-Java-DC143C.svg?style=flat&logo=openjdk&logoColor=white",
  },
  {
    title: "Python",
    link: "https://img.shields.io/badge/-Python-3670A0?style=flat&logo=python&logoColor=FFDD54",
  },
  {
    title: "Flask",
    link: "https://img.shields.io/badge/-Flask-00000F.svg?style=flat&logo=flask&logoColor=white",
  },
  {
    title: "Git",
    link: "https://img.shields.io/badge/-Git-F05033.svg?style=flat&logo=git&logoColor=white",
  },
  {
    title: "GitHub",
    link: "https://img.shields.io/badge/-GitHub-00000F.svg?style=flat&logo=github&logoColor=white",
  },
  {
    title: "AWS",
    link: "https://img.shields.io/badge/-Amazon_AWS-FF9900?style=flat&logo=amazonaws&logoColor=white",
  },
  {
    title: "Docker",
    link: "https://img.shields.io/badge/-Docker-0DB7ED.svg?style=flat&logo=docker&logoColor=white",
  },
];

export const MAX_WIDTH = "1440px";
