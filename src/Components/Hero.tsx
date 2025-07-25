'use client'
import Image from 'next/image'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import HeroButton from './botones/HeroButtons'
import { useGlobalContext } from '@/context/GlobalContext'
import { heroTextMockData } from '@/services/heroTextMockData'

const Hero: React.FC = () => {
  const { darkMode, language } = useGlobalContext()
  // Obtener los datos del hero según el idioma
  const { greeting, typewriterText, buttons } = heroTextMockData[language as keyof typeof heroTextMockData]

  const [text] = useTypewriter({
    words: 
      typewriterText,
    loop: true,
    delaySpeed: 3000,
    typeSpeed: 80,
    deleteSpeed: 80
  })

  const handleClickButton = (label: string) => {
    console.log(`Button clicked: ${label}`)
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-2 p-2'>
      <div className='flex flex-col items-center justify-center space-y-4 h-full md:order-1 order-2 md:px-16 px-8'>
        {/* saludo con el nombre */}
        <div>
          <h1
            className={`text-lg md:text-3xl font-bold transition-colors duration-500 text-wrap ${
              darkMode ? 'text-yellow-400' : 'text-blue-800'
            }`}
          >
            {greeting}
          </h1>
        </div>

        {/* typewriting */}
        <div className='flex items-center justify-center p-8 max-h-16 w-96 overflow-hidden'>
          <span
            className={`text-lg md:text-2xl font-bold transition-colors duration-500 ${
              darkMode ? 'text-yellow-400' : 'text-blue-800'
            }`}
          >
            {text}
          </span>
        </div>

        {/* grid de los botones */}
        <div className='grid md:grid-rows-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2'>
          {buttons.map((label: string) => (
            <HeroButton
              key={label}
              label={label}
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
          className='object-cover rounded-md w-64 h-72 md:w-96 md:h-full shadow-lg'
          priority={false}
          loading='lazy'
        />
      </div>
    </div>
  )
}

export default Hero