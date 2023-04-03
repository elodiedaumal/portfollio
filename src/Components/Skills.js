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
  SiTypescript,
} from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

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
              <div className='flex gap-2 text-2xl md:text-3xl md:gap-5 text-center justify-center '>
                <FaCss3Alt />
                <SiStyledcomponents />
                <SiTailwindcss />
                <FaNodeJs />
              </div>
              <p className='md:text-lg'>
                Flexbox and grid are no challenge for me! I've built many
                projects with the help of Tailwind CSS or Styled component.
                Thanks to those amazing styling tools I've been exploring a
                world of possibilities.
              </p>
            </div>
            <div className='flex flex-col gap-2 md:gap-5'>
              <h3 className='underline decoration-purple-600'>
                Language / libraries
              </h3>
              <div className='flex gap-2 text-2xl md:text-3xl md:gap-5 text-center justify-center'>
                <FaReact />
                <FaHtml5 />
                <FaJsSquare />
              </div>
              <p className='md:text-lg'>
                I've made React my main coding library, I found it very
                intuitive and straight forward. Soon I'll start implementing
                Vue.js and Flutter to my repertoire.
              </p>
            </div>
            <div className='flex flex-col gap-2 md:gap-5'>
              <h3 className='underline decoration-purple-600'>Tools</h3>
              <div className='flex gap-2 text-2xl md:text-3xl md:gap-5 text-center justify-center'>
                <AiFillGithub />
                <SiVisualstudiocode />
                <SiTypescript />
                <FaWordpress />
              </div>
              <p className='md:text-lg'>
                Github and vscode are my bread and butter, their is not a day
                without me being thankful for those amazing tools. As my
                knowledge grows stronger I've started to implement typescript in
                some projects.
              </p>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
