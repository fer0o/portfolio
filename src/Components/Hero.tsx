'use client'
import Image from 'next/image'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import Button from './botones/Button'
import { useGlobalContext } from '@/context/GlobalContext'
import { heroTextMockData } from '@/services/heroTextMockData'

const Hero: React.FC = () => {
  const { darkMode, language } = useGlobalContext()
  // Obtener los datos del hero según el idioma
  const { greeting, typewriterText, buttons } = heroTextMockData[language]

  const [text] = useTypewriter({
    words: 
      typewriterText,
    loop: true,
    delaySpeed: 3000,
    typeSpeed: 80,
    deleteSpeed: 80
  })

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (!section) return
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleClickButton = (label: string) => {
    const normalizedLabel = label
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    if (
      normalizedLabel.includes('experience') ||
      normalizedLabel.includes('experiencia')
    ) {
      window.dispatchEvent(
        new CustomEvent('experience:view-change', {
          detail: { view: 'work' }
        })
      )
      scrollToSection('experience')
      return
    }

    if (
      normalizedLabel.includes('projects') ||
      normalizedLabel.includes('proyectos')
    ) {
      window.dispatchEvent(
        new CustomEvent('experience:view-change', {
          detail: { view: 'projects' }
        })
      )
      scrollToSection('experience')
      return
    }

    if (normalizedLabel.includes('about') || normalizedLabel.includes('sobre')) {
      scrollToSection('about')
      return
    }

    if (
      normalizedLabel.includes('skills') ||
      normalizedLabel.includes('habilidades')
    ) {
      scrollToSection('skills')
    }
  }

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 md:gap-2 p-2'>
      <div className='flex flex-col items-center justify-center space-y-4 h-full md:order-1 order-2 md:px-16 px-4 sm:px-6'>
        {/* saludo con el nombre */}
        <div>
          <h1
            className={`text-center text-lg sm:text-xl md:text-3xl font-bold transition-colors duration-500 text-wrap ${
              darkMode ? 'text-yellow-400' : 'text-blue-800'
            }`}
          >
            {greeting}
          </h1>
        </div>

        {/* typewriting */}
        <div className='flex items-center justify-center p-3 sm:p-4 md:p-8 max-h-16 w-full max-w-[22rem] md:max-w-none md:w-96 overflow-hidden'>
          <span
            className={`text-base sm:text-lg md:text-2xl font-bold transition-colors duration-500 ${
              darkMode ? 'text-yellow-400' : 'text-blue-800'
            }`}
          >
            {text}
          </span>
        </div>

        {/* grid de los botones */}
        <div className='w-full max-w-[24rem] sm:max-w-[26rem] md:max-w-[34rem] lg:max-w-none grid md:grid-rows-1 grid-cols-2 max-[360px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3'>
          {buttons.map((label: string) => (
            <Button
              key={label}
              label={label}
              fullWidth
              className='text-sm sm:text-base py-2.5 md:py-3'
              onClick={() => handleClickButton(label)}
            />
          ))}
        </div>
      </div>

      <div className='flex items-center justify-center h-full md:order-2 order-1'>
        <Image
          src='/Photo/Fer.jpg'
          alt='Foto de perfil'
          width={400}
          height={500}
          className='object-cover rounded-md w-52 h-60 sm:w-60 sm:h-72 md:w-96 md:h-full shadow-lg'
          priority={false}
          loading='lazy'
        />
      </div>
    </div>
  )
}

export default Hero
