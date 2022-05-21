import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Noel Bryant",
  title: "Hi all, I'm Noel",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs, Spring Boot and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/12mEwjQ5ZQjQFE62_JF4o46aKrKOllIJ7?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NoelLincoln",
  linkedin: "https://www.linkedin.com/in/noel-bryant",
  gmail: "noelsobryant@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@",
  // stackoverflow: "https://stackoverflow.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I AM A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK WHILE BEING ABLE TO SOLVE VARIOUS CHALLENGES ",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "Spring Boot",
    //   fontAwesomeClassname: "fab fa-spring"
    // },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Multimedia University of Kenya",
      logo: require("./assets/images/mmuicon.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "September 2014 - October 2019",
      desc: "I built an expert system for diagnosing poultry diseases",
      descBullets: [
        "Primarily made with php,prolog and Jess(inference engine) via a java extension"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Fullstack Developer",
      company: "One point seven",
      companylogo: require("./assets/images/1.7logo.png"),
      date: "November 2020 – June 2021",
      desc: " ",

      descBullets: [
        "Created and maintained clear, concise project plans and developed strategies to meet deadlines",
        "Write efﬁcient, maintainable and reusable code prioritizing privacy and security",
        "Simultaneously manage multiple projects and meet many strict deadlines",
        "Collaborate closely with Project Managers and Senior Executives to track KPIs of individual projects and provide a clearer understanding of the big picture"
      ]
    },

    {
      role: "IT Administrator",
      company: "Capacity Africa ",
      companylogo: require("./assets/images/capacityafricalogo.png"),
      date: "March 2020 – October 2020",
      desc: "I worked with Capacity Africa as a digital marketer/IT admin",
      descBullets: [
        " Helped out other employees whenever they needed anything technical assistance",
        "I worked on updating the company’s WordPress website, improving it's SEO and designing ﬂyers for marketing"
      ]
    },

    {
      role: "Software Developer Intern",
      company: "NCG Africa",
      companylogo: require("./assets/images/ncglogo.png"),
      date: "November 2019 – February 2020",
      desc: "Introduced to Thymeleaf for frontend development and Spring Boot for the backend development along with MySql and ﬂyway migrations.",

      descBullets: [
        "Introduced to Thymeleaf for frontend development and Spring Boot for the backend development along with MySql and ﬂyway migrations.",
        "Made changes, upon request, to existing applications",
        "At Nathan Claire Group I was able to learn how to conﬁgure a system to work  with com ports using java/spring boot framework. This was particularly in a livestock weighing system.",

        "Worked on a debt collection system along with the team",

        "Exceeded goals through effective task prioritization and great work ethic. "
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECT'S I'VE DONE SO FAR",
  projects: [
    {
      image: require("./assets/images/faceliftlogo.png"),
      projectName: "Facelift By Design",
      projectDesc:
        "An e-commerce website made with Spring Boot, thymeleaf, JQuery and Mysql",
      footerLink: [
        {
          name: "In progress"
          // url: "https://facelift.co.ke/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@noelsobryant/",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+254-717231495",
  email_address: "noelsobryant@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "noel_Lincoln", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails
};
