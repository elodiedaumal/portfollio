import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { AiOutlineMenuFold } from 'react-icons/ai';

import IconClose from '../assets/images/icon-close-menu.svg';
import { HashLink as Link } from 'react-router-hash-link';

const getStoredTheme = () => {
  let theme = 'dark';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const [theme, setTheme] = useState(getStoredTheme());

  const toggleTheme = () => {
    console.log(theme);
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const openSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <section id='top' className='dark:bg-gray-900 dark:text-zinc-50'>
      <nav className='pt-10 pb-12 flex justify-between max-w-screen-xl items-center mx-auto px-5 bg-zinc-50 dark:bg-gray-900 dark:text-zinc-50 '>
        <div className='flex items-center md:gap-12 '>
          <Link to='/'>
            <h1 className='text-xl  font-bold'>FaEDaumal</h1>
          </Link>
          <ul className=' lg:flex gap-5 capitalize hidden'>
            <Link to='/#about'>
              <li>about me</li>
            </Link>
            <Link to='/#skills'>
              <li>skills</li>
            </Link>
            <Link to='/#portfolio'>
              <li>portfolio</li>
            </Link>
            <Link to='/contact'>
              <li>contact</li>
            </Link>
          </ul>
        </div>
        <ul className='flex items-center md:gap-5 gap-5'>
          {theme === 'light' ? (
            <li
              id='theme-toggle'
              type='button'
              className='border-gray-900 border-4 rounded-3xl w-14 h-7 md:w-20 md:h-10 relative bg-gray-900'
            >
              <div className='bg-slate-50 rounded-2xl p-2.5 md:p-4 border-3 absolute top-0  left-0'></div>
              <BsFillMoonStarsFill
                className='cursor-pointer text-xs md:text-xl  text-gray-900 absolute top-1  left-1 md:top-1.5 '
                onClick={toggleTheme}
              />
            </li>
          ) : (
            <li
              id='theme-toggle'
              type='button'
              className='border-gray-900 border-4 rounded-3xl w-14 h-8 md:w-20 md:h-11 relative bg-zinc-50'
            >
              <div className='bg-gray-900 rounded-2xl p-3 md:p-4 border-3 absolute top-0 md:top-0.5  right-0.5'></div>
              <BsSunFill
                className='cursor-pointer text-sm md:text-xl  text-zinc-50 absolute top-1 right-1.5 md:pl-px  md:right-2 md:top-2 '
                onClick={toggleTheme}
              />
            </li>
          )}
          <li
            className='lg:hidden dark:stroke-zinc-50 text-3xl cursor-pointer'
            onClick={openSideBar}
          >
            <AiOutlineMenuFold />
          </li>
        </ul>
      </nav>
      <aside
        className={
          sidebar
            ? ' h-screen   absolute top-0 left-0 w-full grid grid-cols-3 '
            : 'hidden'
        }
      >
        <div className={sidebar ? 'bg-gray-900/50 h-screen  ' : 'hidden'}></div>
        <nav className='h-screen bg-white col-span-2 dark:text-gray-900'>
          <ul className='grid  gap-5 relative capitalize  p-5 pt-10 font-bold cursor-pointer text-lg '>
            <li className='lg:hidden justify-self-end' onClick={openSideBar}>
              <img src={IconClose} alt='menu' />
            </li>

            <Link to='/#about'>
              <li onClick={openSideBar}>about me</li>
            </Link>
            <Link to='/#skills'>
              <li onClick={openSideBar}>skills</li>
            </Link>
            <Link to='/#portfolio'>
              <li onClick={openSideBar}>portfolio</li>
            </Link>
            <Link to='contact'>
              <li onClick={openSideBar}>contact</li>
            </Link>
          </ul>
        </nav>
      </aside>
    </section>
  );
};

export default Navbar;
