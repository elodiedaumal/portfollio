import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Herodesktop from '../assets/images/image-hero-desktop.png';

const Hero = () => {
  return (
    <section className='md:flex md:px-10 flex-row-reverse max-w-screen-xl gap-20 mx-auto'>
      <img
        src={Herodesktop}
        alt='elodie daumal'
        className='md:mb-20 mb-10 h-full  md:w-2/4'
      />
      <div className='md:grid items-center md:justify-items-start'>
        <div className='text-center md:p-0 p-5 md:text-left '>
          <h2 className='text-4xl py-2 md:text-5xl text-gray-900 font-bold'>
            Elodie Daumal
          </h2>
          <h3 className='text-2xl py-2 text-sky-500'>
            Junior Frontend Developer
          </h3>
          <p className='text-md py-5 leading-8 text-gray-800'>
            Good products deserve to show their best side. I help them do that.
            With my knowledge I develop interfaces taht are easy to use and
            pleasent for the eye.
          </p>
          <div className='flex justify-center md:justify-start text-4xl py-3 gap-16 text-purple-600'>
            <Link to='/'>
              <FaEnvelope />
            </Link>
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
      </div>
    </section>
  );
};

export default Hero;
