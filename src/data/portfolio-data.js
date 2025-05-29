export const personalInfo = {
  name: "Muhammad Salmaan Nagoormira",
  title: "Software Engineer",
  email: "salmaan_kmn@hotmail.com",
  phone: "0415442975",
  github: "https://github.com/Nugetzrul3",
  linkedin: "https://linkedin.com/in/salmaan-nagoormira",
  resume: "/resume.pdf",
  image: "/me.png",
  bio: "Junior Software Engineer with experience in full-stack development, blockchain technology, and mobile app development. Bachelor of Computer Science graduate from RMIT University with a 3.2 GPA. Passionate about creating innovative solutions and contributing to open-source projects."
};

export const education = [
  {
    institution: "RMIT, Melbourne",
    degree: "Bach. Computer Science w/ Distinction",
    period: "2022-2024"
  },
  {
    institution: "Werribee Secondary College, Victoria",
    degree: "VCE",
    period: "2021"
  }
];

export const certifications = [
  {
    name: "AWS Cloud Foundations",
    url: "https://www.credly.com/badges/7cf7b04e-a2a6-4e65-aef1-1b65710d65af/linked_in_profile"
  },
  {
    name: "TryHackMe Pre Security",
    url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-W5CFOXKJFX.pdf"
  }
];

export const skills = {
  frameworks: ['FastAPI', 'SQLModel', 'SpringBoot', 'Flask', 'AWS Cloud Services', 'Bootstrap', 'ReactJS', 'NodeJS', 'Sequelize', 'Express'],
  languages: ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'C++', 'SQL', 'Kotlin', 'Rust'],
  architectures: ['MVVM', 'MVC', 'MERN', 'Microservices']
};

export const skillsWithProficiency = {
  languages: [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Kotlin', level: 75 },
    { name: 'C++', level: 70 },
    { name: 'Rust', level: 60 }
  ],
  frameworks: [
    { name: 'ReactJS', level: 85 },
    { name: 'FastAPI', level: 90 },
    { name: 'NodeJS', level: 80 },
    { name: 'Flask', level: 85 },
    { name: 'SpringBoot', level: 75 },
    { name: 'Express', level: 80 },
    { name: 'AWS Cloud Services', level: 70 },
    { name: 'Bootstrap', level: 85 }
  ]
};

export const quickStats = [
  {
    number: '2',
    label: 'Years Experience',
    description: 'In software development'
  },
  {
    number: '10+',
    label: 'Projects Completed',
    description: 'Across various technologies'
  },
  {
    number: '15+',
    label: 'Technologies',
    description: 'Languages & frameworks'
  }
];

export const interests = ['Photography', 'Cars', 'PC Building', 'PC Gaming', 'Lego', 'Gym', 'Drawing', "Rubik's Cube"];

export const navigation = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' }
];

export const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Freight Cyber",
    location: "Melbourne, Australia",
    date: "Nov 2024 - Present",
    details: [
      "Developed and tested APIs for the FCX Drive mobile application using NodeJS, Sequelize, and Express, allowing for seamless and fast communication between the application and the backend server.",
      "Deployed REST API server to AWS EC2 instance using GitHub CI/CD workflows and AWS Secret Manager, ensuring that deployments are smooth and seamless while securely storing and retrieving API keys.",
      "Used Java/Kotlin to integrate APIs and develop new, responsive and user-friendly pages for the FCX Drive application while following the MVVM architecture to ensure coherent and readable code. Automated deployment using Firebase and CI/CD.",
      "Worked with the client using the Agile methodology, ensuring that app requirements were met through daily standups and team coordination."
    ]
  },
  {
    title: "Junior Python Developer",
    company: "CodePillow",
    location: "Seoul, South Korea",
    date: "Dec 2021 - Feb 2023",
    details: [
      "Built backend for an NFT game based in South Korea using FastAPI and SQLModel.",
      "Gained 580 active users, with over 1 million games played and 9 thousand NFTs issued.",
      "Connected a local node to a backend with database support for blockchain exploration, built with FastAPI and SQLModel.",
      "Gained over 1000+ views and had more than 100 active users per day."
    ]
  },
  {
    title: "Freelancer",
    company: "Upwork Australia",
    location: "Melbourne, Australia",
    date: "Aug 2021 - Sep 2021",
    details: [
      "Built a Telegram bot to prevent spam in a channel using Telegram JS API and SQLite database, preventing over 100 spammers from advertising malicious links.",
      "Kept constant communication with the channel owner to ensure that the requirements were met."
    ]
  },
  {
    title: "Freelancer",
    company: "Centralex Exchange",
    location: "Hong Kong, China",
    date: "Nov 2020",
    details: [
      "Built a verification bot for a Discord server to prevent spam using Discord.py and SQLite database. Blocked 300+ bot accounts from flooding the server.",
      "Kept constant communication with the server owner to ensure that the requirements were met."
    ]
  }
];

export const projects = [
  {
    title: "Web Browser Extensions",
    category: "Open Source",
    technologies: ["JavaScript", "HTML/CSS", "Chrome API"],
    details: [
      "Developed web browser extensions using JavaScript and HTML/CSS to mobilise standard desktop wallet for convenience.",
      "Created project as an open-source project to allow other cryptocurrency projects to mobilise their desktop wallets.",
      "Received 7 stars and has 10 forks and over 500+ active users on the Chrome Web Store."
    ]
  },
  {
    title: "Android Cryptocurrency Miner",
    category: "Mobile Development",
    technologies: ["Kotlin", "C++", "Android SDK"],
    details: [
      "Developed Android app with Kotlin and C++ so Android phones can mine cryptocurrencies as opposed to using computers.",
      "Created project as an open-source project so that other cryptocurrencies can use the code as a reference for their apps.",
      "Received 4 stars and has 5 forks, gaining 200+ downloads and a 4.5-star rating on the Google App Store."
    ]
  },
  {
    title: "Price Comparison Webstore",
    category: "Academic Project",
    technologies: ["MySQL", "Docker", "AWS", "Agile"],
    details: [
      "Built a price comparison website from an interview with the product owner using Agile model with a group of 6 students.",
      "Created user stories, SRS, ERD, and designed and implemented MySQL database for the website backend.",
      "Successfully deployed and hosted the website on a public domain using a Docker environment hosted on AWS cloud."
    ]
  },
  {
    title: "Minecraft MITM Attack Prevention",
    category: "Security Research",
    technologies: ["RSA Encryption", "SHA256-HMAC", "BurpSuite"],
    details: [
      "Secured communication between Minecraft server and MCPI client using a CCA-secure protocol to prevent packet sniffing.",
      "Modified Minecraft Server files and MCPI library by implementing RSA encryption and SHA256-HMAC authentication.",
      "Successfully demonstrated implementation secureness using BurpSuite by attacking the connection using MITM attacks."
    ]
  }
];