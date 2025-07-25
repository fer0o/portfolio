'use client';
import React, {createContext, useContext, useState} from 'react'

type GlobalContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
  language: string
  toggleLanguage: () => void
}

const GlobalContext = createContext <GlobalContextType | undefined> (undefined) 

export const GlobalProvider = ( {children}: {children: React.ReactNode})=> {
    const [darkMode, setDarkMode] = useState(true)
    const [language, setLanguage] = useState <'es' | 'en'> ('en')

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
