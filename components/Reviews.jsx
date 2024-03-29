'use client';

import Image from 'next/image';

import { Card, CardDescription, CardHeader, CardTitle, } from '@/components/ui/card';

// import swiper react components 
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles 
import 'swiper/css';
import 'swiper/css/pagination';

// import required module 
import { Pagination } from 'swiper/modules';

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Richard Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas beatae vero nam similique nihil asperiores incidunt, et minima culpa voluptas ducimus repellat dolores natus corporis.',
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Evelyn Anderson',
        job: 'Interior Designer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas beatae vero nam similique nihil asperiores incidunt, et minima culpa voluptas ducimus repellat dolores natus corporis.',
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Jhon Age',
        job: 'Game Dev',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas beatae vero nam similique nihil asperiores incidunt, et minima culpa voluptas ducimus repellat dolores natus corporis.',
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Emily Smith',
        job: 'Therapist',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas beatae vero nam similique nihil asperiores incidunt, et minima culpa voluptas ducimus repellat dolores natus corporis.',
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
    <section>
        <h2>reviews</h2>
    </section>

);
};

export default Reviews;