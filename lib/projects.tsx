import {ProjectType} from "@/types/ProjectType";

export const projects: ProjectType[] = [
    {
        name: "Onigami",
        description:
            "<img src='/project/onigami/image1.png' alt='Image1' />"
            + "<h1 class='mt-5 text-2xl font-bold'>Introduction</h1>"
            + "</br>Onigami is a private anime streaming website, featuring a sleek and modern design and automatic episode fetching."
            + "</br>The website is built with <a href='https://nextjs.org/'>Next.js</a> and <a href='https://tailwindcss.com/'>TailwindCSS</a>. The backend is composed of multiple microservices of REST APIs and a GraphQL API."
            + "</br></br><h1 class='text-2xl font-bold'>Features</h1>"
            + "</br> - Automatic episode fetching from multiple sources (Torrent, Direct Download, etc.)"
            + "</br> - Anime/Manga database"
            + "</br> - User Watchlist",
        coverImage: "/project/onigami/image1.png",
        tags: ["Web", "API", "Next.js", "TailwindCSS", "GraphQL"],
    },
    {
        name: "Paladium Bedrock",
        description:
            "<img src='/project/paladium/banner.png' width='500' alt='Banner' />"
            + "<h1 class='mt-5 text-2xl font-bold'>Introduction</h1>"
            + "</br>Paladium Bedrock is a port of the Paladium Java Editionto Minecraft Bedrock Edition.",
        coverImage: "/project/paladium/image1.png",
        tags: ["Game", "Software", "API"],
    },
    {
        name: "Paladium",
        description:
            "<img src='/project/paladium/banner.png' width='500' alt='Banner' />"
            + "<h1 class='mt-5 text-2xl font-bold'>Introduction</h1>"
            + "</br>Paladium is a Minecraft server for Java Edition. Its unique feature that sets it apart from other Minecraft servers is that it is modded. Over the years, the Paladium team has added a lot of exclusive content to the game.",
        coverImage: "/project/paladium/image1.png",
        tags: ["Game", "Software", "API"],
    },
    {
        name: "Sephira OS",
        description:
            "<img src='/project/sephiraos/image1.png' alt='Image1' />"
            + "<h1 class='mt-5 text-2xl font-bold'>Introduction</h1>"
            + "</br>Sephira OS is an operating system project that I started in 2019. The goal of this project is to create a basic operating system from scratch.",
        coverImage: "/project/sephiraos/image1.png",
        tags: ["Operating System", "Software"],
    },
    {
        name: "Minecraft Unity",
        description:
            "<img src='/project/minecraft/image1.png' alt='Image1' />"
            + "<h1 class='mt-5 text-2xl font-bold'>Introduction</h1>"
            + "</br>Minecraft Unity is a Minecraft clone made with Unity3D. It is a project that I started in 2022 to learn more about game development.",
        coverImage: "/project/minecraft/image1.png",
        tags: ["Game", "Software", "Unity"],
    },
];