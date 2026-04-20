import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  name: 'Arbor Kode',
  role: 'Engineer & Educator',
  location: 'Remote First',
  email: 'hello@arbor-code.dev',
  tagline: 'Designing and delivering resilient digital products.',
  about: [
    'Architecting secure, scalable web applications with precision and performance at the center.',
    'Empowering teams to ship with confidence through practical mentorship and modern workflows.',
  ],
  skills: [
    {
      title: 'Core',
      items: ['React.js', 'Laravel', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      title: 'UI & Styling',
      items: ['TypeScript', 'Python', 'Ant Design', 'Design Systems'],
    },
    {
      title: 'Tooling',
      items: ['Vite', 'ESLint', 'Git', 'REST APIs'],
    },
  ],
  projects: [
    {
      title: 'Nexus ERP System',
      description:
        'A business management platform with analytics dashboards and role-based process automation.',
      techStack: ['React', 'TypeScript', 'PostgreSQL'],
      liveUrl: 'https://example.com/nexus-erp',
      repoUrl: 'https://github.com/arbor-code/nexus-erp',
    },
    {
      title: 'Digital Atrium Robotics',
      description:
        'A modular robotics control interface with telemetry monitoring and anomaly detection.',
      techStack: ['Python', 'WebSockets', 'Docker'],
      repoUrl: 'https://github.com/arbor-code/digital-atrium-robotics',
    },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/arbor-code' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arbor-code/' },
    { label: 'Twitter', href: 'https://x.com/arbor-code' },
  ],
}
