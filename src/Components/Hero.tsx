import Image from 'next/image'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {
  darkMode?: boolean
}
const Hero: React.FC<Props> = ({ darkMode }: Props) => {
  const [text] = useTypewriter({
    words: [
      'Web Designer',
      'Working to convert me in Fullstack',
      'Eat, Sleep, Code, Repeat!',
      'Learning React'
    ],
    loop: true,
    delaySpeed: 3000,
    typeSpeed: 80,
    deleteSpeed: 80
  })
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-2 border-2 border-white p-2 rounded-md shadow-lg '>
      <div className='flex flex-col items-center justify-center  space-y-4 h-full md:order-1 order-2 md:px-16 px-8'>
        <div className=''>
          <h1
            className={`text-lg md:text-3xl font-bold transition-colors duration-500 ${
              darkMode ? 'text-yellow-400' : 'text-blue-800'
            }`}
          >
            Hola Soy Fernando Medellin
          </h1>
        </div>
        <div className='flex items-center justify-center p-8 max-h-16 w-96 overflow-hidden'>
          <span
            className={`text-lg md:text-2xl font-bold transition-colors duration-500 ${
              darkMode ? 'text-yellow-400' : 'text-blue-800'
            }`}
          >
            {text}
          </span>
        </div>
        <div className='grid md:grid-rows-1 grid-cols-2 md:grid-cols-4 gap-2'>
          <button className='bg-white px-4 md:text-base text-sm md:font-bold'>Experiencia</button>
          <button className='bg-white px-4 md:text-base text-sm md:font-bold'>Habilidades</button>
          <button className='bg-white px-4 md:text-base text-sm md:font-bold'>Proyectos</button>
          <button className='bg-white px-4 md:text-base text-sm md:font-bold'>Contacto</button>
        </div>
      </div>
      <div className='flex items-center justify-center h-full md:order-2 order-1 '>
        <Image
          src={'/Photo/Fer.jpg'}
          alt='Foto de perfil'
          width={400}
          height={500}
          className='object-cover'
        />
      </div>
    </div>
  )
}

export default Hero
