import one from '../styles/Images/Projects/to-do-list.png';
import two from '../styles/Images/Projects/pixels-art.gif';
import three from '../styles/Images/Projects/solar-system.gif';
import four from '../styles/Images/Projects/tryunfo.gif';
import five from '../styles/Images/Projects/playtunes.gif';
import six from '../styles/Images/Projects/pokedex-with-rtl.png';
import seven from '../styles/Images/Projects/digital-wallet.gif';
import eight from '../styles/Images/Projects/trivia.gif';
import nine from '../styles/Images/Projects/planets-search.gif';
import ten from '../styles/Images/Projects/store-manager.gif';
import eleven from '../styles/Images/Projects/RPG.png';
import twelve from '../styles/Images/Projects/TFC.png';

export const projectsData = [
  {
    id: 12,
    projectName: 'Futebol Clube ⚽🏆',
    projectDesc: 'TFC is an informative football site. I built a dockerized backend with Sequelize data modeling, following project frontend usage guidelines.',
    tags: 'TypeScript - NodeJS - Sequelize - Sinon&Chai',
    code: 'https://github.com/VicSales28/project-futebol-clube',
    deploy: 'https://github.dev/VicSales28/project-futebol-clube',
    image: twelve,
  },
  {
    id: 11,
    projectName: 'RPG Game 🧙‍♂️',
    projectDesc: 'Created RPG game with fantasy-adventure elements during Object-Oriented Programming studies at Trybe Programming School.',
    tags: 'TypeScript - POO',
    code: 'https://github.com/VicSales28/project-rpg-game',
    deploy: 'https://github.dev/VicSales28/project-rpg-game',
    image: eleven,
  },
  // {
  //   id: XXX,
  //   projectName: 'Medieval Products ⚔️🛡️',
  //   projectDesc: 'This application was created to register medieval products, list items, validate products, and facilitate users login.',
  //   tags: 'TypeScript - NodeJS - Sequelize',
  //   code: 'https://github.com/VicSales28/project-medieval-times',
  //   deploy: 'https://github.dev/VicSales28/project-medieval-times',
  //   image: XXXX,
  // },
  // {
  //   id: XXX,
  //   projectName: 'Blogs API 📑',
  //   projectDesc: 'Developed blog API and database using Node.js and Sequelize for CRUD operations on posts, users, and categories.',
  //   tags: 'NodeJS - Sequelize',
  //   code: 'https://github.com/VicSales28/project-blogs-api',
  //   deploy: 'https://github.dev/VicSales28/project-blogs-api',
  //   image: XXXX,
  // },
  {
    id: 10,
    projectName: 'Store Manager 🛍️',
    projectDesc: 'Developed sales management app with CRUD operations for products and sales. Built using a layered software architecture (MSC).',
    tags: 'NodeJS - ExpressJS - Mocha - MySQL - Docker',
    code: 'https://github.com/VicSales28/project-store-manager',
    deploy: 'https://github.dev/VicSales28/project-store-manager',
    image: ten,
  },
  {
    id: 9,
    projectName: 'Starwars Planets Search 🪐',
    projectDesc: 'App fetches Star Wars planets data from an API, populating a filterable table with details like population, orbital period, diameter, etc.',
    tags: 'React - Context API - React Hooks ',
    code: 'https://github.com/VicSales28/project-starwars-planets-search',
    deploy: 'https://vicsales28.github.io/project-starwars-planets-search/',
    image: nine,
  },
  {
    id: 8,
    projectName: 'Trivia Master 🔠',
    projectDesc: 'Quiz game inspired by Trivia. Log in, answer questions within time limit, view score based on correct answers and check ranking.',
    tags: 'React - Redux - React Testing Library',
    code: 'https://github.com/VicSales28/project-trivia',
    deploy: 'https://vicsales28.github.io/project-trivia/',
    image: eight,
  },
  {
    id: 7,
    projectName: 'Digital Wallet 💰',
    projectDesc: 'Expense tracker designed with currency converter. Add/remove expenses, view them in table format, and track total spending converted.',
    tags: 'React - Redux - React Testing Library',
    code: 'https://github.com/VicSales28/project-digital-wallet',
    deploy: 'https://vicsales28.github.io/project-digital-wallet/',
    image: seven,
  },
  {
    id: 6,
    projectName: 'Pokédex with RTL 🐙',
    projectDesc: 'Tests were developed for a React app using Jest and RTL. The app simulates a Pokédex, and the tests ensure requirement accuracy.',
    tags: 'React - React Testing Library - Jest',
    code: 'https://github.com/VicSales28/project-pokedex-with-RLT',
    deploy: 'https://github.dev/VicSales28/project-pokedex-with-RLT',
    image: six,
  },
  {
    id: 5,
    projectName: 'PlayTunes 🎶',
    projectDesc: 'Discover music by famous artists & bands. Search albums, play tracks and favorite songs using this app powered by Apple Music API.',
    tags: 'React - React Router - Bootstrap',
    code: 'https://github.com/VicSales28/project-playtunes',
    deploy: 'https://vicsales28.github.io/project-playtunes/',
    image: five,
  },
  {
    id: 4,
    projectName: 'Ninja Cards 🥷',
    projectDesc: 'The user can create a customized ninja-themed deck inspired by Uzumaki Naruto and explore the gallery that showcases their unique cards.',
    tags: 'React - Bulma - JavaScript',
    code: 'https://github.com/VicSales28/project-tryunfo',
    deploy: 'https://vicsales28.github.io/project-tryunfo/',
    image: four,
  },
  {
    id: 3,
    projectName: 'Solar System 🪐',
    projectDesc: 'A basic model of the Solar System using JSX in React. The user can view all the planets and cards with information about space missions.',
    tags: 'React - HTML - CSS - JavaScript',
    code: 'https://github.com/VicSales28/project-solar-system',
    deploy: 'https://vicsales28.github.io/project-solar-system/',
    image: three,
  },
  {
    id: 2,
    projectName: 'Pixels Art 🎨',
    projectDesc: 'A pixel art editor, using LocalStorage to save drawings. The user can choose a color from a palette and paint whatever he wants on a whiteboard.',
    tags: 'HTML - CSS - JavaScript',
    code: 'https://github.com/VicSales28/project-pixels-art',
    deploy: 'https://vicsales28.github.io/project-pixels-art/',
    image: two,
  },
  {
    id: 1,
    projectName: 'To Do List 📝',
    projectDesc: 'A basic to-do list, using Local Storage to save items. The user can use it to organize his daily tasks: adding, moving order and deleting tasks.',
    tags: 'HTML - CSS - JavaScript',
    code: 'https://github.com/VicSales28/project-to-do-list',
    deploy: 'https://vicsales28.github.io/project-to-do-list/',
    image: one,
  },
];