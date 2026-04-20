import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  name: 'Your Name',
  role: 'Frontend Developer',
  location: 'Your City, Country',
  email: 'youremail@example.com',
  tagline: 'I build fast, accessible, and delightful web experiences.',
  about: [
    'I am a frontend developer focused on React, TypeScript, and clean user interfaces.',
    'I enjoy converting design concepts into production-ready components with scalable architecture.',
  ],
  skills: [
    {
      title: 'Core',
      items: ['React', 'TypeScript', 'JavaScript (ESNext)', 'HTML5', 'CSS3'],
    },
    {
      title: 'UI & Styling',
      items: ['Ant Design', 'Responsive Design', 'Design Systems', 'Accessibility (a11y)'],
    },
    {
      title: 'Tooling',
      items: ['Vite', 'pnpm', 'ESLint', 'Git', 'REST APIs'],
    },
  ],
  projects: [
    {
      title: 'Project One',
      description:
        'A short description of your project. Explain the problem, your solution, and the impact.',
      techStack: ['React', 'TypeScript', 'Ant Design'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/your-username/project-one',
    },
    {
      title: 'Project Two',
      description:
        'Another project highlight where you can demonstrate product thinking and implementation details.',
      techStack: ['React', 'Vite', 'REST API'],
      repoUrl: 'https://github.com/your-username/project-two',
    },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/your-username' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username/' },
    { label: 'X', href: 'https://x.com/your-handle' },
  ],
}
