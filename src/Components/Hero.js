import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import HeroMobileLight from '../assets/images/light-image-hero-mobile-elo.png';
import HerodesktopLight from '../assets/images/light-image-hero-desktop-elo.png';
import HerodesktopDark from '../assets/images/dark-image-hero-desktop-elo2.png';
import HeroMobileDark from '../assets/images/dark-image-hero-mobile-elo2.png';

const Hero = () => {
  return (
    <section className='pt-1 md:flex md:px-10 flex-row-reverse max-w-screen-xl gap-20 mx-auto '>
      <img
        src={HerodesktopDark}
        alt='elodie daumal'
        className='md:mb-20   md:w-2/4 hidden dark:md:block '
      />
      <img
        src={HeroMobileDark}
        alt='elodie daumal'
        className='dark:block md:mb-20 dark:mb-10 dark:w-full  dark:md:hidden hidden '
      />

      <img
        src={HerodesktopLight}
        alt='elodie daumal'
        className='md:mb-20   md:w-2/4 hidden md:block dark:hidden '
      />
      <img
        src={HeroMobileLight}
        alt='elodie daumal'
        className='md:mb-20 mb-10 w-full  md:hidden dark:hidden'
      />

      <div className='md:grid items-center md:justify-items-start'>
        <div className='text-center md:p-0 p-5 md:text-left '>
          <h2 className='text-4xl py-2 md:text-5xl text-gray-900 font-bold dark:text-zinc-50'>
            Elodie Daumal
          </h2>
          <h3 className='text-2xl py-2 text-sky-500'>
            Junior Frontend Developer
          </h3>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-zinc-200'>
            Good products deserve to show their best side. I help them do that.
            With my knowledge I develop interfaces that are easy to use and
            pleasant for the eye.
          </p>
          <div className='flex justify-center md:justify-start text-4xl py-3 gap-16 text-purple-600/60'>
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
