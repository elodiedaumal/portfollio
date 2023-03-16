import React from 'react';
import About from './Components/About';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Work from './Components/Work';

const Home = () => {
  return (
    <main className='dark:bg-gray-900 dark:text-zinc-50'>
      <Hero />
      <About />
      <Skills />
      <Work />
    </main>
  );
};

export default Home;
