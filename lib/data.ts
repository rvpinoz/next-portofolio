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
    title: "Rakit Ecosystem",
    description:
      "The Rakit ecosystem includes apps like Coopin (cooperative), Trast (transportation), Kru (HR), and a payment gateway for seamless digital transactions. ",
    tags: ["Go", "Express.js", "MySQL", "Flutter"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Apihub",
    description:
      "Switching system for transaction PPOB.",
    tags: ["Java", "Elastic", "Kafka", "Express.js", "MySQL", "Kibana", "Python"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Marissa & Kamila",
    description:
      "A human resource management platform designed to help companies manage various aspects of employee administration.",
    tags: ["Go", "Express.js", "Laravel", "Flutter", "MySQL"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "MyKisel",
    description:
      "Kisel membership application that can be monitored by each user including information related to membership and various services provided.",
    tags: ["Go", "Laravel", "Flutter", "MySQL"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Bayaraja",
    description:
      "Application for reporting & transaction voucher telkomsel and PPOB.",
    tags: ["Go", "Express.js", "Flutter", "MySQL"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Integration Wallet & Payment Gateway",
    description:
      "LinkAja, Bayarind, Ovo, Virtual Account.",
    tags: ["Go", "Node.js", "MySQL"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Barakah",
    description:
      "A community application designed to support the needs of every Muslim community, reducing the need for multiple apps while fulfilling all worship and other activity requirements.",
    tags: ["Go", "Express.js", "Flutter", "MySQL"],
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
  "Tailwind",
  "Git",
  "Python",
  "Bash Script",
  "MySQL",
  "PostgreSQL",
  "Elastic Search",
  "Kafka",
] as const;
