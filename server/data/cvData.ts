import type { CvExperience, CvEducation, CvAward, EmploymentType } from '~/utils/types';

export const professionalSummary =
  "Experienced Front-End Team Lead and full-stack developer with a focus on delivering stable and innovative web solutions. Proven ability to lead teams, develop UI kits, and translate client requirements into successful products. Strong expertise in modern front-end technologies and a commitment to user-centric design.";

export const experiences: CvExperience[] = [
  {
    title: "Research Assistant Intern",
    start: new Date("2018-09-01"),
    end: new Date("2018-12-01"),
    company: "Bio-Medical Image Processing Lab (BMIPL)",
    location: "Ulsan, South Korea",
    employmentType: "part-time",
    responsibilities: [
      "Conducted research on the application of deep learning models in cancer detection.",
      "Enhanced deep learning the model for cancer detection, improving efficiency by 7%.",
    ],
    techStack: ["Python", "Tensorflow", "Keras", "Scikit-learn", "Matplotlib"],
  },
  {
    title: "C# Developer",
    start: new Date("2019-11-01"),
    end: new Date("2020-02-01"),
    company: "LLC “Mega Soft”",
    location: "Bishkek, Kyrgyzstan",
    employmentType: "full-time", // This is a valid EmploymentType
    responsibilities: [
      "Engineered a model capable of predicting the next token in a sequential dataset.",
      "Developed an optical character recognition (OCR) system capable of processing skewed and distorted text.",
      "Developed and deployed a web-based issue recognition system for internal processes of the company.",
    ],
    techStack: [
      "C#",
      "ASP.NET",
      "Python",
      "OpenCV",
      "Scikit-learn",
      "Matplotlib",
      "Tensorflow",
    ],
  },
  {
    title: "Full stack PHP Developer",
    start: new Date("2020-11-01"),
    end: new Date("2021-05-01"),
    company: "LLC “CRM Technologies”",
    location: "Bishkek, Kyrgyzstan",
    employmentType: "full-time", // This is a valid EmploymentType
    responsibilities: [
      "Developed and delivered custom CRM solutions for clients, adhering to strict release schedules and providing comprehensive post-implementation maintenance and support.",
      "Developed and implemented RESTful APIs to enable seamless data exchange between mobile applications and back-end systems.",
      "Implemented a custom canvas-based ui approach to fulfill unique client requirements and improved front-end performance by reducing page load times by 30%.",
    ],
    techStack: [
      "Javascript",
      "Typescript",
      "PHP",
      "JQuery",
      "HTML",
      "CSS",
      "MySQL",
      "Apache Server",
      "Linux",
    ],
  },
  {
    title: "Team lead Front-end Developer",
    start: new Date("2022-01-01"),
    company: "LLC “Tumarsoft”",
    employmentType: "full-time", // This is a valid EmploymentType
    location: "Bishkek, Kyrgyzstan",
    responsibilities: [
      "Led front-end development for pioneering fintech solutions, ensuring stability and timely delivery",
      "Contributed to strategic product roadmap development by identifying key issues and envisioning future product enhancements.",
      "Developed and maintained robust front-end solutions, guaranteeing system reliability.",
      "Implemented a full-stack demo product to showcase product capabilities and drive innovation.",
      "Conducted technical interviews and provided daily mentorship to front-end development team.",
      "Designed and implemented a company-wide UI kit, using a customizable library to ensure consistent design and enhance developer experience across all projects.",
    ],
    techStack: [
      "Javascript",
      "Typescript",
      "Vue.js",
      "Nuxt.js",
      "HTML",
      "CSS",
      "SCSS",
      "TailwindCSS",
      "UnoCSS",
      "Storybook",
      "Vuetify",
      "Quasar",
      "Node.js",
      "MongoDB",
      "Linux",
      "CI/CD",
      "Docker",
    ],
  },
];

