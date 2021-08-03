import { nanoid } from 'nanoid';
import image from '../images/portfolio-preview.png';

// HEAD DATA
export const headData = {
  title: 'Madison Powell', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal portfolio site.', // e.g: Welcome to my website
  image: { image },
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Madison Powell',
  subtitle: 'Full-Stack Software Developer.',
  cta: 'Tell Me More',
};

// ABOUT DATA
export const aboutData = {
  img: 'madison.jpg',
  paragraphOne:
    'I am a full-stack software developer with an interest in user-experience design. I recently graduated from Nashville Software School in Cohort 46, where I received a certification in the Full-Stack Software Development Program.',
  paragraphTwo:
    'Growing up, I loved to tinker with computers. When I was 13, I built my first multi page application about large sea mammals using HTML. My father, a computer teacher at a middle school, supported my passion for coding. He was a major influence in my life. In undergrad, I explored my interests in search of the right career fit. I wanted something with high levels of logic, creativity, social skills, and experimenting. After much exploration, I returned to my roots: software development.',
  paragraphThree:
    "Before NSS, I attended Middle Tennessee State University where I earned a B.S. in psychology. During my undergraduate studies, I participated in psychology research as a research assistant and performed with MTSU's pre-professional dance company. I graduated Cum Laude with a 3.65 GPA and was a regular name on the Dean's List. I also worked full-time throughout undergrad in various coffee shops, bars, and offices. Working full-time hours while taking a full course load was challenging, but through it I gained a strong work-ethic, responsibility, and effective time-management skills.",
  resume:
    'https://www.canva.com/design/DADQGswwzyk/7Do91LFJFElesCuQAoVcOg/view?utm_content=DADQGswwzyk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'shelf-app.png',
    title: 'SHELF',
    info:
      "I built SHELF for my backend capstone at NSS. It's an e-commerce app designed for small-business owners to sell their surplus inventory. This app is built with python/django and react on the client-side.",
    info2: '',
    url: 'https://shelf-sm.netlify.app/',
    repo: 'https://github.com/powellmad/shelf', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'capstone.png',
    title: 'The Light Side of the Force',
    info:
      'The Light Side of the Force is my Front-End Capstone. It is a React application which offers self-help content, presented through the lens of Star Wars.    ',
    info2: '',
    url: '',
    repo: 'https://github.com/powellmad/light-side', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rare.png',
    title: 'Rare',
    info:
      'Rare is a content sharing app, designed after Medium developed with React on the client-side and Python/Django for the server. It was implemented in a group of 4 students and built as a full-stack application.',
    info2: '',
    url: '',
    repo: 'https://github.com/powellmad/rare-rest-rare-api-determined-dugora', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'levelup.png',
    title: 'Level Up',
    info:
      'Level Up is an app where users can set up events to play games with their friends. It was built using React, Python, and Django for a specific hypothetical client and deisgned to fit their specific needs.',
    info2: '',
    url: '',
    repo: 'https://github.com/powellmad/level-up-server', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact Me',
  email: 'madsnpowell@gmail.com',
};

// TECH DATA
export const techData = [
  {
    id: nanoid(),
    title: 'Python',
    img: 'pythonlogo.png',
  },
  {
    id: nanoid(),
    title: 'Django',
    img: 'djangologo.png',
  },
  {
    id: nanoid(),
    title: 'SQLite',
    img: 'sqllogo.png',
  },
  {
    id: nanoid(),
    title: 'Postman',
    img: 'postmanlogo.png',
  },
  {
    id: nanoid(),
    title: 'React',
    img: 'reactlogo.png',
  },
  {
    id: nanoid(),
    title: 'React Router',
    img: 'reactrouter.png',
  },
  {
    id: nanoid(),
    title: 'HTML',
    img: 'html5logo.png',
  },
  {
    id: nanoid(),
    title: 'CSS',
    img: 'css3logo.png',
  },
  {
    id: nanoid(),
    title: 'JS',
    img: 'js.png',
  },
  {
    id: nanoid(),
    title: 'Github',
    img: 'githublogo.png',
  },
  {
    id: nanoid(),
    title: 'Material UI',
    img: 'material-ui.png',
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    img: 'Bootstrap_logo.svg.png',
  },
];

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
