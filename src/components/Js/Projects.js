import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../../styles/swiper.css';
import git from '../../assets/git.png';
import bill from '../../assets/bill.jpg';
import quiz1 from '../../assets/quiz1.jpg';
import quiz2 from '../../assets/quiz2.jpg';
import quiz from '../../assets/quiz.png';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <>
        <div className=" flex p-8 justify-center items-center">
            <div className='project__container text-[--text] md:mt-[100px] text-center flex flex-col gap-5 mt-12'>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Portfolio & Previous Projects</h1>
                <div className='flex justify-center'>
                <p className="text-base max-w-screen-md">
                    I have built various different projects to fit different aspects of the client's business.
                    If you want to see more examples of my work than the ones showcased in this site, please contact me!
                </p>
                </div>

                <Swiper
                  direction={'vertical'}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper mt-12"
                  >
                  <SwiperSlide>
                  <div className='project_holder m-0 flex flex-col lg:flex-row p-8 gap-10'> 
                  <div className='w-full flex justify-center'>        
                      <div className='image_placeholder flex justify-center  md:w-3/4 lg:3/4'>
                        <img className='project_image lg:w-3/4 h-full object-cover' src={quiz1} />
                      </div>
                      </div>
                      <div className='project_text w-full flex flex-col justify-center text-[--cardtext]'>
                      <h3 className='pb-9 md:text-5xl text-1xl'>Coding Quiz</h3>
                      <span className='mb-3'>Topics: HTML, CSS, JS</span>
                      <span className='text-base'>
                          a dynamic coding quiz app built with React and styled with Tailwind CSS. 
                          Test your skills in JavaScript, HTML, and CSS through a series of 
                          quizzes. Ready to elevate your coding expertise? 
                          Dive into the world of React, Tailwind, and coding mastery with 
                          this intuitive quiz app.
                      </span>
                        <div className='btns flex gap-10 mt-10'>
                         <Link to="https://github.com/Matolweni95/my-quiz-app" target='_blank'>
                        <button className='view bg-purple p-4 rounded-lg w-full text-[--btntext]'>View the code</button>
                        </Link>
                        <Link to="https://welearn2code.netlify.app/" target='_blank'>
                          <button className='view bg-purple p-4 w-full rounded-lg text-[--btntext]'>Visit the app</button>
                        </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className='project_holder m-0 flex flex-col lg:flex-row p-8 gap-10'>
                      <div className='image_placeholder md:w-full lg:2/3'>
                        <img className='project_image lg:w-full  h-full object-cover' src={bill} />
                      </div>
                      <div className='project_text w-full flex flex-col justify-center text-[--cardtext]'>
                        <h3 className='pb-9 md:text-5xl text-1xl'>Invoice App</h3>
                        <span className='text-base'>
                        Experience seamless invoicing with my latest project, a sleek Invoice App designed for 
                        efficiency. Built using Tailwind CSS for a modern look, React for dynamic functionality, 
                        and Supabase for a robust backend. 
                        </span>
                        <div className='btns flex gap-10 mt-10'>
                          <Link to="https://github.com/Matolweni95/invoice-app">
                              <button className='view w-full bg-purple p-4 w-full rounded-lg text-[--btntext]'>View the code</button>
                          </Link>
                          <Link to="https://eazyinvoice.netlify.app/home">
                        <button className='view bg-purple p-4 w-full rounded-lg text-[--btntext]'>Visit the app</button>
                        </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide>
                  <div className='project_holder m-0 flex flex-col lg:flex-row p-8 gap-10'>
                      <div className='image_placeholder md:w-full lg:2/3'>
                        <img className='project_image lg:w-full  h-full object-cover' src={poke} />
                      </div>
                      <div className='project_text w-full flex flex-col justify-center text-[--cardtext]'>
                        <h3 className='pb-9 md:text-5xl text-1xl'>Questionnaire App</h3>
                        <span className='text-base'>
                        Explore diverse surveys created by users in this sleek app. Powered by Tailwind CSS and React, it offers an engaging experience for crafting and taking interactive questionnaires.
                        </span>
                        <div className='btns flex gap-10 mt-10'>
                        <button className='view bg-purple p-4 rounded-lg text-[--btntext]'>View the code</button>
                        <button className='view bg-purple p-4 rounded-lg text-[--btntext]'>Visit the app</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide> */}
                  <SwiperSlide>
                  <div className='project_holder m-0 flex flex-col lg:flex-row p-8 gap-10'>
                      <div className='image_placeholder md:w-full lg:2/3'>
                        <img className='project_image lg:w-full  h-full object-cover' src={git} />
                      </div>
                      <div className='project_text w-full flex flex-col justify-center text-[--cardtext]'>
                      <h3 className='pb-9 md:text-5xl text-1xl'>Github Profiler</h3>
                        <span className='text-base'>
                          Explore the coding world with my GitHub Profiler. Powered by the GitHub API, 
                          this application allows you to discover and navigate through users' profiles. 
                          Dive into the details of their repositories and explore their coding journey. 
                          Elevate your experience in discovering developers and their projects with 
                          this intuitive GitHub Profile Viewer.
                        </span>
                        <div className='btns flex gap-10 mt-10'>
                          <Link to="https://github.com/Matolweni95/VueGithubProfiler">
                            <button className='view w-full bg-purple p-4 rounded-lg text-[--btntext]'>View the code</button>
                          </Link>
                          <Link to="https://vuegithubprofiler.netlify.app/"> 
                            <button className='view w-full bg-purple p-4 rounded-lg text-[--btntext]'>Visit the app</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide>
                  <div className='project_holder m-0 flex flex-col lg:flex-row p-8 gap-10'>
                      <div className='image_placeholder md:w-full lg:2/3'>
                        <img className='project_image lg:w-full  h-full object-cover' src={poke} />
                      </div>
                      <div className='project_text w-full flex flex-col justify-center text-[--cardtext]'>
                        <h3 className='pb-9 md:text-5xl text-1xl'>Coding Quiz</h3>
                        <span className='mb-3'>Topics: HTML, CSS, JS</span>
                        <span className='text-base'>
                             a dynamic coding quiz app built with React and styled with Tailwind CSS. 
                             Test your skills in JavaScript, HTML, and CSS through a series of 
                             quizzes. Ready to elevate your coding expertise? 
                             Dive into the world of React, Tailwind, and coding mastery with 
                             this intuitive quiz app.
                        </span>
                        <div className='btns flex gap-10 mt-10'>
                        <button className='view bg-purple p-4 rounded-lg text-[--btntext]'>View the code</button>
                        <button className='view bg-purple p-4 rounded-lg text-[--btntext]'>Visit the app</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide> */}
                  
                  
                </Swiper>
            </div>
        </div>


    </>
  )
}

export default Projects

