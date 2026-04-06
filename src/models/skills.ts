import { Language } from '@/context/GlobalContext'

export type LocalizedText = Record<Language, string>

export interface CoreSkill {
  id: string
  name: string
  level: LocalizedText
  years: string
}

export interface SkillDomain {
  id: string
  title: LocalizedText
  items: Record<Language, string[]>
}

export interface SkillEvidence {
  id: string
  title: LocalizedText
  stack: string[]
  cta: LocalizedText
  href: string
}

export interface SkillsSectionContent {
  title: LocalizedText
  subtitle: LocalizedText
  domainsTitle: LocalizedText
  evidenceTitle: LocalizedText
  core: CoreSkill[]
  domains: SkillDomain[]
  evidence: SkillEvidence[]
}
