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
    title: 'Front-Ent Developer Trainee',
    location: 'Remote',
    description:
      'Almost from the very beginning of the Full-Stack course, I had the opportunity to become a Front-End Trainee.',
    icon: React.createElement(FaReact),
    date: 'Dec 2022 - Present',
  },
  {
    title: 'Full-Stack Developer Course',
    location: 'Remote',
    description:
      'Throughout the course, I explored a range of topics, including HTML, CSS, JS, React, Redux, Node.js, and many more. I successfully completed both individual and group projects, taking on the role of Team Lead to enhance my leadership and collaborative skills.',
    icon: React.createElement(LuGraduationCap),
    date: 'Dec 2022 - Oct 2023',
  },
  {
    title: 'Electrician',
    location: 'Cherkasy, Ukraine',
    description:
      'While working as an electrician at a new company I was a results-oriented electrician with a track record in troubleshooting electrical issues, adept at diagnosing problems and implementing effective solutions. Additionally, I was responsible for the installation, maintenance, and repair of electrical systems, ensuring optimal functionality. Throughout my tenure, I have demonstrated a strong commitment to safety, precision, and client satisfaction.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2020 - Apr 2022',
  },
  {
    title: 'Electrician',
    location: 'Shpola, Ukraine',
    description:
      'While working as an electrician I specialized in the maintenance of electrical networks with a strong emphasis on safety protocols when working at heights. I was in charge of reading and interpreting electrical schematics, ensuring precise execution of tasks to maintain and optimize network functionality.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2016 - Dec 2019',
  },
  {
    title: 'Electric power engineer',
    location: 'Kropyvnytskyi, Ukraine',
    description:
      'During my studies there was a strong emphasis on practical skills through laboratory work and engineering projects. The acquired experience allows solving complex technical problems and developing new technologies.',
    icon: React.createElement(LuGraduationCap),
    date: 'Sep 2015 - Dec 2018',
  },
] as const;

export const projectsData = [
  {
    title: 'RENT-A-CAR',
    description:
      'RENT-A-CAR is an application for people who are looking for a rental car. This user-friendly app, designed to be convenient in mind, offers enjoyable experience for renting the perfect vehicle for your needs.',
    tags: ['React', 'Redux', 'JS', 'Axios', 'HTML/CSS'],
    imageUrl: rentACarImg,
  },
  {
    title: 'Drink Master',
    description:
      "This project was done by the development team. My role was a Full-stack developer. Drink Master is an interactive book of cocktail recipes. It has features like authentication, search drinks, filtering, pagination, adding one's drink, saving/removing from the favorite list.",
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
  },
  {
    title: 'Phonebook API',
    description:
      "My first back-end project was implemented for the Phonebook Application. This API can process sign-up, sign-in, log-out, update user's subscription plan, update user's avatar and create/update/remove/filter contacts.",
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Joi', 'Multer'],
    imageUrl: phonebookAPIImg,
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
  },
  {
    title: 'Bookshelf',
    description:
      'This project was done by the development team. This is an application where you can find a book for any taste and buy it.',
    tags: ['JS', 'HTML/CSS', 'Firebase'],
    imageUrl: bookshelfImg,
  },
  {
    title: 'MIMINO',
    description:
      'It is a landing website where people can get to know the hotel and restaurant complex and learn about the service they can get there.',
    tags: ['JS', 'HTML/CSS'],
    imageUrl: miminoImg,
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
  'Tailwind',
  'MongoDB',
  'Redux',
  'Express',
  'Adaptive Design',
  'Responsive Design',
] as const;
