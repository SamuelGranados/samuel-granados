'use client';
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";



const projectData = [
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Soltice Website',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'next js',
        name: 'Lumina Website',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/5.png',
        category: 'next js',
        name: 'Alura Plus',
        description:
            'Desenvolvi esta leading page para consolidar conceitos de grids CSS',
        link: 'https://alura-plus-three-inky.vercel.app/',
        github: 'https://github.com/SamuelGranados/alura-plus',
    },
    {
        image: '/work/3.png',
        category: 'next js',
        name: 'Ignite Website',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'next js',
        name: 'Envision Website',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'fullstack',
        name: 'Serenity Website',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'fullstack',
        name: 'Nova Website',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'fullstack',
        name: 'Zenith Website',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        link: '/',
        github: '/',
    },
];

const uniqueCategories = [
    'projetos',
    ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('projetos');

    const filteredProjects = projectData.filter(project => {
        return category === 'projetos' ? project : project.category === category;
    });


    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">Meus Projetos</h2>
                {/* Tabs */}
                <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                    <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                        {categories.map((category, index) => {
                            return (
                                <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className='capitalize
                                w-[162px] md:w-auto'>{category}</TabsTrigger>
                            );
                        })}
                    </TabsList>
                    {/* tabs conten */}
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {filteredProjects.map((project, index) => {
                            return (
                                <TabsContent value={category} key={index}>
                                    <ProjectCard project={project} />
                                </TabsContent>
                            );
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default Projects;