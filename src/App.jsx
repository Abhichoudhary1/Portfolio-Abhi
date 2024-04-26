import React from 'react'
import Navbar from './components/Navbar'
import Bannner from './components/Bannner'
import About from './components/About'
import Project from './components/Project'
import Expertise from './components/Expertise'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Bannner/>
     <About />
     <Project/>
     <Expertise/>
     <Footer/>
    </div>
  )
}

export default App
