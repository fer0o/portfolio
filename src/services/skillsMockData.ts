import { SkillsSectionContent } from '@/models/skills'
import { certificatesData } from '@/services/certificatesData'

const reactCertificate = certificatesData.find(item => item.id === 'react-js')!

export const skillsMockData: SkillsSectionContent = {
  title: {
    es: 'Skills',
    en: 'Skills'
  },
  subtitle: {
    es: 'Stack real con evidencia de uso',
    en: 'Real stack backed by usage'
  },
  domainsTitle: {
    es: 'Skills por Dominio',
    en: 'Skills by Domain'
  },
  evidenceTitle: {
    es: 'Proyectos y formación',
    en: 'Projects and education'
  },
  core: [
    {
      id: 'react',
      name: 'React',
      level: { es: 'Avanzado', en: 'Advanced' },
      years: '3+ years',
      certificateId: reactCertificate.id
    },
    {
      id: 'next',
      name: 'Next.js',
      level: { es: 'Avanzado', en: 'Advanced' },
      years: '2+ years'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      level: { es: 'Avanzado', en: 'Advanced' },
      years: '3+ years'
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      level: { es: 'Avanzado', en: 'Advanced' },
      years: '3+ years'
    },
    {
      id: 'apis',
      name: 'REST APIs',
      level: { es: 'Intermedio', en: 'Intermediate' },
      years: '2+ years'
    },
    {
      id: 'git',
      name: 'Git / GitHub',
      level: { es: 'Avanzado', en: 'Advanced' },
      years: '4+ years'
    }
  ],
  domains: [
    {
      id: 'frontend',
      title: { es: 'Frontend', en: 'Frontend' },
      items: {
        es: ['React', 'Next.js', 'UI Responsive', 'Accesibilidad basica'],
        en: ['React', 'Next.js', 'Responsive UI', 'Basic accessibility']
      }
    },
    {
      id: 'backend',
      title: { es: 'Backend', en: 'Backend' },
      items: {
        es: ['FastAPI', 'Node.js', 'Autenticacion JWT', 'Diseno de endpoints'],
        en: ['FastAPI', 'Node.js', 'JWT auth', 'Endpoint design']
      }
    },
    {
      id: 'tools',
      title: { es: 'Herramientas', en: 'Tools' },
      items: {
        es: ['Git / GitHub', 'Figma', 'Vercel', 'Postman'],
        en: ['Git / GitHub', 'Figma', 'Vercel', 'Postman']
      }
    },
    {
      id: 'soft-skills',
      title: { es: 'Soft Skills', en: 'Soft Skills' },
      items: {
        es: ['Comunicacion', 'Trabajo en equipo', 'Ownership', 'Iteracion rapida'],
        en: ['Communication', 'Teamwork', 'Ownership', 'Fast iteration']
      }
    }
  ],
  evidence: [
    {
      id: 'portfolio',
      title: { es: 'Portfolio Personal', en: 'Personal Portfolio' },
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      cta: { es: 'Ver proyecto', en: 'View project' },
      href: 'https://github.com/fer0o'
    },
    {
      id: 'dashboard',
      title: { es: 'Dashboard de Ventas', en: 'Sales Dashboard' },
      stack: ['React', 'TypeScript', 'Charts'],
      cta: { es: 'Ver proyecto', en: 'View project' },
      href: 'https://github.com/fer0o'
    },
    {
      id: reactCertificate.id,
      title: reactCertificate.title,
      stack: ['React', reactCertificate.issuer],
      cta: { es: 'Ver certificado', en: 'View certificate' },
      href: `#certificate-${reactCertificate.id}`
    }
  ]
}
