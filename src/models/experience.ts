import { Language } from '@/context/GlobalContext'

export type ExperienceView = 'work' | 'projects'

export type LocalizedText = Record<Language, string>

export interface ExperienceItem {
  id: string
  view: ExperienceView
  title: LocalizedText
  subtitle: LocalizedText
  period: LocalizedText
  summary: LocalizedText
  details: LocalizedText
  stack: string[]
  imageUrl?: string
  repoUrl?: string
  certificateThumbUrl?: string
  certificatePreviewUrl?: string
}
