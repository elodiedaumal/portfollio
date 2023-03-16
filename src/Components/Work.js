import React, { useState } from 'react';
import Web1 from '../assets/images/ip-tracker.jpg';
import Web2 from '../assets/images/movie.jpg';
import Web3 from '../assets/images/omnifood.jpg';
import Web4 from '../assets/images/quiz.jpg';
import Web5 from '../assets/images/rick-and-morty.jpg';
import Web6 from '../assets/images/space.jpg';
import Web7 from '../assets/images/advice.jpg';
import Web8 from '../assets/images/frigo.jpg';
import Web9 from '../assets/images/homeoffice.jpg';

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
          alt='ip tracker web'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Made with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components
              </span>
            </p>
            <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
              See Live
            </button>
            <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
              View Code
            </button>
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
              Made with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components
              </span>
            </p>
            <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
              See Live
            </button>
            <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
              View Code
            </button>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web4}
          alt='ip tracker web'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Made with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components
              </span>
            </p>
            <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
              See Live
            </button>
            <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
              View Code
            </button>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web6}
          alt='ip tracker web'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Made with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components
              </span>
            </p>
            <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50 '>
              See Live
            </button>
            <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
              View Code
            </button>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web5}
          alt='ip tracker web'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Made with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components
              </span>
            </p>
            <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
              See Live
            </button>
            <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
              View Code
            </button>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web7}
          alt='ip tracker web'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Made with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components
              </span>
            </p>
            <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
              See Live
            </button>
            <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
              View Code
            </button>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web2}
          alt='ip tracker web'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Made with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components
              </span>
            </p>
            <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
              See Live
            </button>
            <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
              View Code
            </button>
          </div>
        </div>
      </div>
      <div className='hover:bg-gray-900/75 hover:h-full transition duration-500 hover:w-full hover:scale-105 relative '>
        <img
          src={Web3}
          alt='ip tracker web'
          className='shadow-xl cursor-pointer '
        />
        <div className='opacity-0 hover:opacity-100'>
          <div className='grid gap-3 justify-items-center  absolute top-0 left-0 h-full w-full content-center bg-slate-900/80'>
            <p className='px-10 text-white font-bold'>
              Made with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components
              </span>
            </p>
            <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
              See Live
            </button>
            <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
              View Code
            </button>
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
              Made with:
              <br />
              <span className='font-thin'>
                React <br /> Styled Components
              </span>
            </p>
            <button className='text-sm bg-purple-600 text-white rounded-md py-1 w-28 h-10 hover:bg-gray-900/50'>
              See Live
            </button>
            <button className='text-sm bg-purple-100  rounded-md py-1 w-28 h-10 hover:bg-white/50 text-gray-900'>
              View Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
