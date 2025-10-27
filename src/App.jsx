import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import ContactForm from './components/UI/EmailForm'

const App = () => {
  return (
   <>
    <div class="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>


    <main className='flex flex-col items-center px-4 md:px-8 lg:px-16 overflow-hidden'>
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
        <ContactForm/>
        <Footer />
        <WhatsAppButton />
    </main>
   </>
  )
}

export default App
