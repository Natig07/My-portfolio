import {
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    c4ir,
    bike_ecommerce,
    threejs,
    cyberneticsMMC,
    caspianInnovationCenter,
    angular,
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
      title: "Web Developer",
      icon: web,
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
      name: "Angular",
      icon: angular,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Cybernetics MMC",
    icon: cyberneticsMMC,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Developed a dynamic and user-friendly course website using HTML, CSS, and JavaScript.",
      "Converted design team ideas into functional and visually appealing web features.",
      "Ensured cross-browser compatibility and optimized website performance.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "C4IR Azerbaijan",
    icon: c4ir,
    iconBg: "#E6DEDD",
    date: "July 2024 - September 2024",
    points: [
      "Implemented dynamic and data-driven web pages using HTML, CSS, and JavaScript.",
      "Developed responsive and user-friendly website features based on design team concepts.",
      "Optimized website performance for various devices and browsers.",
      "Collaborated with back-end developers to ensure seamless data integration into web pages.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Caspian Innovation Center",
    icon: caspianInnovationCenter, // add your logo variable
    iconBg: "#383E56",
    date: "April 2025 - December 2025",
    points: [
      "Developed frontend features for a Request Management System using Angular.",
      "Implemented reusable Angular components, services, and routing integrated with REST APIs.",
      "Built request forms, lists, and status tracking interfaces for internal workflows.",
      "Collaborated with backend developers to ensure seamless data integration and consistent user experience.",
    ],
  },
  {
    title: "Frontend Developer Intern (SOCAR Young Talents Program)",
    company_name: "Caspian Innovation Center",
    icon: caspianInnovationCenter, // SOCAR or CIC icon
    iconBg: "#E6DEDD",
    date: "February 2026 - Present",
    points: [
      "Selected as one of the winners of SOCAR’s Young Talents Program 2026.",
      "Working as a Frontend Developer Intern at the Caspian Innovation Center.",
      "Developing and improving enterprise web interfaces using Angular, TypeScript, and modern frontend technologies.",
      "Collaborating with backend developers and designers to build scalable and user-friendly systems.",
    ],
  },
];
  
  const projects = [
    {
      name: "N-Bike",
      description:
        "A web-based platform that enables users to explore, compare, and purchase a wide range of bicycles, including mountain bikes, city bikes, e-bikes, and more. The platform offers an intuitive shopping experience with advanced filtering, real-time stock availability, and discounts, ensuring a seamless and user-friendly purchasing process.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "json-server",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: bike_ecommerce,
      source_code_link: "https://github.com/Natig07/Bike-ecommerce-site",
    },
  ];
  
  export { services, technologies, experiences, projects };