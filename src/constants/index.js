import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nextjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,

    chadgpt,
    tshirt,
    webscraper,

    threejs,
    sitel,
    quantrics
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
        id: "project",
        title: "Projects",
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

    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Artificial Intelligence",
        icon: mobile,
    },
    {
        title: "Customer Service",
        icon: creator,
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
        name: "Next JS",
        icon: nextjs,
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
        name: "MongoDB",
        icon: mongodb,
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
        title: "Customer Service",
        company_name: "Quantrics",
        icon: quantrics,
        iconBg: "#383E56",
        date: "September 2018 - present",
        points: [
            "Deliver exceptional customer service by promptly and effectively addressing inquiries via phone or chat.",
            "Foster positive customer relationships through effective communication and personalized support.",
            "Remain knowledgeable of products, services, and company policies to provide accurate information to customers.",
            "Collaborate with cross-functional teams to resolve complex customer concerns and ensure customer satisfaction.",
        ],
    },
    {
        title: "Customer Service",
        company_name: "Sitel Philippines Inc.",
        icon: sitel,
        iconBg: "#E6DEDD",
        date: "July 2016 - June 2018",
        points: [
            "Answering both general/specific customer questions about the company’s products/services offered. ",
            "Consistently achieve call quality score goals to assist in achieving client and customer satisfaction goals.",
            "Handle problem resolution that may require follow-up and/or escalation to a higher level of expertise.",
            "Maintain knowledge of client’s business, products and/or services.",
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Chad GPT",
        description:
            "ChadGPT Turbo is my exceptional clone website of ChatGPT, elevating AI interaction to new heights. Beyond chat conversations, it empowers users to create custom AI models, unlocking endless possibilities. This platform offers a suite of OpenAI functions, including Text to Image, Image to Text, and Weather Checking, alongside essential features like Text to Speech, chat history storage in Firebase, and the unique ability to engage with your documents, be it PDFs, Excel sheets, or text files. With ChadGPT Turbo, you're not just conversing; you're exploring the full spectrum of AI innovation.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: chadgpt,
        source_code_link: "https://github.com/chardx/chatbot-turbo/",
        live_website_link: "https://www.chadxgpt.online/"
    },
    {
        name: "Tshirt Design Generator",
        description:
            "T-Shirt Design Generator is a dynamic web application that empowers users to unleash their creativity and design custom t-shirts effortlessly. This platform offers a user-friendly interface where you can add logos, choose backgrounds, and even utilize AI for eye-catching designs. Whether it's for personal style statements or branded merchandise, our T-Shirt Design Generator is your go-to tool for crafting unique and stylish t-shirts.",

        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "open Ai Dalle",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: tshirt,
        source_code_link: "https://github.com/chardx/AITshirtGenerator/",
        live_website_link: "https://ai-tshirt-generator.vercel.app/"
    },
    {
        name: "Amazon Web Scraper",
        description:
            "Introducing my Amazon Web Scraper, a cutting-edge tool designed to simplify online shopping on Amazon. It efficiently extracts and presents product information, including names, prices, reviews, and images, in a visually appealing interface built with REACT, Firebase, and Bright Data. Save time, make informed decisions, and enjoy a seamless shopping experience with this reliable and customizable web scraper.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: webscraper,
        source_code_link: "https://github.com/chardx/amazon-webscraper/",
        live_website_link: "https://amazon-webscraper-one.vercel.app/"
    },
];

export { services, technologies, experiences, testimonials, projects };