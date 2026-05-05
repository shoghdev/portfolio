import { useState } from 'react'
import { ConfigProvider, Space } from 'antd'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '../App.css'
import { getAppThemeConfig, type ThemeMode } from './consts'
import { portfolioData } from '../data/portfolio'
import { PortfolioLayout } from '../layout/PortfolioLayout'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { ContactSection } from '../components/sections/ContactSection'
import { GenerateCvPage } from '../components/GenerateCvPage'
import { BlogPage } from '../components/BlogPage'
import { BlogPostPage } from '../components/BlogPostPage'
import { GetInTouchPage } from '../components/GetInTouchPage'

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
                  <ExperienceSection experience={portfolioData.experience} />
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
          <Route
            path="/blog"
            element={
              <PortfolioLayout themeMode={themeMode} onThemeToggle={handleThemeToggle}>
                <BlogPage />
              </PortfolioLayout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <PortfolioLayout themeMode={themeMode} onThemeToggle={handleThemeToggle}>
                <BlogPostPage />
              </PortfolioLayout>
            }
          />
          <Route path="/notes" element={<Navigate to="/blog" replace />} />
          <Route
            path="/get-in-touch"
            element={
              <PortfolioLayout themeMode={themeMode} onThemeToggle={handleThemeToggle}>
                <GetInTouchPage />
              </PortfolioLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
