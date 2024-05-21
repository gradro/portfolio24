import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// Navigation items
export const navLinks = [
    { label: "Home", href: "/" },
    { label: "About me", href: "#about-me" },
    { label: "My Projects", href: "#my-projects" },
    { label: "Contact me", href: "#contact" },
]

// Socials
export const socialLinks = [
    { name: "linkedin", icon: <FaLinkedin size="24"/>, href: "https://www.linkedin.com/in/gracjan-drozdek", title: "Visit my LinkedIn profile" },
    { name: "github", icon: <FaGithub size="24"/>, href: "https://github.com/gradro", title: "Check out my GitHub profile" },
    { name: "mail", icon: <FaEnvelope size="24"/> ,href: "mailto:drozdek.gracjan@gmail.com", title: "Send me an email" }
]

// Projects
export const projects = [
    {
        name: "My portfolio website",
        description: "This is my portfolio page built with Next.js, TypeScript, and Tailwind.",
        stack: ["JavaScript", "Next.js", "Typescript", "Tailwind"],
        image: "/assets/projects/portfolio.png"
    },
    {
        name: "HubSpot Custom Modules",
        description: "Collection of free HubSpot Modules created by me.",
        stack: ["HTML", "CSS", "JavaScript", "HubSpot"],
        image: "/assets/projects/hs-modules.jpg"
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
        title: "Vocational education as a Web Developer",
        period: "2019 - 2022",
        company: "IXTENSA GmbH & Co.KG",
        location: "Lautertal, Germany"
    },
    { 
        title: "Junior Frontend Developer",
        period: "2022 - 2023",
        company: "IXTENSA GmbH & Co.KG",
        location: "Lautertal, Germany"
    },
    { 
        title: "Frontend Developer",
        period: "2023 - present",
        company: "Thought Leader Systems GmbH",
        location: "Frankfurt, Germany"
    }
]