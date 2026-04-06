'use client'
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import { useGlobalContext } from '@/context/GlobalContext'
import About from '@/Components/About'
import Experience from '@/Components/Experience'
import Skills from '@/Components/Skills'

export default function Home() {
  const { darkMode, language } = useGlobalContext()

  const backgrounds = darkMode
    ? '/backgrounds/dark.png'
    : '/backgrounds/white.png'

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden z-0 bg-cover bg-center ${
        darkMode ? 'text-white' : 'text-black'
      }`}
      style={{ backgroundImage: `url(${backgrounds})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Resto del contenido */}
      <section className='page-section min-h-[calc(100vh-var(--navbar-height))] min-h-[calc(100dvh-var(--navbar-height))] flex items-center'>
        <Hero />
      </section>
      {/* seccion About */}
      <section className='page-section py-10 sm:py-12 md:py-16'>
        <About/>
      </section>
      {/* seccion Experiencia */}
      <section className='page-section'>
        <Experience />
      </section>
      {/* seccion Skills */}
      <section className='page-section'>
        <Skills />
      </section>
      {/* seccion Contact */}
      <section
        id='contact'
        className='page-section min-h-[55vh] px-6 md:px-12 lg:px-20 py-14 md:py-20 flex items-center justify-center'
      >
        <div className='text-center space-y-4'>
          <h3 className='text-2xl md:text-3xl font-semibold'>
            {language === 'es' ? 'Contacto' : 'Contact'}
          </h3>
          <p className={darkMode ? 'text-gray-200' : 'text-gray-700'}>
            {language === 'es'
              ? 'Puedes escribirme directamente por correo.'
              : 'You can reach me directly by email.'}
          </p>
          <a
            href='mailto:fernandomedellin.dev@gmail.com'
            className='underline decoration-blue-500 font-semibold'
          >
            fernandomedellin.dev@gmail.com
          </a>
        </div>
      </section>
    </div>
  )
}
