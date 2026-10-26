import type { Certificate } from '@/models/certificate'

type CertificateDetails = Omit<
  Certificate,
  'issuer' | 'thumbnailUrl' | 'previewUrl' | 'originalUrl'
>

const certificate = (details: CertificateDetails): Certificate => ({
  ...details,
  issuer: 'Coderhouse',
  thumbnailUrl: `/certificates/${details.id}-thumb.webp`,
  previewUrl: `/certificates/${details.id}.webp`,
  originalUrl: `/certificates/originals/${details.id}.${details.featured ? 'pdf' : 'png'}`
})

export const certificatesData: Certificate[] = [
  certificate({
    id: 'backend-program',
    title: {
      es: 'Carrera de Desarrollo Backend',
      en: 'Backend Development Program'
    },
    issuedAt: '2026-04-23',
    hours: 92,
    featured: true,
    imageWidth: 1800,
    imageHeight: 1222
  }),
  certificate({
    id: 'backend-ii',
    title: {
      es: 'Backend II: Diseño y Arquitectura Backend',
      en: 'Backend II: Backend Design and Architecture'
    },
    issuedAt: '2026-03-16',
    hours: 16,
    weeks: 8,
    imageWidth: 1280,
    imageHeight: 974
  }),
  certificate({
    id: 'backend-i',
    title: {
      es: 'Programación Backend I: Desarrollo Avanzado de Backend Flex',
      en: 'Backend Programming I: Advanced Backend Development Flex'
    },
    issuedAt: '2025-12-15',
    hours: 18,
    weeks: 10,
    topTen: true,
    imageWidth: 1348,
    imageHeight: 613
  }),
  certificate({
    id: 'sql',
    title: { es: 'SQL Flex', en: 'SQL Flex' },
    issuedAt: '2025-09-16',
    hours: 22,
    weeks: 10,
    topTen: true,
    imageWidth: 1365,
    imageHeight: 607
  }),
  certificate({
    id: 'javascript',
    title: { es: 'JavaScript Flex', en: 'JavaScript Flex' },
    issuedAt: '2025-07-05',
    hours: 20,
    weeks: 12,
    topTen: true,
    imageWidth: 1349,
    imageHeight: 614
  }),
  certificate({
    id: 'react-js',
    title: { es: 'React JS', en: 'React JS' },
    issuedAt: '2022-05-23',
    hours: 28,
    weeks: 7,
    imageWidth: 1800,
    imageHeight: 1167
  }),
  certificate({
    id: 'web-development',
    title: { es: 'Desarrollo Web', en: 'Web Development' },
    issuedAt: '2022-02-19',
    hours: 45,
    weeks: 12,
    imageWidth: 1800,
    imageHeight: 1167
  })
]
