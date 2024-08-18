import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/home'
import Contact from './contact/contact'
import Experience from './experience/experience'
import Navbar from './common/navbar'
import { NavMobile } from './common/nav-mobile'


function App() {


  
  return (
    <>
      <Navbar />
      <NavMobile />

      <section id='home'> <Home /> </section>
      <section id='about'></section>
      <section id='experience'> <Experience/> </section>
      <section id='contact'><Contact /></section>
    </>
  )
}

export default App
