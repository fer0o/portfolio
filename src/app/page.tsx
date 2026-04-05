'use client'
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import { useGlobalContext } from '@/context/GlobalContext'
import About from '@/Components/About'
import Experience from '@/Components/Experience'

export default function Home() {
  const { darkMode, language } = useGlobalContext()

  const backgrounds = darkMode
    ? '/backgrounds/dark.png'
    : '/backgrounds/white.png'

  return (
    <div
      className={`page-scroll h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 w-full bg-cover bg-center ${
        darkMode ? 'text-white' : 'text-black'
      }`}
      style={{ backgroundImage: `url(${backgrounds})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Resto del contenido */}
      <section className='page-section snap-start my-4 md:my-0'>
        <Hero />
      </section>
      {/* seccion About */}
      <section className='page-section snap-start my-4 md:my-0'>
        <About/>
      </section>
      {/* seccion Experiencia */}
      <section className='page-section snap-start my-4 md:my-0'>
        <Experience />
      </section>
      {/* seccion Contact */}
      <section
        id='contact'
        className='page-section snap-start my-4 md:my-0 min-h-screen px-6 md:px-12 lg:px-20 flex items-center justify-center'
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
