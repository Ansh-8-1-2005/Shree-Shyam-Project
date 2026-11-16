import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Navbar'
import About from './Components/About/About'
import Contact from './Components/Contact/contact'
import Services from './Components/Service/service'
import Certificates from './Components/Certificate/certificate'
import Footer from './footer';

function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/certificates" element={<Certificates/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
