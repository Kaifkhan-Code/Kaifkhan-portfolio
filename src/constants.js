// ================= SKILLS =================

import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import wanderlustImg from "./assets/projects/wanderlust.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import amityLogo from "./assets/education/amity.png";
import schoolLogo from "./assets/education/scs.png";
import letsupgradeLogo from "./assets/experience/lu.png";
import internshalaLogo from "./assets/experience/is.png";
import secrealmLogo from "./assets/experience/secrealm.png";
import amigosLogo from "./assets/experience/Amigos.png";
import amityExperienceLogo from "./assets/experience/amity.jpeg";
import gfgfuLogo from "./assets/Certification/gfgfull.png";
import gfgjavaLogo from "./assets/Certification/gfgjava.png";
import luGitLogo from "./assets/Certification/lu.png";
import deloitteLogo from "./assets/Certification/forage.png";
import genAiLogo from "./assets/Certification/GenAI.png";
import bikelogo from "./assets/projects/bike.png";
import weatherlogo from "./assets/projects/weather.png";
import jharkhandTrailsImg from "./assets/projects/JharkhandTrails1.png";
import miniErpImg from "./assets/projects/mini_erp_system.png";
import uiLogo from "./assets/tech_logo/ui.png";
import cloudLogo from "./assets/tech_logo/cloud.png";
import ejsLogo from "./assets/tech_logo/ejs.png";
import passportLogo from "./assets/tech_logo/passport.png";
import springBootLogo from "./assets/tech_logo/springboot.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
       { name: "Material UI", logo: uiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
{
  title: "Backend",
  skills: [
    { name: "Node JS", logo: nodejsLogo },
    { name: "Express JS", logo: expressjsLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "Spring Boot", logo: springBootLogo },
    { name: "EJS", logo: ejsLogo },              
    { name: "Passport.js", logo: passportLogo }, 
  ],
},
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
{
  title: "Tools",
  skills: [
    { name: "Git", logo: gitLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "VS Code", logo: vscodeLogo },
    { name: "Vercel", logo: vercelLogo },
    { name: "Netlify", logo: netlifyLogo },
    { name: "Cloudinary", logo: cloudLogo }, 
  ],
}
];



export const experiences = [
  {
    id: 0,
    img: letsupgradeLogo,
    role: "Student Ambassador",
    company: "LetsUpgrade",
    date: "June 2025",
    desc: "Promoted LetsUpgrade programs through social media campaigns and student outreach initiatives. Strengthened communication, leadership, and marketing skills.",
    skills: ["Communication", "Leadership", "Marketing"],
  },
  {
    id: 1,
    img: internshalaLogo,
    role: "Internshala Student Partner",
    company: "Internshala",
    date: "June 2025",
    desc: "Guided students in applying for the Internshala Student Partner Programme and improved networking and communication skills.",
    skills: ["Networking", "Communication"],
  },
  {
    id: 2,
    img: secrealmLogo,
    role: "Full Stack Developer Intern",
    company: "Secrealm Inc.",
    date: "May 2026 – Present",
    desc: "Working on Money Max Sandbox, a real estate application, contributing across both frontend and backend. Integrating APIs from social media platforms and Google Developer services, handling authentication and data exchange, while managing fixes across all API connections to ensure stable functionality.",
    skills: ["React.js", "Node.js", "Express.js", "REST APIs", "Git", "CI/CD"],
  },
  {
    id: 3,
    img: amigosLogo,
    role: "Web Development Intern",
    company: "InAmigos Foundation",
    date: "May 2026 (02–16 May 2026)",
    desc: "Completed a two-week web development internship, contributing to live, real-world web tasks. Built and maintained responsive web interfaces and collaborated with the team to deliver web-based solutions under the guidance of the HR Head.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    id: 4,
    img: amityExperienceLogo,
    role: "JCSTI Project Intern",
    company: "Amity University Jharkhand",
    date: "21 May – 1 July 2026",
    desc: "Managed web applications and worked on extracting data from IoT devices and transferring it to the cloud as part of a college project internship.",
    skills: ["Web Applications", "IoT", "Data Extraction", "Cloud Computing"],
  },
];



