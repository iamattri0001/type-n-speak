import React from 'react';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineUserAdd, AiFillLinkedin } from 'react-icons/ai';

function Hero() {
    return (
        <header className='h-screen flex items-center justify-center'>
            <div className='flex items-center justify-center flex-col gap-y-7 md:gap-y-3 max-w-[720px]'>
                <div className='text-center mb-3'>
                    <h1 className='text-primary font-special text-[42px] md:text-[86px] mb-2 animate-pulse'>Type-N-Speak</h1>
                    <p className='text-[14px] md:text-lg '>Transform text into speech for hands-free browsing and multitasking.</p>
                </div>
                <div className='mb-4'>
                    <button className='animate-bounce bg-tertiary px-[1em] py-[.4em] rounded-3xl border-[2px] border-tertiary hover:bg-transparent'> <a href="#form">Try Now!</a></button>
                </div>
                <div className='text-2xl text-light flex items-center gap-x-5'>
                    <a href="https://github.com/iamattri0001/" target='_blank' rel='noreferrer'>
                        <AiOutlineGithub />
                    </a>
                    <a href="https://www.instagram.com/iamattri0001/" target='_blank' rel='noreferrer'>
                        <AiOutlineInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/deepanshu-attri-17a895241/" target='_blank' rel='noreferrer'>
                        <AiFillLinkedin />
                    </a>
                    <a href="https://deep-attri.vercel.app/" target='_blank' rel='noreferrer'>
                        <AiOutlineUserAdd />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Hero