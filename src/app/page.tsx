'use client'
import Head from 'next/head'
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import { useGlobalContext } from '@/context/GlobalContext'
import About from '@/Components/About'

export default function Home() {
  const { darkMode } = useGlobalContext()

  const backgrounds = darkMode
    ? './backgrounds/dark.png'
    : './backgrounds/white.png'

  return (
    <div
      className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 w-full bg-cover bg-center text-${
        darkMode ? 'white' : 'black'
      }`}
      style={{ backgroundImage: `url(${backgrounds})` }}
    >
      {/* Head */}
      <Head>
        <title>Fernando Medellin Portafolio</title>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Resto del contenido */}
      <section className='snap-center'>
        <Hero />
      </section>
      {/* seccion About */}
      <section className='snap-center'>
        <About/>
      </section>
      
    </div>
  )
}