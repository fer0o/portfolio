'use client'
import React from 'react'
import { useGlobalContext } from '@/context/GlobalContext'

type Props = {
  label: string
  onClick?: () => void
}

const HeroButton: React.FC<Props> = ({ label, onClick }) => {
  const { darkMode } = useGlobalContext()

  const baseClass =
    'p-2 font-semibold rounded-full border transition-all duration-300 ease-in-out text-xs md:text-sm text-wrap'
  const darkStyles =
    'bg-white text-black border-black shadow-sky-500 hover:shadow-[2px_5px_0_0_white] hover:-translate-y-1 hover:-translate-x-0.5 active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_white]'
  const lightStyles =
    'bg-white text-black border-black shadow-black hover:shadow-[2px_5px_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]'

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${darkMode ? darkStyles : lightStyles}`}
    >
      {label}
    </button>
  )
}

export default HeroButton