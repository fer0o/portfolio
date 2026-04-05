'use client'
import React from 'react'
import { useGlobalContext } from '@/context/GlobalContext'

type ButtonSize = 'sm' | 'md' | 'icon'

type ButtonClassOptions = {
  size?: ButtonSize
  className?: string
  active?: boolean
  fullWidth?: boolean
}

export const getButtonClassName = (
  darkMode: boolean,
  options?: ButtonClassOptions
): string => {
  const size = options?.size ?? 'md'
  const sizeClass =
    size === 'icon'
      ? 'h-9 w-9 md:h-10 md:w-10 text-sm'
      : size === 'sm'
        ? 'px-3 py-1.5 text-xs md:text-sm'
        : 'px-4 py-2 text-xs md:text-sm'

  const baseClass =
    'inline-flex items-center justify-center font-semibold rounded-full border transition-all duration-300 ease-in-out text-wrap'
  const darkStyles =
    'bg-white text-black border-black shadow-sky-500 hover:shadow-[2px_5px_0_0_white] hover:-translate-y-1 hover:-translate-x-0.5 active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_white]'
  const lightStyles =
    'bg-white text-black border-black shadow-black hover:shadow-[2px_5px_0_0_black] hover:-translate-y-1 hover:-translate-x-0.5 active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]'
  const activeClass = darkMode
    ? 'shadow-[2px_5px_0_0_white] -translate-y-1 -translate-x-0.5'
    : 'shadow-[2px_5px_0_0_black] -translate-y-1 -translate-x-0.5'
  const widthClass = options?.fullWidth ? 'w-full' : ''

  return `${baseClass} ${sizeClass} ${darkMode ? darkStyles : lightStyles} ${options?.active ? activeClass : ''} ${widthClass} ${options?.className ?? ''}`.trim()
}

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
  size?: ButtonSize
  active?: boolean
  fullWidth?: boolean
}

const Button: React.FC<Props> = ({
  label,
  size = 'md',
  active = false,
  fullWidth = false,
  className = '',
  children,
  ...rest
}) => {
  const { darkMode } = useGlobalContext()

  return (
    <button
      {...rest}
      className={getButtonClassName(darkMode, {
        size,
        active,
        fullWidth,
        className
      })}
    >
      {children ?? label}
    </button>
  )
}

export default Button
