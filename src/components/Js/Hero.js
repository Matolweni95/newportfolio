import React from 'react';
import heroImg from '../../assets/hero.svg';
import codeBlock from '../../assets/codeBlock.svg';

const Hero = () => {
  return (
    <>
      <div>
        <section className="hero bg-gray-900 text-white">
        <div className="hero-content text-[--text]  mt-0 md:mt-[-100px] container mx-auto p-8 gap-9 flex md:flex-row sm:flex-row lg:flex-row  flex-col lg:flex-row items-center">         
          <div className="hero-text lg:pr-4 lg:w-1/2 md:w-1/2 sm:w-1/2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Frontend Software Developer
              </h1>
              <p className="text-base lg:text-lg xl:text-xl mb-6 lg:w-4/5">
              Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
              </p>
              <div className="link-container">
                <a href="#about" className="text-purple">Read more...</a>
              </div>
            </div>
            <div className="hero-img relative md:w-1/2 ">
              <img
                src={heroImg}
                className="w-40 h-auto object-cover max-w-full"
                alt="Hero"
              />
            </div>
            
            {/* <img className="absolute z-0 transform scale-x-[-1] bottom-[-42px] right-[1100px] w-50 h-100 blur" src={codeBlock} alt="Code Block" /> */}
          </div>
          {/* <img className="absolute lg:left-[-700px] bottom-[-100px] z-0 transform scale-x-[-1] h-60 blur-[4px]" src={codeBlock} alt="Code block item" /> */}

        </section>
      </div>
    </>
  );
};

export default Hero;
