import project1 from "../assets/projects/dictionary.webp";
import project2 from "../assets/projects/ecommerce.png";
import project3 from "../assets/projects/Task manager.png";
import project4 from "../assets/projects/protfolio.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "MERN Stack Web Developer",
    company: "Personal Projects",
    description: `Building dynamic and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Focused on creating responsive, high-performance, and user-friendly web solutions.`,
    technologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
  },

  {
    year: "2023 - Present",
    role: "Flutter App Developer",
    company: "Hill Next",
    description: `Designing and developing cross-platform mobile applications with Flutter. Implementing state management with GetX, integrating APIs, and delivering smooth and modern UI experiences.`,
    technologies: ["Flutter", "Dart", "GetX", "SQLite", "Firebase"],
  },
];

export const PROJECTS = [
  {
    title: "Tanchangya Dictionary App",
    image: project1,
    description:
      "A multilingual Bengali–Tanchangya dictionary app built with Flutter. Features include offline search, bookmarks, and a modern Material 3 UI. Published on the Google Play Store.",
    technologies: ["Flutter", "Dart", "SQLite", "GetX"],
  },

  {
    title: "E-Commerce App",
    image: project2,
    description:
      "A fully functional e-commerce platform with product listings, shopping cart, authentication, and order management. Built using the Flutter with responsive UI.",
    technologies: ["Flutter", "Dart", "SQLite", "GetX"],
  },
  {
    title: "Task Manager App",
    image: project3,
    description:
      "A productivity app for creating, organizing, and tracking tasks. Includes Firebase authentication, cloud sync, and an intuitive Flutter UI.",
    technologies: ["Flutter", "Firebase", "Provider", "Dart"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio site showcasing projects, skills, and contact information. Built with React and Tailwind for a clean, modern design.",
    technologies: ["React.js", "Tailwind CSS", "Vite", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "Address: Rajasthali, Rangmati ",
  phoneNo: "Phone: 01626754330 ",
  email: "E-mail: ashinupananda56@gmail.com",
};
