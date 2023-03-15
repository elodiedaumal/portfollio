import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import IconMenu from '../assets/images/icon-menu.svg';
import IconClose from '../assets/images/icon-close-menu.svg';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const openSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <nav className='pt-10 mb-12 flex justify-between max-w-screen-xl items-center mx-auto px-5 bg-zinc-50'>
        <div className='flex items-center gap-12'>
          <h1 className='text-xl  font-bold'>FaEDaumal</h1>
          <ul className=' lg:flex gap-5 capitalize hidden'>
            <li>about me</li>
            <li>skills</li>
            <li>portfolio</li>
            <li>contact</li>
          </ul>
        </div>
        <ul className='flex items-center gap-5'>
          <li>
            <BsFillMoonStarsFill className='cursor-pointer  md:text-2xl' />
          </li>
          <li className='lg:hidden' onClick={openSideBar}>
            <img src={IconMenu} alt='menu' />
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
        <div className={sidebar ? 'bg-gray-500/50 h-screen  ' : 'hidden'}></div>
        <nav className='h-screen bg-white col-span-2'>
          <ul className='grid  gap-5 relative capitalize  p-5 pt-10'>
            <li className='lg:hidden justify-self-end' onClick={openSideBar}>
              <img src={IconClose} alt='menu' />
            </li>
            <li onClick={openSideBar}>about me</li>
            <li onClick={openSideBar}>skills</li>
            <li onClick={openSideBar}>portfolio</li>
            <li onClick={openSideBar}>contact</li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
