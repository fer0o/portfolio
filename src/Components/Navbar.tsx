'use client'
import React from 'react'
import { motion } from 'motion/react'
import { SocialIcon } from 'react-social-icons'
import { socialsMockData } from '@/services/socialMockData'
import { Sun, Moon, Mail } from 'lucide-react'
import Link from 'next/link'
import { useGlobalContext } from '@/context/GlobalContext'
import Button from './botones/Button'

const Navbar: React.FC = () => {
  const {
    darkMode,
    toggleDarkMode,
    language,
    toggleLanguage
  } = useGlobalContext()

  return (
    <header
      className={`sticky top-0 z-30 h-14 md:h-16 w-full px-2.5 md:px-5 border-b backdrop-blur-sm ${
        darkMode
          ? 'bg-black/45 border-gray-700/70'
          : 'bg-white/85 border-gray-200'
      }`}
    >
      <div className='mx-auto max-w-6xl h-full flex items-center justify-between gap-1 md:gap-2'>
        {/* bloque izquierdo redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className='flex items-center gap-1 md:gap-2 shrink-0 max-[360px]:scale-90 origin-left'
        >
          {socialsMockData.map(social => (
            <SocialIcon
              key={social.id}
              url={social.url}
              fgColor='gray'
              bgColor='transparent'
              target='_blank'
              className='!h-7 !w-7 sm:!h-8 sm:!w-8 md:!h-10 md:!w-10'
            />
          ))}
        </motion.div>

        {/* bloque derecho */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className='flex items-center gap-1 sm:gap-1.5 md:gap-2 shrink-0 max-[360px]:scale-90 origin-right'
        >
          {/* Enlace de contacto */}
          <Link href='#contact' className='shrink-0'>
            <motion.div
              whileTap={{ scale: 0.95 }}
              className='hidden md:inline-flex uppercase text-sm text-gray-400 font-bold hover:underline'
            >
              {language === 'es' ? 'Contáctame' : 'Get In Touch'}
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.92 }}
              className={`inline-flex md:hidden h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-md border ${
                darkMode ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              <Mail className='h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400' />
            </motion.div>
          </Link>

          {/* botón modo oscuro */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            animate={{
              rotate: darkMode ? 360 : 0,
              transition: { duration: 0.45 }
            }}
          >
            <Button
              type='button'
              onClick={toggleDarkMode}
              aria-label={language === 'es' ? 'Cambiar tema' : 'Toggle theme'}
              size='icon'
              className='h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10'
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
          </motion.div>

          {/* botón idioma */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            animate={{
              rotate: language === 'es' ? 360 : 0,
              transition: { duration: 0.45 }
            }}
          >
            <Button
              type='button'
              onClick={toggleLanguage}
              aria-label={language === 'es' ? 'Cambiar idioma' : 'Change language'}
              size='icon'
              className='h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-xs sm:text-sm'
            >
              {language === 'es' ? 'Es' : 'En'}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}

export default Navbar
