import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';


import {
    RiArrowDownSline,
    RiArrowDownSLine,
    RiBarricadeFill,
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
} from 'react-icons/ri';

// components 
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
    return (
        <section className='py-12 xl:py-24 h-[100vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
            <div className="container mx-auto">
                <div className='flex justify-between gap-x-8'>
                    {/* text */}
                    <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                        <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
                        <h1 className='h1 mb-4'>Olá, meu nome é Samuel Granados</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Atualmente, estou me especializando em front-end e na Engenharia de softwares. Meu foco é trabalhar como desenvolvedor de web, aplicando minha criatividade para proporcionar uma experiência aprimorada aos usuários finais. Por esse motivo, dediquei parte do meu esforço na criação deste portfólio, onde apresento alguns dos trabalhos que já desenvolvi.
                        </p>
                        {/* buttons */}
                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href='/contact'>
                                <Button className='gap-x-2'>Contato <Send size={18} /></Button>
                            </Link>
                            <a href='https://drive.google.com/file/d/11p4_pEscOjA02EdfcS3BCOmF4DBueK82/view?usp=sharing' download='https://drive.google.com/file/d/11p4_pEscOjA02EdfcS3BCOmF4DBueK82/view?usp=sharing' target='_blank'>
                            <Button variant='secondary' className='gap-x-2 text-white'>Baixar CV <Download size={18} /></Button>
                            </a>
                            
                        </div>
                        {/* socials */}
                        <Socials
                            containerStyles='flex gap-x-8 mx-auto xl:mx-0'
                            iconsStyle='text-foreground text-[22px] hover:text-primary transition-all'
                        />
                    </div>
                    {/* image */}
                    <div className='hidden xl:flex relative'>
                        {/* badge 1 */}
                        <Badge
                            containerStyles='absolute top-[24%] -left-[8rem]'
                            icon={<RiBriefcase4Fill />}
                            endCountNum={20}
                            badgeText='Certificações'
                        />
                        {/* badge 2 */}
                        <Badge
                            containerStyles='absolute top-[70%] -left-[1rem]'
                            icon={<RiTodoFill />}
                            endCountNum={15}
                            endCountText=''
                            badgeText='Projetos Finalizados'
                        />
                        {/* badge 3 */}
                        <Badge
                            containerStyles='absolute top-[48%] -right-20'
                            icon={<RiTeamFill /> }    
                            endCountNum={25}
                            endCountText=''
                            badgeText='Idade'
                        />
                        <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
                        <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
                            imgSrc='/hero/developer-sam1.png'
                        />
                    </div>
                </div>
                {/* icon */}
                <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-primary' />
                </div>
            </div>
        </section>
    );
};

export default Hero;