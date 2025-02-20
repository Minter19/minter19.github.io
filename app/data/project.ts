import { IProjectData } from "../types/project";

export const projectsData: IProjectData[] = [
    {
        id: 1,
        projectName: "Landing Page Migas Data Repositori",
        projectOwner: "Kementerian ESDM",
        techStack: "Next JS, Strapi CMS, Bootstrap",
        projectUrl: "https://datamigas.esdm.go.id/home",
        imgUrl: "https://datamigas.esdm.go.id/media/logos/favicon.png",
        description: "The main page of the oil and gas data repository serves as the primary landing page of the datamigas.esdm.go.id website. It features general information, including an information carousel banner, details of upcoming data, a map of oil and gas data distribution, data service statistics, and statistics on physical and digital data."
    },
    {
        id: 2,
        projectName: "Migas Data Repositori Enterprise",
        projectOwner: "Kementerian ESDM",
        techStack: "Asp.Net Core, Bootstrap",
        projectUrl: "https://datamigas.esdm.go.id/Dashboard/Index",
        imgUrl: "https://datamigas.esdm.go.id/media/logos/favicon.png",
        description: "MDR (Migas Data Repository) is a platform developed to manage data and information systematically and based on information technology that accommodates functions to store, maintain and organize, improve quality, and distribute data and information to users safely, quickly, and accurately. "
    },
    {
        id: 3,
        projectName: "Whatsapp API Messenger",
        projectOwner: "Personal",
        techStack: "Node JS, Pupeteer",
        projectUrl: "https://github.com/Minter19/app-wa-sender-service",
        imgUrl: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        description: "Whatsapp API Messenger for personal use that contains api for sending whatsapp message (text, image, file, emoji)"
    }
]