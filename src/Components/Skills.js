import React from 'react';
import SkillsImg from '../assets/images/skills.jpg';
import {
  FaReact,
  FaHtml5,
  FaJsSquare,
  FaCss3Alt,
  FaNodeJs,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiVisualstudiocode,
} from 'react-icons/si';

const Skills = () => {
  return (
    <section id='skills' className=' mx-auto   leading-relaxed py-5 md:mb-20 '>
      <div
        class='w-full bg-cover bg-center '
        style={{ backgroundImage: `url(${SkillsImg})` }}
      >
        <div class='w-full h-full text-white flex flex-col justify-center items-center backdrop-brightness-200 bg-gray-900/75 mx-auto'>
          <h2 className='text-4xl max-w-screen-xl pt-10 md:px-10 px-5 mx-auto'>
            My <span className='text-sky-500'>Skills</span>
          </h2>
          <span class='text-white md:text-3xl gap-10 gap-x-5 md:gap-x-10 text-center grid md:grid-cols-3 py-10 max-w-screen-xl px-5 md:px-10'>
            <div className='flex flex-col gap-2 md:gap-5'>
              <h3 className='underline decoration-purple-600'>Styling</h3>
              <div className='flex gap-2 text-2xl md:text-4xl md:gap-5 text-center justify-center '>
                <FaCss3Alt />
                <SiStyledcomponents />
                <SiTailwindcss />
              </div>
              <p className='md:text-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid, ratione!
              </p>
            </div>
            <div className='flex flex-col gap-2 md:gap-5'>
              <h3 className='underline decoration-purple-600'>
                Language / libraries
              </h3>
              <div className='flex gap-2 text-2xl md:text-4xl md:gap-5 text-center justify-center'>
                <FaReact />
                <FaHtml5 />
                <FaJsSquare />
              </div>
              <p className='md:text-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid, ratione!
              </p>
            </div>
            <div className='flex flex-col gap-2 md:gap-5'>
              <h3 className='underline decoration-purple-600'>Tools</h3>
              <div className='flex gap-2 text-2xl md:text-4xl md:gap-5 text-center justify-center'>
                <FaNodeJs />
                <FaWordpress />
                <SiVisualstudiocode />
              </div>
              <p className='md:text-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid, ratione!
              </p>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
