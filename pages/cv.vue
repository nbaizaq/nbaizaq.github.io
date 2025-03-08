<template>
  <div>
    <div class="flex justify-end">
      <Button variant="text" size="small">Print</Button>
    </div>
    <div class="flex flex-col gap-8">
      <CvBlock title="Professional summary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </CvBlock>
      <CvBlock title="Experience">
        <div class="flex flex-col gap-4">
          <CvExperienceItem
            v-for="experience in experiences.reverse()"
            :key="experience.title"
            :experience="experience"
            full-time
          />
        </div>
      </CvBlock>
      <CvBlock title="Projects">
        <div class="flex flex-col gap-4">
          <CvExperienceItem
            v-for="experience in projects.reverse()"
            :key="experience.title"
            :experience="experience"
            full-time
          />
        </div>
      </CvBlock>
      <CvBlock title="Education">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </CvBlock>
      <CvBlock title="Skills">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </CvBlock>
      <CvBlock title="Language">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </CvBlock>
      <CvBlock title="Awards">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </CvBlock>
    </div>
  </div>
</template>

<script lang="ts" setup>
const experiences: CvExperience[] = [
  {
    title: "Research Assistant Intern",
    start: new Date("2018-09-01"),
    end: new Date("2018-12-01"),
    company: "Bio-Medical Image Processing Lab (BMIPL)",
    employmentType: "part-time",
    responsibilities: [
      "Assisted in the development of a new deep learning model for cancer detection.",
      "Conducted research on the application of deep learning models in cancer detection.",
      "Collaborated with other researchers to develop a new deep learning model for cancer detection.",
    ],
    techStack: [
      "Python",
      "Tensorflow",
      "Keras",
      "OpenCV",
      "Scikit-learn",
      "Matplotlib",
    ],
  },
  {
    title: "C# Developer",
    start: new Date("2019-11-01"),
    end: new Date("2020-02-01"),
    company: "LLC “Mega Soft”",
    employmentType: "full-time",
    responsibilities: [
      "Assisted in the internal development projects by qualitatively analyzing data related to computer",
      "Deployed web-based issue recognition for internal processes of the company.",
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
    employmentType: "full-time",
    responsibilities: [
      "Developed back-end solutions to ensure reliable and fast deployment of product implementations",
      "Added REST API support for mobile applications.",
      "Improved front-end solution by providing new ways for client side processes and faster development of desired features.",
    ],
    techStack: [
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
    employmentType: "full-time",
    responsibilities: [
      "Leading team of front-end developers across various projects.",
      "Manage projects by collaborating with product managers, designers and backend developers to define project requirements.",
    ],
    techStack: [
      "Javascript(Typescript)",
      "Vue.js",
      "Nuxt.js",
      "HTML",
      "CSS",
      "SCSS",
      "TailwindCSS",
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

const projects: CvExperience[] = [
  {
    title: "Full stack PHP Developer",
    start: new Date("2019-02-01"),
    company: "LLC “Bilimot”",
    website: "http://bilimot.kg", // TODO: change to https://bilimot.kg
    employmentType: "part-time",
    responsibilities: [
      "Designed, built and deployed a website for educational purposes to help school students to prepare for the National Graduate Exam(ORT) by watching videos and solving problems.",
      "Added REST API support for mobile applications.",
      "Improved front-end solution by providing new ways for client side processes and faster development of desired features.",
      "Currently maintaining the website and its backend.",
    ],
    techStack: [
      "PHP",
      "Laravel",
      "JavaScript",
      "HTML",
      "CSS",
      "MySQL",
      "Apache Server",
      "Linux",
    ],
  },
  {
    title: "Full stack PHP Developer",
    start: new Date("2021-07-01"),
    end: new Date("2021-11-01"),
    company: "LLC “Ask consulting”",
    employmentType: "part-time",
    responsibilities: [
      "Developed an online learning platform based on AI evaluation of human produced data.",
    ],
    techStack: [
      "PHP",
      "Laravel",
      "JavaScript",
      "Vue.js",
      "C++",
      "HTML",
      "CSS",
      "MySQL",
      "Nginx",
      "Linux",
    ],
  },
  {
    title: "Full stack PHP Developer",
    start: new Date("2022-01-01"),
    website: "https://ask.kg",
    company: "LLC “Ask consulting”",
    employmentType: "part-time",
    responsibilities: [
      "Developed a custom CRM solution to improve client service with a unique workflow for each type of client request along with a personal client dashboard.",
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
</script>
