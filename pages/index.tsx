import {Fragment} from "react";
import Head from "next/head";

import {NavBar} from "@/components/NavBar";
import {Footer} from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

import {projects} from "@/lib/projects";

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Chaika9 | Developer</title>
                <meta charSet="UTF-8"></meta>
                <link rel="icon" href=""/>
                <link rel="canonical" href=""/>
                <meta
                    name="description"
                    content=""
                />
                <meta
                    name="keywords"
                    content=""
                />
                <meta name="robots" content="index, follow"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content=""/>
                <meta
                    property="og:title"
                    content=""
                />
                <meta
                    property="og:description"
                    content=""
                />
                <meta property="og:site_name" content="Chaika9"/>
            </Head>

            <NavBar />

            <div className="h-auto w-screen">
                <div className="lg:mt-16 mt-10 flex flex-col items-center">
                    <div className="flex-none w-[90%] lg:w-[90%] xl:w-[80%]">
                        <Link
                            href="https://github.com/Chaika9"
                            className="rounded-full w-32 h-32 bg-white overflow-hidden"
                        >
                            <Image
                                src="/TestPortfolio/avatar.png"
                                alt="avatar"
                                width={200}
                                height={200}
                                className="rounded-full w-32 h-32 object-cover"
                            />
                        </Link>
                        <h1 className="text-4xl font-bold mt-5">G&#39;day, I&#39;m Chaika9</h1>
                        <h3 className="text-lg mt-2">I&#39;m a Software/Game Developer at Rennes, France.</h3>
                        <p className="mt-2 text-gray-600 max-w-2xl">I&#39;m a student at Epitech who is interested in programming and game
                            development. I like to touch a little bit of everything for discover new things and learn
                            new skills, like AI Machine Learning, OS Development, etc...</p>
                    </div>
                </div>

                <div className="lg:mt-16 mt-20 flex flex-col items-center">
                    <div className="flex-none w-[90%] lg:w-[90%] xl:w-[80%]">
                        <h1 className="font-karla text-2xl font-bold">Projects</h1>

                        <div className="flex flex-wrap gap-4 pt-6">
                            {projects.map((_, index) => {
                                return (
                                    <Link key={index}
                                        href={`/project/${index}`}
                                        className="bg-white rounded-lg shadow-lg hover:bg-[#E0E0E0] transition-all w-[350px]"
                                    >
                                        <div
                                            className="rounded-t-lg overflow-hidden w-full h-[200px] border-b-1 border-b-[#989898]">
                                            <Image
                                                src={projects[index].coverImage}
                                                alt="banner"
                                                width={1000}
                                                height={1000}
                                                className="w-full h-[200px] object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <div className="flex gap-2">
                                                {projects[index].tags.map((tag, index) => {
                                                    return (
                                                        <div className="bg-[#F0F0F0] rounded-lg p-1" key={index}>
                                                            <h2 className="text-xs">{tag}</h2>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <h2 className="text-lg font-bold">{projects[index].name}</h2>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="lg:mt-16 mt-10 flex flex-col items-center">
                    <div className="flex-none w-[90%] lg:w-[90%] xl:w-[80%]">
                        <h1 className="font-karla text-2xl font-bold">Technical skills</h1>
                        <p className="pt-6 max-w-2xl">I love bringing concepts to life through code. Most of my time is spent building products for awesome clients, as well as creating and contributing to open source libraries. I share many of my projects to GitHub.</p>
                        <div className="flex flex-wrap gap-2 pt-5">
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">ASM</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">C</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">C++</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">C#</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">Java</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">Python</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">Lua</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">JavaScript</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">TypeScript</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">Unity</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">Docker</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">Tensorflow</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">RabbitMQ</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">MongoDB</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">MySQL</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">SQLite</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">GraphQL</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">Redis</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">Next.js</p>
                            </div>
                            <div className="bg-white rounded-lg p-2">
                                <p className="text-md">React.js</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </Fragment>
    );
}
