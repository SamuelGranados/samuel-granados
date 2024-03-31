'use client';

import Image from 'next/image';

import { Card, CardDescription, CardHeader, CardTittle } from '@/components/ui/card';

// import swiper react components 
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles 
import 'swiper/css';
import 'swiper/css/pagination';

// import required module 
import { Pagination } from 'swiper/modules';

const reviewsData = [
    {
        avatar: '/reviews/francini.png',
        name: 'Francine Muhl',
        job: 'Analista de Laboratório',
        review: 'Queridooo!! Você com certeza fez a diferença! Foi bom demais o tempo em que convivemos juntos! Lembro de ti iniciando essa jornada de estudos e de desenvolvimento...que coisa boa te ver assim! Sucesso pra ti sempre!!! Sorte de quem tem o privilégio de trabalhar contigo e dar boas risadas no dia a dia!',
    },
    {
        avatar: '/reviews/mile.png',
        name: 'Mileidys Morillo',
        job: 'Assistente de Operações Financeiras',
        review: 'Mais um ciclo fechado e o começo de uma nova aventura, desejo tudo o sucesso para você 🥰',
    },
    {
        avatar: '/reviews/rafaela.png',
        name: 'Rafaela Maciel Dos Santos',
        job: 'Engenheira Química',
        review: 'Muito bonito ver teu desenvolvimento nesses dois últimos anos, sem dúvida o empenho para adquirir habilidades que fossem mais acertivas com o ambiente em que estava fez de você um grande colaborador, Te desejo muito sucesso nesta nova etapa! Voa alto!',
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Oliver Taylor',
        job: 'Engineer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas beatae vero nam similique nihil asperiores incidunt, et minima culpa voluptas ducimus repellat dolores natus corporis.',
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Mason Wilson',
        job: 'Video Editor',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas beatae vero nam similique nihil asperiores incidunt, et minima culpa voluptas ducimus repellat dolores natus corporis.',
    },
];

const Reviews = () => {
return (
    <section className='mb-12 xl:mb-32'>
        <div className="container mx-auto">
        <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
        {/* slides */}
        <Swiper
         slidesPerView={1}
         breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
         }}
         spaceBetween={30}
         modules={[Pagination]}
         pagination={{
            clickable: true,
         }}
         className='h-[450px] mb-32'
        >
            {reviewsData.map((person, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                            <CardHeader className='p-0 mb-6'>
                                <div className='flex items-center gap-4'>
                                    {/* image */}
                                    <Image 
                                     src={person.avatar}
                                     width={70}
                                     height={70}
                                     alt=''
                                     priority
                                    />
                                    {/* nome */}
                                    <div className='flex flex-col'>
                                        <CardDescription className='h4 text-black dark:text-white'>{person.name}</CardDescription>
                                        <p>{person.job}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                        </Card>
                    </SwiperSlide>
                );
            })}
        </Swiper>
        </div>
    </section>

);
};

export default Reviews;