'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Award, Download, ExternalLink, GraduationCap, X } from 'lucide-react'
import Button, { getButtonClassName } from '@/Components/botones/Button'
import { useGlobalContext } from '@/context/GlobalContext'
import type { Certificate } from '@/models/certificate'
import { certificatesData } from '@/services/certificatesData'

export default function Certificates() {
  const { darkMode, language } = useGlobalContext()
  const [selected, setSelected] = useState<Certificate | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const isSpanish = language === 'es'
  const copy = {
    title: isSpanish ? 'Formación y certificados' : 'Education & certificates',
    subtitle: isSpanish
      ? 'Mi formación en desarrollo web, React y backend.'
      : 'My education in web development, React, and backend development.',
    program: isSpanish ? 'Carrera completada' : 'Completed program',
    programDescription: isSpanish
      ? 'Formación completada en desarrollo backend, complementada con los cursos que encontrarás a continuación.'
      : 'Completed training in backend development, complemented by the courses below.',
    courseNote: isSpanish
      ? 'Cada documento muestra su propia duración. Las horas de la carrera y de sus cursos no se suman.'
      : 'Each document lists its own duration. Program and course hours are not added together.',
    courses: isSpanish ? 'Cursos completados' : 'Completed courses',
    distinction: isSpanish ? 'Distinción Top 10' : 'Top 10 distinction',
    view: isSpanish ? 'Ver certificado' : 'View certificate',
    download: isSpanish ? 'Descargar original' : 'Download original',
    original: isSpanish ? 'Abrir original' : 'Open original',
    close: isSpanish ? 'Cerrar' : 'Close',
    hours: isSpanish ? 'horas' : 'hours',
    weeks: isSpanish ? 'semanas' : 'weeks'
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!selected || !dialog) return

    dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      triggerRef.current?.focus({ preventScroll: true })
    }
  }, [selected])

  const openCertificate = (item: Certificate, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setSelected(item)
  }

  const dateLabel = (date: string) =>
    new Intl.DateTimeFormat(isSpanish ? 'es-MX' : 'en-US', {
      dateStyle: 'long',
      timeZone: 'UTC'
    }).format(new Date(`${date}T00:00:00Z`))

  const muted = darkMode ? 'text-gray-300' : 'text-gray-700'
  const surface = darkMode
    ? 'bg-zinc-950/70 border-zinc-700'
    : 'bg-white/95 border-gray-200'
  const featured = certificatesData.find(item => item.featured)!
  const courses = certificatesData.filter(item => !item.featured)

  const details = (item: Certificate) => (
    <div className={`space-y-1 text-sm ${muted}`}>
      <p>{item.issuer} <span aria-hidden='true'>·</span> <time dateTime={item.issuedAt}>{dateLabel(item.issuedAt)}</time></p>
      <p>{item.hours} {copy.hours}{item.weeks ? ` · ${item.weeks} ${copy.weeks}` : ''}</p>
    </div>
  )

  const thumbnail = (item: Certificate, featuredImage = false) => (
    <div className={`relative w-full overflow-hidden bg-zinc-900 ${featuredImage ? 'aspect-[3/2] rounded-xl' : 'aspect-[3/2] rounded-t-xl'}`}>
      <Image
        src={item.thumbnailUrl}
        alt={`${item.title[language]} — ${item.issuer}`}
        fill
        sizes={featuredImage ? '(min-width: 768px) 480px, 100vw' : '(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw'}
        className='object-contain'
        unoptimized
      />
    </div>
  )

  const actions = (item: Certificate) => (
    <div className='flex flex-wrap items-center gap-3'>
      <Button
        type='button'
        onClick={event => openCertificate(item, event.currentTarget)}
        aria-label={`${copy.view}: ${item.title[language]}`}
        aria-haspopup='dialog'
        className='min-h-11 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500'
      >
        {copy.view}
      </Button>
      <a
        href={item.originalUrl}
        download
        aria-label={`${copy.download}: ${item.title[language]}`}
        className='inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500'
      >
        <Download size={16} aria-hidden='true' />
        {copy.download}
      </a>
    </div>
  )

  return (
    <section id='education' aria-labelledby='education-title' className='page-section w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16'>
      <div className='mx-auto max-w-6xl space-y-8'>
        <div className='space-y-3 text-center'>
          <GraduationCap className={`mx-auto h-8 w-8 ${darkMode ? 'text-yellow-400' : 'text-blue-800'}`} aria-hidden='true' />
          <h2 id='education-title' className='text-2xl md:text-3xl font-semibold'>{copy.title}</h2>
          <p className={muted}>{copy.subtitle}</p>
        </div>

        <article id={`certificate-${featured.id}`} className={`page-section grid min-w-0 gap-6 rounded-2xl border p-4 sm:p-6 md:grid-cols-2 md:items-center md:gap-8 ${surface}`}>
          {thumbnail(featured, true)}
          <div className='space-y-4'>
            <p className={`text-sm font-semibold ${darkMode ? 'text-yellow-400' : 'text-blue-800'}`}>{copy.program}</p>
            <h3 className='text-2xl font-bold'>{featured.title[language]}</h3>
            {details(featured)}
            <p className={muted}>{copy.programDescription}</p>
            {actions(featured)}
          </div>
        </article>

        <div className='space-y-5'>
          <h3 className='text-xl font-semibold'>{copy.courses}</h3>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {courses.map(item => (
              <article key={item.id} id={`certificate-${item.id}`} className={`page-section flex min-w-0 flex-col overflow-hidden rounded-xl border ${surface}`}>
                {thumbnail(item)}
                <div className='flex flex-1 flex-col items-start gap-3 p-4 sm:p-5'>
                  {item.topTen && (
                    <span className='inline-flex items-center gap-1.5 rounded-full border border-yellow-400 bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-950'>
                      <Award size={15} aria-hidden='true' />
                      {copy.distinction}
                    </span>
                  )}
                  <h4 className='text-lg font-bold'>{item.title[language]}</h4>
                  {details(item)}
                  <div className='mt-auto w-full pt-2'>{actions(item)}</div>
                </div>
              </article>
            ))}
          </div>
          <p className={`text-sm ${muted}`}>{copy.courseNote}</p>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby='certificate-dialog-title'
        className={`fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto rounded-2xl border p-0 backdrop:bg-black/80 ${darkMode ? 'bg-zinc-950 text-white border-zinc-700' : 'bg-white text-black border-gray-200'}`}
        onCancel={event => {
          event.preventDefault()
          setSelected(null)
        }}
        onClick={event => {
          if (event.target !== event.currentTarget) return
          const bounds = event.currentTarget.getBoundingClientRect()
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
            setSelected(null)
          }
        }}
      >
        {selected && (
          <>
            <div className={`sticky top-0 z-10 flex items-start justify-between gap-4 border-b p-4 sm:p-5 ${darkMode ? 'bg-zinc-950 border-zinc-700' : 'bg-white border-gray-200'}`}>
              <div className='space-y-1'>
                <h2 id='certificate-dialog-title' className='text-lg sm:text-xl font-bold'>{selected.title[language]}</h2>
                {details(selected)}
              </div>
              <button type='button' onClick={() => setSelected(null)} aria-label={copy.close} className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'>
                <X size={20} aria-hidden='true' />
              </button>
            </div>
            <div tabIndex={0} role='region' aria-label={`${copy.view}: ${selected.title[language]}`} className='mx-4 mt-4 max-h-[60dvh] overflow-auto rounded-lg bg-zinc-900 focus-visible:outline-2 focus-visible:outline-blue-500 sm:mx-5'>
              <Image src={selected.previewUrl} alt={`${selected.title[language]} — ${selected.issuer}`} width={selected.imageWidth} height={selected.imageHeight} className='h-auto w-full' unoptimized />
            </div>
            <div className='flex flex-wrap items-center gap-4 p-4 sm:p-5'>
              <a href={selected.originalUrl} download className={getButtonClassName(darkMode, { className: 'min-h-11 gap-2' })}>
                <Download size={16} aria-hidden='true' />{copy.download}
              </a>
              <a href={selected.originalUrl} target='_blank' rel='noreferrer' className='inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4'>
                <ExternalLink size={16} aria-hidden='true' />{copy.original}
              </a>
            </div>
          </>
        )}
      </dialog>
    </section>
  )
}