export const education = [
  {
    id: 0,
    img: amityLogo,
    school: "Amity University Jharkhand",
    date: "2023 – 2027",
    grade: "7.99",
    desc: "Currently pursuing B.Tech in Computer Science and Engineering.",
    degree: "B.Tech CSE",
  },
  {
    id: 1,
    img: schoolLogo,
    school: "Surendranath Centenary School",
    date: "2021 – 2023",
    grade: "73.2%",
    desc: "Completed Class XII (CBSE).",
    degree: "CBSE (XII)",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "Surendranath Centenary School",
    date: "2021",
    grade: "88.6%",
    desc: "Completed Class X (CBSE).",
    degree: "CBSE (X)",
  },
];



export const projects = [
  {
    id: 0,
    title: "Bike Management System",
    date: "April 2024",
    description:
      "C++ based system to manage and track second-hand vehicle records using object-oriented programming concepts.",
    image: bikelogo,
    tags: ["C++", "OOP"],
    github: "https://github.com/Kaifkhan-Code/Vehicle-Management-System.git",
    webapp: "#",
  },
  {
    id: 1,
    title: "Weather App",
    date: "November 2024",
    description:
      "React-based weather application using API to fetch real-time weather data with a responsive UI.",
    image: weatherlogo,
    tags: ["React JS", "API", "Material UI", "JavaScript"],
    github: "https://github.com/Kaifkhan-Code/Weather_App.git",
    webapp: "https://weather-app-kaif.vercel.app/",
  },
  {
  id: 2,
  title: "WanderLust (Airbnb Clone)",
  date: "February 2026",
  description:
    "A full-stack web application inspired by Airbnb where users can create, edit, view, and delete travel listings. Includes authentication, image uploads, and session management.",
  image: wanderlustImg, 
  tags: [
    "HTML",
    "CSS",
    "Bootstrap",
    "Node JS",
    "Express JS",
    "MongoDB",
    "EJS",
    "Cloudinary",
    "Passport.js"
  ],
  github: "https://github.com/Kaifkhan-Code/Air-Bnb-Clone",
  webapp: "https://air-bnb-clone-fdj8.onrender.com/",
  },
  {
    id: 3,
    title: "Jharkhand Trails",
    date: "August 2026",
    description:
      "A tourism discovery platform for exploring Jharkhand's waterfalls, hill stations, wildlife, lakes, cultural heritage, and hidden destinations.",
    image: jharkhandTrailsImg,
    tags: ["Node JS", "Express JS", "MongoDB", "EJS", "Passport.js", "Render"],
    github: "https://github.com/Kaifkhan-Code/Jharkhand_tourism",
    webapp: "https://jharkhand-trails.onrender.com/",
  },
  {
    id: 4,
    title: "Mini ERP System",
    date: "September 2026",
    description:
      "Built a full-stack ERP demo for inventory, work orders, stock transfers, and order reservations. Added an Ops Pulse dashboard with live KPIs and transactional safeguards against overselling. Implemented role-based authentication with JWT and bcrypt, and containerized the full stack with Docker Compose.",
    image: miniErpImg,
    tags: ["Node.js", "Express.js", "MongoDB", "React.js", "Docker Compose", "JWT", "bcrypt"],
}
];

export const certifications = [
  {
    id: 0,
    title: "Mern Stack Development Certification",
    issuer: "GeeksforGeeks",
    date: "Nov,2025",
    image: gfgfuLogo,
    link: "https://media.geeksforgeeks.org/courses/certificates/4669d21d4bdc492b5a4ca7c277177acb.pdf",
  },
  {
    id: 1,
    title: "Java Programming Certification",
    issuer: "GeeksforGeeks",
    date: "July,2025",
    image: gfgjavaLogo,
    link: "https://media.geeksforgeeks.org/courses/certificates/4669d21d4bdc492b5a4ca7c277177acb.pdf",
  },
  {
    id: 2,
    title: "Git and GitHub Certification",
    issuer: "LetsUpgrade",
    date: "June,2025",
    image: luGitLogo,
    link: "https://image2url.com/r2/bucket1/images/1775989002949-fe9e139d-e08c-46ec-8b90-f4201df5ad11.png",
  },
  {
    id: 3,
    title: "Cyber Job Simulation Certification",
    issuer: "Deloitte",
    date: "June,2025",
    image: deloitteLogo,
    link: "https://image2url.com/r2/bucket1/images/1775989049926-d40cdb41-0d83-4433-bd17-91d2c5bd7f37.png",
  },
  {
    id: 4,
    title: "Generative AI Certificate",
    issuer: "Simplilearn",
    date: "July 2026",
    image: genAiLogo,
    link: "https://simpli-web.app.link/e/GmteniPBK6b",
  }

];