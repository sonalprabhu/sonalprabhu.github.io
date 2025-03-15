/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sonal's Portfolio",
  description:
    "A passionate individual who thrives on building end-to-end AI solutions, optimizing models for efficiency, and deploying scalable systems to drive real-world impact.",
  og: {
    title: "Sonal Prabhu Portfolio",
    type: "website",
    url: "http://sonalprabhu.com/",
  },
};

//Home Page
const greeting = {
  title: "Sonal Prabhu",
  logo_name: "SonalPrabhu",
  nickname: "",
  subTitle:
    "A passionate individual who thrives on building end-to-end AI solutions, optimizing models for efficiency, and deploying scalable systems to drive real-world impact.",
  resumeLink:
    "https://drive.google.com/file/d/1kzasC2SbPOdpRrVWG_AQ9oZoVhAsid_e/view?usp=drive_link",
  portfolio_repository: "https://github.com/sonalprabhu/portfolio_website",
  githubProfile: "https://github.com/sonalprabhu",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/sonalprabhu",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sonalsprabhu/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sprabh35@asu.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building and deploying scalable AI and machine learning models for real-world applications",
        "⚡ Experience working on NLP, CV, and deep learning projects ", 
        "⚡ Optimizing transformer models for efficient training and inference using multiprocessing and DeepSpeed",  
        "⚡ Large-scale data processing with Dask and PySpark for ML workflows"  
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Experience in building and deploying full-stack applications in MEAN, MERN and Python",  
        "⚡ Developing and optimizing Python and Javascript REST APIs for low-latency, high-performance applications  ",
        "⚡ Proficient in database management (SQL, MongoDB) and cloud deployment (AWS, Azure)", 
        
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Experience with containerization and orchestration using Docker and Kubernetes  "
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/sonalsprabhu16/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/sonalsprabhu16",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/sonalsprabhu16",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Arizona State University, Tempe",
      subtitle: "M.S. in Computer Science",
      logo_path: "ASU_logo.png",
      alt_name: "ASU",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://scai.engineering.asu.edu/",
    },
    {
      title: "KLE Technological University, Hubli, India",
      subtitle: "B.E in Computer Science",
      logo_path: "kletech_logo.png",
      alt_name: "KLETech",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.kletech.ac.in/course/b-e-computer-science-and-engineering",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked majorly with startups in individual contributor roles and worked with clients from financial, media and manuacturing sectors",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Researcher",
          company: "ASU Biodesign Institute",
          company_url: "https://biodesign.asu.edu/",
          logo_path: "ASU_logo.png",
          duration: "Jan 2024 - Present",
          location: "Tempe, AZ, USA",
          description:
            "Working at the intersection of immunology and machine learning",
          color: "#000000",
        },
        {
          title: "Machine Learning Intern",
          company: "Teuvonet Technologies",
          company_url: "https://teuvonet.com/",
          logo_path: "teuvonet.png",
          duration: "May 2024 - Aug 2024",
          location: "Tempe, AZ, USA",
          description:
            "Built and fine-tuned an explainable YOLO-based model leveraging object-part detection, enhancing interpretability; validated performance through rigorous stress testing and stratified cross-validation",
          color: "#0879bf",
        },
        {
          title: "Machine Learning Engineer",
          company: "AIDETIC",
          company_url: "https://www.aidetic.in/",
          logo_path: "aidetic_logo.jpg",
          duration: "Aug 2022 - Jun 2023",
          location: "Bangalore, Karnataka, India",
          description:
            "Collaborated with a leading media client to design a generative AI platform that empowers influencer growth; developed tools for text-to-image generation (Stable Diffusion), reel creation, and text summarization, reducing content creation time by 40%",
          color: "#9b1578",
        },
        {
          title: "Software Development Engineer- Fullstack",
          company: "ZETWERK",
          company_url: "https://www.zetwerk.com/",
          logo_path: "zetwerk_logo.png",
          duration: "Jan 2021 - Jun 2022",
          location: "Bangalore, Karnataka, India",
          description:
            "Collaborated with a leading media client to design a generative AI platform that empowers influencer growth; developed tools for text-to-image generation (Stable Diffusion), reel creation, and text summarization, reducing content creation time by 40%",
          color: "#9b1578",
        },
        {
          title: "Machine Learning Intern",
          company: "Robert Bosch",
          company_url: "https://www.bosch.in/",
          logo_path: "bosch.png",
          duration: "Jan 2020 - May 2020",
          location: "Bangalore, Karnataka",
          description:
            "",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Robert Bosch Campus Ambassador",
          company: "Robert Bosch",
          company_url: "https://www.bosch.in/",
          logo_path: "bosch.png",
          duration: "May 2018 - May 2019",
          location: "Hubli, Karnataka",
          description:
            "",
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
    "",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sonal_prabhu.jpg",
    description:
      "",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
