/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Jeeva",
  logo_name: "Jeeva mk",
  nickname: "jeeva_mk",
  full_name: "Jeeva Mk",
  subTitle:
    "A software engineer who loves turning complex workflows into simple, reliable products. I build full-stack apps with Node.js, NestJS and React, and I care just as much about the people using them as the code behind them. Right now I'm leading Lead Engine at Cloudstack as Project Coordinator.",
  resumeLink:
    "https://drive.google.com/file/d/1KDQLqVprfI8af7v9XmIp0QO5wabvr5_d/view?usp=sharing",
  mail: "mailto:jeevamkdev@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Jeevamk",
  linkedin: "https://www.linkedin.com/in/jeeva-mk/",
  gmail: "jeevamkdev@gmail.com",
  instagram: "https://www.instagram.com/__j__ee__v__a__/",
  codewars: "https://www.codewars.com/users/Jeevamk",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building end-to-end products with React.js, Next.js, Node.js and NestJS",
        "⚡ Designing message-driven microservices with RabbitMQ and BullMQ",
        "⚡ Workflow automation, concurrency control and fault-tolerant job processing",
        "⚡ Role-based access control, OAuth 2.0 and JWT authentication across backend and frontend",
        "⚡ Manual and automated testing, from unit tests to cross-browser testing",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {},
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {},
        },
        { skillName: "React", fontAwesomeClassname: "logos:react", style: {} },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#888888" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: {},
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "logos:nestjs",
          style: {},
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
          style: {},
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql-icon",
          style: {},
        },
        { skillName: "Redis", fontAwesomeClassname: "logos:redis", style: {} },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {},
        },
        { skillName: "Git", fontAwesomeClassname: "logos:git-icon", style: {} },
      ],
    },
    {
      title: "Project Coordinator",
      fileName: "DesignImg",
      skills: [
        "⚡ Project Coordinator for We-Connect Lead Engine, a large-scale LinkedIn and email automation platform",
        "⚡ Own end-to-end feature planning and execution, from requirements through development, testing and release",
        "⚡ Defined all product features and wrote the complete technical and feature documentation",
        "⚡ Plan and coordinate sprints in Trello, working closely across departments",
        "⚡ Lead security vulnerability management with external bug bounty hunters and internal teams",
        "⚡ Awarded Sprint Champion (2026) and Perfect Sync (2025) for sprint impact and collaboration",
      ],
      softwareSkills: [
        {
          skillName: "Trello",
          fontAwesomeClassname: "logos:trello",
          style: {},
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "logos:slack-icon",
          style: {},
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "logos:gitlab-icon",
          style: {},
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#888888" },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "logos:postman-icon",
          style: {},
        },
        {
          skillName: "BrowserStack",
          fontAwesomeClassname: "logos:browserstack",
          style: {},
        },
      ],
    },
    {
      title: "Front-end Developer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building responsive interfaces with React.js, Next.js and Tailwind CSS",
        "⚡ State and data management with Redux Toolkit and React Query",
        "⚡ Forms and validation with Formik and Yup, charts with Chart.js, multi-language support with i18next",
        "⚡ UI libraries including Ant Design and Bootstrap 5",
        "⚡ Embeddable JavaScript SDKs, such as a multi-iframe chat widget",
        "⚡ Testing with Jest, Vitest, React Testing Library and Playwright",
      ],
      softwareSkills: [
        { skillName: "HTML5", fontAwesomeClassname: "logos:html-5", style: {} },
        { skillName: "CSS3", fontAwesomeClassname: "logos:css-3", style: {} },
        { skillName: "React", fontAwesomeClassname: "logos:react", style: {} },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#888888" },
        },
        {
          skillName: "Redux Toolkit",
          fontAwesomeClassname: "logos:redux",
          style: {},
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {},
        },
        {
          skillName: "Ant Design",
          fontAwesomeClassname: "logos:ant-design",
          style: {},
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {},
        },
        { skillName: "Jest", fontAwesomeClassname: "logos:jest", style: {} },
        {
          skillName: "Playwright",
          fontAwesomeClassname: "logos:playwright",
          style: {},
        },
        {
          skillName: "Vitest",
          fontAwesomeClassname: "logos:vitest",
          style: {},
        },
      ],
    },
    {
      title: "Backend Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Scalable services and RESTful APIs with Node.js, Express.js and NestJS, documented with Swagger",
        "⚡ Queues and real-time messaging with RabbitMQ, BullMQ, Redis, Socket.io and webhooks",
        "⚡ Databases: MongoDB (Mongoose, aggregation pipelines), MySQL with TypeORM, and Redis",
        "⚡ Security: JWT, OAuth 2.0, Passport.js, RBAC and AES-256-GCM encryption",
        "⚡ DevOps with Docker, Nginx, PM2, AWS S3 and Fluentd logging",
        "⚡ Integrations and automation with n8n, Slack, Trello and Google Sheets APIs",
      ],
      softwareSkills: [
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: {},
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#888888" },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "logos:nestjs",
          style: {},
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "logos:rabbitmq-icon",
          style: {},
        },
        { skillName: "Redis", fontAwesomeClassname: "logos:redis", style: {} },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
          style: {},
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql-icon",
          style: {},
        },
        {
          skillName: "Socket.io",
          fontAwesomeClassname: "simple-icons:socketdotio",
          style: { color: "#888888" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {},
        },
        { skillName: "Nginx", fontAwesomeClassname: "logos:nginx", style: {} },
        {
          skillName: "AWS S3",
          fontAwesomeClassname: "logos:aws-s3",
          style: {},
        },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "logos:swagger",
          style: {},
        },
        {
          skillName: "n8n",
          fontAwesomeClassname: "simple-icons:n8n",
          style: { color: "#EA4B71" },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Calicut University",
      subtitle: "Bachelor of Science in Physics",
      logo_path: "dal.png",
      alt_name: "DAL",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ Completed graduation in Physics with a core focus on Computer Science",
        "⚡ Studied foundational concepts in Computer Science including C programming and basics of Python",
        "⚡ Gained knowledge in Software Development Concepts",
      ],
    },
  ],
};

