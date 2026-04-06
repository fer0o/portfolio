'use client'
import React from 'react'
import { useGlobalContext } from '@/context/GlobalContext'
import { skillsMockData } from '@/services/skillsMockData'
import { getButtonClassName } from '@/Components/botones/Button'

const Skills: React.FC = () => {
  const { darkMode, language } = useGlobalContext()

  return (
    <section id='skills' className='w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16'>
      <div className='max-w-6xl mx-auto space-y-8'>
        <div className='text-center space-y-2'>
          <h2
            className={`uppercase tracking-[6px] sm:tracking-[10px] text-2xl font-semibold ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {skillsMockData.title[language]}
          </h2>
          <p className={darkMode ? 'text-gray-200' : 'text-gray-700'}>
            {skillsMockData.subtitle[language]}
          </p>
        </div>

        <div
          className={`overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent ${
            darkMode ? 'scrollbar-thumb-zinc-600' : 'scrollbar-thumb-gray-300'
          } -mx-4 px-4 sm:mx-0 sm:px-0`}
        >
          <div className='flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {skillsMockData.core.map(skill => (
              <article
                key={skill.id}
                className={`w-[16rem] sm:w-auto shrink-0 rounded-lg border p-4 shadow-lg ${
                  darkMode
                    ? 'bg-black/40 border-gray-600'
                    : 'bg-white/90 border-gray-200'
                }`}
              >
                <p className='text-lg font-bold'>{skill.name}</p>
                <p className='text-blue-500 text-sm font-semibold mt-1'>
                  {skill.level[language]}
                </p>
                <p className={darkMode ? 'text-gray-300 text-sm mt-1' : 'text-gray-700 text-sm mt-1'}>
                  {skill.years}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className='space-y-4'>
          <h3 className='text-lg md:text-xl font-semibold text-center'>
            {skillsMockData.domainsTitle[language]}
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {skillsMockData.domains.map(domain => (
              <article
                key={domain.id}
                className={`rounded-lg border p-4 ${
                  darkMode ? 'bg-black/30 border-gray-600' : 'bg-white/85 border-gray-200'
                }`}
              >
                <h4 className='font-semibold'>{domain.title[language]}</h4>
                <ul className='mt-3 space-y-1.5 text-sm'>
                  {domain.items[language].map(item => (
                    <li key={item} className={darkMode ? 'text-gray-200' : 'text-gray-700'}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className='space-y-4'>
          <h3 className='text-lg md:text-xl font-semibold text-center'>
            {skillsMockData.evidenceTitle[language]}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {skillsMockData.evidence.map(item => (
              <article
                key={item.id}
                className={`rounded-lg border p-4 space-y-3 ${
                  darkMode ? 'bg-black/30 border-gray-600' : 'bg-white/85 border-gray-200'
                }`}
              >
                <h4 className='font-semibold'>{item.title[language]}</h4>
                <div className='flex flex-wrap gap-2'>
                  {item.stack.map(tech => (
                    <span
                      key={tech}
                      className={`text-xs px-2 py-1 rounded-full border ${
                        darkMode
                          ? 'border-gray-500 text-gray-200'
                          : 'border-gray-300 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={item.href}
                  target='_blank'
                  rel='noreferrer'
                  className={getButtonClassName(darkMode, { size: 'sm' })}
                >
                  {item.cta[language]}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
