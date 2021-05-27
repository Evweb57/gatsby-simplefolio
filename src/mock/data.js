import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eric Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Eric Van Meter',
  subtitle: `I'm a Full-Stack Javascript Developer`,
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I design solution architectures, deconstruct problems, and optimize systems as a Technophile who is passionate about technology.',
  paragraphTwo:
    'I am a technically savvy, customer-focused Full-stack developer who is enthusiastic about working in the software engineering sector in full-stack web development, demonstrating value to both customers and employers by leveraging relevant tools to solve complex problems through productive collaboration with technical individuals to produce excellent quality products and implementations while focusing on code reusability, creativity and flexibility.',
  paragraphThree: 'For an updated resume reach out and connect with me on LinkedIn below.',
  resume: 'https://www.linkedin.com/in/ericdvanmeter/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Marshmellow Trail',
    info: 'Marshmellow trail is a project exploring a bare-bones JavaScript programming style using the standard MVC architecture.',
    info2: 'MongodDB, MongoAtlas, Express.js, Node.js, and Mapbox.',
    url: 'https://damp-spire-84324.herokuapp.com/',
    repo: 'https://github.com/Evweb57/toasty_marshmellows', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Client-Side',
    info: 'Client-Side explored server side rendering using Next.js and deploying through Zeit.',
    info2: 'React, MongoDB, Express.js, Node.js, and JavaScript.',
    url: 'https://project-tracker-ochre.vercel.app/',
    repo: 'https://github.com/Evweb57/project_tracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Looking for an enthusiastic developer?',
  btn: 'Open Email',
  email: 'ericvanmeter57@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ericdvanmeter/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Evweb57',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
