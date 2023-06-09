import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <section className=' bg-slate-900 text-white text-center py-10 text-2xl md:text-3xl dark:bg-zinc-50 dark:text-gray-900'>
      <div className='max-w-screen-xl gap-5 mx-auto flex flex-col items-center'>
        <p>Contact Me:</p>
        <p className='md:text-xl text-lg text-purple-400'>
          elodiedaumal@gmail.com
        </p>
        <div className='flex gap-10 text-4xl text-purple-300'>
          <Link
            to='https://www.linkedin.com/in/elodie-daumal-90a38b95/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillLinkedin />
          </Link>
          <Link
            to='https://github.com/elodiedaumal'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
