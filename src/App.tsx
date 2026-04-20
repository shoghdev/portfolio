import { ConfigProvider, Space, theme } from 'antd'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { portfolioData } from './data/portfolio'
import { PortfolioLayout } from './layout/PortfolioLayout'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ContactSection } from './components/sections/ContactSection'

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#5b8def',
          borderRadius: 10,
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PortfolioLayout>
                <Space direction="vertical" size={48} style={{ width: '100%' }}>
                  <HeroSection
                    name={portfolioData.name}
                    role={portfolioData.role}
                    location={portfolioData.location}
                    tagline={portfolioData.tagline}
                    email={portfolioData.email}
                  />
                  <AboutSection about={portfolioData.about} />
                  <SkillsSection skills={portfolioData.skills} />
                  <ProjectsSection projects={portfolioData.projects} />
                  <ContactSection
                    email={portfolioData.email}
                    socialLinks={portfolioData.socialLinks}
                  />
                </Space>
              </PortfolioLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
