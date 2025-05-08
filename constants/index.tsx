import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaHubspot } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { IoIosBriefcase } from "react-icons/io";


// Navigation items
export const navLinks = [
    { label: "About me", href: "#about-me", icon: <IoMdPerson/>  },
    { label: "Experience", href: "#experience", icon: <IoIosBriefcase/> },
    { label: "My Projects", href: "#my-projects", icon: <GrProjects /> },
    { label: "Contact me", href: "#contact", icon: <FaEnvelope /> },
]

// Socials
export const socialLinks = [
    { name: "linkedin", icon: <FaLinkedin size="24"/>, href: "https://www.linkedin.com/in/gracjan-drozdek", title: "Visit my LinkedIn profile" },
    { name: "github", icon: <FaGithub size="24"/>, href: "https://github.com/gradro", title: "Check out my GitHub profile" },
    { name: "mail", icon: <FaEnvelope size="24"/>, href: "mailto:contact@gdrozdek.com", title: "Send me an email" }
]

// Projects
export const projects = [
    {
        name: "My portfolio website",
        description: "This is my portfolio page built with Next.js, TypeScript, and Tailwind.",
        stack: ["JavaScript", "Next.js", "Typescript", "Tailwind"],
        image: "/assets/projects/portfolio.png",
        githubLink: "https://github.com/gradro/portfolio24",
        previewLink: ""
        
    },
    {
        name: "HubSpot Custom Modules",
        description: "Collection of free HubSpot Modules created by me.",
        stack: ["HTML", "CSS", "JavaScript", "HubSpot"],
        image: "/assets/projects/hs-modules.jpg",
        githubLink: "https://github.com/gradro/hubspot"
    }
]

// My tech stack
export const stack = [
    {
        name: "HTML",
        image: "/assets/logos/html.svg"
    },
    {
        name: "CSS",
        image: "/assets/logos/css.svg"
    },
    {
        name: "JavaScript",
        image: "/assets/logos/javascript.png"
    },
    {
        name: "React",
        image: "/assets/logos/react.svg"
    },
    {
        name: "Next.js",
        image: "/assets/logos/next.svg"
    },
    {
        name: "HubSpot",
        image: "/assets/logos/hubspot-small.svg"
    },
    {
        name: "Tailwind",
        image: "/assets/logos/tailwind.svg"
    },
    {
        name: "Typescript",
        image: "/assets/logos/typescript.svg"
    }
]

// Education & Experience
export const experience = [
    { 
        title: "Frontend Developer",
        period: "2024 - present",
        company: "BlendB2B HubSpot Website Agency",
        location: "Reading, UK",
        icon: <IoCodeSlashOutline/>
    },
    { 
        title: "Frontend Developer - HubSpot CMS",
        period: "2023 - 2024",
        company: "Thought Leader Systems GmbH",
        location: "Frankfurt, Germany",
        icon: <FaHubspot/>
    },
    { 
        title: "Junior Frontend Developer",
        period: "2022 - 2023",
        company: "IXTENSA GmbH & Co.KG",
        location: "Lautertal, Germany",
        icon: <IoCodeSlashOutline/>
    },
    { 
        title: "Vocational education as a Web Developer",
        period: "2019 - 2022",
        company: "IXTENSA GmbH & Co.KG",
        location: "Lautertal, Germany",
        icon: <MdSchool/>
    },
]

// Framer motion: Fade In on scroll
export const fadeUpAnimation = {
    variants: {
        hidden: {
            opacity: 0,
            y: 10
        },
        visible: {
            opacity: 1,
            y: 0
        }
    },
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true }
}