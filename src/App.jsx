import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/home'
import Navbar from './common/navbar'
import { NavMobile } from './common/nav-mobile'

function App() {

  return (
    <>
      <Navbar />
      <NavMobile />
      
      <section id='home'> <Home /> </section>
      <section id='about'></section>
      <section id='experience'></section>
      <section id='contact'></section>
    </>
  )
}

export default App
