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
                years: '2023 - 2027',
            },
            {
                faculdade: 'escola de tecnologia',
                qualificação: 'Alura',
                years: '2023 - 2024',
            },
        ],
    },
    {
        title: 'experiência',
        data: [
            {
                empresa: 'instituto pasteur',
                cargo: 'higienizador fabril',
                years: '2022 - 2023',
            },
            {
                empresa: 'top services',
                cargo: 'serviços gerais',
                years: '2020 - 2022',
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
            {
                imgPath: '/about/notion.svg',
            },
        ],
    },
];

const About = () => {
const getData = (arr, title) => {
return arr.find((item) => item.title === title);
};

return (
<section className="xl:h-[860px] py-56 xl:py-24 pb-12 ">
<div className="container mx-auto">
    <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">Sobre mim</h2>
<div className="flex flex-col xl:flex-row">
{/* image */}
<div className="hidden xl:flex flex-1 relative">
<DevImg 
containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
imgSrc='/about/pessoa-online-cor.png'
/>
</div>
{/* tabs */}
<div className="flex-1">
<Tabs defaultValue="personal">
<TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px]'>
<TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Informação Pessoal</TabsTrigger>
<TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualificação</TabsTrigger>
<TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Habilidades</TabsTrigger>
</TabsList>
{/* tabs content */}
<div className="text-lg mt-12 xl:mt-8">
{/* personal */}
<TabsContent value='personal'>
    <div className="text-center xl:text-left">
        <h3 className="h3 mb-4">Desenvolvedor Front-end</h3>
        <p className="subtitle max-w-xl mx-auto xl:mx-0">
            Atualmente me especializo em desenvolvimento de sites dinâmicos e intuitivos. No entanto, meu maior desejo é desenvolver habilidades para acompanhar processos, metodologias e técnicas para a produção de sistemas complexos.
        </p>
        {/* icons */}
        <div className="grid xl:grid-cols-2 gap-4 mb-12">
            {infoData.map((item, index)=> {
                return (
                    <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                        <div className="text-primary">{item.icon}</div>
                        <div>{item.text}</div>
                    </div>
                );
            })}
        </div>
        {/* languages */}
        <div className="flex flex-col gap-y-2">
            <div className="text-primary">Idiomas</div>
            <div className="border-b border-border"></div>
            <div>English, Español, Português</div>
        </div>
    </div>
</TabsContent>
{/* qualificação */}
<TabsContent value='qualifications'>
    <div>
        <h3 className="h3 mb-8 text-center xl:text-left">Minha Increível Jornada</h3>
        {/* experiencia e educacao wrapper */}
        <div className="grid md:grid-cols-2 gap-y-8">
            {/* experiencia */}
            <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                    <Briefcase />
                    <h4 className="capitalize font-medium">
                        {getData(qualificationData, 'experiência').title}
                    </h4>
                </div>
                {/* list */}
                <div className="flex flex-col gap-y-8">
                    {getData(qualificationData, 'experiência').data.map((item, index) => {
                        const { empresa, cargo, years } = item;
                        return (
                            <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute =left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                    <div className="font-semibold text-xl leading-none mb-2 capitalize">{empresa}</div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4 capitalize">{cargo}</div>
                                    <div className="text-base font-medium">{years}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* educacao */}
            <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                    <GraduationCap size={28} />
                    <h4 className="capitalize font-medium">
                        {getData(qualificationData, 'educação').title}
                    </h4>
                </div>
                {/* list */}
                <div className="flex flex-col gap-y-8">
                    {getData(qualificationData, 'educação').data.map((item, index) => {
                        const { faculdade, qualificação, years } = item;
                        return (
                            <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute =left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                    <div className="font-semibold text-xl leading-none mb-2 capitalize">{faculdade}</div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">{qualificação}</div>
                                    <div className="text-base font-medium">{years}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
</TabsContent>
{/* skills */}
<TabsContent value='skills'>
    <div className="text-center xl:text-left">
        <h3 className="h3 mb-8">Ferramentas que uso todos os dias</h3>
        {/* skills  */}
        <div className="mb-16">
            <h4 className="text-xl font-semibold mb-2">Habilidades</h4>
            <div className="border-b border-border mb-4"></div>
            {/* skill list */}
            <div>
                {getData(skillData, 'skills').data.map((item, index) => {
                    const { name } = item;
                    return (
                        <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                            <div className="font-medium">{name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
        {/* tools */}
        <div>
            <h4 className="text-xl font-semibold mb-2 zl:text-left">Ferramentas</h4>
            <div className="border-b border-border mb-4"></div>
            {/* tools list */}
            <div className="flex gap-x-8 justify-center xl:justify-start">
                {getData(skillData, 'tools').data.map((item, index) => {
                    const { imgPath } = item;
                    return (
                        <div key={index}>
                            <Image 
                             src={imgPath}
                             width={48}
                             height={48} 
                             alt=""
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
</TabsContent>
</div>
</Tabs>
</div>
</div>
</div>
</section>
);
};

export default About;