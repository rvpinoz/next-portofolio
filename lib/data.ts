import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IT Application Solution Supervisor",
    location: "PT Kinarya Utama Teknik (Kiselgroup), Jakarta",
    description:
      "Develop, supervise and manage applications (Web Services, Mobile App & REST API). "+
      "Create schedules and make sure projects are completed on time. " +
      "Conduct application testing and debugging before deployment. " +
      "Perform application maintenance and ensure optimal performance. " +
      "Handle troubleshooting in case of technical issues. " +
      "Communicate with the management team, end users, and other IT teams. ",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "IT Business Architect & Design Supervisor",
    location: "PT Kinarya Utama Teknik (Kiselgroup), Jakarta",
    description:
      "Design database structures for application development needs. "+
      "Evaluate existing IT systems and provide improvement recommendations. " +
      "Define IT architecture standards to be followed in system development. " +
      "Oversee the creation of UI/UX for mobile and web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "IT Business Services Officer",
    location: "Kiselgroup (Holding), Jakarta",
    description:
      "Analyze user requirements for application development. "+
      "Develop API endpoints based on business and application needs. " +
      "Ensure APIs can communicate with external services or third-party APIs. " +
      "Perform unit testing and integration testing using Postman. " +
      "Handle troubleshooting and fix bugs if any issues are found.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "IT Application Development Staff",
    location: "Kiselgroup (Holding), Jakarta",
    description:
      "Developing web base application. "+
      "Create automation for data retrieval to support application needs. " +
      "Perform application maintenance & testing.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Bachelor’s Degree in Informatics Engineering",
    location: "Universitas Gunadarma, Depok",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2009 - 2013",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Go",
  "Node.js",
  "Java Springboot",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Express",
  "Git",
  "Python",
  "Bash Script",
  "MySQL",
  "PostgreSQL",
  "Elastic Search",
  "Kafka",
] as const;
