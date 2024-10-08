import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className='min-h-screen min-w-screen bg-gradient-to-r from-gray-700 to-black'>
      <div ></div>
      <Navbar/>
      <Banner/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
