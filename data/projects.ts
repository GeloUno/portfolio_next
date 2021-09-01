import { ETechnology } from '../models/ETechnology';
import { IProject } from '../models/IProject';


const projects: Array<IProject> = [
    {
        title: "Hors Farm",
        description: [`This is one of my biggest projects. This project uses four servers: Frontend, Backend, Firebase Auth, and MongoDB.`,
            `This part is about the frontend.
            I started this project in JavaScript technology.`,
            `In this project I have used the react-horizontal-scroll library. This library has been repaired and modified by me for the booking calendar view.`,
            `The next step was to add Redux as a store. Formik and Yup were used to handle the forms. A few months later, I decided to convert this project to TypeScript. Now there are 88% overwritten to TS.`,
            `The Enzyme, Testing Library and CypressIO have also been added to the project. Currently, there are over a thousand tests.`,
            `Measure from Web.dev: SEO 91% BestPractices 100% Availability 90% Performance: requires image change to webp.`,
            `This project is endless. When I finish one functionality I think I can add two more so this project is like a never ending story`],

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
        description: [`This is a part of horse farm backend server in node.js.`,
            `I started this project in TypeScript. This server connect to mongoDB using mongoose solution. Endpoints were tested by Postman. Classes and functionality have been tested by Jest. When I will back to this project I will add SuperTest.`, ` One of big solution is security of the users so not everything is shared to github, much more is in heroku server.`],
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
        description: [`This project was built with the idea "nice to have it".`, ` So I built it simple and fast.`, ` I used next.js with static props and static path. This is not an e-commers project so no server side props solution was needed. Core Node version 14.17 rest dependencies is in package.json.`],
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
        description: 'This is a training project to learn about next.js. The training was conducted in JavaScript technology. On my part, the project was written in the MVC design pattern and TypeScript. This project connects to a real-time database Firebase. One of the interesting solutions is how to use a hook SWR with SSR. Core Node version 14.17 rest dependencies is in package.json.',
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
        description: 'This is a training project to learn about Next.js and NextAuth.js. The training was conducted in JavaScript technology. On my part, the project was written in the MVC design pattern and TypeScript. Core Node version 14.17 rest dependencies is in package.json.',
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
        description: 'This is a training project to learn about React.js',
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
        description: 'this is a training project to learn about Node.js.',
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
        title: "Other projects",
        description: 'In my github you can find many projects since 2018. Not all are in the master or main branch. Most of these projects were not built with clean code principles. Some projects were written in Angular 6.0, Java, ReactNative, PHP',
        github: 'https://github.com/GeloUno?tab=repositories',
        image: 'Octocat.png',

        technology: [
            ETechnology.ANGULAR,
            ETechnology.JAVA,
            ETechnology.REACTNATIVE,
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