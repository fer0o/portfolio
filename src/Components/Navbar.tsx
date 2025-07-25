'use client'
import React from 'react'
import { motion } from 'motion/react'
import { SocialIcon } from 'react-social-icons'
import { socialsMockData } from '@/services/socialMockData'
import { Sun, Moon, Mail } from 'lucide-react'
import Link from 'next/link'

type Props = {
  toggleDarkMode: () => void
  darkMode: boolean
  toggleLanguage: () => void
  language: string
}

const Navbar: React.FC<Props> = ({
  toggleDarkMode,
  darkMode,
  toggleLanguage,
  language
}) => {
  return (
    <header className=' sticky top-0 p-5 flex items-start justify-between max-w-full z-20 xl:items-center '>
      {/* bloque izquierdo redes sociales */}
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center lg:space-x-2'
      >
        {socialsMockData.map(social => (
          <SocialIcon
            key={social.id}
            url={social.url}
            fgColor='gray'
            bgColor='transparent'
            target='_blank'
          />
        ))}
      </motion.div>

      {/* bloque derecho */}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center text-gray-400 cursor-pointer space-x-2 mt-2 px-1'
      >
        {/* Enlace de contacto */}
        <Link href='#contact'>
          {/* Texto visible en desktop */}
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 }
            }}
            whileTap={{ scale: 0.9 }}
            className='uppercase hidden md:inline-flex text-sm text-gray-400 font-bold hover:underline'
          >
            {language === 'es' ? 'Contáctame' : 'Get In Touch'}
          </motion.div>

          {/* Ícono visible solo en mobile */}
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            className='inline-flex md:hidden'
          >
            <Mail className='w-5 h-5 mt-2  text-gray-400 hover:text-yellow-400 transition' />
          </motion.div>
        </Link>
        {/* boton alternar modo oscuro */}
        <motion.div
          whileTap={{ scale: 1.1 }}
          animate={{
            rotate: darkMode ? 360 : 0,
            transition: { duration: 0.5 }
          }}
        >
          <button onClick={toggleDarkMode} className='p-2 rounded text-sm'>
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </motion.div>

        {/* boton alternar idioma */}
        <motion.div
          whileTap={{ scale: 1.1 }}
          animate={{
            rotate: language === 'es' ? 360 : 0,
            transition: { duration: 0.5 }
          }}
        >
          <button
            onClick={toggleLanguage}
            className='p-2  rounded text-sm font-bold'
          >
            {language === 'es' ? 'Es' : 'En'}
          </button>
        </motion.div>
      </motion.div>
    </header>
  )
}

export default Navbar
