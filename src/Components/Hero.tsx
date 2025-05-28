import React from 'react'

const Hero = () => {
  return (
    <div className='text-white border-2 border-white align-middle grid grid-cols-2 items-center justify-center p-8 gap-4'>
        <div className='flex flex-col items-center justify-center border-2 border-cyan-500'>
            <p>Texto</p>
        </div>
        <div className='flex items-center justify-center border-2 border-yellow-500'>
            <p>imagen</p>
        </div>
    </div>
  )
}

export default Hero
