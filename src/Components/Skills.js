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
    <section className=' mx-auto   leading-relaxed py-5 '>
      <h2 className='text-3xl max-w-screen-xl py-5 md:px-10 px-5 mx-auto'>
        My <span className='text-sky-500'>Skills</span>
      </h2>

      <div
        class='w-full bg-cover bg-center '
        style={{ backgroundImage: `url(${SkillsImg})` }}
      >
        <div class='w-full h-full flex  justify-center items-center backdrop-brightness-50 mx-auto'>
          <span class='text-white text-4xl  text-center grid grid-cols-3 '>
            <article className='p-10'>
              <h3>Styling</h3>
              <FaCss3Alt />
              <SiStyledcomponents />
              <SiTailwindcss />
            </article>
            <article className='p-10'>
              <h3>Language/libraries</h3>
              <FaReact />
              <FaHtml5 />
              <FaJsSquare />
            </article>
            <article className='p-10'>
              <h3>Tools</h3>
              <FaNodeJs />
              <FaWordpress />
              <SiVisualstudiocode />
            </article>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
