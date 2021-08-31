import { ETechnology } from '../models/ETechnology';
import { IProject } from '../models/IProject';


const projects: Array<IProject> = [
    {
        title: "Hors Farm",
        description: `This project use four servers frontend, backend, firebase auth and mongodb,
        This part is about frontend.
        I start this project with javascript. Added, fixed and modificationed public liblary react-horizontal-scroll for my calendary of reservation view. Added Redux as store and Fomik and Yup for forms. A few month later I decided to up this project to TypeScript. Now is 88% override to TS. Added Enzyme, Testing Library and CypressIO. Now is more than 1000 tests. Web.dev: SEO 91% BestPractices 100% Accessibility 90% Preformance need change image to webp.
        This project don't have ded line end. When I finish one functionlity I think I can add two more so this project is like no ending story`,
        github: 'https://github.com/GeloUno/horse_farm',
        image: 'LoginHorse.png',
        technology: [
            ETechnology.TYPESCRIPT,
            ETechnology.REACT,
            ETechnology.REDUX,
            ETechnology.TESTINGLIBRARY,
            ETechnology.FORMIK,
            ETechnology.MATERIALUI,
            ETechnology.JEST,
            ETechnology.CYPRESSIO,
            ETechnology.FIREBASEAUTH,
            ETechnology.GIMP,
            ETechnology.ADOBEXD,
        ],
        web: 'https://gelouno.github.io/horse_farm/'
    },
    {
        title: "Hors Farm",
        description: 'This is a part of horse farm backend server in node.js. I start this project in TypeScript. This server connect to mongoDB using mongoose solution. Endpoint is tested by Postman. Classes and functionality are tested by Jest. When I will back to this project I will add super test. One of big solution is security of the users so not everything is shered to github, mouch more is in heroku server.',
        github: 'https://github.com/GeloUno/dev_server_node',
        image: 'SinginHorse.png',
        technology: [
            ETechnology.NODETS,
            ETechnology.MONGODB,
            ETechnology.POSTMAN,
            ETechnology.JEST,
            ETechnology.FIREBASEAUTH,
            ETechnology.CLEANCODE,
            ETechnology.HEROKU,
        ],
        web: '',

    },
    {
        title: "Portfolio",
        description: `This project was built with idea "nice to have". So I built him easy and fast. I used Next.js with static props and static path. This is no e-commerce project so I don't need server side props. Core Node version 14.17 rest dependencies is in package.json.`,
        image: 'portfolio.png',
        technology: [
            ETechnology.TYPESCRIPT,
            ETechnology.NEXT,
            ETechnology.TESTINGLIBRARY,
            ETechnology.TAILWINDCSS,
            ETechnology.VERCEL,
        ],
        web: 'https://hellogello.vercel.app/',
        github: 'https://github.com/GeloUno/portfolio_next'
    },
    {
        title: "Events",
        description: 'This is a practice project to get knowledge about Next.js. In original was write in JavaScript from my side this project was write in MVC pattern and TypeScript. This project connect to real time data base  firebase. One of the interesting solutions is how use useSWR hook with SSR. Core Node version 14.17 rest dependencies is in package.json.',
        github: 'https://github.com/GeloUno/EventsNext',
        image: 'Events.jpg',

        technology: [
            ETechnology.TYPESCRIPT,
            ETechnology.NEXT,
            ETechnology.REACT,
            ETechnology.MONGODB,
            ETechnology.FIREBASE,
        ],
        web: ''
    },
    {
        title: "Next Auth",
        description: 'This is a practice project to get knowledge about Next.js and NextAuth.js. In original was write in JavaScript from my side this project was write in MVC pattern and TypeScript. Core Node version 14.17 rest dependencies is in package.json.',
        github: 'https://github.com/GeloUno/next_auth',
        image: 'NextAuth.png',

        technology: [
            ETechnology.TYPESCRIPT,
            ETechnology.NEXT,
            ETechnology.REACT,
            ETechnology.MONGODB,
        ],
        web: ''
    },
    {
        title: "miniFacbook",
        description: 'This is practic project to get knowleg about React.',
        github: 'https://github.com/GeloUno/dev_client_react_redux_hooks',
        image: 'miniFacbook.jpg',

        technology: [
            ETechnology.JAVASCRIPT,
            ETechnology.REACT,
            ETechnology.REDUX,
            ETechnology.JWT,
            ETechnology.HEROKU,
        ],
        web: ''
    },
    {
        title: "miniFacbook",
        description: 'This is practic project to get knowleg about Node.js.',
        github: 'https://github.com/GeloUno/dev_server_node',
        image: 'miniFacbook.jpg',

        technology: [
            // ETechnology.JAVASCRIPT,
            ETechnology.NODEJS,
            ETechnology.MONGODB,
            ETechnology.POSTMAN,
            ETechnology.HEROKU,
            ETechnology.JWT,
        ],
        web: ''
    },
    {
        title: "Another",
        description: 'On my github You can find many of project build since 2018. Not every project is in master or main branch. There is a few projects build in Java no used clean conde and some projects with React Native or Angular 6.0 too',
        github: 'https://github.com/GeloUno?tab=repositories',
        image: 'Octocat.png',

        technology: [
            ETechnology.JAVA,
            ETechnology.REACTNATIVE,
            ETechnology.ANGULAR,
            ETechnology.PHP,
        ],
        web: ''
    },
]


export function getAllProjects(): Array<IProject> {
    return projects
}

export function getProject(id: number): IProject {
    const project: IProject = projects[id]
    return project
}