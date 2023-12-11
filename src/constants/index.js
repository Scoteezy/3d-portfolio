import {
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
    git,
    figma,
    threejs,
    hoobank,
    countries,
    ecommerce,
    runsmart,
    travel,
    userfinder
  } from "../assets";
  
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
      title: "React Developer",
      icon: web,
    },
    {
      title: "Html/Css developer",
      icon: creator,
    }
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "HTML/CSS/JS Developer",
      company_name: "",
      icon: html,
      iconBg: "#383E56",
      date: "October 2022 - March 2023",
      points: [
        "Developing and maintaining web applications using HTML, CSS, JavaScript and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility."
      ],
    },
    {
      title: "React Developer",
      company_name: "",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility."
      ],
    }
  ];
  
  const projects = [
    {
      name: "Hoobank",
      description:
        "The HooBank Landing Page is a striking web presentation crafted using React and Tailwind CSS, designed to introduce users to the innovative features and services offered by HooBank. This landing page serves as the gateway to a modern banking experience, combining the dynamic capabilities of React with the sleek styling provided by Tailwind CSS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: hoobank,
      source_code_link: "https://github.com/Scoteezy/hoobank_project",
    },
    {
      name: "Countries",
      description:
        "Countries Finder is a robust web application crafted using React, TypeScript, and styled-components, designed to provide users with an immersive and informative experience when exploring countries around the globe. This project seamlessly integrates powerful technologies to deliver a visually appealing and feature-rich platform for discovering detailed information about countries.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "styled-components",
          color: "pink-text-gradient",
        },
      ],
      image: countries,
      source_code_link: "https://github.com/Scoteezy/Countries-ts",
    },
    {
      name: "Ecommerce web-site",
      description:
        "E-commerce Platform is a robust and scalable web application built using cutting-edge technologies to provide users with a seamless online shopping experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "styled-components",
          color: "pink-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "green-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/Scoteezy/ecommerce-ts",
    },
    {
      name: "GitHub UserFinder",
      description:
        "GitHub User Finder is a dynamic web application developed to streamline the process of discovering GitHub users and exploring their repositories. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: userfinder,
      source_code_link: "https://github.com/Scoteezy/githubUserFinder-ts",
    },
    {
      name: "RunSmart shop",
      description:
        "RunSmart Shop is a dynamic and visually appealing landing page. With a focus on a sleek and responsive design, this project aims to provide users with an engaging and seamless experience for running-related products",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: runsmart,
      source_code_link: "https://github.com/Scoteezy/pulseLanding",
    },
    {
      name: "Travel landing page",
      description:
        "The Travel Landing Page project is a visually captivating web page designed to inspire and inform potential travelers about exciting destinations. This landing page combines modern design principles with interactive elements to create an immersive experience for users interested in exploring new travel opportunities.",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: travel,
      source_code_link: "https://github.com/Scoteezy/travel_portal_landing/",
    },
  ];
  
  export { services, technologies, experiences, projects };