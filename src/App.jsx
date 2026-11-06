import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Units from './pages/Units/Units'
import Zones from './pages/Zones/Zones'
import Developers from './pages/Developers/Developers'
import Contact from './pages/Contactus/Contactus'
import Hero from './components/Hero'
import DisplayUnit from './pages/Units/DisplayUnit'
import ProjectDetails from './pages/Zones/ProjectDetails'
import Projects from './pages/Zones/Projects'
import DevProject from './pages/Developers/DevProjects'


function App() {

  return (
    <>
    <Navbar />

    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/units' element={<Units />} />
      <Route path='/zones' element={<Zones />} />
      <Route path='/developers' element={<Developers />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/displayunit' element={<DisplayUnit />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projectdetails' element={<ProjectDetails />} />
      <Route path='/devprojects' element={<DevProject />} />
    </Routes>


    <Footer />
    </>
  )
}

export default App
