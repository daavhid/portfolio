import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmsImg from "@/public/rmsImg.jpg";
import portfolioImg from "@/public/portfolioImg.jpg";
import learnsphereImg from "@/public/learnsphereImg.jpg";

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
    title: "Bootcamp Graduate",
    location: "Lagos, Nigeria",
    description:
      "Completed an intensive one-year software development bootcamp, building a solid foundation in web technologies, software engineering principles, and problem-solving.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Front-End Developer",
    location: "Ogbomoso, Nigeria",
    description:
      "Worked as a front-end developer collaborating closely with designers and product teams to deliver responsive, accessible, and high-quality user interfaces. Focused on translating design systems into scalable frontend solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Frontend / Full-Stack Developer (Contract & Freelance)",
    location: "Lagos, Nigeria",
    description:
      "Worked across contract and freelance engagements delivering production-ready web applications for businesses and startups. Contributed to both frontend and backend development, collaborated with cross-functional teams, and owned features from design implementation to deployment.",
    icon: React.createElement(FaReact),
    date: "Feb 2025 - Present",
  },
] as const;


export const projectsData = [
  {
    title: "LearnSphere",
    description:
      "A full-stack learning management platform with course management, assessments, and admin dashboards.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    imageUrl: learnsphereImg,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, animated developer portfolio showcasing projects, skills, and experience.",
    tags: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
    ],
    imageUrl: portfolioImg,
  },
  {
    title: "Result Management System",
    description:
      "A system for managing student records, grading, and academic results for institutions.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    imageUrl: rmsImg,
  },
] as const;



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;