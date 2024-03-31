'use client';

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import{ User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';


const Form = () => {
    return (
        <form className="flex flex-col gap-y-4">
            {/* input */}
            <div className="relative flex items-center">
                <Input type='name' id='name' placeholder='Nome' />
                <User className="absolute right-6" size={20} />
            </div>
            {/* email */}
            <div className="relative flex items-center">
                <Input type='email' id='email' placeholder='Email' />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            {/* textarea */}
            <div className="relative flex items-center">
                <Textarea placeholder='Digite sua menssagem aqui.' />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button className='flex items-center max-w-[166px]'>Vamos Conversar
            <ArrowRightIcon size={20} />
            </Button>
        </form>
    );
};

export default Form;