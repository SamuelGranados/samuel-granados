'use client';

import {
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookFill,
    RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
    {
        path: 'https://www.linkedin.com/in/eliab14/',
        name: <RiLinkedinFill />,
    },
    {
        path: 'https://github.com/SamuelGranados',
        name: <RiGithubFill />,
    },
    {
        path: 'https://www.facebook.com/samuel.figuera.315/',
        name: <RiFacebookFill />,
    },
    {
        path: 'https://www.instagram.com/samuel_eliab_granados/',
        name: <RiInstagramFill />,
    },
];

const Socials = ({containerStyles, iconsStyle}) => {
    return (
        <div className={`${containerStyles}`}>
         {icons.map((icon, index) => {
            return (
                <Link href={icon.path} key={index} target='_blank'>
                 <div className={`${iconsStyle}`}>{icon.name}</div>
                </Link>
            );
         })}    
        </div>
    );
};

export default Socials;