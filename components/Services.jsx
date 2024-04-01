import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: 'Desde que comecei na programação, percebi que conhecer design é fundamental. Por esse motivo, tenho me dedicado a desenvolver habilidades que me permitam entregar trabalhos impressionantes.',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'Aplico boas práticas de programação e também me concentro na usabilidade dos sistemas web. Minha missão é trazer melhorias contínuas, mantendo os sites sempre inovadores. 🚀',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Software Engineering',
        description: 'Estou desenvolvendo habilidades em Engenharia de Software para compreender os processos, metodologias e técnicas que permeiam todo o ciclo de vida do software.',
    },

]

const Services = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">Meus Serviços</h2>
                {/* grid items */}
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {servicesData.map((item, index) => {
                        return (
                            <Card className='w-full max-w-[424px] h-[400px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                                <CardHeader className='text-primary absolute -top-[60px]'>
                                    <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{item.icon}</div>
                                </CardHeader>
                                <CardContent className='text-center'>
                                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                                    <CardDescription className='text-lg'>{item.description}</CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;