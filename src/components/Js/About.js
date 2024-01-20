import React from 'react';
import darkCube from '../../assets/dark_cube2.png';
import '../../css/about.css';
import codeBlock from '../../assets/codeBlock.svg';

const About = () => {
  return (
    <>
      <div className='flex justify-center h-100 '>
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
                  <p>Professionally connected with the web development industry.</p>
                  <p>Problem solver, well-organised person, loyal employee with high attention to detail.</p>
                  <p>Fan of Boxing, outdoor activities, video games, and coding of course.</p>
                  <p>Interested in the entire frontend spectrum and working on ambitious projects with interesting people.</p>
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
