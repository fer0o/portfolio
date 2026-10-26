import { ExperienceItem } from '@/models/experience'

export const experienceMockData: ExperienceItem[] = [
  {
    id: 'work-freelance',
    view: 'work',
    title: {
      es: 'Frontend Developer Freelance',
      en: 'Freelance Frontend Developer'
    },
    subtitle: {
      es: 'Proyectos web para clientes',
      en: 'Web projects for clients'
    },
    period: {
      es: '2023 - Actualidad',
      en: '2023 - Present'
    },
    summary: {
      es: 'Desarrollo de interfaces en React y Next.js, priorizando rendimiento y experiencia de usuario.',
      en: 'Building React and Next.js interfaces with a strong focus on performance and user experience.'
    },
    details: {
      es: 'Implementacion de landing pages y paneles con componentes reutilizables, consumo de APIs REST y mejoras de SEO tecnico. Tambien colaboracion directa con clientes para definir requerimientos y entregas iterativas.',
      en: 'Implemented landing pages and dashboards using reusable components, REST API integrations, and technical SEO improvements. Also worked directly with clients to refine requirements and deliver iteratively.'
    },
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/globe.svg'
  },
  {
    id: 'work-support',
    view: 'work',
    title: {
      es: 'Soporte y Mejora de Sitios',
      en: 'Web Maintenance and Support'
    },
    subtitle: {
      es: 'Mantenimiento continuo',
      en: 'Ongoing maintenance'
    },
    period: {
      es: '2022 - 2023',
      en: '2022 - 2023'
    },
    summary: {
      es: 'Correccion de bugs, actualizacion de dependencias y optimizacion de tiempos de carga.',
      en: 'Bug fixing, dependency updates, and page-load optimization.'
    },
    details: {
      es: 'Resolucion de incidencias funcionales y visuales, ajustes responsive y mejoras de accesibilidad basica. Seguimiento de cambios con Git y entrega continua de mejoras pequenas.',
      en: 'Resolved functional and visual issues, improved responsive behavior, and applied basic accessibility upgrades. Tracked changes with Git and delivered continuous small improvements.'
    },
    stack: ['JavaScript', 'React', 'CSS', 'Git'],
    imageUrl: '/window.svg'
  },
  {
    id: 'work-startup',
    view: 'work',
    title: {
      es: 'Frontend en Startup SaaS',
      en: 'Frontend at SaaS Startup'
    },
    subtitle: {
      es: 'Producto digital B2B',
      en: 'B2B digital product'
    },
    period: {
      es: '2021 - 2022',
      en: '2021 - 2022'
    },
    summary: {
      es: 'Construccion de vistas para dashboard de analitica y flujos de onboarding.',
      en: 'Built dashboard analytics views and onboarding flows.'
    },
    details: {
      es: 'Participe en el desarrollo de modulos para usuarios administradores, integracion con APIs y mejora de componentes compartidos para acelerar entregas.',
      en: 'Contributed to admin modules, API integrations, and shared component improvements to speed up delivery.'
    },
    stack: ['React', 'TypeScript', 'REST APIs'],
    imageUrl: '/globe.svg'
  },
  {
    id: 'work-agency',
    view: 'work',
    title: {
      es: 'Desarrollador Web en Agencia',
      en: 'Web Developer at Agency'
    },
    subtitle: {
      es: 'Sitios corporativos',
      en: 'Corporate websites'
    },
    period: {
      es: '2020 - 2021',
      en: '2020 - 2021'
    },
    summary: {
      es: 'Implementacion de sitios institucionales con enfoque responsive y SEO tecnico.',
      en: 'Implemented institutional websites with responsive behavior and technical SEO.'
    },
    details: {
      es: 'Trabaje en maquetacion de interfaces, optimizacion de rendimiento y publicacion de cambios en distintos entornos para clientes de diferentes industrias.',
      en: 'Worked on UI implementation, performance improvements, and release workflows across environments for clients from different industries.'
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Git'],
    imageUrl: '/window.svg'
  },
  {
    id: 'project-portfolio',
    view: 'projects',
    title: {
      es: 'Portfolio Personal',
      en: 'Personal Portfolio'
    },
    subtitle: {
      es: 'Proyecto personal',
      en: 'Personal project'
    },
    period: {
      es: '2026',
      en: '2026'
    },
    summary: {
      es: 'Sitio personal con enfoque profesional y una version artistica de marca personal.',
      en: 'Personal website with both a professional presentation and an artistic brand-focused version.'
    },
    details: {
      es: 'Construido con Next.js y TypeScript, con componentes reutilizables, modo oscuro y soporte bilingue. Incluye secciones de experiencia, proyectos y contacto con enfoque en claridad visual.',
      en: 'Built with Next.js and TypeScript using reusable components, dark mode, and bilingual support. Includes experience, projects, and contact sections with a clear visual hierarchy.'
    },
    stack: ['Next.js', 'TypeScript', 'Framer Motion'],
    imageUrl: '/next.svg',
    repoUrl: 'https://github.com/fer0o'
  },
  {
    id: 'project-dashboard',
    view: 'projects',
    title: {
      es: 'Dashboard de Ventas',
      en: 'Sales Dashboard'
    },
    subtitle: {
      es: 'Proyecto de practica',
      en: 'Practice project'
    },
    period: {
      es: '2025',
      en: '2025'
    },
    summary: {
      es: 'Panel para visualizar metricas de ventas, tickets y tendencias.',
      en: 'Panel to visualize sales metrics, tickets, and trends.'
    },
    details: {
      es: 'Incluye filtros por fecha, graficas reutilizables y secciones de resumen para facilitar lectura de indicadores clave.',
      en: 'Includes date filters, reusable charts, and summary sections for quick KPI reading.'
    },
    stack: ['React', 'TypeScript', 'Chart UI'],
    imageUrl: '/window.svg',
    repoUrl: 'https://github.com/fer0o'
  },
  {
    id: 'project-ecommerce',
    view: 'projects',
    title: {
      es: 'Mini Ecommerce',
      en: 'Mini Ecommerce'
    },
    subtitle: {
      es: 'Proyecto personal',
      en: 'Personal project'
    },
    period: {
      es: '2024',
      en: '2024'
    },
    summary: {
      es: 'Catalogo de productos con carrito y flujo basico de compra.',
      en: 'Product catalog with cart and basic checkout flow.'
    },
    details: {
      es: 'Desarrolle componentes de listado, detalle de producto y manejo de estado para carrito con foco en arquitectura limpia.',
      en: 'Built listing components, product details, and cart state management with a clean architecture approach.'
    },
    stack: ['Next.js', 'React', 'State Management'],
    imageUrl: '/next.svg',
    repoUrl: 'https://github.com/fer0o'
  }
]
