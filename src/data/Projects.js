import one from '../styles/Images/Projects/to-do-list.png';
import two from '../styles/Images/Projects/pixels-art.gif';
import three from '../styles/Images/Projects/solar-system.gif';
import four from '../styles/Images/Projects/tryunfo.gif';
import five from '../styles/Images/Projects/playtunes.gif';
import six from '../styles/Images/Projects/pokedex-with-rtl.png';
import seven from '../styles/Images/Projects/digital-wallet.gif';
import eight from '../styles/Images/Projects/trivia.gif';
import nine from '../styles/Images/Projects/planets-search.gif';
import ten from '../styles/Images/Projects/store-manager.png';

export const projectsData = [
  {
    id: 10,
    projectName: 'Store Manager',
    projectDesc: 'A RESTful API for managing a store, developed in Node.js. The various endpoints allow you to create, read, update and delete information about products and sales in a MySQL database. This project has unit test coverage.',
    tags: 'NodeJS, ExpressJS, Mocha, MySQL, Docker',
    code: 'https://github.com/VicSales28/project-store-manager',
    deploy: 'https://github.dev/VicSales28/project-store-manager',
    image: ten,
  },
  {
    id: 9,
    projectName: 'Starwars Planets Search',
    projectDesc: '',
    tags: 'ReactJS, Context API, React Hooks ',
    code: 'https://github.com/VicSales28/project-starwars-planets-search',
    deploy: 'https://vicsales28.github.io/project-starwars-planets-search/',
    image: nine,
  },
  {
    id: 8,
    projectName: 'Trivia Master',
    projectDesc: 'A front-end application that uses a public API to create a challenging quiz game. Team-made with React/Redux.',
    tags: 'ReactJS, Redux, React Testing Library, CSS',
    code: 'https://github.com/VicSales28/project-trivia',
    deploy: 'https://vicsales28.github.io/project-trivia/',
    image: eight,
  },
  {
    id: 7,
    projectName: 'Digital Wallet ',
    projectDesc: 'I developed an expense control wallet with a currency converter. The user can add and remove an expense, view a table with your expenses, view the total spend converted to a specific currency',
    tags: 'ReactJS, Redux, React Testing Library, CSS',
    code: 'https://github.com/VicSales28/project-digital-wallet',
    deploy: 'https://vicsales28.github.io/project-digital-wallet/',
    image: seven,
  },
  {
    id: 6,
    projectName: 'Pokédex with RTL',
    projectDesc: 'This project was developed while I was studying React Testing Library (RTL) . I tested a Pokédex application using Jest and the RTL. I used selectors and simulated events with RTL in automated tests.',
    tags: 'ReactJS, React Testing Library',
    code: 'https://github.com/VicSales28/project-pokedex-with-RLT',
    deploy: 'https://github.dev/VicSales28/project-pokedex-with-RLT',
    image: six,
  },
  {
    id: 5,
    projectName: 'PlayTunes',
    projectDesc: 'An application that plays songs from various famous bands and artists. The user can search an artist, list available albums, view songs from a selected album, play and favorite and unfavorite songs.',
    tags: 'ReactJS, React Router, Bootstrap',
    code: 'https://github.com/VicSales28/project-playtunes',
    deploy: 'https://vicsales28.github.io/project-playtunes/',
    image: five,
  },
  {
    id: 4,
    projectName: 'Tryunfo Cards',
    projectDesc: 'The user can create a personalized deck of cards in ninja style. For the design I was inspired by my favorite Japanese manga character, Uzumaki Naruto.',
    tags: 'ReactJS, Bulma',
    code: 'https://github.com/VicSales28/project-tryunfo',
    deploy: 'https://vicsales28.github.io/project-tryunfo/',
    image: four,
  },
  {
    id: 3,
    projectName: 'Solar System',
    projectDesc: 'In this project I developed a basic model of the solar system that the user is able to view all solar system planets and cards with information about space missions.',
    tags: 'React, HTML, CSS, JavaScript',
    code: 'https://github.com/VicSales28/project-solar-system',
    deploy: 'https://vicsales28.github.io/project-solar-system/',
    image: three,
  },
  {
    id: 2,
    projectName: 'Pixels Art',
    projectDesc: 'A pixel art editor that allows the user to pick a color from a random color palette and paint whatever it wants on a whiteboard.',
    tags: 'HTML, CSS, JavaScript',
    code: 'https://github.com/VicSales28/project-pixels-art',
    deploy: 'https://vicsales28.github.io/project-pixels-art/',
    image: two,
  },
  {
    id: 1,
    projectName: 'To Do List',
    projectDesc: 'A basic to-do list, using Local Storage to save items. The user can use it to organize his daily tasks: adding, moving order and deleting tasks.',
    tags: 'HTML, CSS, JavaScript',
    code: 'https://github.com/VicSales28/project-to-do-list',
    deploy: 'https://vicsales28.github.io/project-to-do-list/',
    image: one,
  },
];