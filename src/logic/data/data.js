//imagenes para,
import HTML from '../../view/assets/HTML_Logo.svg'
import CSS from '../../view/assets/CSS_Logo.svg'
import JS from '../../view/assets/JS_Logo.svg'
import ReactJS from '../../view/assets/ReactJS_Logo.svg'
import GIT from '../../view/assets/GIT_Logo.svg'
import WP from '../../view/assets/WP_Logo.svg'

import Batatabit from '../../view/assets/Projects/Batata-bit.png'
import Pensamientos from '../../view/assets/Projects/Pensamientos-de-sofá.png'
import ToDo from '../../view/assets/Projects/ToDo.png'
import VideoGame from '../../view/assets/Projects/VideoGame.png'
import YardSales from '../../view/assets/Projects/Yard-Sales.png'


const Skills = [
 {Name: 'HTML',
  Level: '90',
  image: HTML,
},
 {Name: 'CSS',
  Level: '90',
  image: CSS,
},
 {Name: 'JS',
  Level: '80',
  image: JS,
},
 {Name: 'ReactJS',
  Level: '70',
  image: ReactJS,
},
 {Name: 'Git',
  Level: '80',
  image: GIT,
},
 {Name: 'Webpack',
  Level: '80',
  image: WP,
}
]

const Projects = [
 {
  Name: 'BatataBit',
  Description: 'This is a project with the objective of applying the Mobile first design pattern.',
  image: Batatabit,
  RepositoryLink:'https://github.com/Eduardbarrios/Batata-Bit',
  SiteLink:'https://eduardbarrios.github.io/Batata-Bit/',
 },
 {
  Name: 'Pensamientos de Sofá',
  Description: 'The Pensamientos de Sofá site is a landing page that uses an API to bring the latest videos from a Youtube channel.',
  image: Pensamientos,
  RepositoryLink:'https://github.com/Eduardbarrios/pensamientos-Sofa',
  SiteLink:'https://eduardbarrios.github.io/pensamientos-Sofa/src/'
 }, 
 {
  Name: 'ToDo',
  Description: 'ToDo machine is a task manager for organizing daily tasks and marking completed tasks.',
  image: ToDo,
  RepositoryLink:'https://github.com/Eduardbarrios/ToDO-Machine_AppReact',
  SiteLink:'https://eduardbarrios.github.io/ToDO-Machine_AppReact/'
 }, 
 {
  Name: 'VideoGame',
  Description: 'This is a video game, consisting of three maps, for this we used multimentional arrays and collisions.',
  image: VideoGame,
  RepositoryLink:'https://github.com/Eduardbarrios/taller_practico_JS_videogame',
  SiteLink:'https://eduardbarrios.github.io/taller_practico_JS_videogame/ '
 }, 
 {
  Name: 'YardSales',
  Description: 'In this project we developed the whole frontend for an e-commerce, the products and categories were consumed from an API.',
  image: YardSales,
  RepositoryLink:'https://github.com/Eduardbarrios/YardSalesProject_ReactJS',
  SiteLink:'https://eduardbarrios.github.io/YardSalesProject_ReactJS/'
 }, 
 
]
export {Skills, Projects}
