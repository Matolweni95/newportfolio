import React from 'react'
import Navbar from '../components/Js/Navbar'
import Hero from '../components/Js/Hero'
import About from '../components/Js/About'
import Skills from '../components/Js/Skills'
import Projects from '../components/Js/Projects'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
    </>
  )
}

export default Home