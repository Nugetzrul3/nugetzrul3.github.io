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
    title: "Price Comparison Webstore",
    category: ["Academic Project", "Full-stack"],
    technologies: ["MySQL", "Docker", "AWS", "Agile", "Springboot"],
    details: [
      "Built a price comparison website from an interview with the product owner using Agile model with a group of 6 students.",
      "Created user stories, SRS, ERD, and designed and implemented MySQL database for the website backend.",
      "Successfully deployed and hosted the website on a public domain using a Docker environment hosted on AWS cloud."
    ]
  },
  {
    title: "Android Cryptocurrency Miner",
    category: ["Mobile Development", "Open Source"],
    technologies: ["Kotlin", "C++", "Android SDK"],
    githubUrl: "https://github.com/Nugetzrul3/Sugarchain-Android-Miner",
    details: [
      "Developed Android app with Kotlin and C++ so Android phones can mine cryptocurrencies as opposed to using computers.",
      "Created project as an open-source project so that other cryptocurrencies can use the code as a reference for their apps.",
      "Received 4 stars and has 5 forks, gaining 200+ downloads and a 4.5-star rating on the Google App Store."
    ]
  },
  {
    title: "TaskManager CLI",
    category: ["Open Source", "CLI Application"],
    technologies: ["Rust", "Serde", "JSON", "File I/O"],
    githubUrl: "https://github.com/Nugetzrul3/TaskManager-Rust-CLI",
    details: [
      "Built a command-line task management application in Rust for efficient personal productivity tracking with persistent storage.",
      "Implemented JSON-based data persistence using Serde for serialization/deserialization, enabling tasks to be saved to and loaded from files.",
      "Designed clean CLI interface for task CRUD operations while learning Rust fundamentals including ownership, error handling, and the crate ecosystem."
    ]
  },
  {
    title: "AOKChain SwapIndex",
    category: ["Open Source", "Cryptocurrency"],
    technologies: ["Python", "FastAPI", "SQLModel", "Blockchain APIs"],
    githubUrl: "https://github.com/AokChain/SwapIndex",
    details: [
      "Collaborated with AOKChain team to build an API service that indexes and tracks token swap transactions on the AOK blockchain.",
      "Designed REST endpoints using FastAPI and SQLModel for efficient querying of swap data and transaction history.",
      "Implemented database architecture to store and organize swap events, enabling real-time analytics for the AOK ecosystem."
    ]
  },
  {
    title: "Telegram Tip-Bot",
    category: ["Open Source", "Bot Development"],
    technologies: ["Telegram API", "Python", "REST API"],
    githubUrl: "https://github.com/Nugetzrul3/SugarchainTGBot",
    details: [
      "Developed a Telegram bot enabling cryptocurrency tipping within chat communities using Sugarchain (SUGAR).",
      "Implemented REST API integration with Sugarchain network for real-time balance checking and transaction processing.",
      "Built daemon-free architecture using python-bitcoin-utils library for lightweight wallet operations and transaction signing."
    ]
  },
  {
    title: "Web Browser Extensions",
    category: ["Open Source", "Extension Development"],
    technologies: ["JavaScript", "HTML/CSS", "Chrome API"],
    githubUrl: "https://github.com/Nugetzrul3/Sugarchain-Chrome-Wallet",
    details: [
      "Developed web browser extensions using JavaScript and HTML/CSS to mobilise standard desktop wallet for convenience.",
      "Created project as an open-source project to allow other cryptocurrency projects to mobilise their desktop wallets.",
      "Received 7 stars and has 10 forks and over 500+ active users on the Chrome Web Store."
    ]
  },
  {
    title: "CPU GUI Miner",
    category: ["Open Source", "Desktop Application"],
    technologies: ["Python", "GUI Framework", "Process Management"],
    githubUrl: "https://github.com/Nugetzrul3/CPU-GUI-Miner",
    details: [
      "Developed a cross-platform GUI application for CPU cryptocurrency mining supporting 20+ mining algorithms including yespower, yescrypt, and argon2d variants.",
      "Integrated RickillerZ's cpuminer backend with custom GUI wrapper, enabling both solo and pool mining configurations.",
      "Implemented process management and configuration persistence, allowing users to save mining setups and safely terminate background processes."
    ]
  },
  {
    title: "Minecraft MITM Attack Prevention",
    category: ["Security Research", "Cryptography"],
    technologies: ["RSA Encryption", "SHA256-HMAC", "BurpSuite"],
    details: [
      "Secured communication between Minecraft server and MCPI client using a CCA-secure protocol to prevent packet sniffing.",
      "Modified Minecraft Server files and MCPI library by implementing RSA encryption and SHA256-HMAC authentication.",
      "Successfully demonstrated implementation secureness using BurpSuite by attacking the connection using MITM attacks."
    ]
  },
  
];