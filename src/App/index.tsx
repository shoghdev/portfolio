import { Col, ConfigProvider, Row } from 'antd'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '../App.css'
import { useThemeMode } from '../theme/useThemeMode'
import { getAppThemeConfig } from './consts'
import { portfolioData } from '../data/portfolio'
import { PortfolioLayout } from '../layout/PortfolioLayout'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { SkillsDetailSection } from '../components/sections/SkillsDetailSection'
import { EducationSection } from '../components/sections/EducationSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { VerticalHelloWatermark } from '../components/common/VerticalHelloWatermark'
import { ContactSection } from '../components/sections/ContactSection'
import { GenerateCvPage } from '../components/GenerateCvPage'
import { BlogPage } from '../components/BlogPage'
import { BlogPostPage } from '../components/BlogPostPage'
import { GetInTouchPage } from '../components/GetInTouchPage'

function App() {
  const { mode } = useThemeMode()

  return (
    <ConfigProvider theme={getAppThemeConfig(mode)}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PortfolioLayout>
                <div className="app-home">
                  <VerticalHelloWatermark />
                  <HeroSection
                    firstName={portfolioData.firstName}
                    lastName={portfolioData.lastName}
                    role={portfolioData.role}
                    email={portfolioData.email}
                    phone={portfolioData.phone}
                    socialProfiles={portfolioData.socialProfiles}
                  />
                  <Row gutter={[28, 28]} className="pf-about-exp-split" align="top" wrap>
                    <Col xs={24} xl={9} lg={24} className="pf-about-exp-about">
                      <div className="pf-exp-projects-stack">
                        <AboutSection
                          about={portfolioData.about}
                          cvDownloadPath={portfolioData.cvDownloadPath}
                        />
                        <ProjectsSection projects={portfolioData.projects} />
                      </div>
                    </Col>
                    <Col xs={24} xl={15} lg={24} className="pf-about-exp-exp">
                      <ExperienceSection experience={portfolioData.experience} />
                    </Col>
                  </Row>
                  <SkillsDetailSection technicalSkills={portfolioData.technicalSkills} />
                  <EducationSection education={portfolioData.education} />
                  <ContactSection email={portfolioData.email} socialProfiles={portfolioData.socialProfiles} />
                </div>
              </PortfolioLayout>
            }
          />
          <Route
            path="/generate-cv"
            element={
              <PortfolioLayout>
                <GenerateCvPage />
              </PortfolioLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <PortfolioLayout>
                <BlogPage />
              </PortfolioLayout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <PortfolioLayout>
                <BlogPostPage />
              </PortfolioLayout>
            }
          />
          <Route path="/notes" element={<Navigate to="/blog" replace />} />
          <Route
            path="/get-in-touch"
            element={
              <PortfolioLayout>
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
