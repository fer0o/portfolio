'use client'
import { useState } from 'react'
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'

export default function Home () {
  //estado para el modo oscuro
  const [darkMode, setDarkMode] = useState(true)
  //estado para el idioma
  const [language, setLanguage] = useState('en')

  //funcion para alternar el modo oscuro
  const toggleDarkMode = () => setDarkMode(prev => !prev)
  //funcion para alternar el idioma
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en'
    setLanguage(newLanguage)
    console.log(`tu idioma es ${newLanguage}`)
  }
  //backgrounds
  const backgrounds = darkMode
    ? './backgrounds/dark.png'
    : './backgrounds/white.png'
  return (
    <div
      className={`h-screen snap-y snap-mandatory overflow-y-hidden overflow-x-hidden z-0 w-full bg-cover bg-center text-${
        darkMode ? 'white' : 'black'
      }`}
      style={{ backgroundImage: `url(${backgrounds})` }}
    >
      {/* Navbar */}
      <div className='fixed top-0 left-0 w-full z-50'>
      <Navbar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleLanguage={toggleLanguage}
        language={language}
      />
      </div>

      {/* Resto del contenido */}
      <section className='snap-center flex flex-col items-center justify-center h-screen p-8'>
        <Hero darkMode={darkMode} />
      </section>
    </div>
  )
}