// const certifications = {
//   certifications: [
//     {
//       title: "AWS Developer Associate",
//       subtitle: "Amazon Web Services",
//       logo_path: "aws.png",
//       certificate_link:
//         "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
//       alt_name: "AWS",
//       color_code: "#ffc475",
//     },
//     {
//       title: "AWS Certified Cloud Practioner",
//       subtitle: "Amazon Web Services",
//       logo_path: "aws.png",
//       certificate_link:
//         "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
//       alt_name: "AWS",
//       color_code: "#ffc475",
//     },
//     {
//       title: "Google Summer of Code 2019",
//       subtitle: "Google / Sugar Labs",
//       logo_path: "google_logo.png",
//       certificate_link: " ",
//       alt_name: "Google",
//       color_code: "#ffc475",
//     },
//     {
//       title: "Google Code-In Student",
//       subtitle: "2014-2017",
//       logo_path: "google_logo.png",
//       certificate_link: " ",
//       alt_name: "Google",
//       color_code: "#1e70c1",
//     },
//     {
//       title: "Google Summer of Code Mentor",
//       subtitle: "2017 / 2018 / 2020",
//       logo_path: "google_logo.png",
//       certificate_link: " ",
//       alt_name: "Google",
//       color_code: "#ffbfae",
//     },
//     {
//       title: "Google Code-In Mentor",
//       subtitle: "2017 / 2018 / 2019",
//       logo_path: "google_logo.png",
//       certificate_link: " ",
//       alt_name: "Google",
//       color_code: "#b190b0",
//     },
//     {
//       title: "Deep Learning Specialization",
//       subtitle: "deeplearning.ai",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
//       alt_name: "deeplearning.ai",
//       color_code: "#47A048",
//     },
//     {
//       title: "Sequence Models",
//       subtitle: "deeplearning.ai",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
//       alt_name: "deeplearning.ai",
//       color_code: "#F6B808",
//     },
//     {
//       title: "Convolutional Neural Networks",
//       subtitle: "deeplearning.ai",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
//       alt_name: "deeplearning.ai",
//       color_code: "#2AAFED",
//     },
//     {
//       title: "Structuring Machine Learning Projects",
//       subtitle: "deeplearning.ai",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
//       alt_name: "deeplearning.ai",
//       color_code: "#E2405F",
//     },
//     {
//       title: "Machine Learning",
//       subtitle: "deeplearning.ai",
//       logo_path: "stanford_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
//       alt_name: "Stanford University",
//       color_code: "#8C151599",
//     },
//     {
//       title: "Neural Networks and Deep Learning",
//       subtitle: "deeplearning.ai",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
//       alt_name: "Google",
//       color_code: "#7A7A7A",
//     },
//     {
//       title: "Improving Deep Neural Networks",
//       subtitle: "deeplearning.ai",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "Android Developer Nanodegree",
//       subtitle: "Part of Google India Scholarship Program",
//       logo_path: "100.png",
//       certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
//       alt_name: "Google",
//       color_code: "#C5E2EE",
//     },
//     {
//       title: "InOut 4.0 Winner #2",
//       subtitle: "2017",
//       logo_path: "ino.png",
//       certificate_link: " ",
//       alt_name: "InOut",
//       color_code: "#fffbf3",
//     },
//   ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship",
  description:
    "I've completed two internships. I've  done projects on my own and I am actively looking for job. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Cloudstack Automation Pvt Ltd.",
          company_url: "https://cloudstackai.com/",
          logo_path: "cloudstack_logo.svg",
          duration: "Aug 2024 - Present",
          location: "Calicut, Kerala",
          description:
            "Software Engineer with a strong backend focus, building scalable services with Node.js, NestJS, React.js, Next.js, MongoDB and MySQL. Project Coordinator for Lead Engine, a large-scale LinkedIn and email automation platform, and primary point of contact for platform security vulnerabilities.",
          awards: [
            { name: "Sprint Champion", year: "2026" },
            { name: "Perfect Sync", year: "2025" },
          ],
          projects: [
            {
              name: "We-Connect Lead Engine",
              period: "2026 - Present",
              stack: [
                "NestJS",
                "TypeScript",
                "BullMQ",
                "Redis",
                "MongoDB",
                "MySQL",
                "REST APIs",
              ],
              highlights: [
                {
                  title: "Project Coordination & Feature Ownership",
                  text:
                    "Led end-to-end feature planning and execution for a workflow-based LinkedIn and email campaign automation platform; defined all features, wrote the complete technical documentation and coordinated sprints in Trello.",
                },
                {
                  title: "Campaign Execution Engine",
                  text:
                    "Owned the execution logic, including node execution, bot action dispatch, delays, campaign status transitions, loop-safe rerouting with backward history rewind and progress recovery after dispatch failures.",
                },
                {
                  title: "Template-Based Workflow Execution",
                  text:
                    "Built execution for campaigns created from predefined workflow templates, letting users launch ready-made multi-step outreach flows.",
                },
                {
                  title: "AI Support Agent Endpoints",
                  text:
                    "Built the APIs behind the platform's AI assistant, which writes and refines personalized replies to leads, detects whether a lead's response is positive or negative, scores and qualifies leads automatically, and adds AI-personalized text to outreach messages with a live preview.",
                },
                {
                  title: "Node & Campaign Profile Management",
                  text:
                    "Built tracking for every step of a campaign workflow, including automated lead-research and lead-qualification steps, and managed each lead's journey through a campaign, with eligibility checks, pausing and resuming individual leads, and automatic retries.",
                },
                {
                  title: "Concurrency & Queue Processing",
                  text:
                    "Built a concurrency-safe InMail credit system with locking, daily-limit enforcement and one-by-one BullMQ processing, plus a retry system that separates retryable from non-retryable errors.",
                },
                {
                  title: "Performance Optimization",
                  text:
                    "Optimized slow campaign and contact endpoints by replacing per-profile lookups with batch profile fetching and serving AI-assist fields directly from the database, reducing response times.",
                },
                {
                  title: "Lead Enrichment & Data Import",
                  text:
                    "Built bulk and type-based email enrichment with credit tracking, and CSV lead import with automatic column mapping.",
                },
                {
                  title: "Testing & QA",
                  text:
                    "Tested and validated workflow behavior before release, including cross-browser testing on BrowserStack.",
                },
              ],
            },
            {
              name: "We-Link API",
              period: "2024 - 2025",
              stack: [
                "NestJS",
                "React",
                "Redux Toolkit",
                "RabbitMQ",
                "BullMQ",
                "Redis",
                "n8n",
              ],
              highlights: [
                {
                  title: "Microservices & Messaging",
                  text:
                    "Set up RabbitMQ publishers and consumers, BullMQ with Redis and Fluentd log transport from scratch, with a global response middleware and centralized error handling.",
                },
                {
                  title: "Role-Based Access Control",
                  text:
                    "Designed RBAC for team members and per-key API permissions, enforced across backend APIs and the dashboard, reports and settings screens.",
                },
                {
                  title: "Authentication & Notifications",
                  text:
                    "Built OTP-based sign-up and password reset with JWT and Passport, a webhook consumer and queue-based email notifications.",
                },
                {
                  title: "Workflow Automation",
                  text:
                    "Integrated n8n workflows connecting We-Link with internal services and external platforms.",
                },
                {
                  title: "Frontend & Testing",
                  text:
                    "Built team and API key management in React with search, filters and validation, and wrote unit tests for the core settings modules.",
                },
              ],
            },
            {
              name: "Sappy - Customer Support Chat Platform",
              period: "2025",
              stack: [
                "Node.js",
                "React",
                "JavaScript SDK",
                "Webpack",
                "i18next",
              ],
              highlights: [
                {
                  title: "Backend APIs",
                  text:
                    "Built REST APIs for live chat, ticketing, user conversations, notifications and Help Center integrations.",
                },
                {
                  title: "Embeddable Widget SDK",
                  text:
                    "Built a multi-iframe JavaScript SDK that coordinates launcher, notification and chat frames over postMessage, with notification stacking and unread counts.",
                },
                {
                  title: "Customization & Localization",
                  text:
                    "Exposed 20+ script-side options (theming, tabs, operating hours, AI agent and team conversations) and added multi-language support with automatic language detection.",
                },
              ],
            },
            {
              name: "Warehouse - IP & Proxy Management Service",
              period: "2025 - 2026",
              stack: ["NestJS Microservices", "RabbitMQ", "Redis", "MongoDB"],
              highlights: [
                {
                  title: "IP Lifecycle Management",
                  text:
                    "Built IP allocation, rotation, termination and quarantine, with a cron job that releases quarantined IPs automatically.",
                },
                {
                  title: "Bulk IP Management",
                  text:
                    "Built bulk IP import with IP-range expansion, duplicate handling, validation and excluded-range filtering.",
                },
                {
                  title: "Proxy Selection & Fallback",
                  text:
                    "Built provider selection with fallback across Bright Data data center, ISP and internal proxies, with Slack alerts when no suitable IPs are available.",
                },
              ],
            },
            {
              name: "Simpliq",
              period: "2025",
              stack: ["NestJS", "MongoDB"],
              highlights: [
                {
                  title: "Settings APIs",
                  text:
                    "Built REST endpoints for user profiles, profile image upload, notification preferences, team permissions, and AI, LinkedIn-limit, schedule and integration settings.",
                },
              ],
            },
          ],
          color: "#7B5CFF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Mern Stack Developer Intern",
          company: "Self stack",
          company_url: "https://www.selfstack.in/",
          logo_path: "self_stack_logo.jpeg",
          duration: "June 2023 - Present",
          location: "Calicut",
          description:
            "Contributed as a MERN Stack Intern at Self Stack in Calicut, actively participating in the development and improvement of web applications.. ",
          color: "#0071C5",
        },
        {
          title: "Python Full Stack Developer",
          company: "Techolas Technology",
          company_url: "https://www.techolas.com/",
          logo_path: "techolas.png",
          duration: "Aug 2022 - Mar 2023",
          location: "Calicut",
          description:
            "Contributed as a Python Full Stack Developer at Techolas Technologies in Calicut, focusing on building and maintaining web applications using Django.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Mern stack projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "+91-7510328839  jeevamkdev@gmail.com",
    subtitle: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Taskvane",
      url: "https://taskvane-fawn.vercel.app/",
      description:
        "A multi-tenant SaaS platform that keeps Trello, Google Sheets and Slack in sync, with secure OAuth and reliable, duplicate-free syncing.",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript-icon",
        },
        {
          name: "NestJS",
          iconifyClass: "logos-nestjs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Trello",
          iconifyClass: "logos-trello",
        },
        {
          name: "Slack",
          iconifyClass: "logos-slack-icon",
        },
      ],
    },
    {
      name: "Carbon Atlas",
      url: "https://carbon-atlas-eta.vercel.app",
      description:
        "An interactive D3 explorer of CO2 emissions for every country from 1950 to 2025, with animated bubble, ranking and trend charts.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "D3.js",
          iconifyClass: "logos-d3",
        },
        {
          name: "Vite",
          iconifyClass: "logos-vitejs",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "O' Clock (Ecommerce Watch Store)",
      url: "https://www.oclock.digital/",
      description:
        "A secure and feature-rich ecommerce website for selling watches with secure authentication, admin dashboard, and RazorPay integration.",
      languages: [
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Student Management System",
      url: "https://github.com/Jeevamk/Express_CRUD",
      description:
        "A comprehensive student management system using Express.js and EJS for server-side rendering and CRUD operations.",
      languages: [
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "EJS",
          iconifyClass: "logos-ejs",
        },
      ],
    },
    {
      name: "Image Gallery and QR Code Generator",
      url: "https://qr-code-generator-ui.vercel.app/",
      description:
        "A full-stack application integrating a React.js frontend and an Express.js backend for creating an image gallery and QR code generator.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Event Calendar",
      url: "https://calender-react-silk.vercel.app/",
      description:
        "A user-friendly event calendar using React for easy scheduling and tracking of events.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "User Management System",
      url: "https://github.com/Jeevamk/mongo_login",
      description:
        "A user management system with registration, authentication, and authorization using Node.js, Express.js, and MongoDB.",
      languages: [
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Food Delivery App",
      url: "https://github.com/Jeevamk/React-FoodApp",
      description:
        "A food delivery app using React.js for the front-end and Tailwind CSS for stylish, adaptable design, integrated with Swiggy API.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Tailwind CSS",
          iconifyClass: "logos-tailwindcss",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "To-Do App",
      url: "https://to-do-react-teal.vercel.app/",
      description:
        "A To-Do List app using React and CSS with features to add, edit, mark as done, and delete tasks.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Income Expense Calculator",
      url: "https://github.com/Jeevamk/IncomeExpanceCalculator",
      description:
        "A dynamic income and expense calculator using JavaScript and Chart.js for data visualization.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Chart.js",
          iconifyClass: "logos-chartjs",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  // certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
