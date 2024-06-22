import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import bookshelfImg from '@/public/Bookshelf.png';
import drinkMasterImg from '@/public/Drink-master.png';
import miminoImg from '@/public/Mimino.png';
import phonebookAPIImg from '@/public/Phonebook-API.png';
import phonebookImg from '@/public/Phonebook.png';
import rentACarImg from '@/public/Rent-a-car.png';
import corpComment from '@/public/CorpComment.jpg';
import rmtJob from '@/public/rmtJob.jpg';
import wordAnalytics from '@/public/WordAnalytics.jpg';
import trekBag from '@/public/TrekBag.jpg';
import petSoft from '@/public/PetSoft.jpg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    id: '5',
    title: 'Front-Ent Developer Trainee',
    location: 'Remote',
    description:
      'Almost from the very beginning of the Full-Stack course, I had the opportunity to become a Front-End Trainee. Since then, I specialize in developing user-friendly and interactive components for web applications using React. I am committed to continuous learning and staying abreast of emerging technologies. With a keen eye for detail, I ensure the creation of pixel-perfect layouts. I actively contribute to projects by integrating new tools and libraries, focusing on enhancing overall project efficiency and maintainability. Collaborating with team members, I play a vital role in the development of scalable front-end solutions. Additionally, I integrate external APIs into React applications, enabling the communication of dynamic data between the front end and back end.',
    icon: React.createElement(FaReact),
    date: 'Dec 2022 - Present',
  },
  {
    id: '4',
    title: 'Full-Stack Developer Course',
    location: 'Remote',
    description:
      'Throughout the course, I explored a range of topics, including HTML, CSS, JS, React, Redux, Node.js and many more. I successfully completed both individual and group projects, taking on the role of Team Lead to enhance my leadership and collaborative skills.',
    icon: React.createElement(LuGraduationCap),
    date: 'Dec 2022 - Oct 2023',
  },
  {
    id: '3',
    title: 'Electrician',
    location: 'Cherkasy, Ukraine',
    description:
      'While working as an electrician at a new company I was a results-oriented electrician with a track record in troubleshooting electrical issues, adept at diagnosing problems and implementing effective solutions. Additionally, I was responsible for the installation, maintenance and repair of electrical systems, ensuring optimal functionality. Throughout my tenure, I have demonstrated a strong commitment to safety, precision and client satisfaction.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2020 - Apr 2022',
  },
  {
    id: '2',
    title: 'Electrician',
    location: 'Shpola, Ukraine',
    description:
      'While working as an electrician I specialized in the maintenance of electrical networks with a strong emphasis on safety protocols when working at heights. I was in charge of reading and interpreting electrical schematics, ensuring precise execution of tasks to maintain and optimize network functionality.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2016 - Dec 2019',
  },
  {
    id: '1',
    title: 'Electric power engineer',
    location: 'Kropyvnytskyi, Ukraine',
    description:
      'During my studies, there was a strong emphasis on practical skills through laboratory work and engineering projects. The acquired experience allows solving complex technical problems and developing new technologies.',
    icon: React.createElement(LuGraduationCap),
    date: 'Sep 2015 - Dec 2018',
  },
] as const;

