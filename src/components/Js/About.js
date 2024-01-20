import React from 'react';
import darkCube from '../../assets/dark_cube2.png';
import '../../css/about.css';
import codeBlock from '../../assets/codeBlock.svg';

const About = () => {
  return (
    <>
      <div className='flex justify-center h-100 ' id='#about'>
        <section className=" ">
          <div className='about text-[--text] flex flex-col lg:flex-row'>
          <div className="about-main flex items-center mt-12">
            <div className="about-container p-8 flex flex-col md:flex-row lg:flex-row justify-center w-full">
              <div className="about-text flex flex-col md:w-1/2 lg:flex-col items-center lg:items-start">
                <div className="about-text-container text-center lg:text-left">
                  <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold mb-4'>Hi, I'm Masixole<br /> Web Developer</h1>
                  <p className="sub-heading text-[--gray] opacity-75 leading-7 tracking-wide">Front End Developer / Backend Developer</p>
                </div>
                <img className="dark-cube mt-8 lg:mt-0 w-1/2 max-w-md lg:max-w-full" src={darkCube} alt="Dark Cube" />
              </div>
              <div className="about-content w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                <div className="about-content-container">
                  <p className='text-justify'>
                  Enthusiastic about frontend development, I thrive on embracing new challenges and collaborating with like-minded individuals in the field. Beyond coding, gaming is a source of joy and inspiration for me. My personality is defined by drive, loyalty, and a natural problem-solving ability, bringing unwavering dedication to every project. With a keen eye for detail and a passion for crafting seamless user experiences, I delve into the entire frontend spectrum. I am not just a developer; I am a creative problem-solver, dedicated collaborator, and technology enthusiast, driven by the possibilities within the digital landscape.
                </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        
        </section>
       
      </div>
      
    </>
  );
}

export default About;
