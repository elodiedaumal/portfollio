import React from 'react';
import About from './Components/About';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Work from './Components/Work';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { HashLink as Link } from 'react-router-hash-link';

const Home = () => {
  return (
    <main className='dark:bg-gray-900 dark:text-zinc-50'>
      <Hero />
      <About />
      <Skills />
      <Work />
      <div>
        <div className=' bottom-11 right-11 fixed w-6 h-6 bg-zinc-50 dark:bg-gray-900 rounded-full'></div>

        <Link to='#top'>
          <button className=' bottom-10 right-10 fixed '>
            <BsFillArrowUpCircleFill className=' w-8 h-8 text-3xl z-50 dark:text-zinc-50 text-gray-800 font-outline-2' />
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
