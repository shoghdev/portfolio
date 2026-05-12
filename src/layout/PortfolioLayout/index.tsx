import { useEffect, type PropsWithChildren } from 'react'
import { MessageOutlined } from '@ant-design/icons'
import { Button, Layout, Typography } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navItems } from './consts'

const { Header, Content, Footer } = Layout
const { Text } = Typography

export function PortfolioLayout({ children }: PropsWithChildren) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const targetId = location.hash.replace('#', '')
    const timeoutId = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)

    return () => window.clearTimeout(timeoutId)
  }, [location.hash, location.pathname])

  return (
    <Layout className="app-root-layout">
      <Header className="portfolio-header">
        <div className="portfolio-header-inner">
          <Link to="/" className="portfolio-logo-wrap" aria-label="Home">
            <span className="portfolio-logo-mark">S.</span>
            <span className="portfolio-logo-name">Shogher Harutyunyan</span>
          </Link>
          <nav className="portfolio-nav" aria-label="Main">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="portfolio-nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            type="default"
            icon={<MessageOutlined />}
            className="portfolio-header-cta"
            onClick={() => void navigate('/get-in-touch')}
          >
            Let&apos;s Talk
          </Button>
        </div>
      </Header>
      <Content className="portfolio-content">{children}</Content>
      <Footer className="app-footer">
        <Text className="app-footer-copy">Shogher Harutyunyan · {new Date().getFullYear()}</Text>
        <div className="app-footer-links">
          <Link to="/blog">Notes</Link>
          <Link to="/get-in-touch">Get in Touch</Link>
          <Link to="/generate-cv">Generate CV</Link>
        </div>
      </Footer>
    </Layout>
  )
}
