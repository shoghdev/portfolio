import { Layout, Menu, Typography } from 'antd'
import { Link } from 'react-router-dom'
import type { PropsWithChildren } from 'react'

const { Header, Content, Footer } = Layout
const { Text } = Typography

const menuItems = [
  { key: 'about', label: <a href="#about">About</a> },
  { key: 'skills', label: <a href="#skills">Skills</a> },
  { key: 'projects', label: <a href="#projects">Projects</a> },
  { key: 'contact', label: <a href="#contact">Contact</a> },
]

export function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="portfolio-header">
        <div className="portfolio-header-inner">
          <Link to="/" className="portfolio-logo">
            Portfolio
          </Link>
          <Menu mode="horizontal" items={menuItems} selectable={false} />
        </div>
      </Header>
      <Content className="portfolio-content">{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        <Text type="secondary">Built with React + TypeScript + Ant Design</Text>
      </Footer>
    </Layout>
  )
}
