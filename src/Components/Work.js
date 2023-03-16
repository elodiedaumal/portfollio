import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Web1 from '../assets/images/ip-tracker.jpg';
import Web2 from '../assets/images/movie.jpg';
import Web3 from '../assets/images/omnifood.jpg';
import Web4 from '../assets/images/quiz.jpg';
import Web5 from '../assets/images/rick-and-morty.jpg';
import Web6 from '../assets/images/space.jpg';
import Web7 from '../assets/images/advice.jpg';
import Web8 from '../assets/images/frigo.jpg';
import Web9 from '../assets/images/homeoffice.jpg';
import Web10 from '../assets/images/tailwind-1.jpg';

const Work = () => {
  return (
    <section
      id='portfolio'
      className=' md:pb-20 pb-10 grid  md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 md:px-10 gap-5 px-5 max-w-screen-xl justify-center mx-auto '
    >
      <h2 className='text-4xl max-w-screen-xl  py-5 text-left md:col-span-3 lg:col-span-4 sm:col-span-2'>
        My <span className='text-sky-500'>Work</span>
      </h2>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web9}
          alt='e-commerce'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Developed with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components
              </span>
            </p>
            <Link
              to='https://elodie-daumal-homeoffice.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
                See Live
              </button>
            </Link>
            <Link
              to='https://github.com/elodiedaumal/home-office'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
                View Code
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web1}
          alt='ip tracker web'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Developed with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components <br /> API
              </span>
            </p>
            <Link
              to='https://elodiedaumal-iptracker.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
                See Live
              </button>
            </Link>
            <Link
              to='https://github.com/elodiedaumal/IP-tracker'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
                View Code
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img src={Web4} alt='quiz' className='shadow-xl cursor-pointer ' />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Developed with:
              <br />
              <span className='font-thin'>
                React <br /> CSS
              </span>
            </p>
            <Link
              to='https://elodiedaumal-quiz.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
                See Live
              </button>
            </Link>
            <Link
              to='https://github.com/elodiedaumal/quizz'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
                View Code
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web6}
          alt='space travel'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Developed with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components
              </span>
            </p>
            <Link
              to='https://elodie-daumal-space.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
                See Live
              </button>
            </Link>
            <Link
              to='https://github.com/elodiedaumal/space-travel'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
                View Code
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web5}
          alt='rick and morty web'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Developed with:
              <br />
              <span className='font-thin'>
                React <br /> CSS <br /> API
              </span>
            </p>
            <Link
              to='https://elodie-daumal-rick-and-morty-api.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
                See Live
              </button>
            </Link>
            <Link
              to='https://github.com/elodiedaumal/elodie-daumal-mangaka'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
                View Code
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web10}
          alt='landing page'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Developed with:
              <br />
              <span className='font-thin'>
                React <br /> Tailwind CSS
              </span>
            </p>
            <Link
              to='https://elodiedaumal-landing-page-tailwind.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
                See Live
              </button>
            </Link>
            <Link
              to='https://github.com/elodiedaumal/tailwind-landing-page'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
                View Code
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web7}
          alt='advice generator'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Developed with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components <br /> API
              </span>
            </p>
            <Link
              to='https://elodie-daumal-advice-generator.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
                See Live
              </button>
            </Link>
            <Link
              to='https://github.com/elodiedaumal/advice-generator-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
                View Code
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web2}
          alt='movie finder'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Developed with:
              <br />
              <span className='font-thin'>
                React <br /> CSS <br /> API
              </span>
            </p>
            <Link
              to='https://elodiedaumal-movie-finder.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
                See Live
              </button>
            </Link>
            <Link
              to='https://github.com/elodiedaumal/movie-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
                View Code
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img src={Web3} alt='omnifood' className='shadow-xl cursor-pointer ' />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Developed with:
              <br />
              <span className='font-thin'>
                HTML <br /> CSS <br /> Javascript
              </span>
            </p>
            <Link
              to='https://omnifoodelodiedaumal.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
                See Live
              </button>
            </Link>
            <Link
              to='https://github.com/elodiedaumal/elodie-omnifood-project'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
                View Code
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web8}
          alt='ip tracker web'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Developed with:
              <br />
              <span className='font-thin'>
                Wordpress <br /> CSS
              </span>
            </p>
            <Link
              to='https://frigorificoamericano.pro/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
                See Live
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
