export const navItems = [
  { key: 'home', label: 'Home', href: '/#hero' },
  { key: 'about', label: 'About', href: '/#about' },
  { key: 'experience', label: 'Experience', href: '/#experience' },
  { key: 'projects', label: 'Projects', href: '/#projects' },
  { key: 'skills', label: 'Skills', href: '/#skills' },
  { key: 'notes', label: 'Notes', href: '/blog' },
  { key: 'contact', label: 'Contact', href: '/#contact' },
] as const

export type NavItem = (typeof navItems)[number]
