import { useState } from 'react'
import { ConfigProvider, Space } from 'antd'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../App.css'
import { getAppThemeConfig, type ThemeMode } from './consts'
import { portfolioData } from '../data/portfolio'
import { PortfolioLayout } from '../layout/PortfolioLayout'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { ContactSection } from '../components/sections/ContactSection'
import { GenerateCvPage } from '../components/GenerateCvPage'

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark')

  const handleThemeToggle = (checked: boolean) => {
    setThemeMode(checked ? 'dark' : 'light')
  }

  return (
    <ConfigProvider theme={getAppThemeConfig(themeMode)}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PortfolioLayout themeMode={themeMode} onThemeToggle={handleThemeToggle}>
                <Space direction="vertical" size={48} className="app-sections-stack">
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
          <Route
            path="/generate-cv"
            element={
              <PortfolioLayout themeMode={themeMode} onThemeToggle={handleThemeToggle}>
                <GenerateCvPage />
              </PortfolioLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
