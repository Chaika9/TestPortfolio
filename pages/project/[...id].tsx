import {useRouter} from "next/router";
import Head from "next/head";
import ReactMarkdown from 'react-markdown';

import {projects} from "@/lib/projects";
import {NavBar} from "@/components/NavBar";
import Link from "next/link";
import {ChevronLeftIcon} from "@heroicons/react/20/solid";
import {Footer} from "@/components/Footer";

export default function Project() {
    const {id} = useRouter().query;

    const index = parseInt(id as string);
    if (index < 0 || index >= projects.length || isNaN(index)) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">404 Not Found</h1>
            </div>
        );
    }

    const project = projects[index];

    return (
        <>
            <Head>
                <title>{project.name} | Chaika9</title>
                <meta
                    name="title"
                    content={project.name}
                />
                <meta name="description" content={project.description}/>
            </Head>

            <NavBar />

            <div className="h-auto w-screen">
                <div className="lg:mt-16 mt-10 flex flex-col items-center">
                    <div className="flex-none w-[90%] lg:w-[90%] xl:w-[80%]">
                        <Link href="/">
                            <ChevronLeftIcon className="inline w-5 h-5"/> Back
                        </Link>
                        <div className="mt-5">
                            <h1 className="text-4xl font-bold">{project.name}</h1>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map((tag, index) => (
                                    <div className="bg-white rounded-lg p-1" key={index}>
                                        <h2 className="text-xs">{tag}</h2>
                                    </div>
                                ))}
                            </div>
                            <p
                                className="mt-5"
                                dangerouslySetInnerHTML={{__html: project.description}}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}