'use client'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

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
  const prevLabel = language === 'es' ? 'Anterior' : 'Previous'
  const nextLabel = language === 'es' ? 'Siguiente' : 'Next'
  const viewCvLabel = language === 'es' ? 'Ver CV' : 'View CV'
  const downloadCvLabel = language === 'es' ? 'Descargar CV' : 'Download CV'
  const cvHref = language === 'es' ? '/cv/cv-es.pdf' : '/cv/cv-en.pdf'
  const cvFileName =
    language === 'es'
      ? 'Fernando-Medellin-CV-ES.pdf'
      : 'Fernando-Medellin-CV-EN.pdf'

  useEffect(() => {
    if (!selectedItem) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [selectedItem])

  useEffect(() => {
    const handleViewChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ view?: ExperienceView }>
      const nextView = customEvent.detail?.view

      if (nextView === 'work' || nextView === 'projects') {
        setActiveView(nextView)
      }
    }

    window.addEventListener('experience:view-change', handleViewChange)
    return () => {
      window.removeEventListener('experience:view-change', handleViewChange)
    }
  }, [])

  const updateScrollState = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const maxScrollLeft = container.scrollWidth - container.clientWidth
    setCanScrollPrev(container.scrollLeft > 4)
    setCanScrollNext(container.scrollLeft < maxScrollLeft - 4)
  }, [])

  const getScrollStep = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return 320

    const firstSlide = container.querySelector(
      '[data-experience-slide]'
    ) as HTMLElement | null

    if (!firstSlide) return 320

    return firstSlide.getBoundingClientRect().width + 20
  }, [])

  const handlePrev = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    container.scrollBy({ left: -getScrollStep(), behavior: 'smooth' })
  }, [getScrollStep])

  const handleNext = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    container.scrollBy({ left: getScrollStep(), behavior: 'smooth' })
  }, [getScrollStep])

  useEffect(() => {
    updateScrollState()
    const handleResize = () => updateScrollState()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [updateScrollState, activeView])

  const renderCard = (item: ExperienceItem) => (
    <button
      key={item.id}
      onClick={() => {
        setSelectedItem(item)
        setShowDetails(false)
      }}
      className={`relative hover:z-10 h-[390px] sm:h-[420px] md:h-[440px] w-full text-left rounded-lg border p-4 sm:p-5 shadow-lg transition hover:-translate-y-1 flex flex-col ${
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
      <p
        className={`text-sm mt-3 max-h-24 overflow-hidden ${
          darkMode ? 'text-gray-200' : 'text-gray-700'
        }`}
      >
        {item.summary[language]}
      </p>
      <div className='mt-auto pt-4'>
        <div className='flex flex-wrap gap-2 max-h-20 overflow-y-auto no-scrollbar pr-1'>
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
      </div>
    </button>
  )

  return (
    <section
      id='experience'
      className='w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16'
    >
      <div className='max-w-6xl mx-auto space-y-8'>
        <div className='text-center space-y-2'>
          <h2
            className={`uppercase tracking-[6px] sm:tracking-[10px] text-2xl font-semibold ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {title}
          </h2>
          <p className={darkMode ? 'text-gray-200' : 'text-gray-700'}>
            {subtitle}
          </p>
        </div>

        <div className='flex flex-wrap md:flex-nowrap items-center justify-center gap-3'>
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
          <a
            href={cvHref}
            target='_blank'
            rel='noreferrer'
            className={getButtonClassName(darkMode, { size: 'sm' })}
          >
            {viewCvLabel}
          </a>
          <a
            href={cvHref}
            download={cvFileName}
            className={getButtonClassName(darkMode, { size: 'sm' })}
          >
            {downloadCvLabel}
          </a>
        </div>

        <div className='flex justify-center gap-2'>
          <Button
            onClick={handlePrev}
            label={prevLabel}
            size='sm'
            disabled={!canScrollPrev}
            className='disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0'
          />
          <Button
            onClick={handleNext}
            label={nextLabel}
            size='sm'
            disabled={!canScrollNext}
            className='disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0'
          />
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={updateScrollState}
          className={`overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent ${
            darkMode
              ? 'scrollbar-thumb-zinc-600'
              : 'scrollbar-thumb-gray-300'
          } overflow-y-visible pt-2 -mx-4 px-4 sm:mx-0 sm:px-0`}
        >
          <div className='flex gap-5 pr-6 snap-x snap-mandatory'>
            {filteredItems.map(item => (
              <div
                key={item.id}
                data-experience-slide
                className='w-[16rem] min-[380px]:w-[18rem] sm:w-[320px] md:w-[340px] shrink-0 snap-start py-1'
              >
                {renderCard(item)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedItem && (
        <div
          className='fixed inset-0 z-50 bg-black/70 px-4 py-4 flex items-center justify-center'
          onClick={closeModal}
        >
          <div
            className={`w-full max-w-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-xl border p-4 sm:p-6 relative ${
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
                    className={`rounded-lg border p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${
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
