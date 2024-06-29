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
  subTitle: "Passionate and self-taught MERN stack developer. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1KDQLqVprfI8af7v9XmIp0QO5wabvr5_d/view?usp=sharing",
  mail: "mailto:jeevamk100@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Jeevamk",
  linkedin: "https://www.linkedin.com/in/jeeva-mk/",
  gmail: "jeevamk100@gmail.com",
  instagram: "https://www.instagram.com/__j__ee__v__a__/",
  codewars: "https://www.codewars.com/users/Jeevamk",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using ReactJS",
        "⚡ Proficient in frontend development with HTML5, CSS3,and JavaScript",
        "⚡ Experience with state management libraries like Redux,Context API",
        "⚡ Backend development using Node.js and Express.js",
        "⚡ Knowledge of RESTful API design and integration",
      ],

      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "fab fa-tailwind",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Material Ui",
          fontAwesomeClassname: "simple-icons:tailwind",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "NodeJS",
          iconifyClass: "devicon-nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Expressjs",
          iconifyClass: "devicon-express",
          style: {
            color: "#339933",
          },
        },
      ],
    },

    {
      title: "Front-end Developer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in HTML5 and semantic markup",
        "⚡ Strong command of CSS3 for styling and layout",
        "⚡ Experienced with modern JavaScript (ES6+)",
        "⚡ Familiar with frontend frameworks like React",
      ],

      softwareSkills: [
        {
          skillName: "Html",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Css",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Javascript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "simple-icons:tailwind",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Material Ui",
          // fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Backend Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in backend development using Node.js and Express.js",
        "⚡ Experience with RESTful API design and implementation",
        "⚡ Familiarity with databases like MongoDB or mysql",
        "⚡ Knowledge of cloud platforms like AWS for backend deployment",
      ],
      softwareSkills: [
        {
          skillName: "Nodejs",
          // fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Expressjs",
          // fontAwesomeClassname: "simple-icons:",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "MongoDb",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
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
    profile_image_path: "hrishi2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

// const projects = {
//   data: [
//     {
//       name: "CineScope",
//       url: "https://github.com/Hrishi1999/CineScope",
//       description: "An IMDB-like application.",
//       languages: [
//         {
//           name: "React.js",
//           iconifyClass: "logos-react",
//         },
//         {
//           name: "TypeScript",
//           iconifyClass: "devicon-typescript",
//         },
//         {
//           name: "Node.js",
//           iconifyClass: "devicon-nodejs",
//         },
//         {
//           name: "Express.js",
//           iconifyClass: "devicon-express",
//         },
//         {
//           name: "MongoDB",
//           iconifyClass: "logos-mongodb",
//         },
//       ],
//     },
//     {
//       name: "Journalify",
//       url: "https://play.google.com/store/apps/details?id=com.picle.journalify",
//       description:
//         "You personal journaling companion, goals & daily challenges! About 5k+ downloads on Play Store.",
//       languages: [
//         {
//           name: "Flutter",
//           iconifyClass: "logos-flutter",
//         },
//         {
//           name: "Firebase",
//           iconifyClass: "logos-firebase",
//         },
//       ],
//     },
//     {
//       name: "RecipesAPI",
//       url: "https://rapidapi.com/Hrishi1999/api/recipesapi2",
//       description: "Get recipes for hundreds and thousands of dishes",
//       languages: [
//         {
//           name: "NodeJS",
//           iconifyClass: "logos-nodejs",
//         },
//         {
//           name: "JavaScript",
//           iconifyClass: "logos-javascript",
//         },
//       ],
//     },
//     {
//       name: "opPortfolio",
//       url: "https://github.com/Hrishi1999/opPortfolio",
//       description: "(This) A clean and full customizable portfolio template.",
//       languages: [
//         {
//           name: "ReactJS",
//           iconifyClass: "logos-react",
//         },
//       ],
//     },
//     {
//       name: "Cab Security System",
//       url: " ",
//       description:
//         "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
//       languages: [
//         {
//           name: "Python",
//           iconifyClass: "logos-python",
//         },
//         {
//           name: "Tensorflow",
//           iconifyClass: "logos-tensorflow",
//         },
//         {
//           name: "OpenCV",
//           iconifyClass: "logos-opencv",
//         },
//       ],
//     },
//     {
//       name: "Lensinator",
//       url: " ",
//       description:
//         "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
//       languages: [
//         {
//           name: "JavaScript",
//           iconifyClass: "logos-java",
//         },
//         {
//           name: "Python",
//           iconifyClass: "logos-python",
//         },
//         {
//           name: "Firebase",
//           iconifyClass: "logos-firebase",
//         },
//       ],
//     },
//     {
//       name: "Doorbell.io",
//       url: "https://github.com/Hrishi1999/Doorbell.io",
//       description:
//         "A sound-classifier webapp made with ReactJS + TensorflowJS.",
//       languages: [
//         {
//           name: "Python",
//           iconifyClass: "logos-python",
//         },
//         {
//           name: "ReactJS",
//           iconifyClass: "logos-react",
//         },
//         {
//           name: "TensorflowJS",
//           iconifyClass: "logos-tensorflow",
//         },
//       ],
//     },
//     {
//       name: "Video Summarization",
//       url: "https://github.com/Hrishi1999/Video-Summarization",
//       description:
//         "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
//       languages: [
//         {
//           name: "JavaScript",
//           iconifyClass: "logos-javascript",
//         },
//         {
//           name: "Python",
//           iconifyClass: "logos-python",
//         },
//         {
//           name: "ReactJS",
//           iconifyClass: "logos-react",
//         },
//         {
//           name: "Tensorflow",
//           iconifyClass: "logos-tensorflow",
//         },
//       ],
//     },
//     {
//       name: "Dashboard Activity",
//       url: "https://github.com/Hrishi1999/Dashboard.activity",
//       description:
//         "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
//       languages: [
//         {
//           name: "Python",
//           iconifyClass: "logos-python",
//         },
//       ],
//     },
//     {
//       name: "Project Pickle",
//       url: " ",
//       description:
//         "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
//       languages: [
//         {
//           name: "Java",
//           iconifyClass: "logos-java",
//         },
//         {
//           name: "Firebase",
//           iconifyClass: "logos-firebase",
//         },
//         {
//           name: "Python",
//           iconifyClass: "logos-python",
//         },
//       ],
//     },
//     {
//       name: "Project Health Card",
//       url: "",
//       description:
//         "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
//       languages: [
//         {
//           name: "JavaScript",
//           iconifyClass: "logos-java",
//         },
//         {
//           name: "Python",
//           iconifyClass: "logos-python",
//         },
//         {
//           name: "Firebase",
//           iconifyClass: "logos-firebase",
//         },
//         {
//           name: "ReactJS",
//           iconifyClass: "logos-react",
//         },
//         {
//           name: "MongoDB",
//           iconifyClass: "logos-mongodb",
//         },
//       ],
//     },
//     {
//       name: "Food Classifier",
//       url: " ",
//       description:
//         "A food classifier app using tflite which classfier over 50 Indian Dishes.",
//       languages: [
//         {
//           name: "Flutter",
//           iconifyClass: "logos-flutter",
//         },
//         {
//           name: "Dart",
//           iconifyClass: "logos-dart",
//         },
//         {
//           name: "Tensorflow",
//           iconifyClass: "logos-tensorflow",
//         },
//         {
//           name: "Jupyter Notebook",
//           iconifyClass: "logos-jupyter",
//         },
//       ],
//     },
//     {
//       name: "Image Clustering",
//       url: " ",
//       description:
//         "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
//       languages: [
//         {
//           name: "Python",
//           iconifyClass: "logos-python",
//         },
//         {
//           name: "Jupyter Notebook",
//           iconifyClass: "logos-jupyter",
//         },
//       ],
//     },
//     {
//       name: "Antivirus",
//       url: " ",
//       description:
//         "A project from 2012. Made an antivirus with realtime scanning. Implemented by using comparison of md5 hashes.",
//       languages: [
//         {
//           name: "Visual Basic",
//           iconifyClass: "logos-dotnet",
//         },
//       ],
//     },
//     {
//       name: "Sugar on Windows",
//       url: " ",
//       description:
//         "Run and setup Sugar OS to be able to run on Windows using Windows Subsystem for Linux",
//       languages: [
//         {
//           name: "Visual Basic",
//           iconifyClass: "logos-dotnet",
//         },
//         {
//           name: "Python",
//           iconifyClass: "logos-python",
//         },
//       ],
//     },
//     {
//       name: "Object + Face Detection",
//       url: " ",
//       description: "2017 project. Object detection + accurate face detection.",
//       languages: [
//         {
//           name: "Python",
//           iconifyClass: "logos-python",
//         },
//         {
//           name: "Tensorflow",
//           iconifyClass: "logos-tensorflow",
//         },
//         {
//           name: "OpenCV",
//           iconifyClass: "logos-opencv",
//         },
//       ],
//     },
//     {
//       name: "Image Captioning with Visual Attention",
//       url: " ",
//       description: "Ongoing. Used MSCOCO 2014/2017 for image captioning.",
//       languages: [
//         {
//           name: "Python",
//           iconifyClass: "logos-python",
//         },
//         {
//           name: "Tensorflow",
//           iconifyClass: "logos-tensorflow",
//         },
//         {
//           name: "Jupyter Notebook",
//           iconifyClass: "logos-jupyter",
//         },
//       ],
//     },
//     {
//       name: "DalSocial",
//       url: " ",
//       description:
//         "An Android app to meet new people in the university, organize and join events. ",
//       languages: [
//         {
//           name: "Kotlin",
//           iconifyClass: "simple-icons:kotlin",
//           color: "#F18E33",
//         },
//         {
//           name: "Android",
//           iconifyClass: "simple-icons:android",
//           color: "#3DDC84",
//         },
//         {
//           name: "Firebase",
//           iconifyClass: "logos-firebase",
//         },
//       ],
//     },
//     {
//       name: "HalifaxFoodie",
//       url: " ",
//       description:
//         "CSCI5410 Project. A multi-client recipe app for Halifax Foodies.",
//       languages: [
//         {
//           name: "ReactJS",
//           iconifyClass: "logos-react",
//         },
//         {
//           name: "AWS",
//           iconifyClass: "logos-aws",
//         },
//         {
//           name: "Google Cloud",
//           iconifyClass: "logos-google-cloud",
//         },
//       ],
//     },
//   ],
// };
const projects = {
  data: [
    {
      name: "O' Clock (Ecommerce Watch Store)",
      url: "https://github.com/Jeevamk/O_clock",
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