export const projects: CvExperience[] = [
  {
    title: "Full stack PHP Developer",
    start: new Date("2019-02-01"),
    company: "LLC “Bilimot”",
    website: "http://bilimot.kg", // TODO: change to https://bilimot.kg
    employmentType: "part-time", // This is a valid EmploymentType
    responsibilities: [
      "Designed, built and deployed a website for educational purposes to help school students to prepare for the National Graduate Exam(ORT) by watching videos and solving problems.",
      "Tailored the website to meet the specific needs of the target audience, ensuring a seamless user experience and high engagement.",
      "Currently maintaining the website to ensure stable and up-to-date functionality.",
    ],
    techStack: [
      "PHP",
      "Laravel",
      "JavaScript",
      "HTML",
      "CSS",
      "MySQL",
      "Apache Server",
      "Nginx",
      "Python",
      "Linux",
    ],
  },
  {
    title: "Full stack PHP Developer",
    start: new Date("2021-07-01"),
    end: new Date("2021-11-01"),
    company: "LLC “Ask consulting”",
    employmentType: "part-time", // This is a valid EmploymentType
    responsibilities: [
      "Developed an online learning platform based on AI evaluation of human produced data.",
      "Deduced new method to generate fake like english words for practicing English language skills.",
      "Integrated AI technology to enhance the user experience and provide personalized recommendations.",
      "Utilized AI techonologies to cross-check the user's answers and provide instant feedback.",
    ],
    techStack: [
      "PHP",
      "Laravel",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Python",
      "Google Cloud",
      "C++",
      "HTML",
      "CSS",
      "MySQL",
      "Nginx",
      "Linux",
    ],
  },
  {
    title: "Full stack PHP/C# Developer",
    start: new Date("2022-01-01"),
    website: "https://ask.kg",
    company: "LLC “Ask consulting”",
    employmentType: "part-time", // This is a valid EmploymentType
    responsibilities: [
      "Developed a custom CRM solution to improve client service with a unique workflow for each type of client request along with a personal client dashboard.",
      "Deployed and ensured the smooth operation of the CRM system, ensuring internal staff satisfaction.",
      "Devised and implemented a robust data management system to efficiently store and retrieve client data.",
      "Integrated automatic telephone call event tracking system to ensure timely and accurate communication with clients.",
      "Translated complex client requirements into functional product features by establishing clear communication channels, delivering rapid interactive prototypes, and subsequently developing robust working solutions.",
      "Delivered staging and production pipelines for the CRM system, ensuring seamless deployment and smooth transitions between environments.",
    ],
    techStack: [
      "PHP",
      "Laravel",
      "C#",
      "ASP.NET",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "React.js",
      "Next.js",
      "Vercel",
      "HTML",
      "CSS",
      "SCSS",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "Linux",
    ],
  },
];

export const education: CvEducation = {
  start: new Date("2016-09-01"),
  end: new Date("2019-12-01"),
  university: "UNIST",
  location: "Ulsan, South Korea",
  degree: "Bachelor of Science",
  major: "Electrical Engineering",
  minor: "Computer Science and Engineering",
  // TODO: add GPA
  // gpa: "4.0"
  // TODO: add courses
  // courses: [
  //   "Optimization Theory",
  // ],
  academicLeaves: [
    {
      start: new Date("2019-09-01"),
      end: new Date("2020-02-01"),
      reasons: [
        {
          title: "Intership",
          employmentType: "full-time" as EmploymentType, // Cast to EmploymentType
          company: "LLC “Mega Soft”",
        },
      ],
    },
    {
      start: new Date("2020-09-01"),
      end: new Date("2021-06-01"),
      reasons: [
        {
          title: "Employment",
          employmentType: "full-time" as EmploymentType, // Cast to EmploymentType
          company: "LLC “CRM Technologies”",
        },
      ],
    },
  ],
};

export const awards: CvAward[] = [
  {
    dates: [new Date("2015-03-01"), new Date("2016-03-01")],
    award: "Two-time winner(1st place) of National Olympiad in physics",
    location: "Bishkek, Kyrgyzstan",
  },
  {
    dates: [new Date("2015-02-01")],
    award: "2nd place in Online Physics Olympiad “Phystech”",
    location: "Moscow, Russian Federation",
  },
  {
    award: "Honorable Mention in IPhO",
    location: "Zurich, Switzerland",
    dates: [new Date("2016-07-01")],
  },
  {
    award: "3rd place in Inter-University Rowing Competition(8x)",
    location: "Ulsan, South Korea",
    dates: [new Date("2019-10-01")],
  },
  {
    award: "“Академия Яндекса - школа разработки интерфейсов” Graduate",
    location: "Moscow, Russian Federation",
    dates: [new Date("2022-09-01"), new Date("2022-11-01")],
  },
];

export const languages: string[] = ['English - Fluent', 'Russian - Fluent', 'Kyrgyz - Native'];

export const skills = (() => {
  const experienceSkills = experiences.reduce((acc, experience) => {
    experience.techStack.forEach((techStackItem) => {
      if (acc[techStackItem] !== undefined) {
        acc[techStackItem]++;
      } else {
        acc[techStackItem] = 1;
      }
    });
    return acc;
  }, {} as Record<string, number>);
  const projectSkills = projects.reduce((acc, project) => {
    project.techStack.forEach((techStackItem) => {
      if (acc[techStackItem] !== undefined) {
        acc[techStackItem]++;
      } else {
        acc[techStackItem] = 1;
      }
    });
    return acc;
  }, {} as Record<string, number>);
  Object.keys(experienceSkills).forEach((skill) => {
    if (projectSkills[skill] !== undefined) {
      experienceSkills[skill] += projectSkills[skill];
    }
  });
  // Add skills from projects that are not in experiences
  Object.keys(projectSkills).forEach((skill) => {
    if (experienceSkills[skill] === undefined) {
      experienceSkills[skill] = projectSkills[skill];
    }
  });
  return Object.entries(experienceSkills)
    .sort((a, b) => b[1] - a[1])
    .map(([skill, count]) => skill);
})();
