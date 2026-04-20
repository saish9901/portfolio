import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import ContactForm from './components/UI/EmailForm'
import { BiArrowToTop } from 'react-icons/bi'

//pages
import ProjectsPage from './Pages/ProjectsPage'

import './utility/mouse_activity'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {


  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = (scrolled / scrollHeight) * 100;
      
      // Show button when scrolled past 50% of viewport
      if (scrollPercentage > 50) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  return (
   <BrowserRouter>
    <div className="fixed -z-10 h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    <div id='mouse_pointer'></div>
    <main className='flex flex-col items-center px-4 md:px-8 lg:px-16 overflow-hidden'>
        <Navbar />
          <Routes>
              <Route path="/" element={
            <>
              <Hero />
              <Tech />
              <Projects />
              <Contact />
              <ContactForm/>
              <Footer />
              {showBackToTop && (
                <div className='btotop fixed bottom-[6rem] right-6 bg-white w-12 h-12 flex center items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:transform hover:scale-110'>
                  <button className='w-[100%] flex justify-center' onClick={scrollToTop}><BiArrowToTop /></button>
                </div>
              )}
            </>
          } />
            <Route path="/projects" element={<ProjectsPage/>} />
          </Routes>    
        <WhatsAppButton />
    </main>
   </BrowserRouter>
   
  )
}

export default App
