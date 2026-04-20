import type { PropsWithChildren } from 'react'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Button, Layout, Switch, Typography } from 'antd'
import { Link } from 'react-router-dom'
import type { ThemeMode } from '../../App/consts'
import { navItems } from './consts'

const { Header, Content, Footer } = Layout
const { Text } = Typography

type PortfolioLayoutProps = PropsWithChildren & {
  themeMode: ThemeMode
  onThemeToggle: (checked: boolean) => void
}

export function PortfolioLayout({ children, themeMode, onThemeToggle }: PortfolioLayoutProps) {
  return (
    <Layout className={`app-root-layout theme-${themeMode}`}>
      <Header className="portfolio-header">
        <div className="portfolio-header-inner">
          <Link to="/" className="portfolio-logo">
            Shogher Harutyunyan
          </Link>
          <nav className="portfolio-nav" aria-label="Main">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="portfolio-nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="theme-toggle-wrap">
            <SunOutlined className="theme-toggle-icon" />
            <Switch
              aria-label="Toggle dark mode"
              checked={themeMode === 'dark'}
              onChange={onThemeToggle}
              className="theme-toggle-switch"
            />
            <MoonOutlined className="theme-toggle-icon" />
          </div>
          <Button type="primary" className="portfolio-header-cta" href="#contact">
            Get in Touch
          </Button>
        </div>
      </Header>
      <Content className="portfolio-content">{children}</Content>
      <Footer className="app-footer">
        <Text className="app-footer-copy">Shogher Harutyunyan 2026. Built for the best of times.</Text>
        <div className="app-footer-links">
          <a href="#hero">LinkedIn</a>
          <a href="#projects">GitHub</a>
          <a href="#contact">Twitter</a>
        </div>
      </Footer>
    </Layout>
  )
}
