'use client'
import React, { FormEvent, useMemo, useState } from 'react'
import { useGlobalContext } from '@/context/GlobalContext'
import Button from '@/Components/botones/Button'

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
  company: string
}

const initialForm: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  company: ''
}

const Contact: React.FC = () => {
  const { darkMode, language } = useGlobalContext()
  const [formData, setFormData] = useState<ContactFormData>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const copy = useMemo(
    () => ({
      title: language === 'es' ? 'Contacto' : 'Contact',
      subtitle:
        language === 'es'
          ? 'Enviame un mensaje y te respondo por correo.'
          : 'Send me a message and I will reply by email.',
      name: language === 'es' ? 'Nombre' : 'Name',
      email: 'Email',
      subject: language === 'es' ? 'Asunto' : 'Subject',
      message: language === 'es' ? 'Mensaje' : 'Message',
      submit: language === 'es' ? 'Enviar mensaje' : 'Send message',
      sending: language === 'es' ? 'Enviando...' : 'Sending...',
      success:
        language === 'es'
          ? 'Mensaje enviado. Gracias por contactarme.'
          : 'Message sent. Thanks for reaching out.',
      error:
        language === 'es'
          ? 'No se pudo enviar el mensaje. Intenta de nuevo.'
          : 'Message could not be sent. Please try again.',
      directMailLabel:
        language === 'es' ? 'Tambien puedes escribirme a:' : 'You can also email me at:'
    }),
    [language]
  )

  const handleChange =
    (field: keyof ContactFormData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: event.target.value }))
      if (status !== 'idle') {
        setStatus('idle')
        setFeedbackMessage('')
      }
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')
    setFeedbackMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(
          typeof result?.error === 'string' ? result.error : copy.error
        )
      }

      setFormData(initialForm)
      setStatus('success')
      setFeedbackMessage(copy.success)
    } catch (error) {
      setStatus('error')
      const message = error instanceof Error ? error.message : copy.error
      setFeedbackMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='w-full max-w-3xl mx-auto space-y-6'>
      <div className='text-center space-y-2'>
        <h3 className='text-2xl md:text-3xl font-semibold'>{copy.title}</h3>
        <p className={darkMode ? 'text-gray-200' : 'text-gray-700'}>{copy.subtitle}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`rounded-xl border p-4 sm:p-6 space-y-4 ${
          darkMode ? 'bg-black/35 border-gray-600' : 'bg-white/90 border-gray-200'
        }`}
      >
        <input
          type='text'
          name='company'
          value={formData.company}
          onChange={handleChange('company')}
          className='hidden'
          tabIndex={-1}
          autoComplete='off'
          aria-hidden='true'
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          <label className='space-y-1.5'>
            <span className='text-sm font-semibold'>{copy.name}</span>
            <input
              type='text'
              required
              value={formData.name}
              onChange={handleChange('name')}
              className={`w-full rounded-md border px-3 py-2 text-sm ${
                darkMode
                  ? 'bg-black/40 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-black'
              }`}
            />
          </label>

          <label className='space-y-1.5'>
            <span className='text-sm font-semibold'>{copy.email}</span>
            <input
              type='email'
              required
              value={formData.email}
              onChange={handleChange('email')}
              className={`w-full rounded-md border px-3 py-2 text-sm ${
                darkMode
                  ? 'bg-black/40 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-black'
              }`}
            />
          </label>
        </div>

        <label className='space-y-1.5 block'>
          <span className='text-sm font-semibold'>{copy.subject}</span>
          <input
            type='text'
            required
            value={formData.subject}
            onChange={handleChange('subject')}
            className={`w-full rounded-md border px-3 py-2 text-sm ${
              darkMode
                ? 'bg-black/40 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-black'
            }`}
          />
        </label>

        <label className='space-y-1.5 block'>
          <span className='text-sm font-semibold'>{copy.message}</span>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={handleChange('message')}
            className={`w-full rounded-md border px-3 py-2 text-sm resize-none ${
              darkMode
                ? 'bg-black/40 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-black'
            }`}
          />
        </label>

        <div className='pt-1'>
          <Button type='submit' disabled={isSubmitting} className='w-full sm:w-auto'>
            {isSubmitting ? copy.sending : copy.submit}
          </Button>
        </div>

        {status !== 'idle' && (
          <p
            className={`text-sm font-semibold ${
              status === 'success' ? 'text-emerald-500' : 'text-red-500'
            }`}
          >
            {feedbackMessage}
          </p>
        )}
      </form>

      <p className={`text-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {copy.directMailLabel}{' '}
        <a
          href='mailto:fernandomedellin.dev@gmail.com'
          className='underline decoration-blue-500 font-semibold'
        >
          fernandomedellin.dev@gmail.com
        </a>
      </p>
    </div>
  )
}

export default Contact
