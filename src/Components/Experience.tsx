'use client'
import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import { useGlobalContext } from '@/context/GlobalContext'
import { ExperienceItem, ExperienceView } from '@/models/experience'
import { experienceMockData } from '@/services/experienceMockData'
import Button, { getButtonClassName } from '@/Components/botones/Button'

const Experience: React.FC = () => {
  const { darkMode, language } = useGlobalContext()
  const [activeView, setActiveView] = useState<ExperienceView>('work')
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  const closeModal = () => {
    setSelectedItem(null)
    setShowDetails(false)
  }

  const filteredItems = useMemo(
    () => experienceMockData.filter(item => item.view === activeView),
    [activeView]
  )

  const title = language === 'es' ? 'Experiencia' : 'Experience'
  const subtitle =
    language === 'es'
      ? 'Vista laboral y de proyectos/cursos'
      : 'Work and projects/courses view'
  const workLabel = language === 'es' ? 'Laboral' : 'Work'
  const projectsLabel = language === 'es' ? 'Proyectos' : 'Projects'
  const seeMoreLabel = language === 'es' ? 'Ver mas detalles' : 'See more details'
  const closeLabel = language === 'es' ? 'Cerrar' : 'Close'
  const backLabel = language === 'es' ? 'Volver al resumen' : 'Back to summary'
  const repoLabel = language === 'es' ? 'Ver repositorio en GitHub' : 'View repository on GitHub'
  const certificateLabel =
    language === 'es' ? 'Preview del certificado' : 'Certificate preview'
  const certificateSectionLabel =
    language === 'es' ? 'Certificado' : 'Certificate'

  return (
    <section
      id='experience'
      className='snap-center min-h-screen px-6 md:px-12 lg:px-20 py-16'
    >
      <div className='max-w-6xl mx-auto space-y-8'>
        <div className='text-center space-y-2'>
          <h2
            className={`uppercase tracking-[10px] text-2xl font-semibold ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {title}
          </h2>
          <p className={darkMode ? 'text-gray-200' : 'text-gray-700'}>
            {subtitle}
          </p>
        </div>

        <div className='flex justify-center gap-3'>
          <Button
            onClick={() => setActiveView('work')}
            active={activeView === 'work'}
            label={workLabel}
          />
          <Button
            onClick={() => setActiveView('projects')}
            active={activeView === 'projects'}
            label={projectsLabel}
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {filteredItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedItem(item)
                setShowDetails(false)
              }}
              className={`text-left rounded-lg border p-5 shadow-lg transition hover:-translate-y-1 ${
                darkMode
                  ? 'bg-black/40 border-gray-600'
                  : 'bg-white/90 border-gray-200'
              }`}
            >
              {item.imageUrl && (
                <div className='mb-4 flex justify-center'>
                  <div
                    className={`h-14 w-14 rounded-xl border overflow-hidden flex items-center justify-center ${
                      darkMode ? 'border-gray-600 bg-white/90' : 'border-gray-300 bg-white'
                    }`}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title[language]}
                      width={56}
                      height={56}
                      className='h-full w-full object-contain p-2'
                    />
                  </div>
                </div>
              )}
              <p className='text-sm text-gray-400'>{item.period[language]}</p>
              <h3 className='text-lg font-bold mt-1'>{item.title[language]}</h3>
              <p className='text-sm mt-1 text-blue-500 font-semibold'>
                {item.subtitle[language]}
              </p>
              <p className={`text-sm mt-3 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {item.summary[language]}
              </p>
              <div className='flex flex-wrap gap-2 mt-4'>
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
            </button>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className='fixed inset-0 z-50 bg-black/70 px-4 flex items-center justify-center'
          onClick={closeModal}
        >
          <div
            className={`w-full max-w-2xl rounded-xl border p-6 relative ${
              darkMode ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-gray-200'
            }`}
            role='dialog'
            aria-modal='true'
            onClick={event => event.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 text-sm underline'
            >
              {closeLabel}
            </button>

            <p className='text-sm text-gray-400'>{selectedItem.period[language]}</p>
            <h3 className='text-2xl font-bold mt-1'>{selectedItem.title[language]}</h3>
            <p className='text-sm mt-1 text-blue-500 font-semibold'>
              {selectedItem.subtitle[language]}
            </p>

            {selectedItem.imageUrl && (
              <div className='mt-4 flex justify-center'>
                <div
                  className={`h-20 w-20 rounded-xl border overflow-hidden flex items-center justify-center ${
                    darkMode ? 'border-gray-600 bg-white/90' : 'border-gray-300 bg-white'
                  }`}
                >
                  <Image
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title[language]}
                    width={80}
                    height={80}
                    className='h-full w-full object-contain p-2'
                  />
                </div>
              </div>
            )}

            <p className={`mt-4 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {showDetails
                ? selectedItem.details[language]
                : selectedItem.summary[language]}
            </p>

            <div className='flex gap-3 mt-6'>
              <Button onClick={() => setShowDetails(prev => !prev)}>
                {showDetails ? backLabel : seeMoreLabel}
              </Button>
            </div>

            <div className='mt-6 space-y-3'>
              {selectedItem.repoUrl && (
                <div className='pt-2 border-t border-gray-500/30'>
                  <a
                    href={selectedItem.repoUrl}
                    target='_blank'
                    rel='noreferrer'
                    className={getButtonClassName(darkMode, { size: 'sm' })}
                  >
                    {repoLabel}
                  </a>
                </div>
              )}

              {selectedItem.certificateThumbUrl &&
                selectedItem.certificatePreviewUrl && (
                  <div
                    className={`rounded-lg border p-3 flex items-center justify-between gap-3 ${
                      darkMode ? 'border-gray-600 bg-black/30' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className='flex items-center gap-3'>
                      <div
                        className={`h-12 w-12 rounded-md border overflow-hidden flex items-center justify-center ${
                          darkMode
                            ? 'border-gray-600 bg-white/90'
                            : 'border-gray-300 bg-white'
                        }`}
                      >
                        <Image
                          src={selectedItem.certificateThumbUrl}
                          alt={certificateSectionLabel}
                          width={48}
                          height={48}
                          className='h-full w-full object-contain p-1'
                        />
                      </div>
                      <span className='text-sm font-semibold'>
                        {certificateSectionLabel}
                      </span>
                    </div>
                    <a
                      href={selectedItem.certificatePreviewUrl}
                      target='_blank'
                      rel='noreferrer'
                      className={getButtonClassName(darkMode, {
                        size: 'sm'
                      })}
                    >
                      {certificateLabel}
                    </a>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Experience
