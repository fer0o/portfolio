import type { Language } from '@/context/GlobalContext'

export interface Certificate {
  id: string
  title: Record<Language, string>
  issuer: string
  issuedAt: string
  hours: number
  weeks?: number
  topTen?: boolean
  featured?: boolean
  imageWidth: number
  imageHeight: number
  thumbnailUrl: string
  previewUrl: string
  originalUrl: string
}
