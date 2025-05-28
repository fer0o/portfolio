'use client'
import React from 'react'
import { motion } from "motion/react"
import { SocialIcon } from 'react-social-icons'
import { socialsMockData } from '@/services/socialMockData'
import { Sun, Moon } from "lucide-react";
import Link from 'next/link'

type Props = {
    toggleDarkMode: () => void;
    darkMode: boolean;
    toggleLanguage: () => void;
    language: string;
  };


  const Navbar: React.FC<Props> = ({ toggleDarkMode, darkMode,toggleLanguage,language }) => {
  return (
    <header className=' sticky top-0 p-5 flex items-start justify-between max-w-full z-20 xl:items-center '>
        {/* bloque izquierdo redes sociales */}
        <motion.div
        initial = {{x: -500, opacity: 0, scale: 0.5}}
        animate = {{x: 0, opacity: 1, scale: 1}}
        transition = {{duration: 1.5}}
        className='flex flex-row items-center space-x-2'
        >
            {
                socialsMockData.map((social)=>(
                    <SocialIcon
                    key = {social.id}
                    url = {social.url}
                    fgColor = 'gray'
                    bgColor='transparent'
                    target = '_blank'
                    />
                ))
            }
        </motion.div>

        {/* bloque derecho */}
        <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer space-x-2 mt-2"
      >
        <Link href="https://nextjs.org/docs/pages/api-reference/components/link" >
          <div className="uppercase hidden md:inline-flex text-sm text-gray-400">
            {language === "es" ? "Contáctame" : "Get In Touch"}
          </div>
        </Link>
        {/* boton alternar modo oscuro */}
        <button 
          onClick={toggleDarkMode} 
          className="p-2 rounded text-sm"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        {/* boton alternar idioma */}
        <button 
          onClick={toggleLanguage} 
          className="p-2  rounded text-sm"
        >
          {language === "es" ? 'Es' : 'En'}
        </button>
      </motion.div>
    </header>
  )
}

export default Navbar
