'use client'
import React from 'react'
import { useGlobalContext } from '@/context/GlobalContext'
import { socialsMockData } from '@/services/socialMockData'

const Footer: React.FC = () => {
  const { darkMode, language } = useGlobalContext()
  const year = new Date().getFullYear()

  return (
    <footer
      className={`w-full border-t px-4 sm:px-6 md:px-12 lg:px-20 py-6 ${
        darkMode ? 'border-gray-700/70 bg-black/40' : 'border-gray-200 bg-white/70'
      }`}
    >
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm'>
        <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
          © {year} Fernando Medellin
        </p>

        <div className='flex items-center gap-4'>
          {socialsMockData.map(social => (
            <a
              key={social.id}
              href={social.url}
              target='_blank'
              rel='noreferrer'
              className='underline decoration-blue-500 font-semibold'
            >
              {social.id === 'github'
                ? 'GitHub'
                : social.id === 'linkedin'
                  ? 'LinkedIn'
                  : social.id}
            </a>
          ))}
          <a
            href='mailto:fernandomedellin.dev@gmail.com'
            className='underline decoration-blue-500 font-semibold'
          >
            Email
          </a>
        </div>

        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          {language === 'es'
            ? 'Disponible para proyectos y colaboraciones.'
            : 'Open to projects and collaborations.'}
        </p>
      </div>
    </footer>
  )
}

export default Footer
