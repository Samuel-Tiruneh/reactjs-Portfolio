
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "SAMuel",
  logo_name: "SAMuel",
  nickname: "SamiAPL",
  full_name: "Samuel Tiruneh",
  subTitle:
    "Website Developer, UI/UX Designer",
  mail: "samuelplusweb@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Samuel-Tiruneh",
  linkedin: "https://www.linkedin.com/in/samuel-tiruneh-153249285/",
  gmail: "samuelplusweb@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/sam.ap.5036/",
  twitter: "https://twitter.com/SamuelTirunehX",
  telegram: "https://t.me/samiAPL"
};

const skills = {
  data: [
    {
      title: "Front End Development",
      fileName: "FullStackImg",
      skills: [
        "🎈 design beautiful websites with HTML, CSS, and JavaScript.",
        "🎈 I use modern frameworks and tools for Front end development.",
        "🎈 I have extensive experience in frontend development.",
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
          skillName: "CSS5",
          fontAwesomeClassname: "simple-icons:css3",
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
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
      ],
    },

    {
      title: "Back-End Development",
      fileName: "CloudInfraImg",
      skills: [
        "🎈 Starter.",
       ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#FF9900",
          },
        },
   
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#f89820",
          },
        },
    
      
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DataScienceImg",
      skills: [
        "🎈 Experienced in UI/UX design with various projects.",
        "🎈 UI/UX design is my passion and expertise.",
        "🎈 I use modern trends and best practices for UI/UX design.",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#E94E32",
          },
        },
       
      ],
    },
  ],
};


const certifications = {
  certifications: [
    {
      title: "Indroduction to Frontend Development",
      subtitle: "An online non-credit course authorized by Meta and offered through Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
      alt_name: "FrontEnd",
      color_code: "#ffc475",
    },
    {
      title: "Programming w ith JavaScript",
      subtitle: "An online non-credit course authorized by Meta and offered through Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: "https://coursera.org/verify/5F3EJENRFA9T",
      alt_name: "JavaScript",
      color_code: "#ffc475",
    },
    {
      title: "HTML and CSS in depth",
      subtitle: "An online non-credit course authorized by Meta and offered through Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: "https://coursera.org/verify/LS8AN3G9LXP7",
      alt_name: "HTML/CSS",
      color_code: "#1e77d3",
    },
    {
      title: "Introduction to Back-End Development",
      subtitle: "An online non-credit course authorized by Meta and offered through Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: "https://coursera.org/verify/GV84CHPAKT43",
      alt_name: "BackEnd",
      color_code: "#1e70c1",
    },
   
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "I have over 2 years of experience in website development",
  description:
    "With over 2 years of experience in website development, I have demonstrated my skills and expertise by working on various projects using a range of technologies. I have simplified the process of creating websites by efficiently utilizing different tools and techniques to develop successful projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Frontend Development",
      experiences: [
        {
         
          logo_path: "fronte.jpg",
          
          description:
            "With a solid background of over 2 years in front-end development, I have showcased my proficiency by completing more than 50 projects. my experience has enabled me to master various front-end technologies.",
          color: "#f10000",
        },
       
      ],
    },
    {
      title: "Backend Development",
      experiences: [
        {
          
          logo_path: "backendee.png",
          
          description:
            "Starter. ",
          color: "#ee3c26",
        },
     
      ],
    },
    {
      title: "UI/UX Design",
      experiences: [
        {
          logo_path: "figmae.jpeg",
         
          description:
            "With more than a year of experience designing in Figma, I have honed my skills in using this powerful collaborative prototyping tool to create visually appealing and functional user interfaces and user experiences",
          color: "#4285F4",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Most of my projects listed here are frontend projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Get in Touch",
    profile_image_path: "profile.png",
    description:
      "I'm happy to work on new things. Clients and anyone who wants to work cooperatively with me can contact me with the following social media links.",
  },
  blogSection: {
   
  },
};

const projects = {
  data: [
    {
      name: "Music Website",
      url: "",
      description: "A music website that fetches data from Spotify's API",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Tailwind",
          iconifyClass: "logos:tailwindcss-icon",
        },
        {
          name: "Figma",
          iconifyClass: "logos-figma",
        },
      ],
    },
    {
      name: "Movie Website",
      url: "",
      description: "Amazing Design Ethiopian Movie Store",
      languages: [
        {
          name: "HTML",
          iconifyClass: "devicon:html5",
        },
        {
          name: "CSS",
          iconifyClass: "devicon:css3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Figma",
          iconifyClass: "logos-figma",
        },
        
      ],
    },
   
    {
      name: "Weather App",
      url: "",
      description: "Get Weather Informations all over the world",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "API",
          iconifyClass: "material-symbols:api",
        },
      ],
    },
    {
      name: "Eco AI",
      url: "",
      description: "Future Open AI Landing page",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "Figma",
          iconifyClass: "logos-figma",
        },
      ],
    },
    {
      name: "Restaurant Website",
      url: " ",
      description:
        "A stunning dining website built with React can offer a visually appealing and user-friendly experience for visitors",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Tailwind",
          iconifyClass: "logos:tailwindcss-icon",
        },
        {
          name: "Figma",
          iconifyClass: "logos-figma",
        },
       
      ],
    },
    {
      name: "E-commerce Website",
      url: " ",
      description:
        "Clothing E-commerce website",
      languages: [
        {
          name: "HTML",
          iconifyClass: "devicon:html5",
        },
        {
          name: "CSS",
          iconifyClass: "devicon:css3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Figma",
          iconifyClass: "logos-figma",
        },
      ],
    },
    {
      name: "Flight Booking Website",
      url: " ",
      description:
        "Responsive Flight Booking website",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
 
        {
          name: "Figma",
          iconifyClass: "logos-figma",
        },
       
      ],
    },
    {
      name: "Black Jack Game",
      url: "https://github.com/Hrishi1999/Doorbell.io",
      description:
        "Sum 21 Card Game",
      languages: [
        {
          name: "HTML",
          iconifyClass: "devicon:html5",
        },
        {
          name: "CSS",
          iconifyClass: "devicon:css3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Chrome Extension",
      url: "https://github.com/Hrishi1999/Video-Summarization",
      description:
        "Extension for chrome that saves favourite searches",
      languages: [
        {
          name: "HTML",
          iconifyClass: "devicon:html5",
        },
        {
          name: "CSS",
          iconifyClass: "devicon:css3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Math for Kids",
      url: "https://github.com/Hrishi1999/Dashboard.activity",
      description:
        "Game like app that help kids learn basic mathimaical operations",
      languages: [
        {
          name: "HTML",
          iconifyClass: "devicon:html5",
        },
        {
          name: "CSS",
          iconifyClass: "devicon:css3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Hotel Website",
      url: " ",
      description:
        "A bed booking hotel website for simplifying booking process.",
      languages: [
        {
          name: "HTML",
          iconifyClass: "devicon:html5",
        },
        {
          name: "CSS",
          iconifyClass: "devicon:css3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Hair salon Website",
      url: "",
      description:
        "A wowme hair salon website that include many services including tutorials.",
      languages: [
        {
          name: "HTML",
          iconifyClass: "devicon:html5",
        },
        {
          name: "CSS",
          iconifyClass: "devicon:css3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
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
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
