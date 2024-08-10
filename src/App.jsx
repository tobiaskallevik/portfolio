import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/home'
import Navbar from './common/navbar'

function App() {

  return (
    <>
      <Navbar />
      
      <section id='home'> <Home /> </section>
      <section id='about'></section>
      <section id='experience'></section>
      <section id='contact'></section>
    </>
  )
}

export default App
