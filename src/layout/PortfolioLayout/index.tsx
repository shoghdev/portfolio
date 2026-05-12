import { useEffect, type PropsWithChildren } from 'react'
import { Layout, Typography } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { PortfolioHomeNav } from '../../components/common/PortfolioHomeNav'

const { Content, Footer } = Layout
const { Text } = Typography

export function PortfolioLayout({ children }: PropsWithChildren) {
  const location = useLocation()

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
      <PortfolioHomeNav />
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
