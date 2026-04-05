'use client';
import React, {createContext, useContext, useState} from 'react'

export type Language = 'es' | 'en'

type GlobalContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
  language: Language
  toggleLanguage: () => void
}

const GlobalContext = createContext <GlobalContextType | undefined> (undefined) 

export const GlobalProvider = ( {children}: {children: React.ReactNode})=> {
    const [darkMode, setDarkMode] = useState(true)
    const [language, setLanguage] = useState<Language>('en')

    const toggleDarkMode = () => setDarkMode(prev => !prev)
    const toggleLanguage = () =>
        setLanguage(prev => (prev === 'en' ? 'es' : 'en'))
    
  return (
    <GlobalContext.Provider
        value={{ darkMode, toggleDarkMode, language, toggleLanguage }}
    >
        {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider')
    }
    return context
}
