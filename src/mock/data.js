import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Madison Powell', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal portfolio site.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'madison.jpg',
  paragraphOne:
    'I am a full-stack software developer with an interest in UI/UX design. I am currently a full-time student at Nashville Software School, enrolled in the Full-Stack Software Development Bootcamp. I have a background in psychology research and work experience in customer service. I am creative, organized, and passionate about developing code that works for all users.',
  paragraphTwo:
    "In August 2020, I graduated from Middle Tennessee State University, where I received a B.S. in Psychology. During my undergraduate studies, I participated in psychology research as a research assistant and performed with MTSU's pre-professional dance company. I graduated Cum Laude with a 3.65 GPA and was a regular name on the Dean's List. ",
  paragraphThree:
    'Throughout my undergraduate studies, I worked as a barista and a server at various cafés and restaurants. I also spent time working in offices as a front desk administrator performing receptionist duties. Working full-time hours while taking a full course load was challenging, but it was well worth it.',
  resume:
    'https://www.canva.com/design/DADQGswwzyk/7Do91LFJFElesCuQAoVcOg/view?utm_content=DADQGswwzyk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'capstone.png',
    title: 'The Light Side of the Force',
    info:
      'The Light Side of the Force is my Front-End Capstone. It is a REACT app which offers self-help content, presented through the lens of Star Wars.    ',
    info2: '',
    url: '',
    repo: 'https://github.com/powellmad/light-side', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sprinkles-of-joy.png',
    title: 'Sprinkles of Joy',
    info:
      'Sprinkles of Joy is a NSS group project in which the javascript app was already built out. The existing code was broken and included many errors when we received it. My teammate and I worked together to debug the code, then worked on new features to meet MVP.',
    info2: '',
    url: '',
    repo: 'https://github.com/powellmad/sprinkles-of-joy-group-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nutshell1.png',
    title: 'Nutshell',
    info:
      'Nutshell is a NSS group project in which I built a REACT social media app, alongside my four teammates.',
    info2:
      "In this app, I implemented the friends list, which only shows friends for the logged in user and messages, which automatically posts a timestamp and the author's name with the message, then sorts the messages by timestamp.",
    url: '',
    repo: 'https://github.com/powellmad/nutshell-group-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Project',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/powellmad/sprinkles-of-joy-group-project', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I look forward to hearing from you!',
  btn: 'Email Me',
  email: 'madsnpowell@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/madisonjpowell/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/powellmad',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/madisonpowell',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
