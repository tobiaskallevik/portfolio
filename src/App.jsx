import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/home'
import Experience from './experience/experience'
import About from './about/about'
import Navbar from './common/navbar'
import { NavMobile } from './common/nav-mobile'
import ErrorBoundary from './common/error-boundary'


function App() {



  return (
    <>
      <Navbar />
      <NavMobile />

      <section id='home'> <ErrorBoundary><Home /></ErrorBoundary> </section>
      <section id='about'> <ErrorBoundary><About/></ErrorBoundary> </section>
      <section id='experience'> <ErrorBoundary><Experience/></ErrorBoundary> </section>
    </>
  )
}

export default App
