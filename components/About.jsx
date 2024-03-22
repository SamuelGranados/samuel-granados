import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, } from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Samuel Granados',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '51 985019750',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'Samuelgranados2801@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Nascimento 28 Janeiro 1999 ',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Engenharia de Software',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Porto Alegre, RS',
    },
];

const qualificationData = [
    {
        title: 'educação',
        data: [
            {
                faculdade: 'Uniasselvi Leonardo da Vinci',
                qualificação: 'Bacharel em Engenharia de Software',
                Tempo: '2023 - 2027',
            },
            {
                faculdade: 'escola de tecnologia',
                qualificação: 'fron-end',
                Tempo: '2023 - 2024',
            },
        ],
    },
    {
        title: 'experiência',
        data: [
            {
                empresa: 'instituto pasteur',
                cargo: 'higienizador fabril',
                Tempo: '2022 - 2023',
            },
        ],
    },
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'JavaScript, React',
            },
            {
                name: 'Tailwind, Next.js',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
        ],
    },
];

const About = () => {
    return (
        <div>about</div>
    );
};

export default About;