export const projectsData = [
  {
    title: 'PetSoft',
    description:
      'Welcome to PetSoft, the innovative solution for managing your animal shelter. Designed for efficiency and user-friendliness, PetSoft streamlines tracking animals, ensuring their safety and well-being while making shelter management easier.',
    tags: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Prisma',
      'Next Auth',
      'Zod ',
    ],
    imageUrl: petSoft,
    gitHubURL: 'https://github.com/DmytoStas/petsoft',
    projectURL: 'https://petsoft-ashen.vercel.app/',
  },
  {
    title: 'rmtJob',
    description:
      'Discover a complete platform built for remote opportunities that connect you to various remote IT development roles. Easily view, apply and bookmark job postings from your home. Advance your career with our convenient remote job search app.',
    tags: [
      'React',
      'TypeScript',
      'React Query',
      'Contex-API',
      'HTML/CSS',
      'Vite',
    ],
    imageUrl: rmtJob,
    gitHubURL: 'https://github.com/DmytoStas/rmtJob',
    projectURL: 'https://dmytostas.github.io/rmtJob/',
  },
  {
    title: 'CorpComment',
    description:
      'CorpComment is an intuitive feedback application tailored for modern service companies. Simplifying communication and collaboration, it offers a seamless platform for users to exchange comments and feedback efficiently.',
    tags: ['React', 'Zustand', 'TypeScript', 'HTML/CSS', 'Vite'],
    imageUrl: corpComment,
    gitHubURL: 'https://github.com/DmytoStas/corp-comment',
    projectURL: 'https://dmytostas.github.io/corp-comment/',
  },
  {
    title: 'RENT-A-CAR',
    description:
      'RENT-A-CAR is an application for people who are looking for a rental car. This user-friendly app, designed to be convenient in mind, offers an enjoyable experience for renting the perfect vehicle for your needs.',
    tags: ['React', 'Redux', 'JS', 'Axios', 'HTML/CSS'],
    imageUrl: rentACarImg,
    gitHubURL: 'https://github.com/DmytoStas/rent-a-car',
    projectURL: 'https://dmytostas.github.io/rent-a-car/',
  },
  {
    title: 'Drink Master',
    description:
      "Drink Master is an interactive book of cocktail recipes. It has features like authentication, search drinks, filtering, pagination, adding one's drink and saving/removing from the favorite list.",
    tags: [
      'React',
      'Redux',
      'JS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Axios',
      'HTML/CSS',
      'MateriaUI',
    ],
    imageUrl: drinkMasterImg,
    gitHubURL: 'https://github.com/Zyabrik10/team-project-cocktails-website',
    projectURL:
      'https://zyabrik10.github.io/team-project-cocktails-website/welcome',
  },
  {
    title: 'TrekBag',
    description:
      "TrekBag is a simple, convenient and useful application that won't let you forget the things you need for your trip. Add, remove, mark, sort and reset your list - it's all about TrekBag",
    tags: ['React', 'JS', 'HTML/CSS', 'Zustand', 'Vite'],
    imageUrl: trekBag,
    gitHubURL: 'https://github.com/DmytoStas/trekbag',
    projectURL: 'https://dmytostas.github.io/trekbag/',
  },
  {
    title: 'Word Analytics',
    description:
      '"Word Analytics" is a reliable assistant in the world of modern textual content. Use this app to efficiently count words in all your written content, from social media to corporate documents.',
    tags: ['React', 'JS', 'HTML/CSS', 'Vite'],
    imageUrl: wordAnalytics,
    gitHubURL: 'https://github.com/DmytoStas/word-analytics',
    projectURL: 'https://dmytostas.github.io/word-analytics/',
  },
  {
    title: 'Phonebook API',
    description:
      "My first back-end project was implemented for the Phonebook Application. This API can process sign-up, sign-in, log-out, update the user's subscription plan/ avatar and create/update/remove/filter contacts.",
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Joi', 'Multer'],
    imageUrl: phonebookAPIImg,
    gitHubURL: 'https://github.com/DmytoStas/phonebook-api',
    projectURL: '',
  },
  {
    title: 'Phonebook',
    description:
      'Web application for creating and storing contacts at your fingertips.',
    tags: [
      'React',
      'Redux',
      'JS',
      'Axios',
      'Formik',
      'Yup',
      'MateriaUI',
      'HTML/CSS',
    ],
    imageUrl: phonebookImg,
    gitHubURL: 'https://github.com/DmytoStas/phonebook-app-react',
    projectURL: 'https://dmytostas.github.io/phonebook-app-react/',
  },
  {
    title: 'Bookshelf',
    description:
      'This is an application where you can find a book for any taste and buy it.',
    tags: ['JS', 'HTML/CSS', 'Firebase'],
    imageUrl: bookshelfImg,
    gitHubURL: 'https://github.com/Kamilucha/bookshelf-js',
    projectURL: 'https://kamilucha.github.io/bookshelf-js/',
  },
  {
    title: 'MIMINO',
    description:
      'It is a landing website where people can get to know the hotel and restaurant complex and learn about the service they can get there.',
    tags: ['JS', 'HTML/CSS'],
    imageUrl: miminoImg,
    gitHubURL: 'https://github.com/DmytoStas/mimino',
    projectURL: 'https://dmytostas.github.io/mimino/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'TailwindCSS',
  'SCSS',
  'MongoDB',
  'Redux',
  'RTK Query',
  'Express',
  'Adaptive Design',
  'Responsive Design',
  'Rest API',
  'React Query',
  'Axios',
] as const;
