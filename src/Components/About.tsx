'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useGlobalContext } from '@/context/GlobalContext'
import { aboutTextMockData } from '@/services/aboutTextMockData'

const About: React.FC = () => {
  const { language, darkMode } = useGlobalContext()
  const { title, paragraphs } =
    aboutTextMockData[language as keyof typeof aboutTextMockData]

  return (
    <motion.section
      id='about'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col h-screen text-center md:text-left px-6 md:px-12 lg:px-20 justify-center items-center'
    >
      <h2
        className={`uppercase tracking-[10px] text-2xl font-semibold mt-12 mb-8 transition-colors duration-500 ${
          darkMode ? 'text-gray-400' : 'text-black'
        }`}
      >
        {title}
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8  items-center'>
        {/* Imagen con animación */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className='flex justify-center items-center'
        >
          <Image
            src='/Photo/Fer.jpg'
            alt='Foto de perfil'
            width={400}
            height={500}
            className='rounded-full md:rounded-lg w-48 h-48 md:w-64 md:h-96 lg:w-[400px] lg:h-[500px] object-cover shadow-lg'
            priority={false}
            loading='lazy'
          />
        </motion.div>

        {/* Texto */}
        <div className='space-y-3.5 md:space-y-5'>
          <h4
            className={`text-xl md:text-3xl font-semibold transition-colors duration-500 ${
              darkMode ? 'text-gray-400' : 'text-black'
            }`}
          >
            {language === 'en' ? (
              <>
                Here is a{' '}
                <span className='underline decoration-blue-500'>little</span>{' '}
                background
              </>
            ) : (
              <>
                Aquí hay un{' '}
                <span className='underline decoration-blue-500'>poco</span>{' '}
                sobre mí
              </>
            )}
          </h4>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-sm md:text-base transition-colors duration-500 ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default About
